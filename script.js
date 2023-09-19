document.addEventListener("DOMContentLoaded", function () {
    const verificarBotao = document.getElementById("verificar");

    verificarBotao.addEventListener("click", function () {
        const numero = parseInt(document.getElementById("numero").value);

        if (isNaN(numero)) {
            alert("Por favor, insira um número válido.");
        } else {
            let resultado;

            if (numero % 2 === 0) {
                resultado = `${numero} é um número par.`;
            } else {
                resultado = `${numero} é um número ímpar.`;
            }

            alert(resultado);
        }
    });
});