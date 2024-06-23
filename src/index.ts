const countryInput : HTMLElement | any = document.querySelector(".countryInput");

const suggestionsContainer : HTMLElement | any = document.querySelector(".suggestions");

const countries = [
    "Россия",
    "США",
    "Китай",
    "Индия",
    "Бразилия",
    "Германия",
    "Япония",
    "Франция",
    "Великобритания",
    "Италия"
];

countryInput.addEventListener('input', function() {
    const userInput = countryInput.value.toLowerCase();
    const matchingCountries = countries.filter(country => country.toLowerCase().startsWith(userInput));
    renderSuggestions(matchingCountries);
});

function renderSuggestions(suggestions: any) {
    suggestionsContainer.innerHTML = '';
    if (suggestions.length > 0) {
        suggestions.forEach((el : string) => {
            const div = document.createElement('div');
            div.textContent = el;
            div.classList.add('suggestion');
            div.addEventListener('click', function() {
                countryInput.value = el
                suggestionsContainer.innerHTML = '';
            });
            suggestionsContainer.appendChild(div);
        });
        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
}

document.addEventListener('click', function(e) {
    if (!suggestionsContainer.contains(e.target) && e.target !== countryInput) {
        suggestionsContainer.style.display = 'none';
    }
});


