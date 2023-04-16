
// const inputTable = document.getElementById('input-table');
// const div = document.createElement('table');
// div.classList.add('table')
// div.innerHTML= `

// `
// inputTable.appendChild(div);


const subject = document.getElementById('subject');
const creditNumber = document.getElementById('number');
const marks = document.getElementById('marks');

document.getElementById('add-more').addEventListener('submit', function (e) {
  e.preventDefault()
  if (!subject.value || !creditNumber.value || !marks.value) {
    alert('Please Enter information first')
    return
  }
  // else if (marks.value > 100 || marks.value < 0) {
  //   alert('Please Enter Valid Marks')
  //   return
  // }
  else {
    const tBody = document.getElementById('tBody');
    const row = document.createElement('tr');
    row.classList.add('mb-2')
    row.innerHTML = `
      <td class="border"> 
        <input type="text" name="" required id="" class="w-100 subject" placeholder="Enter Subject Name">
      </td>
      <td scope="row" class="border">
        <input type="number" name="" required id="" class="w-100 number" placeholder="Enter Credit Number"></td>
      <td class="border">
        <input type="number" name="" required id="" class="w-100 marks" placeholder="Enter Marks Obtained">
      </td>
  `
    tBody.appendChild(row);

    const marksheetTable = document.getElementById('marksheetTable');
    const marksheetRow = document.createElement('tr')
    marksheetRow.innerHTML = `
              <td>${subjectIndividual}</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>N/A</td>
    `
    marksheetTable.appendChild(marksheetRow);
  }
})

let subjectIndividual;
let numberIndividual;
let markIndividual;
document.getElementById('calculate').addEventListener('click', function () {
  const subjects = document.getElementsByClassName('subject')
  for (const subject of subjects) {
    subjectIndividual= subject.value
  }

  const numbers = document.getElementsByClassName('number')
  for (const number of numbers) {
    numberIndividual= number.value
  }

  const marks = document.getElementsByClassName('marks')
  for (const mark of marks) {
    markIndividual = mark.value
  }

  const totalCredit = document.getElementById('total-credit').innerText = (Number(numberIndividual)).toFixed(2);
  const totalPoints = document.getElementById('total-points').innerText = (Number(totalCredit * cgpaCalculator(markIndividual))).toFixed(2);
  const cgpa = document.getElementById('cgpa').innerText = (totalPoints / totalCredit).toFixed(2);
  document.getElementById('result-commnent').innerText = isPassed(cgpa);

  document.getElementById('marksheetSubject').innerText = subjectIndividual;
  document.getElementById('marksheetMarks').innerText = markIndividual;
  document.getElementById('marksheetPoints').innerText = totalPoints;
  document.getElementById('marksheetGrade').innerText = gradeCalculator(markIndividual);
  document.getElementById('marksheetStatus').innerText = isPassed(cgpa);

  document.getElementById('marksheetBtn').classList.remove('d-none');
  document.getElementById('add-morebtn').setAttribute('disabled', '');
  const marksheetTable = document.getElementById('marksheetTable');
  const marksheetRow = document.createElement('tr')
  marksheetRow.innerHTML = `
            <th scope="row" colspan="4">TOTAL</th>
            <td>N/A</td>
  `
  marksheetTable.appendChild(marksheetRow);
  
})

document.getElementById('marksheetBtn').addEventListener('click', function () {
  document.getElementById('marksheet').classList.remove('d-none')
  
})



/* document.getElementById('calculate').addEventListener('click', function () {
  const marks = Number(document.getElementById('marks').value);
  const totalCredit = document.getElementById('total-credit').innerText = (Number(document.getElementById('number').value)).toFixed(2);
  const totalPoints = document.getElementById('total-points').innerText = (Number(totalCredit * cgpaCalculator(marks))).toFixed(2);
  const cgpa = document.getElementById('cgpa').innerText = (totalPoints / totalCredit).toFixed(2);
  document.getElementById('result-commnent').innerText = isPassed(cgpa);


  document.getElementById('marksheetSubject').innerText = subject.value;
  document.getElementById('marksheetMarks').innerText = marks;
  document.getElementById('marksheetPoints').innerText = totalPoints;
  document.getElementById('marksheetGrade').innerText = gradeCalculator(marks);
  document.getElementById('marksheetStatus').innerText = isPassed(cgpa);

  const marksheetTable = document.getElementById('marksheetTable');
  const marksheetRow = document.createElement('tr')
  marksheetRow.innerHTML = `
            <th scope="row" colspan="4">TOTAL</th>
              <td>N/A</td>
  `
  marksheetTable.appendChild(marksheetRow);
  document.getElementById('marksheetBtn').classList.remove('d-none');

})

document.getElementById('marksheetBtn').addEventListener('click', function () {
  document.getElementById('marksheet').classList.remove('d-none')
})
 */















function isPassed(cgpa) {
  if (cgpa < 2.00) {
    return "Failed"
  }
  else if (cgpa >= 2.00 && cgpa <= 4.00) {
    return "Passed"
  }
  else {
    return 'Invalid'
  }
}


function gradeCalculator(marks) {
  if (marks < 40) {
    return "Failed"
  }
  else if (marks >= 40 && marks < 45) {
    return "D"
  }
  else if (marks >= 45 && marks < 50) {

    return "C";
  }
  else if (marks >= 50 && marks < 55) {
    return "C+";
  }
  else if (marks >= 55 && marks < 60) {
    return "B-";
  }
  else if (marks >= 60 && marks < 65) {
    return "B";
  }
  else if (marks >= 65 && marks < 70) {
    return "B+";
  }
  else if (marks >= 70 && marks < 75) {
    return "A-";
  }
  else if (marks >= 75 && marks < 80) {
    return "A";
  }
  else if (marks >= 80 && marks <= 100) {
    return "A+";
  }
  else {
    return
  }
}




function cgpaCalculator(marks) {
  if (marks < 40) {
    return 0.00;
  }
  else if (marks >= 40 && marks < 45) {
    return 2.00;
  }
  else if (marks >= 45 && marks < 50) {
    return 2.25;
  }
  else if (marks >= 50 && marks < 55) {
    return 2.50;
  }
  else if (marks >= 55 && marks < 60) {
    return 2.75;
  }
  else if (marks >= 60 && marks < 65) {
    return 3.00;
  }
  else if (marks >= 65 && marks < 70) {
    return 3.25;
  }
  else if (marks >= 70 && marks < 75) {
    return 3.50;
  }
  else if (marks >= 75 && marks < 80) {
    return 3.75;
  }
  else if (marks >= 80 && marks <= 100) {
    return 4.00;
  }
  else {
    alert('Please Provide Valid Marks')
    return
  }
}