function toCelsius(value, unit) {

    switch(unit) {

        case "C":
            return value;

        case "F":
            return (value - 32) * 5 / 9;

        case "K":
            return value - 273.15;

        case "R":
            return (value - 491.67) * 5 / 9;

        default:
            return NaN;
    }
}


function fromCelsius(value, unit) {

    switch(unit) {

        case "C":
            return value;

        case "F":
            return value * 9 / 5 + 32;

        case "K":
            return value + 273.15;

        case "R":
            return (value + 273.15) * 9 / 5;

        default:
            return NaN;
    }
}


function updateToOptions() {

    let from = document.getElementById("from").value;
    let to = document.getElementById("to");

    let selectedTo = to.value;


    for (let option of to.options) {

        option.hidden = option.value === from;

    }


    if (selectedTo === from) {

        for (let option of to.options) {

            if (!option.hidden) {

                to.value = option.value;
                break;

            }

        }

    }

}


function convert() {

    let value = Number(document.getElementById("inputTemp").value);

    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;


    if (isNaN(value)) {

        document.getElementById("result").value = "Invalid";

        return;

    }


    let celsius = toCelsius(value, from);

    let result = fromCelsius(celsius, to);


    if (isNaN(result)) {

        document.getElementById("result").value = "Invalid";

        return;

    }


    document.getElementById("result").value =
        parseFloat(result.toFixed(10));

}


document.getElementById("from")
.addEventListener("change", updateToOptions);


updateToOptions();


document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
