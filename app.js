
setInterval(getTime,1000);

function getTime(){
    
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    
    let time = ((hour<10)?"0"+hour:hour)+":"+((minutes<10)?"0"+minutes:minutes)+":"
    +((seconds<10)?"0"+seconds:seconds)+((hour<12)?" AM":" PM");
   
    document.getElementById("outputarea").innerHTML = time;
}