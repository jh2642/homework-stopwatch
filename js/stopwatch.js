
//STOPWATCH//
    var tenthOfASecond = 0;
    var seconds = 0;
    var minutes = 0;
    var interval = 0;
    var setDelay = 0
document.querySelector('.start').addEventListener('click', function(){
  function updateTime() {
    var time = document.getElementById('time');
    // increase counter every tenth of a second
    tenthOfASecond++
    if (tenthOfASecond % 10 === 0) {
      seconds++
      change()
      if (tenthOfASecond > 9) {
        tenthOfASecond = 0
      }
    }
        if (seconds > 59) {
              minutes++
          if (seconds > 59) {
                seconds = 0
              }
            }
    time.innerHTML= minutes + ":" + seconds + ":" + tenthOfASecond

  }
  interval = setInterval(updateTime,100)
  console.log("you clicked the start button")
})


document.querySelector('.stop').addEventListener('click', function(){
  clearInterval(interval);
  stopDelayReset()

  console.log("you clicked the stop button")
})

document.querySelector('.clear').addEventListener('click', function(){
  resetDisplay();
    console.log("you clicked the clear button")
})
function stopDelayReset() {
    setTimeout(resetDisplay, 15000);
}

function resetDisplay() {
  clearInterval(interval);
  minutes = 00;
  seconds = 00;
  tenthOfASecond = 00;
  time.innerHTML= minutes + ":" + seconds + ":" + tenthOfASecond
}

function change() {
    var x = Math.floor(Math.random() * 256); // range is 0-255
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var thergb = "rgb(" + x + "," + y + "," + z + ")";
    console.log(thergb);
    document.body.style.backgroundColor=thergb;
    document.body.style.color=thergb;
}
