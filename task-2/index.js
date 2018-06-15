/**
 * Проверяет состоят ли массивы arr1 и arr2 из одинакового
 * числа одних и тех же элементов
 *
 * @param {Number[]} arr1 - отсортированный по возрастанию
 *                          массив уникальных элементов
 * @param {Number[]} arr2 - массив произвольной длинны произвольных чисел
 * @returns {Boolean}
 */
function haveSameItems(arr1, arr2) {

  if (arr1.length!=arr2.length) return false; 
  var arr2_sort=arr2;
  arr2_sort.sort(function(a, b){return a-b});
  for (var i=0; i<arr1.length;i++) {
    if (arr1[i]!=arr2_sort[i]) return false;
  }


  return true;
}

export default haveSameItems;
