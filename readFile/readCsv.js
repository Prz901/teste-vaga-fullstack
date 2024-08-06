// - Os dados são fornecidos em formato CSV.
// - Utilizaremos a biblioteca fs (File System) para ler o arquivo CSV e a biblioteca csv-parser para processar os dados e convertê-los em um array de objetos JavaScript.

const fs = require('fs');
const csv = require('csv-parser');
const { handleFormatValuesCsv } = require('../utils/ValidateBrl');
const { validateCpfCnpj } = require('../utils/ValidateCpfCnpj');
const { handleValidadeInstallment } = require('../utils/ValidateInstallment');

async function readCSV() {
  const results = []
  const counters = {
    validCpfCount: 0,
    invalidCpfCount: 0,
    validCnpjCount: 0,
    invalidCnpjCount: 0
  };
  const countersVlPresta = {
    rightData:0,
    wrongData:0
  }
  return new Promise((resolve, reject) => {
    fs.createReadStream('data.csv').pipe(csv()).on('data', (data) => {
      try {
        data = handleFormatValuesCsv(data)
        validateCpfCnpj(data, counters)
        handleValidadeInstallment(data, countersVlPresta)
        results.push(data);
      } catch (err) {
        console.log("Error:", err);
        reject(err);
      }
    })
      .on('end', () => {
        console.log("Arquivo Csv lido com sucesso");
        console.log(`CPFs validos dentro do csv ${counters.validCpfCount}`)
        console.log(`CPFs invalidos dentro do csv ${counters.invalidCpfCount}`)
        console.log(`Cnpjs validos dentro do csv ${counters.validCnpjCount}`)
        console.log(`Cnpjs invalidos dentro do csv ${counters.invalidCnpjCount}`)
        console.log(`Dados consistentes de prestacao ${countersVlPresta.rightData}`)
        console.log(`Dados inconsistentes de prestacao ${countersVlPresta.wrongData}`)
        resolve(results);
      })
      .on('error', (err) => {
        console.log("Erro na leitura do arquivo csv:", err);
        reject(err);
      });
  });
}

module.exports = { readCSV }