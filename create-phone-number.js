function createPhoneNumber(numbers){
//   convert array to string and remove commas
  numbers = numbers.toString().replace(/,/g, '');
  
//   store groups of digits in different variables
  const firstThree = numbers.slice(0,3);
  const secondThree = numbers.slice(3,6);
  const lastFour = numbers.slice(6,10);
  
//   return phone number
  return `(${firstThree}) ${secondThree}-${lastFour}`;
}