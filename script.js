var vez = undefined
mudarVez()
var jogadas = [ , , , , , , , , ,]

const areas = document.querySelectorAll('.area')

areas.forEach((area, numArea)=>{
    area.addEventListener('click', ()=>{
        if(verificarArea(numArea)){
            marcarJogada(numArea)
            renderizar()
            mudarVez()
        }
    })
})

function mudarVez(){
    if(vez == undefined){
        vez = Math.floor(Math.random() * (1 - 0 + 1)) + 0
        mudarPlacar(vez)
    } else {
        if(vez == 0){
            vez = 1
        } else{
            vez = 0
        }

        mudarPlacar(vez)
    }
}

function mudarPlacar(vez){
    let circle = document.querySelector('#placar .ri-circle-line')
    let close = document.querySelector('#placar .ri-close-large-line')

    if(vez == 0){
        circle.style.color = 'white'
        close.style.color = '#0c0c0c'
    } else{
        circle.style.color = '#0c0c0c'
        close.style.color = 'white'
    }
}

function marcarJogada(numArea){
    for (let i = 0; i < jogadas.length; i++) {
        if(i == numArea){
            jogadas[i] = vez
        }
        
    }
}

function verificarArea(numArea){
    for (let i = 0; i < jogadas.length; i++) {
        if(i == numArea && jogadas[i] == undefined){
            return true
        }
        
    }
}

function renderizar(){
    for (let jogada = 0; jogada < jogadas.length; jogada++) {
        for (let area = 0; area < areas.length; area++) {
            if(area == jogada){
                if(jogadas[jogada] == 0){
                    areas[area].innerHTML = '<i class="ri-circle-line vezCircle"></i>'
                } else if(jogadas[jogada] == 1){
                    areas[area].innerHTML = '<i class="ri-close-large-line"></i>'
                }
            }
            
        }
        
    }
}


