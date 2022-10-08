<!DOCTYPE html>
<html lang="ja" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="プログラミング・ボイストレーニングの上達ノウハウを公開">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>トップページ | UNI-BEAR SITE</title>
    <link rel="stylesheet" href="css/reset_original.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="icon" href="favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/421841d6a1.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <?php include("inc/header.php"); ?>
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
  </body>
</html>
