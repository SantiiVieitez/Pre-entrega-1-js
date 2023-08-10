//creame una funcion que calcule el area de un circulo
function areaCirculo(radio) {
    let area = Math.PI * Math.pow(radio, 2)
    return area
}

let opcion;
alert("Bienvenido al sistema de calculo de areas")
alert("Elija una opcion")
while (opcion != 5)
{
    opcion = Number(prompt("1. Calcular el area de un cuadrado" + "\n" + "2. Calcular el area de un triangulo" + "\n" + "3. Calcular el area de un circulo" + "\n" + "4. Calculadora basica" + "\n" + "5. Salir"))
    switch (opcion) {
        case 1:
            {
                //calculo el area del cuadrado
                let lado = Number(prompt("Ingrese el lado del cuadrado"))
                let area = lado * lado
                alert("El area del cuadrado es: " + area)
                break;
            }
        case 2:
            {
                //calculo el area del triangulo
                let base = Number(prompt("Ingrese la base del triangulo"))
                let altura = Number(prompt("Ingrese la altura del triangulo"))
                let area = (base * altura) / 2
                alert("El area del triangulo es: " + area)
                break;
            }
        case 3:
            {
                //uso la funcion areaCirculo
                let radio = Number(prompt("Ingrese el radio del circulo"))
                let area = areaCirculo(radio)
                alert("El area del circulo es: " + area)
                break;
                
            }
        case 4:
            {
                
                let operacion = prompt("1. Suma" + "\n" + "2. Resta" + "\n" + "3. Multiplicacion" + "\n" + "4. Division")
                if(operacion == 1)
                {
                    let n1 = Number(prompt("Ingrese un numero 1: "))
                    let n2 = Number(prompt("Ingrese un numero 2: "))
                    let suma = n1 + n2
                    alert("La suma es: " + suma)
                }
                else if(operacion == 2)
                {
                    let n1 = Number(prompt("Ingrese un numero 1: "))
                    let n2 = Number(prompt("Ingrese un numero 2: "))
                    let resta = n1 - n2
                    alert("La resta es: " + resta)
                }
                else if(operacion == 3)
                {
                    let n1 = Number(prompt("Ingrese un numero 1: "))
                    let n2 = Number(prompt("Ingrese un numero 2: "))
                    let multiplicacion = n1 * n2
                    alert("La multiplicacion es: " + multiplicacion)
                }
                else if(operacion == 4)
                {
                    let n1 = Number(prompt("Ingrese un numero 1: "))
                    let n2 = Number(prompt("Ingrese un numero 2: "))
                    let division = n1 / n2
                    alert("La division es: " + division)
                }
                else{
                    alert("Opcion incorrecta")
                }
                break;
            }
            
        case 5:
            {
                alert("Gracias por usar el sistema")
                break;
            }
        default:
            {
                alert("Opcion incorrecta")
                break;
            }
        }
    }