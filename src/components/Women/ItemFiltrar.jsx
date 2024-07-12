export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 ,// optional, default to 1.
    paritialVisibilityGutter: 60 // Used only for partial visibility of items
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};


export const productData = [
  {
    id: 7,
    imageurl:
      "https://i.pinimg.com/564x/4f/8e/54/4f8e540444c46b72e4a12b3611a6278a.jpg",
    name: "Life",
    price: 9.999,
    description: "Some text about the product..",
    talla : ["M", "L", "XL", "XXL"],
  },
  {
    id: 8,
    imageurl:
      "https://i.pinimg.com/564x/c0/4c/06/c04c064dd469b97be98d49fa52b855cc.jpg",
    name: "Estilo de Vida",
    price:9.999,
    description: "Some text about the product..",
    talla : ["M", "L", "XL", "XXL"],
  },
  {
    id: 9,
    imageurl:
      "https://i.pinimg.com/564x/e6/ed/ad/e6edada55d39bb6efaf9b7c26015e3b5.jpg",
    name: "Living free",
    price: 9.999,
    description: "Some text about the product..",
    talla : ["M", "L", "XL", "XXL"],
  },
  {
    id: 10,
    imageurl:
      "https://i.pinimg.com/564x/80/28/4f/80284fab94dfc7e183caff4b6bd7cfe7.jpg",
    name: "Ropa Cool",
    price: 9.999,
    description: "Some text about the product..",
    talla : ["M", "L", "XL", "XXL"],
  },
 
  
];

