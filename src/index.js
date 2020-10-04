module.exports = function toReadable (number) {
  arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  arr3 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  if (number < 20) return arr1[number]; //1-19
  if (number < 100 && String(number)[1] === '0') return arr2[Number(String(number)[0]) - 2]; // 20-90
  if (number < 100) return arr2[Number(String(number)[0]) - 2] + ' ' + arr1[Number(String(number)[1])]; // 21-99
 
  if (number > 99 && String(number).slice(1) == '00') return arr3[Number(String(number)[0]) - 1]; //100-900
  if (number > 100 && Number(String(number).slice(1)) < 20) return arr3[Number(String(number)[0]) - 1] + ' ' + arr1[Number(String(number).slice(1))]; //101-919
  if (number > 119 && String(number)[2] === '0') return arr3[Number(String(number)[0]) - 1] + ' ' + arr2[Number(String(number)[1]) - 2]; //120-990
  if (number > 120) return arr3[Number(String(number)[0]) - 1] + ' ' + arr2[Number(String(number)[1]) - 2] + ' ' + arr1[Number(String(number)[2])]; //121-999
}
