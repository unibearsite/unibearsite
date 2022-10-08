var jquery :JQuery = $("#id");

function hoge(jquery :JQuery)
$(function(){
    jQuery('.icon-hamburger').on('click', function() {
      if(jQuery('nav ul').css('display') === 'block') {
        jQuery('nav ul').slideUp('1500');
      } else {
        jQuery('nav ul').slideDown('1500');
      }
      });
  });
  
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
  