// import React from 'react';
// import { NavLink } from 'react-router-dom';
// // import './CarImageGallery.css'; // Make sure to import the CSS file

// // Car data array
// const carData = [
//   { id: 1, carName: "R8 GT", carBrand: "Audi", carImage: "https://www.wsupercars.com/thumbnails/Audi/2023-Audi-R8-Coupe-V10-GT-RWD-001.jpg", price: 200000 },
//   { id: 2, carName: "Aventador Ultimae", carBrand: "Lamborghini", carImage: "https://www.wsupercars.com/thumbnails/Lamborghini/2022-Lamborghini-Aventador-LP780-4-Ultimae-Roadster-001.jpg", price: 450000 },
// ];

// const CarImageGallery = () => {
//   return (
//     <div className="outterContainer">
//       <div className="container">
//         {carData.map((car) => (
//           <div className="product-card" key={car.id}>
//             <img src={car.carImage} alt={car.carName} className="car-image" />
//             <h5 className="product-title">{car.carName}</h5>
//             <p className="product-brand">{car.carBrand}</p>
//             <p className="product-price">${car.price.toLocaleString()}</p>
//             <button className="add-to-cart-btn">Add to cart</button>
//             <NavLink to={`/ProductSingleView/${car.id}`}>
//               <button className="more-btn">More..</button>
//             </NavLink>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CarImageGallery;
