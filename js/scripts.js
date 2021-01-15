let menu = document.getElementById("menu");
let navItems = document.querySelectorAll(".nav");


if (window.innerWidth > 600) {

  menu.style.display="none";
  navItems.forEach(nav => nav.style.display="inline-block");

} else {

  navItems.forEach(item => {
    item.addEventListener("click", e => {
      console.log(e.target.innerText);
      console.log(e.target.href);
      menu.style.display="block";
      navItems.forEach(el =>{
        el.style.display="none";
      });
    });
  });

  let menuState = menu.style.display;

  if (menuState == "block" || menuState == "inline-block" || menuState == "") {
    menu.addEventListener("click", e => {
      menu.style.display="none";
      navItems.forEach(e =>{
        e.style.display="inline-block";
      })
    });
  } 

}
