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
