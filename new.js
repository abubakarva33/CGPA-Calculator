

const subject = document.getElementById('subject');
const creditNumber = document.getElementById('number');
const marks = document.getElementById('marks');


const markSheet = []

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
  const numbers = document.getElementsByClassName('number')
  const marks = document.getElementsByClassName('marks')

  for (let i = 0; i < subjects.length; i++) {
    const subject = subjects[i]
    subjectIndividual = subject.value
    markSheet[i] = {
      ...markSheet[i],
      subject: subject.value
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    subjectIndividual = number.value
    markSheet[i] = {
      ...markSheet[i],
      number: number.value
    }
  }

  for (let i = 0; i < marks.length; i++) {
    const mark = marks[i]
    subjectIndividual = marks.value
    markSheet[i] = {
      ...markSheet[i],
      mark: mark.value
    }
  }




  let credit = 0
  let number = 0
  // let subject = ''

  markSheet.forEach(item => {
    credit += Number(item.number)
    number += cgpaCalculator(Number(item.mark)) * Number(item.number)
  })
  document.getElementById('total-credit').innerText = credit
  document.getElementById('total-points').innerText = number
  document.getElementById('cgpa').innerText = (number / credit).toFixed(2)
  document.getElementById('result-commnent').innerText = isPassed(number / credit);


  document.getElementById('marksheetBtn').classList.remove('d-none');
  document.getElementById('add-morebtn').setAttribute('disabled', '');
  const marksheetTable = document.getElementById('marksheetTable');

  marksheetTable.innerHTML = ''

  markSheet.forEach(item => {
    console.log(item);
    const marksheetRow = document.createElement('tr')
    marksheetRow.innerHTML = `
      <td id="marksheetSubject" class="marksheetSubject">${item.subject}</td>
      <td id="marksheetMarks"> ${item.mark} </td>
      <td id="marksheetPoints"> ${cgpaCalculator(Number(item.mark))} </td>
      <td id="marksheetGrade">${gradeCalculator(Number(item.mark))}</td>
      <td id="marksheetStatus">${isPassed(cgpaCalculator(Number(item.mark)) * Number(item.number)/Number(item.number))}</td>
    `
    marksheetTable.appendChild(marksheetRow);
  })

})

document.getElementById('marksheetBtn').addEventListener('click', function () {
  document.getElementById('marksheet').classList.remove('d-none')

})

















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
  console.log(marks)
  if (marks < 40) {
    return "F"
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
  console.log(marks)
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