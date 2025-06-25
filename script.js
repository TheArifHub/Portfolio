let menuButton = document.querySelector("#menu");
let menuList = document.querySelector(".menu-list");

menuButton.addEventListener("click", showMenu);
function showMenu(event) {
  const isVisible = menuList.style.display === "block";

  if (isVisible) {
    menuList.style.display = "none";
    menuButton.classList.add("fa-bars");
    menuButton.classList.remove("fa-xmark");
  } else {
    menuList.style.display = "block";
    menuButton.classList.add("fa-xmark");
    menuButton.classList.remove("fa-bars");
  }
}

let timeLine = gsap.timeline();

timeLine.from("nav .logo",({
  opacity:0,
  duration:0.5,
  delay:0.1,
  y:-15,
}))

timeLine.from("nav ul li a",({
  opacity:0,
  duration:0.3,
  y:-15,
  stagger:0.1
}))

timeLine.from(".left h1",({
  opacity:0,
  x:200,
  duration:0.1
}))

timeLine.from(".left h2",({
  opacity:0,
  x:200,
  duration:0.1,
  delay:0.1
}))

timeLine.from(".btns .btn1",({
  x:-200,
  opacity:0,
  duration:0.2
}))
timeLine.from(".btns .btn2",({
  x:200,
  opacity:0,
  duration:0.2
}))
timeLine.from(".shape img",({
  opacity:0,
  y:20,
  duration:0.3
}))

let roleInterest = document.querySelector(".left h2");

let multipleRoles = ["Full Stack Developer","Frontend Developer","Backend Developer","Photo Editor"];


let index = 0;

function updateRoles(){
  let timeLineForRoles = gsap.timeline({
    onComplete:() => {
    index = (index + 1) % multipleRoles.length;
    updateRoles();
  } 
  });
   

timeLineForRoles.to(roleInterest,({
  delay:2,
  opacity:0,
  duration:0.3,
  onComplete: () => {
    roleInterest.textContent = multipleRoles[index];
  }
}))

timeLineForRoles.to(roleInterest,({
  opacity:1,
  duration:0.2,
}))
timeLineForRoles.to(roleInterest,({
  // delay:2,
  duration:0
}))
}

updateRoles();



gsap.to(".timeline-content",({
    "--top-offset":"85%",
  scrollTrigger:{
    trigger:".timeline-content",
    scroller:"body",
    // markers:true,
    start:"top 20%",
    scrub:2
  }
}))