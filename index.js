   const hamburger = document.querySelector(".hamburger")
   const NavMenu = document.querySelector(".nav-list")
        hamburger.addEventListener("click", () =>{
              hamburger.classList.toggle("active")
              NavMenu.classList.toggle("active")
        })