
var leftDoor = document.querySelector(".leftDoor");
var rightDoor = document.querySelector(".rightDoor");
var image= document.querySelector("#image");
// var middle=document.querySelector(".middle");
var video = document.querySelector('.videoB');

image.addEventListener('click', function (){
    leftDoor.classList.add('active');
    rightDoor.classList.add('active');
    image.classList.add('active');
    video.play();
    video.playbackRate = 5.0;

    video.addEventListener('ended', () => {
        window.location="présentation.html"
        document.getElementById(compiler).style.display = "block";
    })

})


// image.addEventListener('active', function (){
    
    
    // })
    
    
    
    // video.playbackRate = 6.0;
    
    // middle.style.display="none";
    // var video=document.querySelector(".videoBack");
