function getSolution(a,b,c){
  let d = b**2 - 4*a*c;
  if (d < 0){
    return {D: d, roots: []};
  } else if(d === 0){
    let x1 = -b / (2 * a);
    return {D: d, roots: [x1]};
  }else if (d > 0){
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    return {D: d, roots: [x1, x2]};
  };
    
}
getSolution(2,4,5)

function showSolutionMessage(a,b,c){
  let result = getSolution(a,b,c);
 
  console.log(`Вычесляем корни квадратного уравнения ${a}x**2 + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D} `);
  if(result.D < 0){
    console.log("Уравнение не имеет вещественных корней");
  }else if(result.D == 0){
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if(result.D > 0){
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  };
}
showSolutionMessage(7,20,-3) 


function getAverageScore(data){
  let averageScore = {};
  for(let subject in data){
    averageScore[data] = getAverageMark(data[subject]);
  };
  let averageScoreArrey = [];
  for (let subject in averageScore){
    averageScoreArrey.push(averageScore[subject])
  }
  averageScore.average = getAverageMark(averageScoreArrey);
  return averageScore;
}

function getAverageMark(marks){
  let sumMarks = 0;
  let averageMark = 0;
  if(marks.length === 0){
    return 0;
  }
  for(let i = 0; i < marks.length; i++){
    if(!marks[i]) continue;
    sumMarks += marks[i];
  }
  averageMark = sumMarks / marks.length;
  return averageMark;
}



function getPersonData(secretData){
  let personData = {};

  let secertData = {
  aaa: 0,
  bbb: 0
  }; 

  if("aaa" in secretData){
    personData.firstName = SecretData.aaa;
  };

 if("bbb" in secretData){
    personData.firstName = SecretData.bbb;
  };

  let secret;

for (let property in personData) {
    secret = personData[property]; 
    personData[property] = getDecodedValue(secret); 
  };
}

  function getDecodedValue(secret){
    if(secret === 0){
      return "Родриго";
    } else if(secret === 1){
      return "Эмильо";
    };
  return personData;
}  
getDecodedValue()
