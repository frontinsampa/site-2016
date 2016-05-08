var fis = {};

fis.functions = (function() {

  'use strict';

  function init() {
    navigation();
    showContent();
    hideContent();
    animation();
  }

  function animation() {
    $('.is-normal .area').on({
      mouseover: function() {
        startAnimation($(this));
      },
      focusin: function() {
        startAnimation($(this));
      },
      focusout: function(){
        stopAnimation();
      },
      mouseout: function() {
        stopAnimation();
      }
    });
  }

  function startAnimation(element) {
      var area = element.index() + 1;
      var nth  = [1, 2, 3, 4, 5, 6];

      nth.splice(nth.indexOf(area), 1);

      nth.sort(function() {
        return Math.random() - 0.5;
      });

      for(var i in nth) {
        $('.is-normal .area:nth-child('+nth[i]+')').addClass('is-animation');
      }
  }

  function stopAnimation() {
    $('.is-normal .area').removeClass('is-animation');
  }

  function showContent() {
    $('.btn-area:not(.link-direct)').on('click', function() {
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
  /**
   * Single Page navigation.
   * Credits: http://zinoui.com/blog/single-page-apps-html5-pushstate
   */
  function navigation() {
    $(document).ready(function() {
      setTimeout(function() {
        $('[href="'+ window.location.pathname +'"]').trigger('click');
      });
    });

    $(document).on('click', 'a:not([target="_blank"])', function(event) {
			event.preventDefault();

      var tt     = 'FrontInSampa 2016';

			var page   = $(this).attr('href');
      var pagett = $(this).attr('title');

			tt = (pagett || tt) + ' :: ' + (pagett ? tt : 'Maior evento de front-end em São Paulo');

			history.pushState({
  				url:   page,
  				title: tt
  			},
        tt,
        page
      );

			document.title = tt;
		});

		$(window).on('popstate', function(event) {
			var state = event.originalEvent.state;

			if(state !== null) {
				document.title = state.title;
			} else {
				document.title = 'FrontInSampa 2016';
			}
		});
  }

  return {
    init: init
  };

}());



window.onload = function (){
  fis.functions.init();
};
