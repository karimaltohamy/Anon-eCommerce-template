// element popup

let closePopup = document.querySelector("[data-popup-close]");
let popup = document.querySelector("[data-popup]");
let popupOverlay = document.querySelector("[data-popup-ovelay]");
// function close popup

function popupClose() {
    popup.classList.add("close");
    popupOverlay.classList.add("close");

}
 // click on popup function

closePopup.addEventListener("click", popupClose);
popupOverlay.addEventListener("click", popupClose);


// element notification

let closeNotification = document.querySelector("[data-notification-close]");
let notification = document.querySelector("[data-notification]");

closeNotification.addEventListener("click", () => {
    notification.classList.add("close")
});


// element mobil menu 

let closeMobliMenu = document.querySelectorAll("[data-btnclose-mobil-menu]");
let openMobliMenu = document.querySelectorAll("[data-btnopen-mobil-menu]");
let mobilMenus = document.querySelectorAll("[data-mobil-menu]");
let mainOverlay = document.querySelector("[data-main-overlay]");


// loop open and close mobil menu
for (let i = 0; i < openMobliMenu.length; i++) {
    // click open mobli 
    openMobliMenu[i].addEventListener("click", () => {
        mobilMenus[i].classList.add("active");
        mainOverlay.classList.add("active");
    });

    // function close mobil menu
    function closeMenu() {
        mobilMenus[i].classList.remove("active");
        mainOverlay.classList.remove("active");
    }

    // click close mobil menu
    closeMobliMenu[i].addEventListener("click", closeMenu);
    mainOverlay.addEventListener("click", closeMenu)
}


// element mobil menu center

let btnmMobilMenuCenter = document.querySelectorAll("[data-btn-mobilmenu-center]");
let mobilMenuCenterList = document.querySelectorAll("[data-mobilmenu-center-list]");

// loop click on button from add and rmove class active

for (let i = 0; i < btnmMobilMenuCenter.length; i++) {    
    btnmMobilMenuCenter[i].addEventListener("click", () => {

        let clickBtn = btnmMobilMenuCenter[i].nextElementSibling.classList.contains("active")

        for (let i = 0; i < mobilMenuCenterList.length; i++) {
            if (clickBtn) break;

            if (mobilMenuCenterList[i].classList.contains("active")) {

                mobilMenuCenterList[i].classList.remove("active")
                btnmMobilMenuCenter[i].classList.remove("active")
            }
        }
        
        btnmMobilMenuCenter[i].nextElementSibling.classList.toggle("active");
        btnmMobilMenuCenter[i].classList.toggle("active")
    })
}




