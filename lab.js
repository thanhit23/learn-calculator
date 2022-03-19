var number = document.getElementsByClassName('number');
var operator = document.getElementsByClassName('operator');
var result = document.getElementsByClassName('result');
var deleteButton = document.getElementsByClassName('delete');
var operatorButton = document.getElementsByClassName('operator');
var resultButton = document.getElementsByClassName('result');
var bracketButton = document.getElementsByClassName('bracket');
var piButton = document.getElementsByClassName('pi');
var sunButton = document.getElementById('sun');
var moonButton = document.getElementById('moon');
var themeColorButton = document.getElementsByClassName('fa-solid');
var tagBody = document.body;
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
  return Number(number).toLocaleString("en");
}

function removeStringFormat(number) {
  return Number(number.replace(/,/g, ''));
}

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function() {
    let currenValue = getResult();
    const id = this.id;
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
  }) 
}

for (let i = 0; i < resultButton.length; i++) {
  resultButton[i].addEventListener('click', function () {
    let getExValues = getExValue();
    const getValue = getResult();
    const result = eval(getExValues + getValue);
    showResult(result);
    showExValue('');
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

for (let i  = 0; i < piButton.length; i++) {
  piButton[i].addEventListener('click', function () {
    const getExValues = getExValue();
    showExValue(getExValues)
    showResult(this.id)
  })
}

for (let i = 0; i < themeColorButton.length; i++) {
  themeColorButton[i].addEventListener('click', function () {
    if (this.id == 'sun') {
      sunButton.setAttribute('style', 'display: none;');
      moonButton.setAttribute('style', 'display: var(--fa-display,inline-block);');
      tagBody.setAttribute('style', 'background-color: #fff;')
      // document.getElementById('container-list').setAttribute('style', 'background-color: #333;');
    } else {
      sunButton.setAttribute('style', 'display: var(--fa-display,inline-block);');
      moonButton.setAttribute('style', 'display: none;');
      tagBody.setAttribute('style', '')
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
