/*Crear una función que retorne la cantidad de veces que se repite cada letra en el texto. Mostrar
este resultado en el navegador agregando dinámicamente al HTML, dentro de la etiqueta div con id
resultados una etiqueta */
function showLettersResult() {
    const thisLetter = document.getElementById("countLetter").value

    function countingLetters() {
        const text = document.getElementById('texto-entrada').innerText.trim();
        const textLowerCase = text.toLowerCase();
        const newArray = textLowerCase.split('') //separa el string en un despues de cada digito o caracter

        let amount = 0 //crea un contador desde 0

        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i] == thisLetter) {
                amount++ //cada vez que se cumpla la condición, suma uno al contador.
            }

        }
        return amount
    }
    document.getElementById('cantidadLetras').innerHTML = `Cantidad:${countingLetters()}`
}

showLettersResult()