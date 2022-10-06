function tabuada() {
  var number = document.querySelector("#numeroEntrada");
  var result = document.querySelector("#resultado");
  result.innerText = "";

  if (number.value == "") {
    return false;
  } else {
    for (var i = 0; i <= 10; i++) {
      var div = document.createElement("div");
      div.innerText = number.value + " x " + i + " = " + number.value * i;
      result.appendChild(div);
    }
  }

  return number;
}

parametro = tabuada();

function somenteNumeros(e) {
  var charCode = e.charCode ? e.charCode : e.keyCode;

  if ((charCode != 46 && charCode < 48) || charCode > 57) {
    return false;
  }
}