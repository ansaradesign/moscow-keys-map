import { ObjectManagerFeatures } from 'react-yandex-maps';
import { ResidentialComplex } from '../model/objects.type';
import {
  balloonContentBuilder,
  markerContentBuilder,
  priceContentBuilder,
} from './content-builders';

export const getObjectManagerFeatures = (
  residentialComplexes: ResidentialComplex[],
  isHint?: boolean,
): ObjectManagerFeatures => {
  return residentialComplexes.map(({ id, coordinates, flats, house }) => {
    const minPrice = flats
      .reduce((acc, { price }) => Math.min(acc, price), Infinity)
      .toLocaleString('ru-Ru');
    return {
      id,
      type: 'Feature' as const,
      geometry: { type: 'Point', coordinates },
      properties: {
        hintContent: isHint ? priceContentBuilder(flats.length, minPrice) : undefined,
        balloonContent: balloonContentBuilder(flats, house),
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
