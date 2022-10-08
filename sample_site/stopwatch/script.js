'use strict';

{
  //要素を取得
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  function countUp() {
//現在の時刻からstartボタンを押したときの時刻であるstarttimeをひくことによってstartTimeからのミリ秒が分かる
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`;

    timeoutId = setTimeout(() => {//setTimeoutの値をtimeoutIdで取得し↓
      countUp();
    }, 10);
  }
  function setButtonStateInitial() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }
  function setButtonStateRunning() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }
  function setButtonStateStopped() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  setButtonStateInitial();

  start.addEventListener('click', () => {
    if (start.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateRunning();
    startTime = Date.now();//現在時刻を取得
    countUp();
  });
  stop.addEventListener('click', () => {
    if (stop.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateStopped();
    clearTimeout(timeoutId);//timeoutIdをclearTimeoutメソッドでキャンセル
    elapsedTime += Date.now() - startTime;//現在時刻からクリックした時間を引いた値を算出/直近のデータしか保持しないので+=で足し上げることによって正確な値を出している
  });
  reset.addEventListener('click', () => {
    if (reset.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateInitial();
    timer.textContent = '00:00.000';
    elapsedTime = 0;
  });
}
