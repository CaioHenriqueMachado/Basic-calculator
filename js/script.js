const result = document.getElementById('result');
const ans = document.getElementById('ans');
const buttons = document.getElementsByClassName('btn');

function fun(e){
  if (e == '='){
    ans.value = 'Ans(' + result.value + ') =';
    result.value = eval(result.value);
  }else {
    result.value+= e;
  }
}

console.log(eval('7*4'));