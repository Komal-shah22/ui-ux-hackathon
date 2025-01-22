export default {
    name: 'product',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'discription', type: 'string' ,title: 'discription'},
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'stock', type: 'number', title: 'Stock Level' },
      { name: 'category', type: 'string', title: 'Category' },
      { name: 'rating', type: 'string', title: 'rating'}, 
      { name: 'image', type: 'image', title: 'Product Image' }
    ]
  };

//   export default {
//     name: 'order',
//     type: 'document',
//     fields: [
//       { name: 'customerName', type: 'string', title: 'Customer Name' },
//       { name: 'email', type: 'string', title: 'Email' },
//       { name: 'products', type: 'array', title: 'Products', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
//       { name: 'totalPrice', type: 'number', title: 'Total Price' },
//       { name: 'paymentStatus', type: 'string', title: 'Payment Status' },
//       { name: 'shipmentTrackingId', type: 'string', title: 'Shipment Tracking ID' }
//     ]
//   };