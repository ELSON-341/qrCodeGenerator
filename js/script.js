// seleções
const qrInput = document.querySelector('#text')
const qrBtn = document.querySelector('button')
const main = document.querySelector('main')
const img = document.querySelector('#qr-code img')

// funções
function generatorQrCode() {
    const inputVelue = qrInput.value

    if(!inputVelue) {
        window.alert('Por favor, digite algo!')
        return
    }

    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVelue}`


    img.addEventListener('load', () => {
        main.classList.add('active')
    })

}
// elventos
qrBtn.addEventListener('click', () => {
    generatorQrCode()
})

qrInput.addEventListener('keydown', (e) => {
    if(e.code === 'Enter') generatorQrCode()
})

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value) {
        main.classList.remove('active')
    }
})