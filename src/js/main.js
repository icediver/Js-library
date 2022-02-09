import './lib/lib';

$('button').on('click', function() {
  $('div').eq(2).toggleClass('active')
});
$('div').click(function() {
  console.log($(this).index());
})
// console.log($('div').eq(2).find('.more'));
// console.log($('.some').closest('.findmeq').addClass('qeere'));
// console.log($('button').html());
// $('.findme').fadeOut(1800);
$('button').fadeIn(1800);