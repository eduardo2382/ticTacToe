var vez = undefined
mudarVez()

var isWin = false

var jogadas = [ , , , , , , , , ,]

const combinacoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const areas = document.querySelectorAll('.area')

var placar = {
    circle: 0,
    cross: 0
}


areas.forEach((area, numArea)=>{
    area.addEventListener('click', clickArea = ()=>{
        console.log(isWin)
        if(verificarArea(numArea) && !isWin){
            marcarJogada(numArea, area)
            renderizar()
            if(verificarVitoria()){
                finalizarJogo()
            } else{
                mudarVez()
            }
            
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

function marcarJogada(numArea, area){
    for (let i = 0; i < jogadas.length; i++) {
        if(i == numArea){
            jogadas[i] = vez
        }
    }

    area.style.cursor = 'not-allowed'
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

function verificarVitoria(){
    return combinacoes.some((comb)=>{
        return comb.every((index)=>{
            return jogadas[index] == vez
        })
    })
}

function finalizarJogo(){
    isWin = true

    areas.forEach((area, numArea)=>{
        area.style.cursor = 'not-allowed'
    })

    if(vez == 0){
        placar.circle++
    } else{
        placar.cross++
    }

    console.log(placar)
}

