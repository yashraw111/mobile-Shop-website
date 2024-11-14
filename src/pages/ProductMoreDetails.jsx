import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ProductListData from "../Layout/ProductListData";
import RelateData from "../Layout/ReleteData";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const ProductMoreDetails = () => {
  const [product, setProduct] = useState(ProductListData);
  const { id } = useParams(); // Corrected parameter name to 'id'

  const [Search, setSearch] = useState("");

  const [RelatedCart, setcard] = useState(RelateData);
  console.log(RelatedCart);
  

  console.log(product);
  console.log(id);

  const cartProduct = product.filter((item, index) => {
    return item.id == id;
  });
  console.log(cartProduct);

  useEffect(() => {
    setProduct(cartProduct);
  }, []);

  const filterData = RelateData.filter((product) => {
    const searched = Search.toUpperCase();
    const productName = product?.name.toUpperCase();
    return productName.includes(searched) 
  });

 

  return (
    <>

    <Header></Header>
      {product.map((item, index) => {
        return (
          <div className="SingleProductShow ">
             <div className="image-Sec">
          <div className="Product-detail container">
            <h1>Shop</h1>
            <p>Phone Repair / Products</p>
          </div>
        </div>
            <div className="product-details container">
              <div className="product-details-content row ">
                <div className="d-flex justify-content-between">
                <h3>More Product Details</h3>
                <NavLink className="btn btn-dark" to="/AllProduct">back</NavLink>
                </div>
                <div className="col-lg-8 col-md-12 d-flex">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="product-details-image"
                  />
                  <div className="col-lg-12 col-md-12 ms-4 ps-4 pb-3">
                    <h2 className="product-details-title">{item.name}</h2>
                    <p className="product-details-price">
                      Price: ${item.price?.toFixed(2)}
                    </p>
                    <p className="product-details-description">
                      {item.description}
                    </p>

                    <div className="product-details-actions">
                      <button className="btn btn-primary add-to-cart-btn">
                        Add to Cart
                      </button>
                      <button className="btn btn-secondary buy-now-btn">
                        Buy Now
                      </button>
                    </div>

                    <div className="col-lg-4"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mb-5 pb-5 Releted-product">

            <div className="row mt-5 ">
              <h4 className="text-decoration-underline mb-5">RELETED PRODUCTS</h4>

              <div className="col-lg-6">

              <div className="row">
              {filterData.length > 0 ? (
                  filterData.map((item, index) => (
                    <div className="col-lg-4 product-card " key={index}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="product-image"
                      />
                      <h5 className="product-title">{item.name}</h5>
                      <p className="product-price">${item.price.toFixed(2)}</p>
                      <button className="btn btn-primary" onClick={() => addToCart(item)}>
                        Add to cart
                      </button>

                    </div>
                  ))
                ) : (
                  <p>Loading products...</p>
                )}
              </div>
              </div>
              <div className="col-lg-4">
              <div className="inputs">
                <p className="text-danger text-decoration-underline">Product search</p>
                <input
                  type="search"
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-control"
                  placeholder="enter product name"
                />
              </div>

              </div>

            </div>
            </div>
          </div>
        );
      })}

      <Footer></Footer>
    </>
    
  );
};

export default ProductMoreDetails;
