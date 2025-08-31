const dialogEl = document.getElementById("detailDialog");
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
        <img src="${element.path}" alt="${element.name}" class="image_gallery">
        </div>`;
        mainEl.innerHTML += imgTag;
    }
}
//test for closing ticket in Jira throught a github ticket