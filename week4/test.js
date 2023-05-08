const readline = require("readline");

// Node class definition
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

// Insert function
function insert(root, val) {
  if (root === null) {
    return new Node(val);
  }
  if (val === root.val) {
    root.count++;
  } else if (val < root.val) {
    root.left = insert(root.left, val);
  } else {
    root.right = insert(root.right, val);
  }
  return root;
}

// Search function
function search(root, val) {
  if (root === null) {
    return 0;
  }
  if (val === root.val) {
    return root.count;
  } else if (val < root.val) {
    return search(root.left, val);
  } else {
    return search(root.right, val);
  }
}

// Binary tree creation
let root = null;
root = insert(root, "apple");
root = insert(root, "banana");
root = insert(root, "cherry");
root = insert(root, "banana");
root = insert(root, "date");
root = insert(root, "cherry");
root = insert(root, "apple");

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
  let count = search(root, word);
  if (count === 0) {
    console.log("The word does not exist.");
  } else {
    console.log(`The word '${word}' appears ${count} times in the binary tree.`);
  }
  readInterface.prompt();
}).on("close", () => {
  console.log("Exiting program.");
  process.exit(0);
});

readInterface.prompt();

