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

export const productData2 = [
  {
    id: 2,
    imageurl: [
      "../../assets/adidas/1.jpeg",
      "../../assets/adidas/2.jpeg",
      "../../assets/adidas/3.jpeg",
      "../../assets/adidas/4.jpeg",
      "../../assets/adidas/5.jpeg",
    ],
    name: "Detroit Jackets",
    price: 9.999,
    description: "Some text about the product..",
    talla: ["M", "L", "XL", "XXL"],
  },
];
