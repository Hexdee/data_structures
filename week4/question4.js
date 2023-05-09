const readline = require('readline');

const dictionary = ['lake', 'hair', 'year', 'road', 'tale', 'food', 'map', 'ear', 'poet', 'hall', 'sir', 'menu', 'son', 'art', 'exam', 'city', 'ad', 'goal', 'gene', 'way', 'math', 'dirt', 'loss', 'debt', 'dad', 'mall', 'love', 'fact', 'town', 'king', 'oven', 'song', 'lady', 'area', 'mode', 'girl', 'gate', 'bird', 'poem', 'mom', 'news', 'meat', 'desk', 'bath', 'wife', 'data', 'wood', 'unit', 'idea', 'lab'];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string of letters: ', (input) => {
    const letters = input.split('');
    const usedLetters = new Set();
    const validWords = [];

    for (const word of dictionary) {
        const lettersCopy = [...letters];
        let isValidWord = true;
        for (const letter of word) {
            if (!lettersCopy.includes(letter)) {
                isValidWord = false;
                break;
            } else {
                usedLetters.add(letter);
                lettersCopy.splice(lettersCopy.indexOf(letter), 1);
            }
        }
        if (isValidWord) {
            validWords.push(word);
        }
    }

    console.log(`Valid words: ${validWords.join(', ')}`);
    console.log(`Unused letters: ${letters.filter(letter => !usedLetters.has(letter)).join(', ')}`);

    rl.close();
});
