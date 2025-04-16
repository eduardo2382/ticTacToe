var placar = {
    circle: 0,
    cross: 0
}

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



areas.forEach((area, numArea)=>{
    area.addEventListener('click', clickArea = ()=>{
        if(verificarArea(numArea) && !isWin){
            marcarJogada(numArea, area)
            renderizar()
            if(verificarVitoria()){
                finalizarJogo()
                mudarPlacar()
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
        } else if(vez == 1){
            vez = 0
        }

        mudarPlacar(vez)
    }
}

function mudarPlacar(vez){
    let circle = document.querySelector('#placar .ri-circle-line')
    let close = document.querySelector('#placar .ri-close-large-line')

    console.log(vez)

    if(vez == 0){
        circle.style.color = 'white'
        close.style.color = '#0c0c0c'
    } else if(vez == 1){
        circle.style.color = '#0c0c0c'
        close.style.color = 'white'
    }

    let numPlacar = document.querySelector('#placar p')
    numPlacar.innerHTML = `${placar.circle} - ${placar.cross}`
    
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

    ativarBotões()
}

function ativarBotões(){
    let btnNovaRodada = document.querySelector('#btnNovaRodada')
    let btnLimparJogo = document.querySelector('#btnLimparJogo')

    btnNovaRodada.style.cursor = 'pointer'
    btnNovaRodada.style.color = 'white'

    btnLimparJogo.style.cursor = 'pointer'
    btnLimparJogo.style.color = 'white'

    btnNovaRodada.addEventListener('click', novaRodada)
}

function desativarBotões(){
    let btnNovaRodada = document.querySelector('#btnNovaRodada')
    let btnLimparJogo = document.querySelector('#btnLimparJogo')

    btnNovaRodada.style.cursor = 'not-allowed'
    btnNovaRodada.style.color = '#181818'

    btnLimparJogo.style.cursor = 'not-allowed'
    btnLimparJogo.style.color = '#181818'

    btnNovaRodada.removeEventListener('click', novaRodada)
}

function novaRodada(){
    jogadas = [ , , , , , , , , ,]
    isWin = false
    mudarVez()
    desativarBotões()

    areas.forEach((area)=>{
        area.innerHTML = ''
        area.style.cursor = 'pointer'
    })
}

