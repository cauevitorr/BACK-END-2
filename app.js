//Input
const inNumero = document.getElementById("inNumero")

//Actions
const btnApostar = document.getElementById("btnApostar")
const btnJogarNovamente = document.getElementById("btnJogar")

//Outputs
const outErros = document.getElementById("outErros")
const outChances = document.getElementById("outChances")
const outDica = document.getElementById("outDica")

//Calculo
const sorteado = Math.floor(Math.random()*100) + 1
console.log(sorteado)

const apostados = []

const adicionarAposta = () => {
    const aposta = Number(inNumero.value)
    if (aposta === '' || aposta === 0 || isNaN(aposta)) {
        alert('Preencha os dados corretamente')
        return
    }if(aposta == sorteado){
        alert('Você acertou!')
        btnApostar.disabled = true
        outDica.textContent = 'Parabéns! Você Acertou'
    }if(apostados.find(element) = sorteado){
        alert("Número já digitado")
    }

    apostados.push(aposta)

    let erros = ''
    apostados.forEach(() => {
        return erros = `${apostados.length} (${apostados.join(", ")})`
    })
    outErros.textContent = erros


    console.log(apostados)
    inNumero.value = ''

};
btnApostar.addEventListener("click", adicionarAposta);

btnJogarNovamente.addEventListener("click", () => {
    window.location.reload()
})