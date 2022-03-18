var number = document.getElementsByClassName('number');
var operator = document.getElementsByClassName('operator');
var result = document.getElementsByClassName('result');
var deleteButton = document.getElementsByClassName('delete');
var operatorButton = document.getElementsByClassName('operator');
var resultButton = document.getElementsByClassName('result');
var bracketButton = document.getElementsByClassName('bracket');

var showExValues = '';

function getExValue() {
  return document.getElementById('exValue').innerHTML;
}

function showExValue(number) {
  document.getElementById('exValue').innerHTML = number;
}

function getResult() {
  return document.getElementById('outputValue').innerHTML;
}

function showResult(number) {
  if (number == '') {
    document.getElementById('outputValue').innerHTML = number;
  } else {
    document.getElementById('outputValue').innerHTML = stringFormat(number);
  }
}

function stringFormat(number) {
  var n = Number(number);
  var value = n.toLocaleString("en");
  return value;
}

function removeStringFormat(number) {
  return Number(number.replace(/,/g, ''));
}

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function() {
    var currenValue = getResult();
    let id = this.id;
    currenValue = currenValue + id;
    currenValue = removeStringFormat(currenValue);
    showResult(currenValue);
  })
}

for (let i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener('click', function () {
    if (this.id == 'delete-all') {
      showExValue('');
      showResult('');
      showExValues = '';
    } else {
      let value = getResult();
      value = value.substring(0, value.length - 1);
      showResult(value);
    }
  })
}

for (let i = 0; i < operatorButton.length; i++) {
  operatorButton[i].addEventListener('click', function () {
    const getValue = removeStringFormat(getResult());
    showExValues = getExValue();
    showExValues = showExValues + (getValue + this.id)
    showExValue(showExValues);
    showResult('');
    if (this.id) {

    }
  }) 
}

for (let i = 0; i < resultButton.length; i++) {
  resultButton[i].addEventListener('click', function () {
    let getExValues = getExValue();
    console.log(getExValues);
    const getValue = getResult();
    const result = eval(getExValues + getValue);
    showResult(result);
    showExValue('');
    showExValues = '';
  })
}


for (let i = 0; i < bracketButton.length; i++) {
  bracketButton[i].addEventListener('click', function () {
    if (this.id == 'bracket-left') {
      const exValue = getExValue();
      showExValue(exValue + '(');
    } else {
      const exValue = getExValue();
      const result = getResult();
      showExValue(exValue + result + ')');
      showResult('')
    }
  })
}

var piButton = document.getElementsByClassName('pi');

for (let i = 0; i < piButton.length; i++) {
  piButton[i].addEventListener('click', function () {
    console.log(this.id);
    const getExValues = getExValue();
    showExValue(getExValues)
    showResult(this.id)
  })
}

var themeColorButton = document.getElementsByClassName('fa-solid');
var changeBody = document.body;

for (let i = 0; i < themeColorButton.length; i++) {
  themeColorButton[i].addEventListener('click', function () {
    if (this.id == 'sun') {
      document.getElementById('sun').setAttribute('style', 'display: none;');
      document.getElementById('moon').setAttribute('style', 'display: var(--fa-display,inline-block);');
      document.body.setAttribute('style', 'background-color: #fff;')
      // document.getElementById('container-list').setAttribute('style', 'background-color: #333;');
    } else {
      document.getElementById('sun').setAttribute('style', 'display: var(--fa-display,inline-block);');
      document.getElementById('moon').setAttribute('style', 'display: none;');
      document.body.setAttribute('style', '')
    }
  })
}


// var powSqrtButton = document.getElementsByClassName('pow-sqrt');

// for (let i = 0; i < powSqrtButton.length; i++) {
//   powSqrtButton[i].addEventListener('click', function () {
//     const getExValues = getExValue();
//     let exValue = getResult();
//     console.log(exValue);
    
//     if (exValue != '') {
//       exValue = getExValues + Math.pow(exValue, 2);
//       showExValue(getExValues);
//       showResult(exValue);
//     } else {
//       console.log('casdbchjkasbdfkj');
//     }
//   })
// }
