  const  daysel=document.getElementById("days");
  const  hoursel=document.getElementById("hours");
  const  minutesel=document.getElementById("minutes");
  const secondsel=document.getElementById("seconds");
 const newYear="1 Jan 2022"; //take user input 

function countdown()
{
    const newYearsDate=new Date(newYear);
    const currentDate=new Date();

    const Totalseconds=(newYearsDate-currentDate)/1000;
    const days=Math.floor(Totalseconds/3600/24);
    const hours=Math.floor(Totalseconds/3600)%24;
    const minutes=Math.floor(Totalseconds/60)%60;
    const seconds=Math.floor(Totalseconds)%60;

      daysel.innerHTML=formatTime(days);
    hoursel.innerHTML=formatTime(hours);
    minutesel.innerHTML=formatTime(minutes);
   secondsel.innerHTML=formatTime(seconds);
}

function formatTime(time)
{
    return time<10 ?`0${time}`:time;
}
 countdown(); //initial call
setInterval(countdown,1000);
