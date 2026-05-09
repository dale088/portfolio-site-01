
jQuery(function ($) {

  // ページトップボタン
  var topBtn = $('.js-pagetop');
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // (メインビュー過ぎた際の処理(ヘッダー背景、ハンバーガー三本線、ナビメニュー色変更
  $(function () {
    $(window).on("scroll", function () {
      var mvHeight = $(window).height();
      if ($(this).scrollTop() > mvHeight) {
        $(".p-header").addClass("active");
        $(".p-header-nav__item").addClass("active");
        $(".p-header__logo-white").addClass("active");
        $(".p-header-hamburger__btn").addClass("active");
        $(".p-header__logo-blue").addClass("active");
      } else {
        $(".p-header").removeClass("active");
        $(".p-header-nav__item").removeClass("active");
        $(".p-header__logo-white").removeClass("active");
        $(".p-header-hamburger__btn").removeClass("active");
        $(".p-header__logo-blue").removeClass("active");
      }
    });
  });

  // ハンバーガーメニューがクリックされた時にメニューを閉じる為の処理
  $(".p-header-hamburger__nav").click(function () {
    $("#p-header-hamburger-check").prop('checked', false);
  })

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});
