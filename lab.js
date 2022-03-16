var number = document.getElementsByClassName('number');
var operator = document.getElementsByClassName('operator'); 

function getExValue() {
  return document.getElementById('exValue').innerHTML;
}
function inputExValue(number) {
  document.getElementById('exValue').innerHTML = number;
}
function getResult() {
  return document.getElementById('outputValue').innerHTML;
}
function inputResult(number) {
  document.getElementById('outputValue').innerHTML = number;
}
function stringFormat(number) {
  var n = Number(number);
  var value = n.toLocaleString("en");
  return value;
}
function removeStringFormat(number) {
  return Number(number.replace(/,/g, ''))
}

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function () {
    const result = removeStringFormat(number[i].getAttribute('id'));
    var value = getResult();
    value = removeStringFormat(value).toString();
    inputResult(value + result)     
  });
};

function inputResult(number) {
  if (number == '') {
    document.getElementById('outputValue').innerHTML = number;
  } else {
    document.getElementById('outputValue').innerHTML = stringFormat(number);
  }
}

for (var i = 0; i < operator.length; i++) { 
  operator[i].addEventListener('click', function() { 
    if (this.id == "delete-all") { 
      inputResult(''); 
      inputExValue('');
    }  else if(this.id == "delete") { 
      let result = removeStringFormat(getResult()).toString(); 

      if(result) { 
        result = result.substring(0, result.length -1) 
        inputResult(result) 
      }
    } else { 
      let result = getResult(); 
      let exResult = getExValue();
      if(result != " " ) { 
        result = removeStringFormat(result); 
        exResult = exResult + result;

        if(this.id == "result") { 
          const endResult = eval(exResult); 
          inputExValue("") 
          inputResult(endResult)
        } else { 
          exResult = exResult + this.id; 
          inputExValue(exResult);
          inputResult("") 
        } 
      } 
    } 
  }) 
} 
