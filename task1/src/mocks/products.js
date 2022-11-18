export const products = [
  {
    id: 'electronicsCategory',
    name: 'Electronics',
    source: 'https://picsum.photos/200/300?random=1',
    items: [
      {
        id: 'phone1',
        name: 'Iphone 11',
        price: 900,
        oldPrice: 1500,
        discount: 10,
        images: [
          {
            id: 'image1',
            source: 'https://picsum.photos/200/300?random=1',
          },
          {
            id: 'image2',
            source: 'https://picsum.photos/200/300?random=1',
          },
        ],
        colors: [
          {id: 'black', name: 'Black'},
          {id: 'red', name: 'Red'},
          {id: 'blue', name: 'Blue'},
        ],
        description:
          'Apple iOS, экран 6.1" IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM',
      },
      {
        id: 'laptop1',
        name: 'Apple Macbook Air 13',
        price: 2900,
        oldPrice: 3500,
        discount: 15,
        images: [
          {
            id: 'image1',
            source: 'https://picsum.photos/200/300?random=1',
          },
          {
            id: 'image2',
            source: 'https://picsum.photos/200/300?random=1',
          },
        ],
        colors: [
          {id: 'silver', name: 'Silver'},
          {id: 'gold', name: 'Gold'},
          {id: 'grey', name: 'Grey'},
        ],
        description:
          '13.3" 2560 x 1600 IPS, несенсорный, Apple M1 3200 МГц, 8 ГБ, SSD 256 ГБ, граф. адаптер: встроенный, Mac OS',
      },
      {
        id: 'watch1',
        name: 'Apple Watch Series 6',
        price: 1200,
        oldPrice: 1500,
        discount: 25,
        images: [
          {
            id: 'image1',
            source: 'https://picsum.photos/200/300?random=1',
          },
          {
            id: 'image2',
            source: 'https://picsum.photos/200/300?random=1',
          },
        ],
        colors: [
          {id: 'black', name: 'Black'},
          {id: 'red', name: 'Red'},
          {id: 'white', name: 'White'},
        ],
        description:
          'часы-компаньон, поддержка iOS, экран AMOLED 1.78" (368x448, сенсорный), шагомер, пульсометр, время работы: 18 часов',
      },
    ],
  },
  {
    id: 'clothesCategory',
    name: 'Clothes',
    source: 'https://picsum.photos/200/300?random=1',
  },
  {
    id: 'furnitureCategory',
    name: 'Furniture',
    source: 'https://picsum.photos/200/300?random=1',
  },
];
