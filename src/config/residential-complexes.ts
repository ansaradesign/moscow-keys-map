import { ResidentialComplex } from '../model/objects.type';
import Building from '../assets/building.jpg';

export const residentialComplexes: ResidentialComplex[] = [
  {
    id: 0,
    coordinates: [55.78, 37.61],
    house: 'ЖК «Зорге 9»',
    flats: [
      { rooms: '1', square: 140, floor: 12, maxFloor: 24, price: 320000, img: Building },
      { rooms: 'Студия', square: 120, floor: 11, maxFloor: 13, price: 140000, img: Building },
      { rooms: '3', square: 240, floor: 24, maxFloor: 32, price: 540000, img: Building },
    ],
  },
  {
    id: 1,
    coordinates: [55.75, 37.62],
    house: 'ЖК «Зорге 4»',
    flats: [
      { rooms: '1', square: 140, floor: 12, maxFloor: 24, price: 320000, img: Building },
      { rooms: 'Студия', square: 240, floor: 24, maxFloor: 32, price: 540000, img: Building },
    ],
  },
  {
    id: 2,
    coordinates: [55.76, 37.64],
    house: 'ЖК «Зорге 1»',
    flats: [{ rooms: '1', square: 140, floor: 12, maxFloor: 24, price: 320000, img: Building }],
  },
  {
    id: 3,
    coordinates: [55.765, 37.64],
    house: 'ЖК «Зорге 4»',
    flats: [
      { rooms: '1', square: 140, floor: 12, maxFloor: 24, price: 320000, img: Building },
      { rooms: 'Студия', square: 120, floor: 11, maxFloor: 13, price: 140000, img: Building },
      { rooms: '3', square: 240, floor: 24, maxFloor: 32, price: 540000, img: Building },
    ],
  },
];
