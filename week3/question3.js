class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function calculateSumDifference(root) {
	sum1 = root.value + root.left.value + root.right.value;
	
	let totalSum = 0;
	let q = []
	q.push(root)

	while(q.length != 0) {
		let temp = q.shift();
		totalSum += temp.value;
		if(temp.left != null) {
			q.push(temp.left);
		}
		if(temp.right != null) {
			q.push(temp.right);
		}
	}

	let sum2 = totalSum - sum1;

	return sum1 - sum2;

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


console.log(calculateSumDifference(root));

