var fis = {};

fis.functions = (function() {

  'use strict';

  function init() {
    showContent();
    hideContent();
  }

  function showContent() {
    $('.btn-area').on('click', function(e){
      e.preventDefault();
      animationClass(this);
      $('body').addClass('is-active')
      $(this).closest('.area').addClass('is-show')
    });
  }

  function hideContent() {
    $('.btn-close').on('click', function(){
      $('body').removeClass('is-active')
      animationClass(this);
      $(this).closest('.area').removeClass('is-show');
    });
  }

  function animationClass(el){
    $(el).closest('.area').addClass('is-animation')
    setTimeout(function(){
      $(el).closest('.area').removeClass('is-animation');
    },300)
  }

  return {
    init: init
  };

}());

window.onload = function (){
  fis.functions.init();
};
