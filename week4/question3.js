const readline = require('readline');

// create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// prompt user for input text
rl.question('Enter one or more paragraphs of text: ', (text) => {

    // create an empty object to store word frequencies
    const wordFrequencies = {};

    // split the input text into an array of words
    const words = text.toLowerCase().match(/\b\w+\b/g);

    // count the frequency of each word
    for (let i = 0; i < words.length; i++) {
        if (wordFrequencies[words[i]]) {
            wordFrequencies[words[i]] += 1;
        } else {
            wordFrequencies[words[i]] = 1;
        }
    }

    // convert word frequencies object to array of [word, frequency] pairs
    const frequencyPairs = Object.entries(wordFrequencies);

    // sort frequency pairs in descending order of frequency
    frequencyPairs.sort((a, b) => b[1] - a[1]);

    // print word cloud
    console.log('WORD CLOUD:');
    for (let i = 0; i < frequencyPairs.length; i++) {
        const [word, frequency] = frequencyPairs[i];
        console.log(`${word}: ${frequency}`);
    }

    // close readline interface
    rl.close();
});
