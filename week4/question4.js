const readline = require('readline');

const dictionary = ['lake', 'hair', 'year', 'road', 'tale', 'food', 'map', 'ear', 'poet', 'hall', 'sir', 'menu', 'son', 'art', 'exam', 'city', 'ad', 'goal', 'gene', 'way', 'math', 'dirt', 'loss', 'debt', 'dad', 'mall', 'love', 'fact', 'town', 'king', 'oven', 'song', 'lady', 'area', 'mode', 'girl', 'gate', 'bird', 'poem', 'mom', 'news', 'meat', 'desk', 'bath', 'wife', 'data', 'wood', 'unit', 'idea', 'lab'];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string of letters: ', (input) => {
    let letters = input.split('');
    const validWords = [];

    for (const word of dictionary) {
        let lettersCopy = [...letters];
        let isValidWord = true;
        for (const letter of word) {
            let letterIndex = lettersCopy.indexOf(letter);
            if (letterIndex == -1) {
                isValidWord = false;
                break;
            } else {
                lettersCopy.splice(letterIndex, 1);
            }
        }
        if (isValidWord) {
            validWords.push(word);
            letters = [...lettersCopy];
        }
    }

    console.log(`Matching words are [${validWords}] unused letters are ‘${letters.join("")}’.`);

    rl.close();
});
