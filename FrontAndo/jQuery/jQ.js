//$('선택자'), 함수 (function() {
// 실행 구문 ;}); 
// 여기서 선택자란 css와 html 을 말함. 제이쿼리를 만듦 




// 제이쿼리 기본 문법 


// p태그를 선택하는거
$('p').css({'display':'none'});
//class 이름중에 show-btn을 선택하겠다.
$('.show-btn').click(function(){
    $('p').css({'display':'block'});
});

$('.hide-btn').click(function(){
    $('p').css({'display':'none'});
})
// 사용자가 눌렀을때 작동을 할 수 있게금 만드는것을 말함 
// 보이기 감추기를 반복하는 방법 

$('선택자').click(function(){
    $('선택자').메서드();
});
// 이런식으로 활용이 가능한 방법인데요 
// 여기서 제이쿼리를 정리하는 방식 
// 선택자의 종류 : css.class, css#id, cssTag, this 
// 필수 함수 종류 : click, mouseenter, mouseleave.

// 필수 메서드 종류 
// 선택자의 기능을 추가적으로 부여를 하는것을 말함. 

// slideDown()
// slideUp()
// stop()
//showup()
//hide()
//fadeln()
// fade out()
//addClass()
// removeClass()
//chilldren() 선택자를 탐색을 하는것 
//siblings() 선택자를 탐색