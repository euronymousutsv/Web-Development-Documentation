let array1 = ["Hari", "Ram", "sam", "John"];
console.log(array1)
let modified_array = array1.slice(1,2)  // array.slice(start-index, end-index);
console.log(array1) // original array is not modified
console.log(modified_array) // used in extracting specific data from array.
array1.splice(2,1,"sita","gita"); // array.splice(start, number-of-items-to-remove, "add-item 1", "add-item-2", "add-item-n")
console.log(array1) // original array is modified
