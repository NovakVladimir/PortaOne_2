const input = document.getElementById("file");
let output = document.getElementById("output");
let fileReader;

const grow = (ar) => {
  let res = [];
  let subRes = [];
  for(let i = 0; i < ar.length-1; i++) {
      if(ar[i] < ar[i+1]) {
          subRes.push(ar[i]);
          if(i === ar.length-2) {
              subRes.push(ar[i+1]);
              res = subRes.length > res.length ?
              subRes : res;
          }
      }
      else {
          subRes.push(ar[i]);
          if(subRes.length > res.length) {
              res = subRes.slice();
              subRes = [];
          } else {
              subRes = []
          }
      }
  }
  return res.join(", ");
}

const fall = (ar) => {
  let res = [];
  let subRes = [];
  for(let i = 0; i < ar.length-1; i++) {
    subRes.push(ar[i]);
    if(ar[i] > ar[i+1]) {
        if(i === ar.length-2) {
              subRes.push(ar[i+1]);
              res = subRes.length > res.length ? subRes : res;
          }
      }
      else {
          if(subRes.length > res.length) {
              res = subRes.slice();
          } 
          subRes = []
      }
  }
  return res.join(", ");
}

const makeResult = (inputData) => {
  let changeInputData= inputData.split("\n").map(el=>+el);
  let middle = changeInputData.reduce((sum,el) => sum+=el,0) / changeInputData.length;
  let growSubsequence = grow(changeInputData);
  let fallSubsequence = fall(changeInputData);
  let sortArray = changeInputData.sort((a,b)=>a-b);
  let maximal =  sortArray[sortArray.length-1];
  let minimal = sortArray[0];
  let mediana =  sortArray.length%2===0? ( sortArray[ sortArray.length/2-1] +  sortArray[ sortArray.length/2])/2 
  :  sortArray[(sortArray.length-1)/2]
  
  return [maximal, minimal, mediana, middle, growSubsequence, fallSubsequence];
}



// Block for reading file and start all functions

const handleFileReader = (e) => {
    let result = makeResult(fileReader.result);
    const name = ["1. Максимальне число в файлі: ", "2. Мінімальне число в файлі: ", "3. Медіана: ", "4. Cереднє арифметичне значення: ", "5. Найбільша послідовність чисел (які ідуть один за одним), яка збільшується: ", "6. Найбільша послідовність чисел (які ідуть один за одним), яка зменшується: "];
    result = result.map((el,ind) => `${name[ind]} ${el};`).join("\n");
    console.log(result);
    output.innerText = result;
}

const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileReader;
    return fileReader.readAsText(file);
}

input.addEventListener("change", (e) => handleFileChosen(e.target.files[0]));