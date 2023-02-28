const btn = document.querySelector('#btn-trailer');
const modal = document.querySelector('#modal');
const iframe = document.querySelector('#iframe');
const closeModal = document.querySelector('#close-modal');
btn.addEventListener("click", () => {
    modal.style.visibility = "visible";
})

closeModal.addEventListener("click", () => {
    modal.style.visibility = "hidden";
    iframe.setAttribute('src', iframe.getAttribute('src'));
})