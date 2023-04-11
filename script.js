function calculateFunction() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var results_h1_tag = document.getElementById("results");
    results_h1_tag.innerHTML = "Results - " + num1 + " + " + num2 + " = " + (num1+num2);
    results_h1_tag.style.display = "block";
}