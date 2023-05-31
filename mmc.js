function somar(){

var numero1 = document.getElementById("numero1").value;
var numero2 = document.getElementById("numero2").value;
var resultado = document.getElementById("resultado")
var resto,a,b;
a = numero1;
b = numero2;

while(resto!=0){
    resto = a%b;
    a = b
    b = resto
}

resultado.innerHTML=(numero1*numero2)/a

}