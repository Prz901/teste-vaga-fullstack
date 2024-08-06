// const { paginationConsoleInfos } = require('./Pagination');
// const readline = require('readline');
const { readCSV } = require('./readFile/readCsv');

async function handleExecute() {
  try {
    const data = await readCSV();
    for (let index = 0; index < 5; index++) {
      const csvData = data[index];
      console.log("Pequena demonstração de como ficou os dados do Csv Formatados", csvData)
    }
    // handlePaginateInfos(data)
  } catch (err) {
    console.error("Falha em ler o arquivo csv:", err);
  }
}
// Nota: Deixei essa função comentada para paginar as informações que vem do do arquivo csv.
// async function handlePaginateInfos(data){
//   let pageCurrent = 1
//   const sizePage = 2
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   paginationConsoleInfos(data, pageCurrent, sizePage);

//   rl.on('line', (valueInput) => {
//     if (valueInput === 'n' && pageCurrent * sizePage < data.length) {
//       pageCurrent++;
//       paginationConsoleInfos(data, pageCurrent, sizePage);
//     } else if (valueInput === 'p' && pageCurrent > 1) {
//       pageCurrent--;
//       paginationConsoleInfos(data, pageCurrent, sizePage);
//     } else if (valueInput === 'q') {
//       rl.close();
//     } else {
//       console.log("Comando invalido. Use 'n' para proxima pagina, 'p' para pagina anterior e 'q' para sair")
//     }
//   });

//   rl.on('close', () => {
//     console.log("Pagination ended.")
//   });
// }

handleExecute()