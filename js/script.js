const container = document.querySelector('main.container')
const qrCodebtn = document.querySelector('div#qr-input button')
const qrCodeInput = document.querySelector('div#qr-input input')
const qrCodeImg = document.querySelector('div#qr-code img')

// Eventos
function generatoQrCode() {
    const qrCodeInputValue = qrCodeInput.value

    if(!qrCodeInputValue) {
        window.alert('[ERRO] Digite algo!')
        return
    }

    qrCodebtn.innerHTML = 'Gerado código...'

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    
    qrCodeImg.addEventListener('load', () => {
        container.classList.add('active')
        qrCodebtn.innerHTML = 'Código gerado!'
    })
}
qrCodebtn.addEventListener('click', () => {
    generatoQrCode()
})

qrCodeInput.addEventListener('keydown', (e) => {
    if(e.code === 'Enter') {
        generatoQrCode()
    }
})

// Limpar área QR Code
qrCodeInput.addEventListener('keyup', () => {
    if(!qrCodeInput.value) {
        container.classList.remove('active')
        qrCodebtn.innerHTML = 'Código gerado!'
    }
})