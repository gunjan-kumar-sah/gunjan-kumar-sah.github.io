const words=[

"Software Developer",

"Python Developer",

"AI Enthusiast",

"Web Developer"

];

let i=0;

let j=0;

let current="";

let isDeleting=false;

function type(){

current=words[i];

if(isDeleting){

document.getElementById("typing").textContent=current.substring(0,j--);

}

else{

document.getElementById("typing").textContent=current.substring(0,j++);

}

if(!isDeleting && j===current.length){

isDeleting=true;

setTimeout(type,1000);

return;

}

if(isDeleting && j===0){

isDeleting=false;

i++;

if(i===words.length){

i=0;

}

}

setTimeout(type,isDeleting?60:120);

}

type();
// ================= SKILL ANIMATION =================

window.addEventListener("load", () => {

    document.querySelector(".html").style.width = "95%";

    document.querySelector(".css").style.width = "90%";

    document.querySelector(".javascript").style.width = "85%";

    document.querySelector(".python").style.width = "92%";

    document.querySelector(".java").style.width = "80%";

    document.querySelector(".git").style.width = "88%";

});

// Project Cards Animation

const cards = document.querySelectorAll(".project-card");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

setTimeout(()=>{

card.style.transition="0.8s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*300);

});

// ================= TIMELINE ANIMATION =================

const timelineItems = document.querySelectorAll(".timeline-content");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

timelineItems.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(50px)";
    item.style.transition="0.8s";

    observer.observe(item);

});

// ================= CERTIFICATE ANIMATION =================

const certificateCards=document.querySelectorAll(".certificate-card");

certificateCards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

setTimeout(()=>{

card.style.transition="0.8s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*250);

});
