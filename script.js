function calculateFunction() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var results_h1_tag = document.getElementById("results");
    var get_selected_value_from_radio_group = document.querySelector( 'input[name="ORG"]:checked'); 

    if (get_selected_value_from_radio_group != null) {
        switch(get_selected_value_from_radio_group.value) {
            case "add":
                results_h1_tag.innerHTML = "Results -> " + num1 + " + " + num2 + " = " + (num1+num2);
                break;
            case "sub":
                results_h1_tag.innerHTML = "Results -> " + num1 + " - " + num2 + " = " + (num1-num2);
                break;
            case "mul":
                results_h1_tag.innerHTML = "Results - " + num1 + " x " + num2 + " = " + (num1*num2);
                break;
            case "div":
                if (num2 == 0)
                    results_h1_tag.innerHTML = "Results - " + num1 + " ÷ " + num2 + " = " + (num1/num2) + "\nNumber cannot be divisible by 0.";
                else
                    results_h1_tag.innerHTML = "Results - " + num1 + " ÷ " + num2 + " = " + (num1/num2);
                break;
        }
    
    } else if (get_selected_value_from_radio_group == null)
        results_h1_tag.innerHTML = "Nothing has been selected";
    
    results_h1_tag.style.display = "block";
}