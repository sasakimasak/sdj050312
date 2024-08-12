// 메서드 탐색 제이쿼리 필수 핵심이론 4번째 임네다 ㅎㅎ.


// .children 선택요소의 바로 아래 단계인 자식요소만 선택
$('.menu li').mousenter(function(){
    $('.sub-menu').slideDown()
})

// .sibiling 선택요소의 형제요소 선택 


// this 마우스에 올라간 특정한 부분만 마우스를 선택하는것을 말을 합니다. 
$('.menu li').mousenter(function(){
    $(this).children('.sub').slideDown()
})
$('.menu li').mouseleave(function(){
    $(this).children('.sub').slideDown()
})

$('btn span').click(function(){
    $(this).addClass('active')
})
