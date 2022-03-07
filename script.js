window.addEventListener('scroll', () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', ()=> {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))


const myPhoto = document.querySelector('#my-photo');

gsap.from('#my-photo', {x:-50, opacity:0, duration:2, ease:"back"})
gsap.from('.my-name', {y:-50, opacity:0, duration:2, ease:"back"})
gsap.from('.about-me', {x:50, opacity:0, duration:2, ease:"back"})

myPhoto.addEventListener('mouseover', changePhoto);
function changePhoto() {
    myPhoto.setAttribute("src", "me hover.jpg");
    myPhoto.addEventListener('mouseout', ()=> {
    myPhoto.setAttribute("src", "me.jpg");
    })
}

const colors = ["#23577E", "#FBAF59", "#ED6F2D", "#46B5D4"];
const numBalls = 40;
const balls = [];
for (let i = 0; i < numBalls; i++) {
let ball = document.createElement("div");
ball.classList.add("ball");
ball.style.background = colors[Math.floor(Math.random() * colors.length)];
ball.style.left = `${Math.floor(Math.random() * 90)}vw`;
ball.style.top = `${Math.floor(Math.random() * 80)}vh`;
ball.style.transform = `scale(${Math.random()})`;
ball.style.width = `${Math.random()}rem`;
ball.style.height = ball.style.width;
balls.push(ball);
document.body.append(ball);
}
balls.forEach((el, i, ra) => {
let to = {
x: Math.random() * (i % 2 === 0 ? -11 : 11),
y: Math.random() * 12
};
let anim = el.animate(
[
{ transform: "translate(0, 0)" },
{ transform: `translate(${to.x}rem, ${to.y}rem)` }
],
{
duration: (Math.random() + 1) * 2000, 
direction: "alternate",
fill: "both",
iterations: Infinity,
easing: "ease-in-out"
}
);
});


