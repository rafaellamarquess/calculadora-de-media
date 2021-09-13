const calcularNota = () => {
  const nota1 = Number(document.querySelector("#nota1").value)
  const nota2 = Number(document.querySelector("#nota2").value)
  const nota3 = Number(document.querySelector("#nota3").value)
  const nota4 = Number(document.querySelector("#nota4").value)
  const resultado = document.querySelector("#fraseAprovacao")
  
  const resultadoFinal = media(nota1, nota2, nota3, nota4)
  const fraseAprovacao = testeAprovacao(resultadoFinal)
  
  console.log(resultadoFinal)
  resultado.value = fraseAprovacao
  
}

const media = (nota1, nota2, nota3, nota4) => {
  const media = nota1 + nota2 + nota3 + nota4
  return media / 4
}

const testeAprovacao = (resultadoFinal) => {
 let retorno
 
 if (resultadoFinal >= 7) {
    retorno = "Aluno Aprovado!"
 }
  else {
    retorno = "Aluno Reprovado!"
  }   
  return retorno
}

// <script src=".\calculadoramedia.js"></script>