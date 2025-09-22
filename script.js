const dialogEl = document.getElementById("dialogEl");
const mainEl = document.querySelector(".main_section");

document.addEventListener('DOMContentLoaded', renderFotos);

function showDialog() {
    dialogEl.showModal();
}

function renderFotos() {
    for (let index = 0; index < savedFotos.length; index++) {
        const element = savedFotos[index];
        let imgTag = '';
        imgTag = `<div class="image_container">
        <img src="${element.path}" alt="${element.name}" class="image_container__image">
        </div>`;
        mainEl.innerHTML += imgTag;
    }
}

function showFoto() {
    //a tady budeme predavat jako parametry
}

const escapeHtml = unsafe => {
  return unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};