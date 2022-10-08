'use strict';

{
  const words = [//出題単語の配列
    'slow',
    'fast',
    'down',
    'up',
    'great',
    'work',
    'under',
    'side',
    'read',
    'stopwatch',
    'clear',
    'twitter',
    'youtube',
    'cookie',
    'material',
    'management',
    'development',
  ];
  let word;//words[インデックス番号ランダムから表示（配列分の長さで）];→宣言
  let loc;//タイピング開始文字のインデックス数→宣言
  let score;//スコアの初期値→宣言
  let miss;//ミスの初期値→宣言
  // const timeLimit = 3 * 1000 ;//3ミリ秒に1000をかけて３秒
  const timeLimit = 3 * 10000 ;//3ミリ秒に1000をかけて30秒
  // const timeLimit = 3 * 100000 ;//3ミリ秒に1000をかけて300秒
  let startTime;
  let isPlaying = false;//ゲームが始まってない状態
  let count;//

  const target = document.getElementById('target');//タイプワードの表示
  const scoreLabel = document.getElementById('score');//スコアの表示
  const missLabel = document.getElementById('miss');//ミスの表示
  const timerLabel = document.getElementById('timer');//残り時間の表示
  const countLabel = document.getElementById('count');

  function updateTarget() {//アンダースコアで現在の入力箇所をターゲット
    let placeholder = '';
    for (let i = 0; i < loc; i++) {
      placeholder += '_';
    }
    target.textContent = placeholder + word.substring(loc);//アンダースコアと入力位置を結合し、ID:targetにtextContentで表示させている。
  }

  function updateTimer() {
    if (count < 0) {//もし0未満になったらキャンセルしたいのでtimeoutId
      isPlaying = false;//カウントダウンが終了したらゲームも終了//0より小ければsetTimeoutの主導権（timeoutId）がこちらに移る
      // timerLabel.textContent = 0.00;//カウントダウンが終了したら0.00と表示
      //それだけではぴったりとカウントが停止しないので（カウントダウンが0.00になる前にアラートが表示されてしまう
      // setTimeout(() => {//100ミリ秒遅らせてアラートを表示させる。
        // alert('GAME OVER');//カウントダウンが終了したらalertメソッドでダイアログを表示
      // }, 100);
      showResult();
      target.textContent = 'click to replay';//終了したら「click to replay」を表示
    }
  }
  function showResult() {
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;//パーセントで表示したいのでx100
    //割る数が0だと計算できないので、scoreとmissを足して0であれば条件演算子true=０を返し、falseであれば計算する
    alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accurasy!`);//アラートメソッドで結果を表示
  }

  document.addEventListener('click', () => {//画面をクリックすると「click to start」からタイピングゲーム画面へ遷移
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;//クリックしたらゲームが開始

    loc = 0;//replayしたとき用に０
    score = 0;//replayしたとき用にスコア０
    miss = 0;//replayしたとき用にミススコア０
    count = 5;
    scoreLabel.textContent = score;//表示に０を代入しスコアをリセット
    missLabel.textContent = miss;//表示に０を代入しミスをリセット
    countLabel.textContent = count;
    word = words[Math.floor(Math.random() * words.length)];

    target.textContent = word;//click to start（target）がクリックされたらランダムの配列wordsを代入させtextContentプロパティで表示
  });

  window.addEventListener('keydown', e => {
    if (isPlaying !== true) {//ゲームがスタートしてなければkeydownしてもカウントは反応しない（誤作動処理）
      return;
    }
    console.log(e.key);
    if (e.key === word[loc]) {
      loc++;
      if (loc === word.length) {
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
        count--;
        countLabel.textContent = count;
      }
      updateTarget();
      score++;
      scoreLabel.textContent = score;
    } else {
      miss++;
      missLabel.textContent = miss;
    }
  });
}
