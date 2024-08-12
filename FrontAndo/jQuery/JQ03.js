// 보이는 기능 
$('btn1').click(function()
{
    $('container div').show()
})

// hide 감추는 기능
$('btn2').click(function()
{
    $('container div').hide()
})

// 토글 , show-hide 2개의 기능을 갖는것을 말을 합니다. 
$('btn3').click(function()
{
    $('container div').toggle()
})
// slide를 아래로 나오게 하는것을 말을 함. 
$('show-btn').click(function()
{
    $('container div').slideDown()
})
// slide를 위로 올리게 하는 자연스러운것을 말함. 
$('show-btn').click(function()
{
    $('container div').slideUp()
})
// slide toggle show와 hide기능을 갖는 동시에 다른것을 갖는것을 말을 함. 
$('show-btn').click(function()
{
    $('container div').slideToggle()
})
// 페이드: 페이드 효과를 말을 하는데 서서히 나오게 하는것을 말을 하고 
//fadeIn(지속시간) fadeOut(지속시간)
// 1. 서서히 나타내는것 
$('show-btn').click(function(){
    $('container div').fadeIn('fast')
})
//2. 서서히 없애는거 
$('show-btn').click(function(){
    $('container div').fadeOut('slow')
})
//3. 서서히 나오는건데 show, hide 기능을 동시에 가지게끔 하는거 
$('.toggle-btn').click(function(){
    $('container div').fadeToggle()
})