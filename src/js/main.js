$(document).ready(function(){

    $('.home-slider').owlCarousel({
      items: 1,
      nav: true,
      dots: true,
    });

    $('.home-reviews__slider').owlCarousel({
      items: 2,
      nav: false,
      dots: true,
      margin: 30,

        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 480 up
            770 : {
                items: 2,
            },
        }
    });

    $('.home-certificate__slider').owlCarousel({
      items: 4,
      nav: false,
      dots: true,
      margin: 30,


        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 2,
            },
            // breakpoint from 480 up
            600 : {
                items: 4,
            },
        }
    });

    $('.home-partners__slider').owlCarousel({
      items: 6,
      nav: false,
      dots: false,

        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 2,
            },
            // breakpoint from 480 up
            649 : {
                items: 3,
            },
            768 : {
                items: 4,
            },
            991 : {
                items: 5,
            },
            1200 : {
                items: 6,
            }
        }
    });

    $('.header__menu-btn').click(function () {
         $('.header__menu').toggleClass('open');
    });


  $(document).on('click', '.popup__close', function (e) {
    $('.popup ').removeClass('open');
    $('body').removeClass('overHid');
  });

  $(document).on('click', '.popup', function (e) {
    if(e.target.classList[0] == "popup") {
      $('.popup ').removeClass('open');
      $('body').removeClass('overHid');
    }
  });

  $(document).on('click', '#callmeJs', function (e) {
    e.preventDefault();
    console.log(123);
    $('.callme-popup').addClass('open');
    $('body').addClass('overHid');
  });



  $('.phonemask').inputmask({"mask": "+38 (999) 999 9999"}); //specifying options

});


//script fro webp img and background
var hasWebP = (function () {
  // some small (2x1 px) test images for each feature
  var images = {
    basic: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
    lossless: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="
  };

  return function (feature) {
    var deferred = $.Deferred();

    $("<img>").on("load", function () {
      // the images should have these dimensions
      if (this.width === 2 && this.height === 1) {
        deferred.resolve();
      } else {
        deferred.reject();
      }
    }).on("error", function () {
      deferred.reject();
    }).attr("src", images[feature || "basic"]);

    return deferred.promise();
  }
})();
