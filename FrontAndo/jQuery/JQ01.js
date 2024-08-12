// click과 mouseenter, mouseleave

// 복습 $('선택자').함수(function()
//{
//  실행 구문; 
//})

// 아주 중요한 이야기를 하겠습니다. 
// 레이어 팝업 띄울때 click, 네비게이션 만들때 mouseenter 
//mouseleave 



// 버튼을 눌렀을때 감춰지는 jQuery 
$('.show-btn').click(function(){
    $('div').show()
})
$('.hide-btn').click(function(){
    $('div').hide()
})
// mouseenter , mouseleave 마우스를 눌렀을때, 마우스를 떠났을때의 메서드 기능 
$('.btn').mouseenter(function(){
    $('div').hide()
})
$('btn').mouseleave(function(){
    $('div').show()
})


