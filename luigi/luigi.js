function fase1 () {
    
    const respostaFase1 = Number(prompt(`Qual sua resposta?
 Digite: 1 ou 2.`));

    if (respostaFase1 == 1) {
        alert("Luisilia deu um soco no Spisilia e se feriu. Você Perdeu.");
        location.replace("luigi-over.html");
    }
    else if (respostaFase1 == 2) {
        alert("Luisilia pulou em direção ao inimigo Spisilia e avançou.");
        location.replace("luigi-fase2.html");
    } else {
        alert(` Opção inválida!
 Digite uma das opções 1 ou 2.`);
    }
}


function fase2 () {
    
    const respostaFase2 = Number(prompt(`Qual sua resposta?
    Digite: 1 ou 2.`));

    if (respostaFase2 == 1) {
        alert("Luisilia deu um soco no inimigo Hammersilia. Porém inimigo acerta a tempo o martelo no Luisilia. Você perdeu.");
        location.replace("luigi-over.html");
    }
    else if (respostaFase2 == 2) {
        alert("Luisilia pula em direção ao Hammersilia e consegue avançar.");
        location.replace("luigi-fase3.html");
    }
    else {
        alert(` Opção inválida!
 Digite uma das opções 1 ou 2.`);
    }
}


function fase3 () {
    
    const respostaFase3 = Number(prompt(`Qual sua resposta?
Digite: 1, 2 ou 3.`));
    
    if (respostaFase3 == 1) {
        alert("Luisilia da um soco em direção de Waluisilia e consegue vencer.");
        location.replace("luigi-win.html");
    }
    else if (respostaFase3 == 2) {
        alert("Marisilia pula em direção de Waluisilia. Porém Waluisilia tinha armado uma armadilha e Luisilia cai. Você perdeu.");
        location.replace("luigi-over.html");
    }
    else if (respostaFase3 == 3) {
        alert("Luisilia adquire uma flor de fogo e atira bola de fogo em direção Waluisilia. Porém Waluisilia rebate a bola de fogo com sua raquete de volta para Luisilia que pega fogo. Você perdeu.");
        location.replace("luigi-over.html");
    }
    else {
        alert(` Opção inválida!
 Digite uma das opções 1, 2 ou 3.`);
    }
}


function menu () {
    location.replace("../index.html");
}