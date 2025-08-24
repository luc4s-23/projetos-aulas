function validar() {
    const user = document.getElementById('user').value
    const senha = document.getElementById('senha').value

    const validado = (user == "lucas" && senha == "12345") ? window.location.href = "seila.html" : alert("Usuário ou senha incorretos.");
    return validado
}

function calcular() {
    const p = parseFloat(document.getElementById('p').value)
    const a = parseFloat(document.getElementById('a').value)
    const imc = p / (a * a);

    // const resultado =
    //     (imc < 18.5) ? 'Abaixo do peso 18,5' :
    //     (imc >= 18.6 && imc <= 24.9) ? 'peso ideal' :
    //     (imc >= 25.0 && imc <= 29.9) ? 'levemente acima do peso' :
    //     (imc >= 30.0 && imc <= 34.9) ? 'obesidade grau 1' :
    //     (imc >= 35.0 && imc <= 39.9) ? 'obsidade grau 2' :
    //     (imc > 40.0) ? 'obesidade grau 3' : ''

    const faixas = [
        { limite: 18.5, texto: "Abaixo do peso" },
        { limite: 24.9, texto: "Peso ideal" },
        { limite: 29.9, texto: "Levemente acima do peso" },
        { limite: 34.9, texto: "Obesidade grau 1" },
        { limite: 39.9, texto: "Obesidade grau 2" },
        { limite: Infinity, texto: "Obesidade grau 3" }
    ];

    const resultado = faixas.find(f => imc <= f.limite).texto;

    document.getElementById('rsp').innerHTML = `Seu IMC: ${imc.toFixed(2)} - situação: ${resultado}`
}