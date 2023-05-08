const readline = require("readline");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countOccurence(root, word) {
  if (root == null)
    return 0;

  let occurence = 0;
  if (root.value == word)
    occurence++;

  occurence += (countOccurence(root.left, word) + countOccurence(root.right, word));
  return occurence;
}


let root = new Node("start");
root.left = new Node("child");
root.right = new Node("steak");
root.left.left = new Node("movie");
root.left.right = new Node("menu");
root.right.left = new Node("map");
root.right.right = new Node("pizza");
root.left.left.left = new Node("steak");
root.left.left.right = new Node("child");
root.left.right.left = new Node("pizza");
root.left.right.right = new Node("steak");
root.right.left.left = new Node("start");
root.right.left.right = new Node("pizza");
root.right.right.left = new Node("menu");
root.right.right.right = new Node("steak");
root.left.left.right.left = new Node("map");
root.left.left.right.right = new Node("menu");
root.right.left.left.left = new Node("child");
root.right.left.left.right = new Node("steak");
root.right.right.right = new Node("map");


// Create a readline interface
const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readInterface.setPrompt("Enter a word to check its occurrence: ");

readInterface.on("line", (word) => {
  if (word === "exit") {
    readInterface.close();
    return;
  }
  let count = countOccurence(root, word);
  if (count === 0) {
    console.log("The word does not exist.");
  } else {
    console.log(`The word '${word}' appears ${count} times.`);
  }
  readInterface.prompt();
}).on("close", () => {
  console.log("Exiting program.");
  process.exit(0);
});

readInterface.prompt();

