<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="ユニグマの日記です。">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>日記 | UNI-BEAR SITE</title>
    <link rel="stylesheet" href="../css/reset_original.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="icon" href="favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/421841d6a1.js" crossorigin="anonymous"></script>
  </head>
  <body>
  
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5H4LSGW" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
    <?php include("../inc/header.php"); ?>
    <?php include("../inc/footer.php"); ?>

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
