const play =document.querySelector('.btn1');
const reset =document.querySelector('.btn2');
const buton =document.querySelector('.btn');
const saat =document.querySelector('p');
const audio = document.querySelector("audio");

let min=0;
let sec=0;
let mSec =0;
let run = false;
let timer;

const watchTimer = ()=>{
  audio.play();
  mSec++
if (mSec == 100) {
  sec++;
  mSec = 0;
}
if (sec == 60) {
  min++;
  sec = 0;
}
  
   min=String(min).length < 2 ? '0' + min : min;
   sec=String(sec).length < 2 ? '0' + sec : sec;
   mSec=String(mSec).length < 2 ? '0' + mSec : mSec;
   saat.innerHTML=`${min}:${sec}:${mSec}`;
  
   
   }
    

play.addEventListener("click", () => {
 renk()
   run=!run;
   if(run){
      timer=setInterval(watchTimer,10);
      play.innerHTML=`<i class="fa-solid fa-circle-pause"></i>`
      audio.play();
   }
   else{
     clearInterval(timer);
     audio.play();
      play.innerHTML=`<i class="fa-solid fa-circle-play"></i>`;
   }  
  
});

reset.addEventListener('click',()=>{
  audio.play();
   min=0;
   sec=0;
   mSec=0;
   clearInterval(timer);
   
   audio.currentTime=0;
   
  
   saat.innerHTML=`0${min}:0${sec}:0${mSec}`;
   play.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
   run= false;
});








play.onmouseover = function () {
  play.style.color = "red";
  play.style.transform = "scale(1.4, 1.4)";

 
};
play.onmouseout = function () {
  play.style.color = "black";
  play.style.transform = "scale(1)";

};
reset.onmouseover = function () {
  reset.style.color = "red";
  reset.style.transform = "scale(1.4, 1.4)";

 
};
reset.onmouseout = function () {
  reset.style.color = "black";
  reset.style.transform = "scale(1)";

};

 const renk =()=>{
    setTimeout(() => {
      document.querySelector(".container").style.backgroundColor = "darkorange";
      setTimeout(() => {
        document.querySelector(".container").style.backgroundColor = "yellowgreen";
        setTimeout(() => {
          document.querySelector(".container").style.backgroundColor = "blue";
          setTimeout(() => {
            document.querySelector(".container").style.backgroundColor = "gray";
            setTimeout(() => {
              document.querySelector(".container").style.backgroundColor ="lime"
              setTimeout(() => {
                document.querySelector(".container").style.backgroundColor =
                  "aqua";
                  setTimeout(() => {
                    document.querySelector(".container").style.backgroundColor =
                      "blueviolet";
                      setTimeout(() => {
                        document.querySelector(
                          ".container"
                        ).style.backgroundColor = "brown";
                        setTimeout(() => {
              document.querySelector(".container").style.backgroundColor ="cadetblue"
              setTimeout(() => {
                document.querySelector(".container").style.backgroundColor =
                  "coral";
                  setTimeout(() => {
                    document.querySelector(".container").style.backgroundColor =
                      "cornsilk";
                  }, 200);
              }, 200);
            }, 200);
                      }, 200);
                  }, 200);
              }, 200);
            }, 200);
          }, 5000);
        }, 5500);
      }, 16000);
    }, 6000);
  }