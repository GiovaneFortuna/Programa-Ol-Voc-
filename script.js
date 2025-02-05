function mostrarNome(){

    const inNome = document.getElementById("inNome");

    const nome = inNome.value;

    outMostrar.textContent = "Olá " + nome;


}

const btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarNome);