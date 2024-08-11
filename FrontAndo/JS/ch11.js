// 함수 선언 
function grr(){
    console.log("안녕하세요");
}
// 함수 호출
console.log("호출 전"); 
grr();
console.log("호출 후");
// 매개 변수 함수 매개체 역할을 하는거 
function getArea(width, hegiht){
    let area = width * hegiht;

    console.log(area);
}
// 전달값을 받는것, 결과값을 반환하도록 한다. 
function getAre(width1, hegiht2){
    let area = width1 * hegiht2;

    return area; 
}

// 중첩 함수 
// 함수 안에 또 함수를 출력할 수 있게끔 하는 방식 
function python(w, h){
    function ano(){ // 함수 
        console.log("another");
    }
    ano();
    let area = w + h ;

    return area;
}
// 호이스팅이라는 기능은 끌어 올리는것이 있는것 







let area1 = getAre(10, 20);
console.log(area1);

let area2 = getAre(30, 20);
console.log(area2);



getArea(100, 220);
getArea(30, 20);
getArea(10, 20);