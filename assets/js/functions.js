// @codekit-prepend "/vendor/hammer-2.0.8.js";

$( document ).ready(function() {

  // Header hide on scroll state
  var lastScrollPosition = 0;
  var scrollThreshold = 50;

  // Also handle regular scroll events for sections with overflow
  $('.l-section').on('scroll', function(){
    var currentScrollPosition = $(this).scrollTop();
    
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 70) {
      // Scrolling down
      $('.header').addClass('hide-on-scroll');
    } else {
      // Scrolling up
      $('.header').removeClass('hide-on-scroll');
    }
    
    lastScrollPosition = currentScrollPosition;
  });

  // DOMMouseScroll included for firefox support
  var canScroll = true,
      scrollController = null;
  $(this).on('mousewheel DOMMouseScroll', function(e){

    if (!($('.outer-nav').hasClass('is-vis'))) {

      e.preventDefault();

      var delta = (e.originalEvent.wheelDelta) ? -e.originalEvent.wheelDelta : e.originalEvent.detail * 20;

      // Hide header on scroll down, show on scroll up
      if (delta > scrollThreshold) {
        $('.header').addClass('hide-on-scroll');
      } else if (delta < -scrollThreshold) {
        $('.header').removeClass('hide-on-scroll');
      }

      if (delta > 50 && canScroll) {
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(function(){
          canScroll = true;
        }, 800);
        updateHelper(1);
      }
      else if (delta < -50 && canScroll) {
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(function(){
          canScroll = true;
        }, 800);
        updateHelper(-1);
      }

    }

  });

  $('.side-nav li, .outer-nav li').click(function(){

    if (!($(this).hasClass('is-active'))) {

      var $this = $(this),
          curActive = $this.parent().find('.is-active'),
          curPos = $this.parent().children().index(curActive),
          nextPos = $this.parent().children().index($this),
          lastItem = $(this).parent().children().length - 1;

      updateNavs(nextPos);
      updateContent(curPos, nextPos, lastItem);

    }

  });

  $('.cta').click(function(){

    var curActive = $('.side-nav').find('.is-active'),
        curPos = $('.side-nav').children().index(curActive),
        lastItem = $('.side-nav').children().length - 1,
        nextPos = lastItem;

    updateNavs(lastItem);
    updateContent(curPos, nextPos, lastItem);

  });

  // swipe support for touch devices
  var targetElement = document.getElementById('viewport'),
      mc = new Hammer(targetElement);
  mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
  mc.on('swipeup swipedown', function(e) {

    updateHelper(e);

  });

  $(document).keyup(function(e){

    if (!($('.outer-nav').hasClass('is-vis'))) {
      e.preventDefault();
      updateHelper(e);
    }

  });

  // determine scroll, swipe, and arrow key direction
  function updateHelper(param) {

    var curActive = $('.side-nav').find('.is-active'),
        curPos = $('.side-nav').children().index(curActive),
        lastItem = $('.side-nav').children().length - 1,
        nextPos = 0;

    if (param.type === "swipeup" || param.keyCode === 40 || param > 0) {
      if (curPos !== lastItem) {
        nextPos = curPos + 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
      else {
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    }
    else if (param.type === "swipedown" || param.keyCode === 38 || param < 0){
      if (curPos !== 0){
        nextPos = curPos - 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
      else {
        nextPos = lastItem;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    }

  }

  // sync side and outer navigations
  function updateNavs(nextPos) {

    $('.side-nav, .outer-nav').children().removeClass('is-active');
    $('.side-nav').children().eq(nextPos).addClass('is-active');
    $('.outer-nav').children().eq(nextPos).addClass('is-active');

  }

  // update main content area
  function updateContent(curPos, nextPos, lastItem) {

    $('.main-content').children().removeClass('section--is-active');
    $('.main-content').children().eq(nextPos).addClass('section--is-active');
    $('.main-content .section').children().removeClass('section--next section--prev');

    if (curPos === lastItem && nextPos === 0 || curPos === 0 && nextPos === lastItem) {
      $('.main-content .section').children().removeClass('section--next section--prev');
    }
    else if (curPos < nextPos) {
      $('.main-content').children().eq(curPos).children().addClass('section--next');
    }
    else {
      $('.main-content').children().eq(curPos).children().addClass('section--prev');
    }

    if (nextPos !== 0 && nextPos !== lastItem) {
      $('.header--cta').addClass('is-active');
    }
    else {
      $('.header--cta').removeClass('is-active');
    }

  }

  function outerNav() {

    $('.header--nav-toggle').click(function(){

      $('.perspective').addClass('perspective--modalview');
      setTimeout(function(){
        $('.perspective').addClass('effect-rotate-left--animate');
      }, 25);
      $('.outer-nav, .outer-nav li, .outer-nav--return').addClass('is-vis');

    });

    $('.outer-nav--return, .outer-nav li').click(function(){

      $('.perspective').removeClass('effect-rotate-left--animate');
      setTimeout(function(){
        $('.perspective').removeClass('perspective--modalview');
      }, 400);
      $('.outer-nav, .outer-nav li, .outer-nav--return').removeClass('is-vis');

    });

  }

  function workSlider() {
    $('.slider--prev, .slider--next').click(function() {
      var $this = $(this),
          $slider = $('.slider'),
          $items = $slider.find('.slider--item'),
          $left = $slider.find('.slider--item-left'),
          $center = $slider.find('.slider--item-center'),
          $right = $slider.find('.slider--item-right'),
          totalItems = $items.length,
          $firstItem = $items.first(),
          $lastItem = $items.last(),
          curLeftIndex = $items.index($left),
          curCenterIndex = $items.index($center),
          curRightIndex = $items.index($right);
  
      $slider.animate({ opacity: 0 }, 400);
  
      setTimeout(function() {
        if ($this.hasClass('slider--next')) {
          if (curRightIndex < totalItems - 1) {
            $left.removeClass('slider--item-left').next().addClass('slider--item-left');
            $center.removeClass('slider--item-center').next().addClass('slider--item-center');
            $right.removeClass('slider--item-right').next().addClass('slider--item-right');
          } else {
            // Wrap around
            $left.removeClass('slider--item-left').end().find('.slider--item').first().addClass('slider--item-left');
            $center.removeClass('slider--item-center').end().find('.slider--item').eq(1).addClass('slider--item-center');
            $right.removeClass('slider--item-right').end().find('.slider--item').eq(2).addClass('slider--item-right');
          }
        } else {
          if (curLeftIndex > 0) {
            $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
            $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
            $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
          } else {
            // Wrap around
            $left.removeClass('slider--item-left').end().find('.slider--item').last().addClass('slider--item-left');
            $center.removeClass('slider--item-center').end().find('.slider--item').eq(totalItems - 2).addClass('slider--item-center');
            $right.removeClass('slider--item-right').end().find('.slider--item').eq(totalItems - 1).addClass('slider--item-right');
          }
        }
  
        // Update hidden items visibility
        $items.each(function(index) {
          var $item = $(this);
          if ($item.hasClass('slider--item-left') || 
              $item.hasClass('slider--item-center') || 
              $item.hasClass('slider--item-right')) {
            $item.removeClass('slider--item-hidden');
          } else {
            $item.addClass('slider--item-hidden');
          }
        });
  
        $slider.animate({ opacity: 1 }, 400);
  
      }, 400);
    });
  }
  
  
  
  


  function transitionLabels() {

    $('.work-request--information input').focusout(function(){

      var textVal = $(this).val();

      if (textVal === "") {
        $(this).removeClass('has-value');
      }
      else {
        $(this).addClass('has-value');
      }

      // correct mobile device window position
      window.scrollTo(0, 0);

    });

  }


 
  

  outerNav();
  workSlider();
  transitionLabels();
 

});
// Params
let mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider',
    interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
      loop: true,
      speed:1000,
      autoplay:{
        delay:3000
      },
      loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function(){
          this.autoplay.stop();
        },
        imagesReady: function(){
          this.el.classList.remove('loading');
          this.autoplay.start();
        },
        slideChangeTransitionEnd: function(){
          let swiper = this,
              captions = swiper.el.querySelectorAll('.caption');
          for (let i = 0; i < captions.length; ++i) {
            captions[i].classList.remove('show');
          }
          swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function(){
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;
           
            swiper.slides[i].querySelector(".slide-bgimg").style.transform =
              "translateX(" + innerTranslate + "px)";
          }
        },
        touchStart: function() {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-bgimg").style.transition =
              speed + "ms";
          }
        }
      }
    };
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
let navSliderOptions = {
      loop: true,
      loopAdditionalSlides: 10,
      speed:1000,
      spaceBetween: 5,
      slidesPerView: 5,
      centeredSlides : true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      direction: 'vertical',
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        },
        click: function(){
          mainSlider.autoplay.stop();
        }
      }
    };
let navSlider = new Swiper(navSliderSelector, navSliderOptions);

// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;
function goBack() {
  document.getElementById('workLockup').style.display = 'block';
  document.getElementById('containerSlide1').style.display = 'none';
  document.getElementById('containerSlide2').style.display = 'none';
  document.getElementById('containerSlide3').style.display = 'none';
  document.getElementById('containerSlide4').style.display = 'none';
}

