// export interface product{

//     _id : string;
//     productName : string;
//     _type : 'product';
//     image? :{
//         asset:{
//             _ref :string ;
//             _type :'image';
//         }
//     };
//     price : number ;
//     description?:string;
//     category : string;
//     color :string;



// }



export interface Product {
    _id: string;
    productName: string;
    _type: 'product';
    image?: {
        asset: {
            _ref: string;
            _type: 'image';
        };
    };
    price: number;
    description?: string;
    category: string;
    color: string;
}
