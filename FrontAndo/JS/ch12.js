//1. 함수 표현식 

function funcA(){
    console.log("funcA");
}

let varA = funcA; 
varA();


// 함수를 변수에 바로 담아 버리는것도 가능함.
let varB = function funcB(){
// 익명함수라고 합니다. 
    console.log("funcB");

};
varB();
funcB();


// 2. 화살표 함수 종류 3가지 
// 일반적인 화살표 함수 
let VarC = () => 1; 
// 매개 변수가 있는 화살표 함수 
let VarD = (value) => value + 1; 

let VarF = (value) => {
    console.log(value);
    return value +1;
};

console.log(VarC());
console.log(VarD(10)); // 11
console.log(VarF(10)); // 11 



