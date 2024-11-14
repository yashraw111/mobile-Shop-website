import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductListData from "../Layout/ProductListData";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const ShopSection = () => {
  const [products, setProduct] = useState(ProductListData);
  const [Search, setSearch] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState([0, 9000]);
  const [cart, setCart] = useState([]); // State for cart items

  const filterData = products.filter((product) => {
    const searched = Search.toUpperCase();
    const productName = product?.name.toUpperCase();
    const isInPriceRange = product.price >= Price[0] && product.price <= Price[1];
    return productName.includes(searched) && isInPriceRange;
  });
// Function to add item to cart
const addToCart = (product) => {
  setCart((prevCart) => {
    // Check if product already exists in the cart
    const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Product exists, increase quantity
      return prevCart.map((item, index) => 
        index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // Product doesn't exist, add to cart with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};


  return (
    <>
      <Header />
      <div className="AllProduct">
        <div className="image-Sec">
          <div className="detail container">
            <h1>Shop</h1>
            <p>Phone Repair / Products</p>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <h4>ALL PRODUCTS</h4>
            <div className="col-lg-8 mt-5">
              <div className="row">
                {filterData.length > 0 ? (
                  filterData.map((item, index) => (
                    <div className="col-lg-4 product-card" key={index}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="product-image"
                      />
                      <h5 className="product-title">{item.name}</h5>
                      <p className="product-price">${item.price.toFixed(2)}</p>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => addToCart(item)}
                      >
                        Add to cart
                      </button>
                      <NavLink to={`/ProductSingleView/${item.id}`}>
                        <button className="btn btn-outline-dark py-2 ms-2 mb-1">More..</button>
                      </NavLink>
                    </div>
                  ))
                ) : (
                  <p>Loading products...</p>
                )}
              </div>
            </div>
            <div className="ps-5 col-lg-4">
              <div className="inputs">
                <input
                  type="search"
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-control"
                  placeholder="Enter product name"
                />
              </div>

              <div className="price-filter mt-4">
                <h5>Filter by Price</h5>
                <input
                  className="price-slider"
                  type="range"
                  min="0"
                  max="9000"
                  step="100"
                  value={Price[1]}
                  onChange={(e) => setPrice([0, Number(e.target.value)])}
                />
                <p>Price: ${Price[0]} - ${Price[1]}</p>
              </div>

              {/* Cart Section */}
              <div className="AllCart mt-4">
              <div className="d-flex justify-content-between">
              <h4>Shopping Cart</h4>
              {/* <NavLink><button>All Cart</button></NavLink> */}
              </div>
              

                <div className="cart container cart-sec">
                  {cart.length > 0 ? (
                    cart.map((item, index) => (
                      <div key={index} className="d-flex align-content-between justify-content-between mt-2">
                        <div className="cart-det">
                          <h5>
                            <b>{index + 1}</b> {item.name}
                          </h5>
                          <p>${item.price.toFixed(2)}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                        <div className="img-par">
                          <img src={item.imageUrl} alt="" />
                        </div>
                      </div>
                    ))
                    
                  ) : (
                    <p className="text-danger">Your cart is empty</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopSection;
