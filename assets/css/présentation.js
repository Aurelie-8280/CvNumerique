const enter=document.querySelector('.enter')
const image=document.querySelector('.image')
const video=document.querySelector('.video')

enter.addEventListener('click', function(){
    image.style.display="none";
    video.play();
    video.playbackRate = 3.0;
    

    video.addEventListener('ended', () => {
        window.open("menu.html")
    document.getElementById(compiler).style.display="block";
    })
})



