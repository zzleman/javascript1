//Task1
let numbers=[-3,8,7,6,5,-4,3,2,1]
numbers.sort(
    function(a,b){
        return a-b;
    }
)
console.log(numbers);

//Task2
const myArray2 =[[1, 2, 3], [100, 2, 1, 10]]
const flatArray = myArray2.flat();
const sortArray= flatArray.sort(
    function(a,b){
        return a-b;
    }
);
const notDuplicate = sortArray.filter((element, index) => {
    return sortArray.indexOf(element) === index;
});
console.log(notDuplicate);

//Task3
const myArray3=[NaN, 0, 15, false, -22, '',undefined, 47, null]
const removeElements = [null, 0, '', false, undefined,NaN]

function cleanArray(original, removeElements) {
    return original.filter(value => !removeElements.includes(value));
}
console.log(cleanArray(myArray3,removeElements));

//Task4
let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
    ];
    let sortTitle = library.slice(0);
    sortTitle.sort(function(a,b) {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });
    console.log(sortTitle);

//Task5
const myArray4 =[2,4,8,16,32]
function Chain(myArray){
    for (let index = 0; index < myArray4.length-1; index++) {
        if(myArray[index+1]%myArray4[index]!=0){
            return false;
        }
    }
    return true;
}
console.log(Chain(myArray4));
