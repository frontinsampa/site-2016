var fis = {};

fis.functions = (function() {

  'use strict';

  function init() {
    showContent();
    hideContent();
    animation();
  }

  function animation() {
    $('.area').on({
      mouseover: function() {
        $('.area').removeClass('is-animation');

        var nth  = [1, 2, 3, 4, 5, 6];

        nth.sort(function(a) {
            return Math.random() - 0.5;
        });

        nth.filter(function(i) {
          if($(this).index()+1 == i) {
            return;
          }

          setTimeout(function() {
            $('.area:nth-child('+i+')').addClass('is-animation');
          }, 100 * i);
        }.bind(this));
      },
      mouseout: function() {
        $('.area').removeClass('is-animation');
      }
    });
  }

  function showContent() {
    $('.btn-area').on('click', function(e){
      e.preventDefault();
      // animationClass(this);
      $('body').addClass('is-active');
      $(this).closest('.area').addClass('is-show');
    });
  }

  function hideContent() {
    $('.btn-close').on('click', function(){
      $('body').removeClass('is-active');
      // animationClass(this);
      $(this).closest('.area').removeClass('is-show');
    });
  }

  // function animationClass(el){
  //   $(el).closest('.area').addClass('is-animation');
  //   setTimeout(function(){
  //     $(el).closest('.area').removeClass('is-animation');
  //   },300);
  // }

  return {
    init: init
  };

}());

window.onload = function (){
  fis.functions.init();
};
