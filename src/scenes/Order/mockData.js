export const mockDataContacts = [
  {
    orderId: 1,
    created: "Agosto 26, 2024",
    customer: "Antonio Corte",
    email: 'antonio@gmail.com',
    phone: '+58 1234 1234 23',
    price: 1234,
    paymentStatus: "InProgress",
    items: 2,
    itemDetails: [
      { 
        name: "Nike Air Max", 
        items: 3, 
        price: 100,
        status:'Ready',
        category: "shoes", 
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-wm0F96.png" 
      },
      { 
        name: "Adidas Ultraboost", 
        items: 3, 
        price: 200, 
        status:'Ready',
        category: "shoes", 
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSiOxO-rDAQFdimTFL4blt55fUoBuGxWk6rQ-mP6tbJV51ffVztVgled8z4oy8eEqN1UhfZEjtzcfN8dRadDCBmxJmzFE7lPmwpta5IQnJ7kQYakFheJfFs_w&usqp=CAE" 
      }
    ],
    orderStatus: "Completed",
  },
  {
    orderId: 2,
    created: "Agosto 26, 2024",
    customer: "Luis Alvarado",
    email: 'Luis@gmail.com',
    phone: '+58 1234 1234 23',
    price: 1234,
    paymentStatus: "UnPaid",
    items: 3,
    orderStatus: "Incompleted",
  },
  {
    orderId: 3,
    created: "Agosto 22, 2024",
    customer: "Johan Cordova",
    email: 'Johan@gmail.com',
    rut:'27443980-K',
    BF:"Boleta",
    phone: '+58 1234 1234 23',
    note:"Thank you for everything my baby, I'll give you 100 btc in clothes, the best clothes, Parrella store... your suggar Daddy",
    shippingAddress:[{
      region:"Region Metropolitana",
      comuna:"Puente Alto",
      direccion:"23 de septiembre 046",
      postal:6101,
      numero:23,
    }],
    price: 1234,
    paymentStatus: "Paid",
   
    category: "shoes",
    orderStatus: "InProgress",
    shippingCost: 8,
    itemDetails: [
      { 
        name: "Air Max Jordan 98", 
        items: 3, 
        price: 123, 
        status:'Ready',
        category: "shoes", 
        size: 12, 
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-wm0F96.png" 
      },
      { 
        name: "Polera Smooth Parrella", 
        items: 1, 
        price: 233, 
        status:'Packing',
        category: "Polera", 
        size: "Xl", 
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSiOxO-rDAQFdimTFL4blt55fUoBuGxWk6rQ-mP6tbJV51ffVztVgled8z4oy8eEqN1UhfZEjtzcfN8dRadDCBmxJmzFE7lPmwpta5IQnJ7kQYakFheJfFs_w&usqp=CAE" 
      },
      { 
        name: "Chaqueta  cero Parrella", 
        items: 4, 
        price: 523, 
        status:'Ready',
        category: "Chaquera", 
        size: "L", 
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGRz9yZ5ocXglGgZIM_XxSjm56PmdedtxQxSAMqfpsddldGVOb-stT1WoOzcqlsP1sT4-xP1m5ftACy0206lVpCOHzEEXuBNAsIMHd_6kML1jvyWrR0dd_8g&usqp=CAE" 
      }
    ],
   
    
    
  },
  {
    orderId: 4,
    created: "Agosto 22, 2024",
    customer: "Abrahams Marcano",
    email: 'Abrahams@gmail.com',
    phone: '+58 1234 1234 23',
    price: 1234,
    paymentStatus: "Cancel",
    items: 3,
    orderStatus: "Cancel",
  },
];
