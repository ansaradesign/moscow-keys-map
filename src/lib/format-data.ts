import { ResidentialComplex } from '../model/objects.type';

const formatFlat = (flat) => {
  return {
    title: flat.Title,
    rooms: flat.komnati,
    square: flat.obshchaia_ploshchad,
    floor: flat.etazh,
    maxFloor: flat.vsego_etazh,
    price: flat.stoimost,
    img: flat['URL image'],
    link: flat.URL,
  };
};

export const formatData = (flats: any[]): ResidentialComplex[] => {
  const data: ResidentialComplex[] = [];
  flats.forEach((flat) => {
    const sameHouse = data.findIndex((house) => house.house === flat.nazvanie_jk);
    if (sameHouse === -1) {
      data.push({
        id: flat['id (wp)'],
        coordinates: [flat.shirota, flat.dolgota],
        house: flat.nazvanie_jk,
        img: flat.Url_logo,
        flats: [formatFlat(flat)],
      });
    } else {
      data[sameHouse].flats.push(formatFlat(flat));
    }
  });
  return data;
};
