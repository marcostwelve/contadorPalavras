function calculaPalavras() {

    var texto = document.querySelector("#text").value;
    if(texto == "") {
        alert("É necessário digitar uma palavra no campo! 🤷🏽‍♂️");
    }
    else {
        var resultado = texto.split(" ").length;
        document.getElementById("resultado").innerHTML = "O total de palavras que você digitou são: " +resultado;
        var resposta = document.querySelector("#resultado");
        resposta.classList = "background_result";
    }
    

}

function limpar() {
    document.querySelector("#text").value = "";
    document.getElementById("resultado").innerHTML = "";
    var resposta = document.querySelector("#resultado");
    resposta.classList = "none";
}


