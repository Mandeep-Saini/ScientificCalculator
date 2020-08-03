  "use strict";
  var $ = function (id) {
      return document.getElementById(id);
  };
  var result = "";
  $("btn1").onclick = displayValue;
  $("btn2").onclick = displayValue;
  $("btn3").onclick = displayValue;
  $("btn4").onclick = displayValue;
  $("btn5").onclick = displayValue;
  $("btn6").onclick = displayValue;
  $("btn7").onclick = displayValue;
  $("btn8").onclick = displayValue;
  $("btn9").onclick = displayValue;
  $("btn0").onclick = displayValue;
  $("btn.").onclick = displayValue;
  $("btn(").onclick = displayValue;
  $("btn)").onclick = displayValue;

  $("btn/").onclick = displayValue;
  $("btn+").onclick = displayValue;
  $("btn*").onclick = displayValue;
  $("btn-").onclick = displayValue;
  $("btn%").onclick = displayValue;
  $("btnPi").onclick = operation;

  $("btn=").onclick = operation;
  $("btnC").onclick = operation;
  $("btnSqr").onclick = operation;
  $("btnX^").onclick = displayPow;
  $("btnSin").onclick = operation;
  $("btnCos").onclick = operation;
  $("btnTan").onclick = operation;
  $("btnX2").onclick = operation;
  $("btnLog").onclick = operation;
  $("btn<--").onclick = operation;
  $("btn+-").onclick = operation;


  function displayValue() {
      result = result + (this.value);
      $("display").value = result;
  }

  function displayPow() {
      result = result + "**";
      $("display").value = result;
  }

  function operation() {
      var opr = this.value;

      if (opr == "c") {
          result = "";
      } else if (opr == "=") {
          if (result != "") {
              if (checkNum(result)) {
                  try{
                       result = eval(result);
                  }
                 catch(error)
                     {
                         result="error";
                     }
              }
          }
      } else if (opr == "sqrroot") {
          result = Math.sqrt(result);
      } else if (opr == "sin") {
          result = Math.sin(result);
      } else if (opr == "cos") {
          result = Math.cos(result);
      } else if (opr == "tan") {
          result = Math.tan(result);
      } else if (opr == "sqr") {
          result = Math.pow(result, 2);
      } else if (opr == "<--") {
          debugger;
          result = result.toString();
          result = result.substring(0, result.length - 1);
      } else if (opr == "ln") {
          result = Math.log10(result);
      } else if (opr == "+-") {
          if (result.substring(0, 1) == "-")
              result = result.substring(1, result.length)
          else
              result = "-" + result;
      } else {
          if (result == "") {
              result = Math.PI;
          } else {
              result = Math.PI * (result);
          }

      }

      $("display").value = result;
  }


  function checkNum(result) {

      for (var i = 0; i < result.length; i++) {
          var ch = result.charAt(i);
          if (ch < "0" || ch > "9") {
              if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "." &&
                  ch != "(" && ch != ")" && ch != "%") {
                  $("display").value ="Error";
                  return false;
              }
          }
      }
      return true;
  }
