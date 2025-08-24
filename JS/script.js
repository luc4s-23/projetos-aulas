function validar() {
    const user = document.getElementById('user').value
    const senha =  document.getElementById('senha').value

    const validado = (user == "lucas" && senha == "12345") ? window.location.href = "seila.html": alert("Usuário ou senha incorretos.");
    return validado
}