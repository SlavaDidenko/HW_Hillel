$( document ).ready(function() {
  function reset() {
    $('.active').each(function () {
      $(this).removeClass('active');
    });
    $('.form__input').val('');

    btnDisabled();
  }

  function btnDisabled() {
    $('.btn').each(function () {
      if ($(this).hasClass('form__clear-btn')) return;
      $(this).prop("disabled",true);
    })
  }

  function checkSelector() {

    $($('.form__input').val()).addClass('active')
    btnDisabled();
    checkBtns($($('.form__input').val()))
  }

  function checkBtns(selector) {
    if (selector.parent().length) {
      $('.form__parent-btn').prop("disabled",false);
    }
    if (selector.prev().length) {
      $('.form__previous-btn').prop("disabled",false);
    }
  
    if (selector.next().length) {
      $('.form__next-btn').prop("disabled",false);
    }
    
    if (selector.children(':first').length) {
      $('.form__first-btn').prop("disabled",false);
    }
  
    if (selector.children(':last').length) {
      $('.form__last-btn').prop("disabled",false);
    }
  }

  function replacePrev() {
    btnDisabled();
    const selector = $('.active')
    selector.removeClass('active');
    
    selector.prev().addClass('active');
    checkBtns(selector.prev());
  }

  function replaceNext() {
    btnDisabled();
    const selector = $('.active')
    selector.removeClass('active');
    selector.next().addClass('active');
    checkBtns(selector.next());
  }

  function replaceFirst() {
    btnDisabled();
    const selector = $('.active')
    selector.removeClass('active');
  
    selector.children(':first').addClass('active');
    checkBtns(selector.children(':first'));
  }

  function replaceLast() {
    btnDisabled();
    const selector = $('.active')
    selector.removeClass('active');
  
    selector.children(':last').addClass('active');
    checkBtns(selector.children(':last'));
  }

  function replaceParent() {
    btnDisabled();
    const selector = $('.active')
    selector.removeClass('active');
  
    selector.parent().addClass('active');
    checkBtns(selector.parent());
  }


  $('.btn').each(function () {
    $(this).on('click', function (event) {
      event.preventDefault();
    })
  })

// не робив константи для того щоб звикнути до $()...
  $('.form__input').on('input', function() {
    checkSelector()
  });

  $('.form__clear-btn').click(function(){
    reset();
  })
  $('.form__previous-btn').click(function(){
    replacePrev();
  })
  $('.form__next-btn').click(function(){
    replaceNext();
  })
  $('.form__first-btn').click(function () {
    replaceFirst();
  })
  $('.form__last-btn').click(function(){
  replaceLast();
  })
  $('.form__parent-btn').click(function(){
  replaceParent();
  })
});