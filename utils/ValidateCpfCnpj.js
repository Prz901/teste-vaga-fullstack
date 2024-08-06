function validateCpfCnpj(data, counters) {
  const dataCpfCnpj = data.nrCpfCnpj
  if (dataCpfCnpj.length === 11) {
    if (isValidCPF(data)) {
      counters.validCpfCount++
    }
    counters.invalidCpfCount++
  }
  else {
    if (isValidCnpj(data)) {
      counters.validCnpjCount++
    }
    counters.invalidCnpjCount++
  }
}

function isValidCnpj (cnpj) {
  var b = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ]
  var c = String(cnpj).replace(/[^\d]/g, '')
  
  if(c.length !== 14)
      return false

  if(/0{14}/.test(c))
      return false

  for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
  if(c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
      return false

  for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
  if(c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
      return false

  return true
}

function isValidCPF(cpf) {
  if (typeof cpf !== "string") return false
  cpf = cpf.replace(/[\s.-]*/igm, '')
  if (
      !cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999" 
  ) {
      return false
  }
  var soma = 0
  var resto
  for (var i = 1; i <= 9; i++) 
      soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
  resto = (soma * 10) % 11
  if ((resto == 10) || (resto == 11))  resto = 0
  if (resto != parseInt(cpf.substring(9, 10)) ) return false
  soma = 0
  for (var i = 1; i <= 10; i++) 
      soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
  resto = (soma * 10) % 11
  if ((resto == 10) || (resto == 11))  resto = 0
  if (resto != parseInt(cpf.substring(10, 11) ) ) return false
  return true
}

module.exports = {validateCpfCnpj}
