/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
  const result = [[]];
  for (var i=0;i<n;i++){result[i]=[]};
  var c=1; // data to insert
  var i=0;
  var j=0;

  // lev уровень погружения в матрицу. 0 - внешний круг начинаем проход с (0,0), 1 - начинаем с (1,1) 
  for (var lev=0; lev<n/2;lev++) 
    { 
    i=lev;
    for (j=lev;j<n-lev-1;j++) {result[i][j]=c; c++;};
    for (i=lev;i<n-lev-1;i++) {result[i][j]=c; c++;};
    for (j=n-lev-1;j>lev;j--) {result[i][j]=c; c++;};
    for (i=n-lev-1;i>lev;i--) {result[i][j]=c; c++;};
    }
    lev--;
    // если разменость нечетное доставляем последний элемент в центр
    if (n%2!=0) {result[lev][lev]=c;}

  
  return result;
}

export default fillSpiralMatrix;
