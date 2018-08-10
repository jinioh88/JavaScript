var customer_name = ['oh','kim','park','lee'];
var length = customer_name.length;

var search_name = prompt('이름 조회', '조회할 이름 입력');

for(var i=0;i<length;i++) {
    if(search_name == customer_name[i]) {
        alert(search_name+'찾음');
        break;
    } else if( i == length)
        alert('해당 이름 없ㅇ므');
}