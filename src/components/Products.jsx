import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "./redux/cart";
import { toast } from "react-toastify";

function Products() {
  const [products, setProducts] = useState();
  const api = useSelector((state) => state.apiLink);
  const dispatch = useDispatch();

  const notify = (data) => {
    toast("Added to Cart", {
      position: "bottom-right",
      autoClose: 1500,
    });
    dispatch(addCart(data));
  };

  useEffect(() => {
    const fetch = async () => {
      await axios.get(api).then((resp) => setProducts(resp.data));
    };
    fetch();
  }, [api]);
  return (
    <main className="products-container" id="products">
      <section className="title">
        <h1>Today's Sales</h1>
      </section>
      {products ? (
        <section className="cards">
          {products.map((data) => (
            <div className="card" key={data.id}>
              <img src={data.image} alt={data.title}></img>
              <h2>{data.title}</h2>
              <p>${data.price}</p>
              <button onClick={() => notify(data)}>Add to Cart</button>
            </div>
          ))}
        </section>
      ) : (
        <section className="loading">
          <h1>
            <i className="fas fa-spinner"></i>
          </h1>
        </section>
      )}
    </main>
  );
}

export default Products;
