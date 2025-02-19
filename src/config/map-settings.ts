import { ObjectManagerProps } from 'react-yandex-maps';

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
  ...ZoomedObjectManagerObjectsOptions,
};

export const objectManagerOptions: ObjectManagerProps['options'] = {
  clusterize: true,
  gridSize: 200,
};

export const objectManagerModules: ObjectManagerProps['modules'] = [
  'objectManager.addon.objectsBalloon',
  'objectManager.addon.objectsHint',
];

export const objectManagerClusters: ObjectManagerProps['clusters'] = {
  clusterIconColor: '#C14040',
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
