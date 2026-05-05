const token = "pk_GfFD9XCwTPibIovCNNb-RA"

const formulario = document.getElementById("company-form")
const campoEmpresa = document.getElementById("company-input")
const imagemLogo = document.getElementById("company-logo")
const textoLogo = document.getElementById("logo-placeholder")
const nomeEmpresa = document.getElementById("company-name")
const textoStatus = document.getElementById("result-status")

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault()

  const empresa = campoEmpresa.value.trim()

  if (empresa === "") {
    imagemLogo.hidden = true
    textoLogo.hidden = false
    textoLogo.textContent = "Digite uma empresa"
    nomeEmpresa.textContent = "Nenhuma empresa pesquisada"
    textoStatus.textContent = "A logo aparecerá aqui assim que você pesquisar."
    return
  }

  const empresaNaUrl = encodeURIComponent(empresa)
  const urlDaLogo = `https://img.logo.dev/name/${empresaNaUrl}?token=${token}&format=png&retina=true`

  nomeEmpresa.textContent = empresa
  textoStatus.textContent = "Buscando logo..."
  textoLogo.hidden = true

  imagemLogo.src = urlDaLogo
  imagemLogo.alt = `Logo da empresa ${empresa}`
  imagemLogo.hidden = false
})
