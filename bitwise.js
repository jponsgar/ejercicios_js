// Operaciones básicas en Bitwise - Suma
let a = parseInt(prompt("Teclea un primer numero entero"));
let b = parseInt(prompt("Teclea un segundo numero entero"));
document.getElementById("input1").innerText = a;
document.getElementById("input2").innerText = b;
document.getElementById("bitwises").innerHTML = sumaBitwise(a, b);
function sumaBitwise(a, b) {
    while (b != 0) {
        let carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}

//Resta
document.getElementById("bitwiser").innerHTML = restaBitwise(a, b);
function restaBitwise(a, b) {
    b = ~b + 1;
    return sumaBitwise(a, b);
}

//Multiplicación
document.getElementById("bitwisem").innerHTML = multiplicacionBitwise(a, b);
function multiplicacionBitwise(a, b) {
    let resultado = 0;
    while (b != 0) {
        if (b & 1) {
            resultado = sumaBitwise(resultado, a);
        }
        a <<= 1;
        b >>= 1;
    }
    return resultado;
}

//División
document.getElementById("bitwised").innerHTML = divisionBitwise(a, b);
function divisionBitwise(a, b) {
    let cociente = 0;
    let signo = ((a < 0) ^ (b < 0)) ? -1 : 1;
    a = Math.abs(a);
    b = Math.abs(b);
    while (a >= b) {
        let tempB = b;
        let tempCociente = 1;
        while (a >= (tempB << 1)) {
            tempB <<= 1;
            tempCociente <<= 1;
        }
        a = restaBitwise(a, tempB);
        cociente = sumaBitwise(cociente, tempCociente);
    }
    return signo * cociente;
}
