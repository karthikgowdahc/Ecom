import React, { useState, useEffect } from "react";
import "../Main2.scss";
import Main3 from "./Main3";
import { useNavigate } from "react-router-dom";

function Main2() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/categories");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  let next = (e) => {
    navigate("/Main3");
  };
  return (
    <div>
      <div className="banner">
        <h1>E-commerce Store</h1>
      </div>
      <div className="categories">
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <img
              onClick={next}
              className="category-img"
              src={category.image_url}
              alt={category.alt}
            />
            <p>
              {category.title}
              <p className="m2price">
                {category.price}{" "}
                <span className="m2discount">({category.discount})</span>
              </p>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main2;
