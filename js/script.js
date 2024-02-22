// seleções
const qrInput = document.querySelector('#text')
const qrBtn = document.querySelector('button')

// funções
function generatorQrCode() {
    const inputVelue = qrInput.value

    if(!inputVelue) {
        window.alert('Por favor, ditite algo!')
        return
    }
}
// elventos
qrBtn.addEventListener('click', () => {
    generatorQrCode()
})