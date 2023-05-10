export const calcularDiferençaEntreReceitasEDespesas = (financialReleases) => {
    var receitas = 0;
    var despesas = 0;
    financialReleases.forEach((financialRelease) => {
      if (financialRelease.type === "receita") {
        receitas += financialRelease.value;
      } else {
        despesas += financialRelease.value;
      }
    });
    return receitas - despesas;
  };