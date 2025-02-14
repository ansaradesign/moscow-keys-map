export interface ResidentialComplex {
  id: number;
  coordinates: [number, number];
  house: string;
  flats: Flat[];
}

export interface Flat {
  rooms: string | number;
  square: number;
  floor: number;
  maxFloor: number;
  price: number;
  img: string;
}
