function showWordsResult() {
    const thisWord = document.getElementById("countWord").value

    function countingWords() {
        const text = document.getElementById('texto-entrada').innerText.trim();
        const textLowerCase = text.toLowerCase();
        const removeCommasPeriods = textLowerCase.replace(/,|\./g, '') //quita los puntos y comas.

        const newArray = removeCommasPeriods.split(' ') //separa el string en un arreglo con el espacio como regla
        console.log(newArray)
        let amount = 0 //crea un contador desde 0

        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i] == thisWord) {
                amount++ //cada vez que se cumpla la condición, suma uno al contador.
            }
            // Recorre el arreglo para encontrar las palabras que sean iguales a la variable wordCounted
        }
        return amount
    }
    document.getElementById('cantidadPalabras').innerHTML = `Cantidad:${countingWords()}`
}