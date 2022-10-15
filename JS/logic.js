let Nav = document.querySelectorAll(".nav-link");

console.log(Nav[2].attributes.href.value);

Nav[2].addEventListener("click", function () {
   const id = Nav[2].attributes.href.value;
   let publication = document.querySelector(id);
   console.log(publication.querySelector(".accordion-button.collapsed"))
   publication.querySelector(".accordion-button.collapsed").click();
});

let Dropdown = document.querySelectorAll(".dropdown-item");

Dropdown[0].addEventListener("click", function () {
   const id = Dropdown[0].attributes.href.value;
   let publication = document.querySelector(id);
   publication.querySelector(".accordion-button.collapsed").click();
});

Dropdown[1].addEventListener("click", function () {
   const id = Dropdown[1].attributes.href.value;
   let publication = document.querySelector(id);
   publication.querySelector(".accordion-button.collapsed").click();
});

Nav[4].addEventListener("click", function () {
   const id = Nav[4].attributes.href.value;
   let publication = document.querySelector(id);
   console.log(publication.querySelector(".accordion-button.collapsed"))
   publication.querySelector(".accordion-button.collapsed").click();
}
);

Nav[5].addEventListener("click", function () {
   const id = Nav[5].attributes.href.value;
   let publication = document.querySelector(id);
   console.log(publication.querySelector(".accordion-button.collapsed"))
   publication.querySelector(".accordion-button.collapsed").click();
}
);

Nav[6].addEventListener("click", function () {
   const id = Nav[6].attributes.href.value;
   let publication = document.querySelector(id);
   console.log(publication.querySelector(".accordion-button.collapsed"))
   publication.querySelector(".accordion-button.collapsed").click();
}
);

Nav[7].addEventListener("click", function () {
   const id = Nav[7].attributes.href.value;
   let publication = document.querySelector(id);
   console.log(publication.querySelector(".accordion-button.collapsed"))
   publication.querySelector(".accordion-button.collapsed").click();
}
);

// navbar color logic
let navbar = document.querySelector(".navbar-container")
onscroll = () => {
      // console.log(window.scrollY, navbar.clientHeight)
      if (window.scrollY > 50 || document.documentElement.scrollTop >= 200 ){
         navbar.classList.add("navbar-color");
         navbar.classList.remove("navbar-color-transparent");
      }
      else{
         navbar.classList.add("navbar-color-transparent");
         navbar.classList.remove("navbar-color");
         console.log("removed")
      }
   }



