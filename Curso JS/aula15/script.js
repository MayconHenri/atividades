function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var f_ano = document.getElementById('txtano');
    var res = document.querySelector("div#res");

    if (f_ano.value.length == 0 || f_ano.value > ano) {
        window.alert("[ERRO] Verifique os dados informados e tente novamente!");
    } else {
        var f_sex = document.getElementsByName("radsex");
        var idade = ano - Number(f_ano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (f_sex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'photos/foto-crianca-homem.png');
                // Faça algo para a faixa etária de crianças
            } else if (idade < 21) {
                img.setAttribute('src', 'photos/foto-jovem-homem.png');
                // Faça algo para a faixa etária de jovens
            } else if (idade < 50) {
                img.setAttribute('src', 'photos/foto-adulto-homem.png');
                // Faça algo para a faixa etária de adultos
            } else {
                img.setAttribute('src', 'photos/foto-idoso-homem.png');
                // Faça algo para a faixa etária de idosos
            }

        } else {
            if (f_sex[1].checked) {
                genero = 'Mulher';
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', 'photos/foto-crianca-mulher.png');
                    // Faça algo para a faixa etária de crianças
                } else if (idade < 21) {
                    img.setAttribute('src', 'photos/foto-jovem-mulher.png');
                    // Faça algo para a faixa etária de jovens
                } else if (idade < 50) {
                    img.setAttribute('src', 'photos/foto-adulta-mulher.png');
                    // Faça algo para a faixa etária de adultos
                } else {
                    img.setAttribute('src', 'photos/foto-idosa-mulher.png');
                    // Faça algo para a faixa etária de idosos
                }
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `<strong> <p>A sua idade é ${idade} anos seu sexo é ${genero}</p> </strong>`;
        res.appendChild(img);
    }
}
