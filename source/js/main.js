var fis = {};

fis.functions = (function() {

  'use strict';

  function init() {
    showContent();
    hideContent();
    animation();
  }

  function animation() {
    $('.is-normal .area').on({
      mouseover: function() {
        $(this).removeClass('is-animation');
        var elem = $(this)
        var area = $(this).index() + 1;
        var nth  = [1, 2, 3, 4, 5, 6];

        nth.splice(nth.indexOf(area), 1);

        nth.sort(function(a) {
            return Math.random() - 0.5;
        });

        nth.filter(function(i) {
          setTimeout(function() {
            $('.is-normal .area:nth-child('+i+')').addClass('is-animation');
            elem.removeClass('is-animation');
          }, 100 * i);
        }.bind(this));
      },
      mouseout: function() {
        $('.is-normal .area').removeClass('is-animation');
      }
    });
  }

  function showContent() {
    $('.btn-area').on('click', function(e){
      e.preventDefault();
      $('body').removeClass('is-normal');
      $(this).closest('.area').addClass('is-show');
    });
  }

  function hideContent() {
    $('.btn-close').on('click', function(){

      setTimeout(function(){
        $('body').addClass('is-normal');
      },300);
      $(this).closest('.area').removeClass('is-show');
    });
  }

  return {
    init: init
  };

}());



window.onload = function (){
  fis.functions.init();
};
