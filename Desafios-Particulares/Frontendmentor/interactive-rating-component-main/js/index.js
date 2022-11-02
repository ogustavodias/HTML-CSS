const rates = document.querySelectorAll('.rates');

rates.forEach(rate => {
    rate.addEventListener("click", function selectRate() {
        const selectedRate = document.querySelector(".rates.selected");
        rate.classList.add("selected");
        if (selectedRate != null && selectedRate != rate) {
            selectedRate.classList.remove("selected");
        }
    })
})

const button = document.querySelector('#bt-submit');

function submit() {
    let selectedRate = document.querySelector(".rates.selected");
    let rate = selectedRate.value;

    if (rate != null) {
        document.querySelector("section.rate").style.display = "none";
        document.querySelector("section.thank-rate").style.display = "block";
        document.querySelector("#count").innerHTML += ` ${rate}`;
    }
}