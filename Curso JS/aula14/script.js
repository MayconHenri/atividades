function carregar(){
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var minutosFormatados = minuto.toString().padStart(2, '0');
    var tempo = ''

    if(hora >= 5 && hora < 12){
        // BOM DIA
        img.src = 'manha.png';
        document.body.style.background = '#e2cd9f';
        tempo = 'manhã'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'tarde.png';
        document.body.style.background = '#b9846f';
        tempo = 'tarde'
    } else {
        // BOA NOITE
        img.src = 'noite.png';
        document.body.style.background = '#515154';
        tempo = 'noite'
    }

    msg.innerHTML = `<strong> Agora são ${hora}:${minutosFormatados}h da ${tempo}</strong>`;


}
