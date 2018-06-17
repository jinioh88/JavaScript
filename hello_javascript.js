var i = 0;
for(i=0;i<=10; i++) {
    document.write("Hello javascript!!");
    document.write(("<br/>"));
}

var foo={
    name:'foo',
    age:100
};

console.log(foo.toString());  // foo의 프로토타입 덕에 toString() 쓸수 있음
console.dir(foo);