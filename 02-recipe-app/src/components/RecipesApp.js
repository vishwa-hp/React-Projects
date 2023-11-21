import React, { useState, useEffect } from "react";
import "./RecipesApp.css";
import axios from "axios";

function RecipesApp() {
  const [data, fetchData] = useState([]);
  const [formInput, changeInput] = useState("");

  const getData = async query => {
    const data = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=52b3bb22&app_key=2ec06301ac2d217dea6e007c31961bba`
    );
    fetchData(data.data.hits);
  };

  useEffect(() => {
    getData("chicken");
  }, []);

  const renderList = () => {
    return data.map(item => {
      return (
        <div key={item.recipe.label} className="card">
          <img
            src={item.recipe.image}
            className="card-img-top"
            alt={item.recipe.image}
          />

          <div className="card-body">
            <h5 className="card-title">{item.recipe.label}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              <b>Calories:</b> {Math.round(item.recipe.calories, 0)}
            </li>

            <a href={item.recipe.url} className="card-link">
              Recipe Link
            </a>
          </ul>
        </div>
      );
    });
  };
  return (
    <React.Fragment>
      <h1 className="display-4">Recipes App</h1>

      <input
        className="form-control"
        value={formInput}
        onChange={e => changeInput(e.target.value)}
        onKeyPress={e => {
          if (e.charCode === 13) {
            getData(formInput);
          }
        }}
      />
      <div className="RecipesApp">{renderList()}</div>
    </React.Fragment>
  );
}

export default RecipesApp;
