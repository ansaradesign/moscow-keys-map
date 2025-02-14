import { ObjectManager, ObjectManagerProps } from 'react-yandex-maps';
import Marker from '../assets/marker.svg';

const center = [55.76, 37.64];

export const mapState = {
  center: center,
  zoom: 12,
  controls: ['zoomControl', 'fullscreenControl'],
};

export const ZoomedObjectManagerObjectsOptions: ObjectManagerProps['objects'] = {
  preset: 'islands#icon',
  openBalloonOnClick: true,
};

export const objectManagerObjectsOptions: ObjectManagerProps['objects'] = {
  iconLayout: 'default#image',
  iconImageHref: Marker,
  iconImageSize: [18, 18],
  iconImageOffset: [-15, -15],
  ...ZoomedObjectManagerObjectsOptions,
};

const objectManagerOptions: ObjectManagerProps['options'] = {
  clusterize: true,
  gridSize: 200,
};

const objectManagerModules: ObjectManagerProps['modules'] = [
  'objectManager.addon.objectsBalloon',
  'objectManager.addon.objectsHint',
];

const objectManagerClusters: ObjectManagerProps['clusters'] = {
  preset: 'islands#redClusterIcons',
};

export const staticObjectManagerProps: ObjectManagerProps = {
  options: objectManagerOptions,
  clusters: objectManagerClusters,
  modules: objectManagerModules,
  objects: objectManagerObjectsOptions,
};

export const staticZoomedObjectManagerProps: ObjectManagerProps = {
  options: objectManagerOptions,
  modules: objectManagerModules,
  objects: ZoomedObjectManagerObjectsOptions,
};
