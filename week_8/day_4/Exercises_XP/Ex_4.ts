function getFirstElement(arr: (number | string)[]): string {
    return arr[0] as string;
  }
  
  console.log(getFirstElement([1, 2, 3]));      // "1"
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  