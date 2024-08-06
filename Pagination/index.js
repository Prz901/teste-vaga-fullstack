function paginationConsoleInfos(data, page, pageSize) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const pageData = data.slice(start, end);

  console.clear();
  console.log(`Página ${page}`);
  console.log(pageData);
  console.log(`\Exibindo ${start + 1}-${end} of ${data.length} infos.`);

  console.log("\Commands:");
  console.log("n - Next page");
  console.log("p - Previous page");
  console.log("q - Quit");
}

module.exports = { paginationConsoleInfos }