const input = document.getElementById("file");
let fileReader;

const handleFileReader = (e) => {
    const content = fileReader.result;
    console.log(content);
}

const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileReader;
    return fileReader.readAsText(file);
}

input.addEventListener("change", (e) => handleFileChosen(e.target.files[0]));




// btn.addEventListener("", () => importFromFile());

// let newAdress = "./output.txt";
// let newRes;
// const showResult = (res) => console.log(res);

// btn.addEventListener("click", () => fetch('./output.txt').then(response=>response.text())
// .then(result => newRes = result.toString().split("\n").map(el=>+el))
// .then(console.log(newRes)));
// getResponse('./output.txt'));               

// btn.addEventListener("click", async function takeResponse() {
//   let response = await fetch(newAdress);
//   let json = (await response).text();
//   await showResult(json.body);
// });

// const fs  = require("fs");
// const readFile = () => fs.readFileSync("./10m.txt").toString();

// const grow = (ar) => {
//   let res = [];
//   let subRes = [];
//   for(let i = 0; i < ar.length-1; i++) {
//       if(ar[i] < ar[i+1]) {
//           subRes.push(ar[i]);
//           if(i === ar.length-2) {
//               subRes.push(ar[i+1]);
//               res = subRes.length > res.length ?
//               subRes : res;
//           }
//       }
//       else {
//           subRes.push(ar[i]);
//           if(subRes.length > res.length) {
//               res = subRes.slice();
//               subRes = [];
//           } else {
//               subRes = []
//           }
//       }
//   }
//   return res.join(", ");
// }

// const fall = (ar) => {
//   let res = [];
//   let subRes = [];
//   for(let i = 0; i < ar.length-1; i++) {
//     subRes.push(ar[i]);
//     if(ar[i] > ar[i+1]) {
//         if(i === ar.length-2) {
//               subRes.push(ar[i+1]);
//               res = subRes.length > res.length ? subRes : res;
//           }
//       }
//       else {
//           if(subRes.length > res.length) {
//               res = subRes.slice();
//           } 
//           subRes = []
//       }
//   }
//   return res.join(", ");
// }

// function makeResult(inputData) {
//   let changeInputData= inputData.split("\n").map(el=>+el);
//   let middle = changeInputData.reduce((sum,el) => sum+=el,0) / changeInputData.length;
//   let growSubsequence = grow(changeInputData);
//   let fallSubsequence = fall(changeInputData);
//   let sortArray = changeInputData.sort((a,b)=>a-b);
//   let maximal =  sortArray[sortArray.length-1];
//   let minimal = sortArray[0];
//   let mediana =  sortArray.length%2===0? ( sortArray[ sortArray.length/2-1] +  sortArray[ sortArray.length/2])/2 
//   :  sortArray[(sortArray.length-1)/2]
  
//   return [maximal, minimal, mediana, middle, growSubsequence, fallSubsequence].join("\n")
// }

// function createFile(data) {
//     fs.writeFile('./output.txt', data, function (err) {
//       if (err) {return console.log(err);}
//       console.log('file created');
//     });
//   }
// let data = readFile();
// let newData = makeResult(data);
// createFile(newData);