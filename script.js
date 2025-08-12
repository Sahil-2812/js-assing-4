var originalText = "I love my country Pakistan<br> I like my city Faisalabad<br> I love my HomeLand";

document.getElementById("OrignalText").innerHTML = originalText;

var cities = ['Faisalabad', 'Lahore', 'Karachi', 'IslamaBad', 'Toba Tek Singh', 'Gojra', 'Multan'];

function clearInput() {
    document.getElementById("inputField").value = '';

};

function clearOutput() {
    document.getElementById("displayOutput").innerHTML = '';

};
function lowercase() {
    alert('Original string has been converted into LowerCase');
    let lowercasetext = originalText.toLowerCase();

    document.getElementById("displayOutput").innerHTML = lowercasetext;

};

function uppercase() {
    alert('Original string has been converted into UpperCase');

    let uppercasetext = originalText.toUpperCase();

    document.getElementById("displayOutput").innerHTML = uppercasetext;

};

function capitilized() {
    alert('Original string has been Capitalized');

    let capitilized = '<span style="text-transform: capitalize;">' + originalText + '</span>';

    document.getElementById("displayOutput").innerHTML = capitilized;

};

function formet() {
    let text = document.getElementById("inputField").value;

    if (!text) {
        alert("please type your text");
        return;
    }
    text = text.toLowerCase();
    document.getElementById("displayOutput").style.textTransform = 'capitalize';
    document.getElementById("displayOutput").innerHTML = text;

};

function printcitis() {

    document.getElementById("displayOutput").innerHTML = '';

    for (let i = 0; i < cities.length; i++) {

        let num = i + 1;
        document.getElementById("displayOutput").innerHTML += num + ')' + cities[i] + '<br>';


    }

};

function addcity() {
    let city = document.getElementById("inputField").value;

    if (!city) {
        alert('Please enter your city name.');
        return;
    }

    let cityFirstLetter = city.charAt(0).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();

    let citywordInCapitalize = cityFirstLetter + cityAllLetters;

    let cityfound = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === citywordInCapitalize) {

            cityfound = true;

            document.getElementById("displayOutput").innerHTML =
                '<span style="color: green; font-size: 30px;">' + citywordInCapitalize + '</span>' + " already exist in cities";
        }
    }

    if (!cityfound) {
        cities.push(citywordInCapitalize);
        document.getElementById("displayOutput").innerHTML =
            '<span style="color: green; font-size: 30px;">' + citywordInCapitalize + '</span>' + " has been added in cities";
    }
};



function checkCity() {
    let city = document.getElementById("inputField").value;

    if (!city) {
        alert('Please enter your city name.');
        return;
    }

    let cityFirstLetter = city.charAt(0).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();

    let citywordInCapitalize = cityFirstLetter + cityAllLetters;

    let cityfound = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === citywordInCapitalize) {

            cityfound = true;

            document.getElementById("displayOutput").innerHTML =
                '<span style="color: green; font-size: 30px;">' + citywordInCapitalize + '</span>' + " is exist in the cities list.";
        }
    }

    if (!cityfound) {
        document.getElementById("displayOutput").innerHTML =
            '<span style="color: red; font-size: 30px;">' + citywordInCapitalize + '</span>' + " is not in the cities list.";
    }
};


function findtheword() {

    let newOrignalText = originalText.toLowerCase();
    let word = document.getElementById("inputField").value;

    if (!word) {
        alert("please type the word to Find");
        return;
    }
    word = word.toLowerCase();

    let findword = newOrignalText.indexOf(word);
    //    console.log(findword)
    if (findword !== -1) {
        document.getElementById("displayOutput").innerHTML =
            '<span style="color: green; font-size: 50px;">' + word + '</span>' + " <b>exist in orignal string at index:</b> " + findword;
    }
    else {
        document.getElementById("displayOutput").innerHTML =
            '<span style="color: red; font-size: 50px;">' + word + '</span>' + " does not exist in orignal the string";
    }
};

function replacetheword() {

    let newOrignalText = originalText.toLowerCase();
    let word = document.getElementById("inputField").value;
    if (!word) {
        alert("please type a word to be Replace");
        return;
    }
    let replacewith = prompt("Enter a word to be inserted instead of " + word)
    if (!replacewith) {
        alert('please type a word to replace it with ' + word)
        return;
    }
    word = word.toLowerCase();
    word = new RegExp(word, 'g');
    replacewith = replacewith.toLowerCase();

    let replaceword = newOrignalText.replace(word, replacewith)

    document.getElementById("displayOutput").innerHTML = replaceword;

};
