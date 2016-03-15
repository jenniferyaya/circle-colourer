var $form = $('form');
var $input = $('#color-selector');
var $color = $('.color');
var $ball = $('.ball');

$form.on('change', function () {
  $ball.css('background-color', $input.val());
});
