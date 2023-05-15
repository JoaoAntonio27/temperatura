function calculate() {
    var input = document.getElementById("inputNumber").value;
    var result = (parseFloat(input) - 32) / 1.8;
    var output = document.getElementById("output");
    var resultDiv = document.getElementById("result");
    var body = document.body;

    output.innerHTML = result.toFixed(2);

    if (result > 30) {
        body.classList.remove("lightblue-bg");
        body.classList.add("orange-bg");
    } else {
        body.classList.remove("orange-bg");
        body.classList.add("lightblue-bg");
    }

    resultDiv.innerHTML = "Resultado:";
}
