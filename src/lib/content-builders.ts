import { Flat, ResidentialComplex } from '../model/objects.type';

export const priceContentBuilder = (flatsAmount: number, minPrice: string) => {
  return `<div class="hint__content"><div class="hint__flats-amount">${flatsAmount}</div><div>от ${minPrice} ₽</div></div>`;
};

export const markerContentBuilder = (flatsAmount: number, minPrice: string) => {
  return `<div class="marker__price">${priceContentBuilder(flatsAmount, minPrice)}</div>`;
};

export const balloonContentBuilder = (flats: Flat[], house: ResidentialComplex['house']) => {
  return `<div class="balloon-content"><div class="balloon__header">${house}</div>
                <div class="balloon__flats">
                ${flats
                  .map(
                    ({ rooms, square, floor, price, img, maxFloor }) =>
                      `<div class="balloon__flat">
                    <img src="${img}" class="balloon__flat__img">
                    <div class="balloon__flat__info">
                        <div>${isNaN(Number(rooms)) ? rooms : rooms + ' комн.'}
                        <span class="balloon__dot">•</span>
                        ${square} м&sup2;
                        <span class="balloon__dot">•</span>
                        ${floor} этаж из ${maxFloor}
                        </div>
                        <div class="balloon__flat__info__price">
                        ${price.toLocaleString('ru-Ru')} ₽/мес.
                        </div>
                    </div>
                    </div>`,
                  )
                  .join('')}</div></div>`;
};
