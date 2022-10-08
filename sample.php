<!DOCTYPE html>
<html lang="ja" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="プログラミング・ボイストレーニングの上達ノウハウを公開">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>トップページ | UNI-BEAR SITE</title>
    <link rel="stylesheet" href="js/slick/slick.css">
    <link rel="stylesheet" href="js/slick/slick-theme.css">
    <link rel="stylesheet" href="css/reset_original.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="icon" href="favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/421841d6a1.js" crossorigin="anonymous"></script>
  </head>
  <body>
  
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5H4LSGW" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <?php include("inc/header.php"); ?>

      <main>
      <section class="note">
      <blockquote>
      サクっとインストールするPython<br>
      <br>
      こんにちは。雑食系エンジニアの高橋です。<br>
      今回はプログラミング初学者にオススメの汎用性が高い言語「Python」のインストールを行います。<br>
      学習用途や目的によって推奨するPythonのセットアップ環境などは異なるのですが、<br>
      今回は面倒な作業抜きで「すぐにプログラムを実行できる」環境までもっていくことを目標とします。<br>
      インストールすら面倒だという人は以下のWEB版Pythonテキストエディタに飛ぶと良いでしょう。<br>
      
      それでは早速はじめていきましょう。<br>
      まずサーチエンジンに「Download Python」と入力すると以下のページがトップに表示されます。<br>
      https://www.python.org/downloads/<br>
      <br>
      「Download Python バージョン名」をクリックし、Pythonインストーラーをダウンロードしてください。<br>
      <br>
      ダウンロードしたPythonインストーラーを起動すると、インストール作業が開始します。<br>
      途中画面左下にPATHを通すというチェックボックスがあるので、<br>
      必ずチェックが入っているかどうか確認してからインストール作業を完了させてください。<br>
      チェックが入っていない場合命令の内容が長くなってしまうので、<br>
      命令の省略形を使えるよう自分で環境変数にPATHを通す必要がでてきます。<br>
      初学者にとって挫折ポイントのひとつでもあるのでなるべく避けたほうが無難でしょう。<br>
      <br>
      PATH(パス)とは？ <br>
      PATH(パス)とは簡単にいうと、「ストレージ上にあるデータの位置(つまり住所)を示すもの」と解釈するとわかりやすいかと思います。<br>
      以下のPATHはMySQLというソフトの場所を示しています。<br>
      例→C:\Program Files\MySQL\MySQL Workbench 8.0\MySQL.exe<br>
      これは日本語で表すと、<br>
      「C」ストレージの中の「Program Files」フォルダの中の「MySQL」フォルダの中の「Workbench8.0」フォルダの中の「MySQL.exe」ソフトという階層構造を表しています。<br>
      <br>
      PATHの概略を前提にデータの住所を表すPATHとプログラミングがどう繋がるのか解説していきます。<br>
      プログラムを実行する際にはコンパイルという翻訳機能を実行することによって、<br>
      人間にとって分かりやすい記述のプログラミング言語をPCが理解できる機械語に変換し処理を行ってくれます。<br>
      プログラムの変換と処理を実行するにはテキストエディタを用います。<br>
      テキストエディタはなんでも良いのですが、ここでは最初から入っているコマンドプロンプトを利用した例を提示したいと思います。<br>
      コマンドプロンプトでプログラムを実行するときは以下のような命令をPCに送ります。<br>
      >>> PythonソフトのPATH 実行したいPythonプログラムのPATH<br>
      日本語的に表現すると、「Pythonを翻訳」「対象のファイル」<br>
      </blockquote>
      </section>
      </main>
    <?php include("inc/footer.php"); ?>
    <div class="shutter"></div>

    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="js/javascript.js"></script>

    <script>
    jQuery('.icon-hamburger').on('click', function() {
      if(jQuery('nav ul').css('display') === 'block') {
        jQuery('nav ul').slideUp('1500');
      } else {
        jQuery('nav ul').slideDown('1500');
      }
      });
    </script>
    <script src="js/slick/slick.min.js"></script>
    <script>
    $(function(){
      $('.slick-box').slick({
        centerMode: true, //センターモード
        centerPadding: '60px', //前後のパディング
        autoplay: true, //オートプレイ
        autoplaySpeed: 2000, //オートプレイの切り替わり時間
        slidesToShow: 3,
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: false, // 前後の矢印非表示
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 1920,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3,
          }
        }]
      });
    });
    </script>
  </body>
</html>
