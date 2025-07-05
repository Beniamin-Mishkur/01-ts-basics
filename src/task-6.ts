function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
  const firstNumber = getFirstElement<number>([1, 2, 3]);           // number
  const firstString = getFirstElement<string>(["a", "b", "c"]);     // string
const firstBoolean = getFirstElement<boolean>([true, false, true]); // boolean
  
const firstMixed = getFirstElement<number | string | boolean>([1, "a", true]);
  
  console.log(firstNumber);   // 1
  console.log(firstString);   // "a"
  console.log(firstBoolean);  // true
  
  getFirstElement([1, "a", true]); 
  