var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

$(function() {
  $('.unibearsite').click(function() {
    setTimeout(function() {
      window.location.href = 'http://unibearsite.com';
    }, 700);
  });
  $('.unibearportfolio').click(function() {
    setTimeout(function() {
      window.location.href = 'http://unibearportfolio.work';
    }, 700);
  });
  $('.typing-game').click(function() {
    setTimeout(function() {
      window.location.href = 'http://unibearsite.com/sample_site/top.html';
    }, 700);
  });
  $('.pinball-game').click(function() {
    setTimeout(function() {
      window.location.href = 'http://unibearsite.com/sample_site/top.html';
    }, 700);
  });
});
