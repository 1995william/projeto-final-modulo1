function fase1 () {
    const respostaFase1 = Number(prompt(`Qual sua resposta?
 Digite: 1 ou 2.`))

    if (respostaFase1 == 1) {
        alert("Yoshilia decide atirar o ovo em Plantsilia, ele acerta em cheio e consegue prosseguir.")
        location.replace("yoshi-fase2.html")
    }
    else if (respostaFase1 == 2) {
        alert("Yoshilia decide pular, porém Plantsilia o engole. Você perdeu.")
        location.replace("yoshi-over.html")
    } else {
        alert(` Opção inválida!
 Digite uma das opções 1 ou 2.`)
    }
}

function fase2 () {
    
    const respostaFase2 = Number(prompt(`Qual sua resposta?
    Digite: 1 ou 2.`))

    if (respostaFase2 == 1) {
        alert("Yoshilia atira o ovo no Magicsilia, Porém Magicsilia transforma o ovo em uma bola de fogo com seu feitiço em direção ao Yoshilia, que vira um churrasquinho. Você perdeu.")
        location.replace("yoshi-over.html")
    }
    else if (respostaFase2 == 2) {
        alert("Magicsilia lança seu feitiço em direção ao Yoshilia. Yoshilia decide pular e consegue escapar.")
        location.replace("yoshi-fase3.html")
    }
    else {
        alert(` Opção inválida!
 Digite uma das opções 1 ou 2.`)
    }
}

function fase3 () {
    
    const respostaFase3 = Number(prompt(`Qual sua resposta?
Digite: 1, 2 ou 3.`))
    
    if (respostaFase3 == 1) {
        alert("Yoshilia atira um ovo em Baby Bowsilia. Porém o dano não foi o suficiente e Baby Bowsilia esmaga Yoshilia. Você perdeu.")
        location.replace("yoshi-over.html")
    }
    else if (respostaFase3 == 2) {
        alert("Yoshilia decide pular em direção Baby Bowsilia, que foi atingido pelos espinhos do casco de Baby Bowsilia. Você perdeu.")
        location.replace("yoshi-over.html")
    }
    else if (respostaFase3 == 3) {
        alert("Yoshilia decide dar uma cabeçada que atinge Baby Bowsilia e Magicsilia. Yoshilia consegue escapar com Baby Marisilia.")
        location.replace("yoshi-win.html")
    }
    else {
        alert(` Opção inválida!
 Digite uma das opções 1, 2 ou 3.`)
    }
}


function menu () {
    location.replace("../index.html")
}