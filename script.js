let contact = document.getElementById("contact");
let contactTypes = document.getElementsByClassName("contact-types");

let isOpen = false;

contact.addEventListener("click", function(){
  if(isOpen){
    for (let i = 0; i < contactTypes.length; i++){
      contactTypes[i].style.display = "none";
      contact.innerHTML = "Bizimle iletişim kurmak için tıklayın";
}
    isOpen = false;
}else{
    for (let i = 0; i < contactTypes.length; i++) {
      contactTypes[i].style.display = "flex";
      contactTypes[i].style.marginBottom = "-10rem";
      contact.innerHTML = "İletişim seçeneklerini kapatmak için tıklayın";
}
    isOpen = true;
}
});

// header end


let menuIkon = document.getElementById("menu-ikon");
let menuList = document.getElementById("menu-list");

menuIkon.addEventListener("click", function(){
  if(menuList.style.display === "block"){
    menuList.style.display = "none";
    
}else{
    menuList.style.display = "block";
}
});



