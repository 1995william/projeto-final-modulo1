function fase1 () {
    
    const respostaFase1 = Number(prompt(`Qual sua resposta?
 Digite: 1 ou 2.`));

    if (respostaFase1 == 1) {
        alert("Marisilia deu um soco no Koopsilia, porém ela defendeu com sua mordida. Você Perdeu.");
        location.replace("mario-over.html");
    }
    else if (respostaFase1 == 2) {
        alert("Marisilia pula em cima do Koopsilia. Koopsilia se esconde dentro do casco para se proteger. Marisilia consegue passar para a próxima fase.");
        location.replace("mario-fase2.html");
    } else {
        alert(` Opção inválida!
 Digite uma das opções 1 ou 2.`);
    }
}


 function fase2 () {
    
    const respostaFase2 = Number(prompt(`Qual sua resposta?
    Digite: 1 ou 2.`));

    if (respostaFase2 == 1) {
        alert("Marisilia acerta um soco no Baby Bowsilia e prossegue para o castelo.");
        location.replace("mario-fase3.html");
    }
    else if (respostaFase2 == 2) {
        alert("Marisilia erra o pulo e é contra-atacado pelo Baby Bowsilia. Você perdeu.");
        location.replace("mario-over.html");
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
        alert("Bowsilia defende o soco do Marisilia e arremessa da ponte. Marisilia cai na piscina de lava. Você perdeu.");
        location.replace("mario-over.html");
    }
    else if (respostaFase3 == 2) {
        alert("Marisilia pula em cima do Bowsilia e cai nos espinhos do dele. Você perdeu.");
        location.replace("mario-over.html");
    }
    else if (respostaFase3 == 3) {
        alert("Marisilia salta sobre a ponte e utiliza o machado para quebrar a ponte onde está o Bowsilia. A ponte é quebrada e Bowsilia cai na piscina de lava. Marisilia vence a luta.");
        location.replace("mario-win.html");
    }
    else {
        alert(` Opção inválida!
 Digite uma das opções 1, 2 ou 3.`);
    }
}

function menu () {
    location.replace("../index.html");
}