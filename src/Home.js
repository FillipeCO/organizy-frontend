
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { calcularDiferençaEntreReceitasEDespesas } from "./functions/HomeFunctions";

const Home = () => {
  const [user, setUser] = useState([]);
  const [financialReleases, setFinancialReleases] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [receitas, setReceitas] = useState(0);
  const [despesas, setDespesas] = useState(0);
  const [balancoMensal, setBalancoMensal] = useState(0);
  const [loading, setLoading] = useState(true);

  // const calcularDiferençaEntreReceitasEDespesas = () => {
  //   var receitas = 0;
  //   var despesas = 0;
  //   financialReleases.forEach((financialRelease) => {
  //     if (financialRelease.type === "receita") {
  //       receitas += financialRelease.value;
  //     } else {
  //       despesas += financialRelease.value;
  //     }
  //   });
  //   return receitas - despesas;
  // };

  const calcularReceitas = () => {
    var receitas = 0;
    financialReleases.forEach((financialRelease) => {
      if (financialRelease.type === "receita") {
        receitas += financialRelease.value;
      }
    });
    return receitas;
  };

  const calcularDespesas = () => {
    var despesas = 0;
    financialReleases.forEach((financialRelease) => {
      if (financialRelease.type === "despesa") {
        despesas += financialRelease.value;
      }
    });
    return despesas;
  };

  const pegarNomeDoMesAtual = () => {
    var dataAtual = new Date();
    var mes = dataAtual.getMonth() + 1;
    switch (mes) {
      case 1:
        return "Janeiro";
      case 2:
        return "Fevereiro";
      case 3:
        return "Março";
      case 4:
        return "Abril";
      case 5:
        return "Maio";
      case 6:
        return "Junho";
      case 7:
        return "Julho";
      case 8:
        return "Agosto";
      case 9:
        return "Setembro";
      case 10:
        return "Outubro";
      case 11:
        return "Novembro";
      case 12:
        return "Dezembro";
      default:
        return "Mês inválido";
    }
  };

  const pegaMesAtual = () => {
    var dataAtual = new Date();
    var mes = dataAtual.getMonth() + 1;
    return mes;
  };

  const pegarApenasDespesas = () => {
    var despesas = [];
    financialReleases.forEach((financialRelease) => {
        if (financialRelease.type === "despesa") {
            despesas.push(financialRelease);
        }
    });
    return despesas;
    };



  useEffect(() => {
    setLoading(true);

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3333/user/${localStorage.getItem("userId")}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchFinancialReleases = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3333/financial-release/user/${localStorage.getItem(
            "userId"
          )}`
        );
        setFinancialReleases(response.data);
        setReceitas(calcularReceitas());
        setDespesas(calcularDespesas());

      } catch (error) {
        console.log(error);
      }
    };

    const fetchFinancialBalance = async () => {
        try {
            const response = await axios.get(`http://localhost:3333/financial-releases/balance/${localStorage.getItem("userId")}`);
            setSaldo(response.data.balance);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchMonthlyBalance = async () => {
        console.log('MESATUAL', pegaMesAtual()); 
        try {
            const response = await axios.post(`http://localhost:3333/financial-release/monthly-balance/${localStorage.getItem("userId")}`, {
                month : pegaMesAtual(),
                year : 2023
            });
            setBalancoMensal(response.data.balance);
        } catch (error) {
            console.log(error);
        }
    };

    fetchFinancialBalance();
    fetchMonthlyBalance();
    fetchUserData();
    fetchFinancialReleases();

    setLoading(false);
  }, []);

    const filtrarReceitasPeloMesAtualESomaOValorDelas = () => {
        const receitasMesAtual = financialReleases.filter((financialRelease) => {
          if (
            financialRelease.type === "receita" &&
            new Date(financialRelease.date).getMonth() === new Date().getMonth()
          ) { 
            return financialRelease.value;
          }
        });
        return receitasMesAtual.reduce((acc, cur) => acc + cur.value, 0);
      };

      const filtrarDespesasPeloMesAtualESomaOValorDelas = () => {
        const despesasMesAtual = financialReleases.filter((financialRelease) => {
          if (
            financialRelease.type === "despesa" &&
            new Date(financialRelease.date).getMonth() === new Date().getMonth()
          ) { 
            return financialRelease.value;
          }
        });
        return despesasMesAtual.reduce((acc, cur) => acc + cur.value, 0);
      };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Organizy</h1>
        <p>Olá, {user.name}!</p>
        <p>{pegarNomeDoMesAtual()}</p>

        {loading && <p>Carregando...</p>}
        {!loading && <p>Saldo atual em conta: {saldo}</p>}
        {!loading && <p>Receitas: {filtrarReceitasPeloMesAtualESomaOValorDelas()}</p>}
        {!loading && <p>Despesas: {filtrarDespesasPeloMesAtualESomaOValorDelas()}</p>}
        {!loading && <p>Despesas por categoria:</p>}
        {!loading && (
          <ul>
            {pegarApenasDespesas().map((financialRelease) => (
                <li key={financialRelease.id}>
                    {financialRelease.category} - {financialRelease.value}
                </li>
            ))}
            </ul>
        )}

        {!loading && <p>Balanço mensal: {balancoMensal}</p>}
        {!loading && <p>Receitas: {filtrarReceitasPeloMesAtualESomaOValorDelas()}</p>}
        {!loading && <p>Despesas: {filtrarDespesasPeloMesAtualESomaOValorDelas()}</p>}
        
             
      </header>
    </div>
  );
};

export default Home;
