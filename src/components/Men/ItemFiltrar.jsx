export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
    paritialVisibilityGutter: 60, // Used only for partial visibility of items
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const productData = [
  {
    id: 7,
    imageurl:
      "https://i.pinimg.com/564x/39/78/74/397874b179dbd094bc89146b35ab7725.jpg",
    name: "Running",
    price: 9.999,
    description: "Some text about the product..",
    talla: ["M", "L", "XL", "XXL"],
  },
  {
    id: 8,
    imageurl:
      "https://i.pinimg.com/564x/bd/1d/4f/bd1d4fa030189fa194a649a521665697.jpg",
    name: "Estilo de Vida",
    price: 9.999,
    description: "Some text about the product..",
    talla: ["M", "L", "XL", "XXL"],
  },
  {
    id: 9,
    imageurl:
      "https://i.pinimg.com/564x/11/9c/b1/119cb10954b67474f05499964b06a2a0.jpg",
    name: "Living free",
    price: 9.999,
    description: "Some text about the product..",
    talla: ["M", "L", "XL", "XXL"],
  },
  {
    id: 10,
    imageurl:
      "https://i.pinimg.com/564x/50/a2/59/50a259095232fb7e7f67cd21b06bf69d.jpg",
    name: "Ropa Cool",
    price: 9.999,
    description: "Some text about the product..",
    talla: ["M", "L", "XL", "XXL"],
  },
];
