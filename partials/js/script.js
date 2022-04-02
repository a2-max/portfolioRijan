const checkBox = document.querySelector('.hamburger');
const hero = document.querySelector('.hero');

checkBox.addEventListener('click', () => {
    hero.classList.toggle('heroToggle');
});


// Animating Hero Text 
const text = document.querySelector('.below-heading');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
let i;
for (i = 0; i < splitText.length; i++) {
    text.innerHTML += '<span class="TextAnim">' + splitText[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick, 80);

function onTick() {
    const finalText = text.querySelectorAll('.TextAnim')[char];
    finalText.classList.add('textFade');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
    // console.log(splitText);
}

function complete() {
    clearInterval(timer);
    timer = null;
}

// Scroll Trigger Animation
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.left-about',
        start: "top center",
        // end: "+=500",
    }
});


tl.from("h2", { y: 200, opacity: 0, duration: 0.6 });
// tl.from(".my-img", {y: 200, opacity: 0, duration: 1});
tl.from(".paragraph", { x: 200, opacity: 0, duration: 1 }, "-=0.6");
tl.addLabel("start")
    .from(".my-img", { scale: 0.3, rotation: 45, autoAlpha: 0 }, "-=0.6")
    .addLabel("end");

let projects = gsap.timeline({
    scrollTrigger: {
        trigger: '.single-project',
        // start: "top center",
        scrub: 1,
    }
});
projects.from(".project-img", { x: -200, opacity: 0, duration: 0.6 });
projects.from(".description", { y: 200, opacity: 0, duration: 0.6 });
projects.from(".vertical-line", { y: 600, duration: 0.6 });
