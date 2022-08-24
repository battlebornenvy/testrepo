// 'Compute Interest' button onclick action
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    // Display the 'No. of Years' as actual years from todays date
    var year = new Date().getFullYear()+parseInt(years);
    // Results from after the 'Compute Interest' button is clicked
document.getElementById("result").innerHTML = "If you deposit <span class='highlight'>" +
principal + "</span>,\<br\>at an interest rate of <span class='highlight'>" + 
rate + "%.</span>\<br\>You will receive an amount of <span class='highlight'>" + 
interest +"</span>,\<br\>in the year <span class='highlight'>" + 
year + "</span>\<br\>";
}

// Display the range slider value
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// Validate 'Principal' input box.  No zero or negative values.
function valPrincipal() {
    var x = document.getElementById("principal").value;
    if (x == "") {
        alert("Enter an amount")
        principal.focus()
        return false;
    }
    else if (x <= 0) {
        alert("Enter a positive number");
        principal.focus()
        return false;
    }
}
