console.log("workikng")

// Loops - for , while , do while, for each, for-in

/*for (let i = 10; i <= 20; i++) {
    console.log(i)
}

let a = 10;
while (a > 0) {
    console.log(a);
    a--;
}
*/
//using for loop try to the multiple of 2 till 20 from 2

/*for (let b = 1; b <= 10; b++) {
    console.log(2 * b);
}
let d = 1;
while (d <= 10) {
    console.log(2 * d);
    d++;
}*/

let c = 2;
do {
    console.log(c);
    c = c + 2;
} while (c <= 20);

//for in Loop - uesd to fetch the indexs of the array 
let name = "Ravi"
    // if our value are n then our indexs are n-1
let tourists = ["Nikhil", "ram", "raj", "sid"];
for (let a in tourists) {
    console.log(a);
}

//for - of loop - uesd to fetch the indexs of the array 

for (let value of tourists) {
    console.log(value);
}

//for each loop - 

tourists.forEach((index, value) => { /// the first parameter accepts the values of the array and the second parameter accepts the indexes of the array 
    console.log(value, index);
    console.log(index, value);
})