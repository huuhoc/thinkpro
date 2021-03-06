/*Variable --------------*/
window.thinkpro = window.thinkpro || {};
var current_width = $(window).width(),
    min_width = 992,
    responsive_mobile = current_width < min_width;

thinkpro.swapChildren = function(obj1, obj2) {
    var temp = obj2.children().detach();
    obj2.empty().append(obj1.children().detach());
    obj1.append(temp);
};
thinkpro.toggleMobileStyles = function() {
    if (responsive_mobile) {
        $("*[id^='_desktop_']").each(function(idx, el) {
            var target = $('#' + el.id.replace('_desktop_', '_mobile_'));
            if (target) {
                thinkpro.swapChildren($(el), target);
            }
        });
    } else {
        $("*[id^='_mobile_']").each(function(idx, el) {
            var target = $('#' + el.id.replace('_mobile_', '_desktop_'));
            if (target) {
                thinkpro.swapChildren($(el), target);
            }
        });
    }
};

thinkpro.SliderShow = function() {
  if ($('#slidershow').length) {
    $('#slidershow').owlCarousel({
      margin: 0,
      items: 1,
      nav: true,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      dots: false,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
    })
  }
}

thinkpro.Owlthumnail = function() {
  if ($('.listimage-type .owl-carousel').length) {
    $(".listimage-type .owl-carousel").owlCarousel({
      margin: 10,
      nav: true,
      items: 7,
      autoWidth:true
    })
  }
}

thinkpro.Owllisthumnail = function() {
  if ($('.list-thumnailproduct .owl-carousel').length) {
    $(".list-thumnailproduct .owl-carousel").owlCarousel({
      margin: 15,
      nav: false,
      dots: false,
      items: 5,
      responsive : {
        // breakpoint from 0 up
        0 : {
            margin: 10,
            nav: false,
            dots: false,
            items: 2
        },
        // breakpoint from 480 up
        480 : {
            margin: 10,
            nav: false,
            dots: false,
            items: 2
        },
        // breakpoint from 768 up
        768 : {
            margin: 15,
            nav: false,
            dots: false,
            items: 5,
            loop: true
        }
      }
    });
    $('.js-thumb', '.list-thumnailproduct').click(function(){
      var thumnsrc = $(this).data('srcset');
      $('.js-thumb', '.list-thumnailproduct').removeClass('selected');
      $(this).addClass('selected');
      $('.product-cover img').attr("src",thumnsrc);
    });
  }
}



thinkpro.Viewfull = function() {
  if($('.view-full').length) {
    $('.view-full a').click(function(e){
      e.preventDefault();
      if($('.content-danhgia').hasClass('has-toggle')) {
        $('.content-danhgia').removeClass('has-toggle');
        $('.view-full').addClass('view-less');
        $(this).html('Thu gọn bài đánh giá');
      } else {
        $('.content-danhgia').addClass('has-toggle');
        $('.view-full').removeClass('view-less');
        $(this).html('Xem đầy đủ bài đánh giá');
      }
    })
  }
}

thinkpro.CauhinhXemthem = function() {
  if($('.cauhinh-xemthem').length) {
    $('.cauhinh-xemthem').click(function(e){
      e.preventDefault();
      if($('.list-cauhinh').hasClass('has-toggle')) {
        $('.list-cauhinh').removeClass('has-toggle');
        $('.cauhinh-xemthem').addClass('view-less');
        $(this).html('Thu gọn');
      } else {
        $('.list-cauhinh').addClass('has-toggle');
        $('.cauhinh-xemthem').removeClass('view-less');
        $(this).html('Xem thêm<i class="fa fa-angle-double-right" aria-hidden="true"></i>');
      }
    })
  }
}

thinkpro.ratingForm = function() {
  /*$('.btn-vote', '.vote-link').click(function(){
    var close = $(this).data('close'),
        open = $(this).data('open');
    $('.rate-form').slideToggle('slow');
    if ($('.btn-vote', '.vote-link').hasClass('btn-close')) {
      $(this).html(open);
      $(this).removeClass('btn-close');
    } else {
      $(this).html(close);
      $(this).addClass('btn-close');
    }
  });*/
  $(document).ready(function(){
    var first =  $(".content-vote-top .btn.active").data('content');
    if (first == '.rate-form') {
      $('.binhluan-form').slideUp();
      $('.rate-form').slideDown();
    }
    else if (first == '.binhluan-form') {
      $('.rate-form').slideUp();
      $('.binhluan-form').slideDown();
    }
  })
  $(".content-vote-top .btn").click(function() {
    var contentclass = $(this).data('content');
    if($(this).hasClass('active')) {

    } else {
      $('.content-vote-top .btn').removeClass('active');
      $(this).addClass('active');
      $(contentclass).slideDown();
      if (contentclass == '.rate-form') {
        $('.binhluan-form').slideUp();
        $('.rate-form').slideDown();
      }
      else if (contentclass == '.binhluan-form') {
        $('.rate-form').slideUp();
        $('.binhluan-form').slideDown();
      }
    }
  });
  $('.lStar i').hover(function() {
      var n,i;
      n = $(this).attr("id");
      n = parseInt(n.replace("s", ""));
      $('.rsStar').toggle();
      switch ($(this).attr('id')) {
          case 's1':
              $('.rsStar').html('Không thích');
              break;
          case 's2':
              $('.rsStar').html('Tạm được');
              break;
          case 's3':
              $('.rsStar').html('Bình thường');
              break;
          case 's4':
              $('.rsStar').html('Rất tốt');
              break;
          case 's5':
              $('.rsStar').html('Thật tuyệt vời');
              break;
      }
      for (i = 1; i <= 5; i++) {
        if(i <= n) {
          $("#s" + i).addClass('star-on');
        } else {
          $("#s" + i).removeClass('star-on');
        }
      }
  });
  $('.lStar').click(function() {
    $('.content-form','.rate-form').slideToggle();
  });
}

thinkpro.toggleMenu = function() {
  $(".header-mobile .navbar-header").on("click", function() {
      $("#mobile_menu_dropdown").slideToggle();
      $(this).toggleClass("actmenu");
      $("body").toggleClass("overflow");
      $(".overlay").slideToggle()
  });
  $(".overlay").click(function() {
      $("#mobile_menu_dropdown").slideToggle();
      $(".actmenu").removeClass("actmenu");
      $("body").toggleClass("overflow");
      $(this).slideToggle()
  });
}

thinkpro.VoucherClick = function() {
  $('.using-codediscount').click(function(e){
    e.preventDefault();
    $('.form-voucher').slideToggle();
  });
}

thinkpro.sticky_banner = function() {
  var window_width = $( window ).width();
  $(".content-col-left, .content-col-right").trigger("sticky_kit:detach");
  $(".BannerStickyLeft_content, .BannerStickyRight_content").trigger("sticky_kit:detach");
  if (window_width > 980) {
    $(".content-col-left, .content-col-right").stick_in_parent({
      parent: ".main-content",
      offset_top: 30
    });
    $(".BannerStickyLeft_content , .BannerStickyRight_content").stick_in_parent({
      parent: "body",
      offset_top: 10
    });
  }
}

thinkpro.DropdownSlide = function() {
  $('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
  });

  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
  });
}


//Go to top
thinkpro.goToTop = function() {
    var timer;
    $(window).scroll(function() {
        if ( timer ) clearTimeout(timer)
        timer = setTimeout(function(){
            if ($(window).scrollTop() >= 200) {
                $('#backtop').fadeIn('fast');
            } else {
                $('#backtop').fadeOut('fast');
            }
        }, 300);
    });
    $("#backtop").click(function(){
        $("body,html").animate({scrollTop:0 },"normal");
        return!1
    });
}

//Cart page
thinkpro.Cartpage = function() {
  $(document).ready(function(){
    var first =  $("input[name='phuongthucgiaohang']:checked").val();
    if (first == 'diachigiaohang') {
      $('.diachicuahang').slideUp();
      $('.diachigiaohang').slideDown();
    }
    else if (first == 'taicuahang') {
      $('.diachigiaohang').slideUp();
      $('.diachicuahang').slideDown();
    }
  })
  $('input[type=radio][name=phuongthucgiaohang]').change(function() {
    var aa =  $("input[name='phuongthucgiaohang']:checked").val();
    if (aa == 'diachigiaohang') {
      $('.diachicuahang').slideUp();
      $('.diachigiaohang').slideDown();
    }
    else if (aa == 'taicuahang') {
      $('.diachigiaohang').slideUp();
      $('.diachicuahang').slideDown();
    }
  });
  $('input[type=radio][name=phuongthucgiaohang]').change(function() {
    var aa =  $("input[name='phuongthucgiaohang']:checked").val();
    if (aa == 'diachigiaohang') {
      $('.diachicuahang').slideUp();
      $('.diachigiaohang').slideDown();
    }
    else if (aa == 'taicuahang') {
      $('.diachigiaohang').slideUp();
      $('.diachicuahang').slideDown();
    }
  });

  $('.field-city').on('click','li', function(e){
    e.preventDefault();
    $('.field-city .dropdown-item').removeClass('active');
    $(this).addClass('active');
    var id_tinh = $(this).data("value");
    $('.input_tinh','.field-city').val(id_tinh);
    $('.field-city .dropdown-toggle').html($(this).html());
  });
  $('.field-dist').on('click','li', function(e){
    e.preventDefault();
    $('.field-dist .dropdown-item').removeClass('active');
    $(this).addClass('active');
    var id_huyen = $(this).data("value");
    $('.input_huyen','.field-dist').val(id_huyen);
    $('.field-dist .dropdown-toggle').html($(this).html());
  });

}

//Myaccount update
thinkpro.Myaccountpage = function() {
  $('.edit').click(function(){
    $(this).parent().find('input').val('').focus();
  })
}

/*Chi tiet order*/
thinkpro.ViewchitietOrder = function() {
  $('.view-chitiet-order').click(function(){
    var id = $(this).data('value');
    $(id).slideToggle();
  })
}

thinkpro.ClickCompare = function() {
  $('.form-check.compare').click(function(){
    $('.product-compare-list').addClass('show');
    function hideCompare(){
      $('.product-compare-list').removeClass('show');
    }
    setTimeout(hideCompare, 5000);
  })
}

thinkpro.RemoveCompare = function() {
  $('.delete-compare').click(function(){
    $(this).parent().parent().parent().hide();
  })
}

$(document).ready(function(){
  if (responsive_mobile) {
      thinkpro.toggleMobileStyles();
  }
  thinkpro.SliderShow();
  thinkpro.toggleMenu();
  thinkpro.Viewfull();
  thinkpro.CauhinhXemthem();
  thinkpro.Owlthumnail();
  thinkpro.Owllisthumnail();
  thinkpro.goToTop();
  thinkpro.DropdownSlide();
  thinkpro.ratingForm();
  thinkpro.Cartpage();
  thinkpro.Myaccountpage();
  thinkpro.ViewchitietOrder();
  thinkpro.ClickCompare();
  thinkpro.VoucherClick();
  thinkpro.RemoveCompare();
});

$(window).on('resize', function() {
  var _cw = current_width;
  var _mw = min_width;
  var _w = $(window).width();
  var _toggle = (_cw >= _mw && _w < _mw) || (_cw < _mw && _w >= _mw);
  responsive_mobile = _cw >= _mw;
  current_width = _w;
  if (_toggle) {
      thinkpro.toggleMobileStyles();
  }
  thinkpro.sticky_banner();
    
});

$(window).on('load', function() {
  var timeout = setTimeout(function() { 
    $('.product-list .lazyload').lazy({
      effect: 'fadeIn',
      effectTime: 'slow',
      threshold: 0
    });
  }, 1500);
});