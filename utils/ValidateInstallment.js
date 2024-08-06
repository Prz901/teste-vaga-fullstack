// - Dividiremos o valor de `vlTotal` pela quantidade de prestações (`qtPrestacoes`).
// - Verificaremos se o resultado dessa divisão é igual ao valor de `vlPresta` para cada prestação, garantindo que os cálculos estejam corretos e consistentes.
const { revertCurrency, formatValuetoBrl } = require("./ValidateBrl")

function handleValidadeInstallment(data, countersVlPresta) {
  const total = revertCurrency(data.vlTotal)
  const installment = revertCurrency(data.vlPresta)

  const count = formatValuetoBrl(total / data.qtPrestacoes)
  const countInstallment = formatValuetoBrl(installment / data.qtPrestacoes)

  if (count === countInstallment) {
    countersVlPresta.rightData++
  }
  countersVlPresta.wrongData++
}

module.exports = { handleValidadeInstallment }