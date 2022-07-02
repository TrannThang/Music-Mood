const song = document.getElementById("song");
let indexSong=0;
const playBtn = document.querySelector(".player-inner") ;
const nextBtn = document.querySelector(".play-forward");
const prevBtn = document.querySelector(".play-back");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");
const musicName = document.querySelector(".music-name");
const musicImage = document.querySelector(".music-thumb img");
const playRepeat = document.querySelector(".play-repeat")
const musicThumbnail = document.querySelector(".music-thumb");
let isPlaying = true;
let isRepeat = false;
let repeatCount = 0;
playRepeat.addEventListener("click",function(){
         if(isRepeat){
             repeatCount = 1;
              isRepeat = false;
         playRepeat.removeAttribute("style");
        }
         else {
             repeatCount = 0;
             isRepeat = true;
             playRepeat.style.color = "#ffb86c";
            }
});




const musics = [
        {
            id:1,
            title:"3107-2",
            file:"31072.mp3",
            image:"https://images.unsplash.com/photo-1624749076747-79f933b8b671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        
        {
            id:2,
            title:"Cao ốc 20",
            file:"caooc20.mp3",
            image:"https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        },

        {
            id:3,
            title:"Sai người sai thời điểm",
            file:"Sai Người Sai Thời Điểm  Thanh Hưng  Lyric Video.mp3",
            image:"https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id:4,
            title:"Bước qua nhau",
            file:"BƯỚC QUA NHAU  Vũ Official MV.mp3",
            image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        },
        {
            id:5,
            title:"Chẳng thể tìm được em",
            file:"Chẳng Thể Tìm Được Em  PhucXp ft Freak D  Official Audio.mp3",
            image:"https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80"
        },
        {
            id:6,
            title:"Bao tiền một mớ bình yên",
            file:"tienbao.mp3",
            image:"https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id:7,
            title:"Kẻ theo đuổi ánh sáng ",
            file:"Kẻ Theo Đuổi Ánh Sáng Lofi Ver  Huy Vạc x Tiến Nguyễn x Freak D.mp3",
            image:"https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id:8,
            title:"Chỉ vì quá yêu em ",
            file:"Chỉ Vì Quá Yêu Em  Huy Vạc x Tiến Nguyễn.mp3",
            image:"https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id:9,
            title:"Răng khôn",
            file:"rangkhon.mp3",
            image:"https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id:10,
            title:"Anh đánh rơi người yêu này",
            file:"danhroiny.mp3",
            image:"https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },

        


];

let timer;
song.setAttribute("src",`./music/${musics[indexSong.file]}`);


nextBtn.addEventListener("click",function(){
     changeSong(1);

})
prevBtn.addEventListener("click",function(){
    changeSong(-1);

});
song.addEventListener("ended",handleEndedSong);

function handleEndedSong(){
    repeatCount++;
    if(isRepeat && repeatCount==1){
        isPlaying = true;
        playPause()
    }
    else
    changeSong(1);
}
function changeSong(dir){
    if(dir===1){
        indexSong++;
        if(indexSong>=musics.length){
            indexSong = 0;
        }
        isPlaying=true;
    }
    else if(dir===-1){
           indexSong--;
           if(indexSong<0){
               indexSong = musics.length - 1;
           }
           isPlaying = true;
    }
    init(indexSong)
    
    
    playPause();

}
playBtn.addEventListener("click",playPause);
function playPause(){
    if(isPlaying){
        musicThumbnail.classList.add("is-playing");
        song.play();
        playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`;
        isPlaying = false;
        timer = setInterval(displayTimer,500);
        
    }
    else {
        musicThumbnail.classList.remove("is-playing");
        song.pause();
        playBtn.innerHTML = `<ion-icon name="play" "></ion-icon>`;
        isPlaying = true;
        clearInterval(timer);
    }

}

function displayTimer(){
    
    const {duration,currentTime} = song;
    rangeBar.max = duration;
    rangeBar.value = currentTime;
    remainingTime.textContent = formatTimer(currentTime)
    if(!duration){
        durationTime.textContent = "00:00";
    }
    else {
        durationTime.textContent = formatTimer(duration);
    }

}
function formatTimer(number){
    const minutes = Math.floor(number/60);
    const seconds = Math.floor(number-minutes*60);
    return `${minutes<10?'0'+minutes:minutes}:${seconds<10 ? '0'+seconds:seconds}`;
}
rangeBar.addEventListener("change",handleChangeBar);
function handleChangeBar(){
     song.currentTime=rangeBar.value;
}

function init(indexSong){
  
    song.setAttribute("src",`./music/${musics[indexSong].file}`);
    musicImage.setAttribute("src",musics[indexSong].image);
    musicName.textContent = musics[indexSong].title;

}
displayTimer();
init(indexSong);





