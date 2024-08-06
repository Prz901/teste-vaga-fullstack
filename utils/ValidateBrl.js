const moneyValuesToFormat = ['vlPresta', 'vlMulta', 'vlOutAcr', 'vlIof', 'vlDescon', 'vlAtual', 'vlTotal', 'vlMora']

function formatValuetoBrl(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(parseFloat(value));
}

function revertCurrency(value) {
  const number = value.replace(/[^\d,.-]/g, '').replace(',', '.');
  return parseFloat(number);
}

function handleFormatValuesCsv(data) {
  moneyValuesToFormat.forEach(money => {
    data[money] = formatValuetoBrl(data[money])
  });
  return data
}

module.exports = { handleFormatValuesCsv, formatValuetoBrl, revertCurrency }