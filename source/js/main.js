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
    $(document).on('click', 'a:not([target="_blank"])', function(event) {
			event.preventDefault();

      var title     = 'FrontInSampa 2016';

			var pageUrl   = $(this).attr('href');
			var pageTitle = title + ' | ' + $(this).attr('title');

			history.pushState({
  				url:   pageUrl,
  				title: pageTitle
  			},
        pageTitle,
        pageUrl
      );

			document.title = pageTitle;
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
