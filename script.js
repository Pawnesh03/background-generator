const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

let newArray=[];
const eachArray = array.forEach ((num)=> {
    let str=num.username;
    if(str.includes("s"))
    {
        newArray.push(str);
    }
});

console.log(newArray);


const filterArray = array.filter(user => {
    return user.team === "red";
})
console.log(filterArray);