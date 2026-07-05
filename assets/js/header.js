async function loadComponent(id, file){

    const element = document.getElementById(id);

    if(!element) return;

    const response = await fetch(file);
    const html = await response.text();

    element.innerHTML = html;

    initMenu();
}

function initMenu(){

    const menuBtn = document.getElementById("menu-btn");
    const sideMenu = document.getElementById("side-menu");

    // side-menu が無いページでもエラーにならない
    if(!menuBtn || !sideMenu) return;

    menuBtn.addEventListener("click", () => {

        menuBtn.classList.toggle("active");
        sideMenu.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", sideMenu.classList.contains("open"));
        menuBtn.setAttribute(
            "aria-label",
            sideMenu.classList.contains("open") ? "メニューを閉じる" : "メニューを開く"
        );

    });
}

loadComponent("header", "./common/header.html");
