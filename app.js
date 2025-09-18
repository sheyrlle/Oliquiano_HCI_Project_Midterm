const video1 = document.getElementById('jobcsVideo1');
const video2 = document.getElementById('jobcsVideo2');
const video3 = document.getElementById('jobcsVideo3');
const video4 = document.getElementById('jobcsVideo4');
const video5 = document.getElementById('jobcsVideo5');
const video6 = document.getElementById('jobcsVideo6');

// sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3, video4, video5, video6];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})