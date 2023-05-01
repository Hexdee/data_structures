function generateOddBinary(n) {
    let q = [];
 
    q.push("1");
 
    while (n--) {
        let s1 = q[0];
        q.shift();
       	s1.slice(-1) == "1" && console.log(s1);
 
        q.push(s1+"0");
        q.push(s1+"1");
    }
}
 
let n = 10;
generateOddBinary(n);
