import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./TelaInicial.css";

const TelaInicial = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    };

    return (
        <div className="component">
  <h1>Organizy</h1>
  <h2>Organize suas finanças de forma simples e prática</h2>
  <button className="Button" onClick={goToLogin}>Entrar</button>
</div>

    );
    }

export default TelaInicial;