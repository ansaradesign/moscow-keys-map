import { ObjectManagerFeatures } from 'react-yandex-maps';
import { ResidentialComplex } from '../model/objects.type';
import { balloonContentBuilder, markerContentBuilder } from './content-builders';

import Marker from '../assets/marker.svg';

export const getObjectManagerFeatures = (
  residentialComplexes: ResidentialComplex[],
  ymaps: any,
): ObjectManagerFeatures => {
  return residentialComplexes.map(({ id, coordinates, flats, house, img }) => {
    return {
      id,
      type: 'Feature' as const,
      geometry: { type: 'Point', coordinates },
      properties: {
        balloonContent: balloonContentBuilder(flats, house),
      },
      options: {
        hasBalloon: true,
        iconLayout: ymaps.templateLayoutFactory.createClass(
          `<div class="point">
            <div class="point__flats-amount">${flats.length}</div>
            <img src="${img}" class="point__img">
            <img src="${Marker}" class="black-marker"/>
          </div>`,
        ),
        iconShape: {
          type: 'Rectangle',
          coordinates: [
            [-15, -15],
            [15, 15],
          ],
        },
      },
    };
  });
};

export const getZoomedObjectManagerFeatures = (
  residentialComplexes: ResidentialComplex[],
  ymaps: any,
): ObjectManagerFeatures => {
  return residentialComplexes.map(({ id, coordinates, flats, house }) => {
    const minPrice = flats
      .reduce((acc, { price }) => Math.min(acc, price), Infinity)
      .toLocaleString('ru-Ru');
    return {
      id,
      type: 'Feature' as const,
      geometry: { type: 'Point', coordinates },
      options: {
        iconLayout: ymaps.templateLayoutFactory.createClass(
          `<div class="marker">
            ${markerContentBuilder(flats.length, minPrice)}
          </div>`,
        ),
      },
    };
  });
};
