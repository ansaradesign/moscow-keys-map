import { render } from 'preact';
import { Map, ObjectManager, YMaps } from 'react-yandex-maps';
import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
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

export function App() {
  const apikey = import.meta.env.VITE_YANDEX_MAPS_API_KEY;
  const mapRef = useRef(null);
  const [ymaps, setYmaps] = useState(null);
  const [izZoomed, setIsZoomed] = useState(false);

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
          <>
            <ObjectManager
              defaultFeatures={getZoomedObjectManagerFeatures(residentialComplexes, ymaps)}
              {...staticZoomedObjectManagerProps}
            />
            <ObjectManager
              defaultFeatures={getObjectManagerFeatures(residentialComplexes)}
              {...staticObjectManagerProps}
            />
          </>
        )}
        {!!ymaps && !izZoomed && (
          <ObjectManager
            defaultFeatures={getObjectManagerFeatures(residentialComplexes, true)}
            {...staticObjectManagerProps}
          />
        )}
      </Map>
    </YMaps>
  );
}

render(<App />, document.getElementById('map'));
