document.addEventListener("DOMContentLoaded", () => {
    let avkey = [
        'hello',
        'example',
        'big',
        'jjk', // Jujutsu Kaisen
        'black clover',
        'snowin',
        'naruto',
        'hellsing',
        'hellen keller',
        'how to.. ',
        'ksi',
        'speed',
        'demon slayer',
        'one piece',
        'bleach',
        'attack on titan',
        'death note',
        'fullmetal alchemist',
        'tokyo ghoul',
        'my hero academia',
        'one punch man',
        'dragon ball z',
        'naruto shippuden',
        'boruto',
        'fairy tail',
        'hunter x hunter',
        'sword art online',
        'cowboy bebop',
        'neon genesis evangelion',
        'samurai champloo',
        'fate stay night',
        'sailor moon',
        'yugioh',
        'pokemon',
        'digimon',
        'bakuman',
        'blue exorcist',
        'soul eater',
        'black butler',
        'ouran high school host club',
        'death parade',
        'akira',
        'ghost in the shell',
        'spirited away',
        'princess mononoke',
        'howls moving castle',
        'the garden of words',
        'weathering with you',
        'your name',
        'a silent voice',
        'erased',
        'steins;gate',
        'hellen mirren',
        'how to tie a tie',
        'how to cook rice',
        'how to lose weight',
        'how to gain muscle',
        'how to draw anime',
        'how to make sushi',
        'how to learn programming',
        'ksi fights',
        'ksi music',
        'ksi and logan paul',
        'ksi youtube',
        'speed running',
        'speed typing',
        'speed reading',
        'speed workout',
        'fast cars',
        'formula 1',
        'nascar',
        'drag racing',
        'hellboy',
        'hellraiser',
        'hello kitty',
        'hello world'
    ];
    

    const resultbox = document.querySelector('.result-box');
    const inputbox = document.getElementById("search");

    inputbox.onkeyup = function() {
        let result = [];
        let input = inputbox.value;
        if (input.length) {
            result = avkey.filter((keyword) => {
                return keyword.toLowerCase().includes(input.toLowerCase());
            });
        }
        display(result);
    }

    function display(result) {
        if (result.length) {
            const content = result.map((list) => {
                return "<li>" + list + "</li>";
            }).join('');
            resultbox.innerHTML = "<ul>" + content + "</ul>";
            addClickEvents();
        } else {
            resultbox.innerHTML = '';
        }
    }

    function addClickEvents() {
        const items = resultbox.querySelectorAll('li');
        items.forEach((item) => {
            item.addEventListener('click', () => {
                inputbox.value = item.textContent;
                resultbox.innerHTML = '';
            });
        });
    }
});
