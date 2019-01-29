window.onload = function() {
  let seconds = 0;
  let milliseconds = 0;
  let running = 0;
  let startBtn = document.querySelector("#start");
  let resetBtn = document.querySelector("#reset");
  let secondTens = document.querySelector("#secondTens");
  let secondOnes = document.querySelector("#secondOnes");
  let msHundreds = document.querySelector("#msHundreds");
  let msTens = document.querySelector("#msTens");
  let colon = document.querySelector("#colon");

  const startPause = () => {
    if (running === 0) {
      running = 1;
      increment();
      startBtn.textContent = "Pause";
    } else {
      running = 0;
      startBtn.textContent = "Resume";
    }
  };

  const reset = () => {
    running = 0;
    seconds = 0;
    milliseconds = 0;
    secondTens.textContent = 0;
    secondTens.style.color = "black";
    secondOnes.textContent = 0;
    secondOnes.style.color = "black";
    msHundreds.textContent = 0;
    msHundreds.style.color = "black";
    msTens.textContent = 0;
    msTens.style.color = "black";
    colon.style.color = "black";
    startBtn.textContent = "Start";
    startBtn.disabled = false;
    setTimeout(() => {
      msTens.textContent = 0;
    }, 100);
  };

  const increment = () => {
    if (running === 1) {
      setTimeout(() => {
        if (seconds === 0) {
          secondTens.textContent = 0;
          secondOnes.textContent = 0;
        }
        if (milliseconds <= 990) {
          milliseconds += 10;
          let milliChange = milliseconds.toString();

          msHundreds.textContent = milliChange[0];
          msTens.textContent = milliChange[1];
        } else {
          milliseconds = 0;
          seconds++;
          let secChange = seconds.toString();

          if (seconds < 10) {
            secondTens.textContent = "0";
            secondOnes.textContent = secChange[0];
          } else {
            secondTens.textContent = secChange[0];
            secondTens.style.color = "red";
            secondOnes.textContent = secChange[1];
            secondOnes.style.color = "red";

            msHundreds.textContent = 0;
            msHundreds.style.color = "red";
            msTens.textContent = 0;
            msTens.style.color = "red";
            colon.style.color = "red";
            startBtn.disabled = true;
            startBtn.textContent = "Done!";
            return;
          }
        }

        increment();
      }, 10);
    }
  };

  startBtn.addEventListener("click", startPause);
  resetBtn.addEventListener("click", reset);
};
