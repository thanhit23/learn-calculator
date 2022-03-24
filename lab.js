const number = document.getElementsByClassName('number');
const operator = document.getElementsByClassName('operator');
const result = document.getElementsByClassName('result');
const deleteButton = document.getElementsByClassName('delete');
const operatorButton = document.getElementsByClassName('operator');
const resultButton = document.getElementById('result');
const bracketButton = document.getElementsByClassName('bracket');
const piButton = document.getElementById('3.14');
let showExValues = '';

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
    console.log(showExValues);
    showExValue(showExValues);
    showResult('');
  }) 
}

resultButton.addEventListener('click', function () {
  let getExValues = getExValue();
  const getValue = getResult();
  const result = eval(getExValues + getValue);
  showResult(result);
  showExValue('');
})

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

piButton.addEventListener('click', function () {
  const getExValues = getExValue();
  showExValue(getExValues)
  showResult(this.id)
})
