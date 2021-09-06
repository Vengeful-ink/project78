var fruits=[
    "pomogranite",
    "strawberry",
    "chiku"
];
console.log(fruits);
document.getElementById("fruits").innerHTML=fruits;
document.getElementById("secondfruit").innerHTML=fruits[1];
console.log(fruits.length);
var was="";
for(var i=0; i<fruits.length;i++){
    console.log(fruits[i]);
    was=was+fruits[i]+"<br>";
}
document.getElementById("loopy").innerHTML=was;
fruits.push("mango");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);
fruits.unshift("rasberry");
console.log(fruits);
fruits.shift();
console.log(fruits);