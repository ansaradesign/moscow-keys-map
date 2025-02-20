import { render } from 'preact';
import { Map, ObjectManager, YMaps } from 'react-yandex-maps';
import { useEffect, useRef, useState } from 'preact/hooks';
import {
  mapState,
  staticObjectManagerProps,
  staticZoomedObjectManagerProps,
} from './config/map-settings';
import { residentialComplexes } from './config/residential-complexes';
import {
  getObjectManagerFeatures,
  getZoomedObjectManagerFeatures,
} from './lib/get-object-manager-features';
import './style.css';
import { fetchFlats } from './lib/fetch-flats';
import { exampleFetchData } from './config/example-fetch-data';
import { formatData } from './lib/format-data';

export function App() {
  const apikey = import.meta.env.VITE_YANDEX_MAPS_API_KEY;
  const mapRef = useRef(null);
  const [ymaps, setYmaps] = useState(null);
  const [izZoomed, setIsZoomed] = useState(false);
  const [flats, setFlats] = useState([]);

  const getFlats = async () => {
    const { data, ok, error } = await fetchFlats();
    if (ok) {
      setFlats(formatData(data));
    } else {
      console.log(error);
      setFlats(formatData(exampleFetchData));
    }
  };

  useEffect(() => {
    getFlats();
  }, []);

  const handleZoomChange = () => {
    if (mapRef.current) {
      const zoom = mapRef.current.getZoom();
      setIsZoomed(zoom >= 15);
    }
  };

  const handleMapLoad = (ymaps) => {
    setYmaps(ymaps);
    if (mapRef.current) {
      mapRef.current.events.add('boundschange', handleZoomChange);
    }
  };

  return (
    <YMaps query={{ apikey, load: 'package.full' }}>
      <Map
        state={mapState}
        width={'100%'}
        height={600}
        onLoad={handleMapLoad}
        instanceRef={(ref) => {
          mapRef.current = ref;
        }}
      >
        {!!ymaps && izZoomed && (
          <ObjectManager
            defaultFeatures={getZoomedObjectManagerFeatures(flats, ymaps)}
            {...staticZoomedObjectManagerProps}
          />
        )}
        {!!ymaps && (
          <ObjectManager
            defaultFeatures={getObjectManagerFeatures(flats, ymaps)}
            {...staticObjectManagerProps}
          />
        )}
      </Map>
    </YMaps>
  );
}

render(<App />, document.getElementById('map'));
