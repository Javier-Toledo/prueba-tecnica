import React, {useState, useEffect} from "react";

import axiosClient from "../../config/axiosClient";
import "./CardDetailProduct.css";

  const CardDetailProduct = (props) => {
    // Component state
    const { id } = props.match.params;
    const [products, setProducts] = useState([]);

  useEffect(() => {
    //llamada  a la API
    const getProducts = () => {
      axiosClient.get(`/products?id=${id}`)
      .then(res => {
          // update state
          setProducts(res.data);

      })
  };
    getProducts()
},[id]);

    return (
      <div className="detail__wrapper">
      {products.map((prod, index) => (
        <div className="detail" key={index}>
        <img src={prod.image} alt={prod.title} className="detail__img" />
        <div className="detail__body">
        <h2 className="detail__title">{prod.title}</h2>
        <h4 className="detail__description"> {prod.description}</h4>
        <h5 className="detail__description"> {prod.category}</h5>
        <h3 className="detail__price">{prod.price}</h3>
        </div>
    </div>
    ))}
    </div>
    );
  }

  export default CardDetailProduct;