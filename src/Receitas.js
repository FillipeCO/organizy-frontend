import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Footer from "./Footer";
import "./Receitas.css";

const Receitas = () => {
  const [receitas, setReceitas] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const type = "receita";
  const fixed = "false";
  const paid = "false";
  const userId = localStorage.getItem("userId");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3333/financial-release", {
        category: category,
        description: description,
        value: value,
        date: convertDateFormat(date),
        type: type,
        fixed: fixed,
        paid: paid,
        userId: userId,
      })
      .then(function (response) {
        console.log(response);
        alert("Receita cadastrada com sucesso!");
      })

      .catch(function (error) {
        console.log(error);
        alert("Erro ao cadastrar receita!");
      });
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    console.log(date);
  };

  const convertDateFormat = (date) => {
    const dateParts = date.split("-");
    return new Date(
        dateParts[0],
        dateParts[1] - 1,
        dateParts[2]
    );
    };

    const convertDateFormat2 = (date) => {
        const dateParts = date.split("-");
        const day = dateParts[2].split("T");
        return day[0] + "/" + dateParts[1] + "/" + dateParts[0];
    };

  useEffect(() => {
    axios
      .get(`http://localhost:3333/financial-release/receita/${localStorage.getItem("userId")}`)
      .then((response) => setReceitas(response.data));
  }, []);

  return (
    <div className="component">
      <h1>Receitas</h1>
      <ul>
        {receitas.map((receita) => (
          <li key={receita._id}>
            <h2>{receita.description}</h2>
            <p>R$ {receita.value}</p>
            <p>{convertDateFormat2(receita.date)}</p>
          </li>
        ))}
      </ul>

        <h1>Cadastrar receita</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Categoria</label>
          <input
            id="category"
            name="category"
            type="text"
            onChange={handleCategoryChange}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição</label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label htmlFor="value">Valor</label>
          <input
            id="value"
            name="value"
            type="text"
            onChange={handleValueChange}
          />
        </div>
        <div>
          <label htmlFor="date">Data</label>
          <input
            id="date"
            name="date"
            type="date"
            onChange={handleDateChange}
          />
        </div>
        
        <button type="submit">Cadastrar receita</button>
      </form>
      <Footer />
    </div>
  );
};

export default Receitas;
