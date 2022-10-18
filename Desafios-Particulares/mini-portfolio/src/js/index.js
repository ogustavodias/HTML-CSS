/* OBJETIVO: QUANDO CLICARMOS NA ABA, TEMOS QUE MOSTRAR O CONTÉUDO DA ABA E OCULTAR A ANTERIOR */

const abas = document.querySelectorAll(".nav-bar");

abas.forEach(aba => {
    aba.addEventListener("click", function navSelect() {
        const abaSelecionada = document.querySelector(".nav-bar.selecionada");
        if (aba != abaSelecionada) {
            abaSelecionada.classList.remove("selecionada");
            aba.classList.add("selecionada");
        }

        const infoSelecionada = document.querySelector(".informacao.selecionada");
        const idInfoAba = `informacao-${aba.id}`;
        const InfoMostrar = document.getElementById(idInfoAba);

        if (idInfoAba != infoSelecionada.id) {
            infoSelecionada.classList.remove("selecionada");
            InfoMostrar.classList.add("selecionada");
        }
    });
})