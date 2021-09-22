import { MenuDataModel } from '../models/menu-data.model';

export class MenuDataMock {
  /**
   * name
   */
  public static getMenu(): MenuDataModel[] {
    return [
      {
        productName: 'wagyu gold burger',
        description: `Pan fresco, lechuga, 125gr de carne
            Wagyu, extra queso ó queso cheddar,
            cebolla caramelizada, salsa de la casa,
            tocineta, lámina de oro comestible.`,
        price: '$35.000',
        image: ''
      },
      {
        productName: 'wagyu burger doble',
        description: `Pan fresco, lechuga, 250gr de carne
        Wagyu, extra queso ó queso cheddar,
        cebolla caramelizada, salsa de la casa,
        tocineta.`,
        price: '$25.000',
        image: ''
      },
      {
        productName: 'wagyu burger tocineta',
        description: `Pan fresco, lechuga, 125gr de carne Wagyu,
        extra queso ó queso cheddar, cebolla
        caramelizada, salsa de la casa, tocineta.`,
        price: '$20.000',
        image: ''
      },
      {
        productName: 'wagyu burger sencilla',
        description: `Pan fresco, lechuga, 125gr de carne Wagyu,
        extra queso ó queso cheddar, cebolla
        caramelizada, salsa de la casa.`,
        price: '$18.000',
        image: ''
      },
      {
        productName: 'wagyu gold dog',
        description: `Pan fresco, salchicha Wagyu 100% carne,
        extra queso, cebolla caramelizada, papa
        triturada, tocineta, lámina de oro
        comestible.`,
        price: '$35.000',
        image: ''
      },
      {
        productName: 'wagyu dog tocineta',
        description: `Pan fresco, salchicha Wagyu 100% carne,
        extra queso, cebolla caramelizada, papa
        triturada, tocineta.`,
        price: '$20.000',
        image: ''
      },
      {
        productName: 'wagyu dog sencillo',
        description: `Pan fresco, salchicha Wagyu 100% carne,
        extra queso, cebolla caramelizada, papa
        triturada.`,
        price: '$18.000',
        image: ''
      }
    ];
  }
}
