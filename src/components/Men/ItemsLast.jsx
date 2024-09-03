export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
    paritialVisibilityGutter: 60, // Used only for partial visibility of items
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const productData = [
  {
    id: 7,
    imageurl:
      "https://i.pinimg.com/564x/41/97/9e/41979ea29c59b6d0134d10feea18313b.jpg",
    name: "Detroit Jackets",
    price: 9.999,
    description: "Some text about the product..",
    talla: ["M", "L", "XL", "XXL"],
  },
  {
    id: 8,
    imageurl:
      "https://i.pinimg.com/564x/45/1d/8d/451d8d29b20078ca5f33dce2d64f4f42.jpg",
    name: "Sport Sweat",
    price: 9.999,
    description: "Some text about the product..",
    talla: ["M", "L", "XL", "XXL"],
  },
  {
    id: 9,
    imageurl:
      "https://i.pinimg.com/564x/d5/1c/b7/d51cb71d53cfafd31f70fd85f437cfd0.jpg",
    name: "Movie Jackets",
    price: 9.999,
    description: "Some text about the product..",
    talla: ["M", "L", "XL", "XXL"],
  },
  {
    id: 10,
    imageurl:
      "https://i.pinimg.com/564x/98/82/ec/9882ec946d711df9b76f4d88dc334fb4.jpg",
    name: "Special Jackets",
    price: 9.999,
    description: "Some text about the product..",
    talla: ["M", "L", "XL", "XXL"],
  },
  {
    id: 11,
    imageurl:
      "https://i.pinimg.com/736x/d5/c7/56/d5c756c32ecfec6912ed827d0656ab1f.jpg",
    name: "Health Club",
    price: 9.999,
    description: "Some text about the product..",
    talla: ["M", "L", "XL", "XXL"],
  },
  {
    id: 12,
    imageurl:
      "https://i.pinimg.com/564x/d6/a8/38/d6a838bce1c29aefe5f501d15ed4cd37.jpg",
    name: "Clothes",
    price: 9.999,
    description: "Some text about the product..",
    talla: ["M", "L", "XL", "XXL"],
  },
];
