document.addEventListener('DOMContentLoaded', createEventListeners)
var images;

function createEventListeners (){
    images = document.getElementById("images");
    images.addEventListener("click", changeImage);
    images.addEventListener("mousedown", pushedImage);
    images.addEventListener("mouseup", backImage);
}

function changeImage () {
   var multipleImages = Math.floor(Math.random()*18);
   var name = document.getElementById("name")
   if (multipleImages === 0){
       images.src = "./Images/Bolivia.jpg";
       name.innerHTML="Bolivia";
   } else if (multipleImages ===1) {
       images.src = "./Images/China.jpg";
       name.innerHTML="China";
   } else if (multipleImages ===2){
        images.src = "./Images/Dubai.jpg";
        name.innerHTML="Dubai";
    }else if (multipleImages ===3){
        images.src = "./Images/Egypt.jpg";
        name.innerHTML ="Egypt";
    } else if (multipleImages ===4) {
        images.src = "./Images/France.jpg";
        name.innerHTML ="France";
    }else if (multipleImages ===5) {
        images.src = "./Images/Greece.jpg";
        name.innerHTML ="Greece";
    }else if (multipleImages ===6){
        images.src = "./Images/Italy.jpg";
        name.innerHTML ="Italy";
    } else if (multipleImages ===7) {
        images.src = "./Images/Japan.jpg";
        name.innerHTML ="Japan";
    } else if (multipleImages ===8){
        images.src = "./Images/London.jpg";
        name.innerHTML ="England";
    } else if (multipleImages ===9) {
        images.src = "./Images/Maldive.jpg";
        name.innerHTML ="Maldives";
    } else if (multipleImages ===10){
        images.src = "./Images/Netherland.jpg";
        name.innerHTML ="Netherland";
    } else if (multipleImages ===11){
        images.src = "./Images/New Zealand.jpg";
        name.innerHTML ="New Zealand";
    } else if (multipleImages ===12){
        images.src = "./Images/Peru.jpeg";
        name.innerHTML ="Peru";
    } else if (multipleImages ===13){
        images.src = "./Images/Singapore.jpg";
        name.innerHTML ="Singapore";
    } else if (multipleImages ===14){
        images.src = "./Images/SouthAfrica.jpg";
        name.innerHTML ="South Africa";
    } else if (multipleImages ===15){
        images.src = "./Images/Spain.jpg";
        name.innerHTML ="Spain"
    } else if (multipleImages ===16) {
        images.src ="./Images/Australia.jpg";
        name.innerHTML ="Australia";
    } else if (multipleImages ===16) {
        images.src ="./Images/India.jpg";
        name.innerHTML ="India";
    }else {
        images.src = "./Images/USA.jpg";
        name.innerHTML ="USA";
    }
}

function pushedImage () {
this.className = "pushed"
}

function backImage () {
this.className = "";
}