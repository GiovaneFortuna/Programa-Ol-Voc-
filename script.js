function mostrarNome(){

    const inNome = document.getElementById("inNome");

    const nome = inNome.value;

    outMostrar.textContent = "Olá " + nome;


}

const btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarNome);

/*

Os comandos que pertencem a uma função devem ser
delimitados pelas chaves { }. A função que obtém o conteúdo 
do campo nome de um formulário e a exibe precedida pela palavra Olá
em um parágrafo com id="resposta" é a seguinte:



*/