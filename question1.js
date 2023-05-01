class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countFullNodes(root)
{
    if (root == null)
    return 0;

    let fullNodesCount = 0;
    if (root.left != null && root.right != null)
    fullNodesCount++;

    fullNodesCount += (countFullNodes(root.left) + countFullNodes(root.right));
    return fullNodesCount;
}


let root = new Node(5);
root.left = new Node(4);
root.right = new Node(7);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right.left = new Node(5);
root.right.right = new Node(8);
root.left.left.left = new Node(2);
root.left.left.right = new Node(6);
root.right.right.left = new Node(6);
root.right.right.right = new Node(9);


console.log(countFullNodes(root));

