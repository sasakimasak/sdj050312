// 콜백 함수 자신이 아닌 다른 함수에, 인수로써 전달됨 함수를 의미 
function main(value){
value();
}

function sub(){
    console.log("sub");
}

repeat(5, (idx) =>{
    console.log(idx);
});

repeat(5, (idx) =>{
    console.log(idx * 2);
});

repeat(5, (idx) =>{
    console.log(idx * 3);
});




main(sub);