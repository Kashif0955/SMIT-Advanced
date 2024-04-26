function calculateGrade() {
    const subject1 = parseFloat(document.getElementById('sub1').value);
    const subject2 = parseFloat(document.getElementById('sub2').value);
    const subject3 = parseFloat(document.getElementById('sub3').value);
    const subject4 = parseFloat(document.getElementById('sub4').value);
    const subject5 = parseFloat(document.getElementById('sub5').value);
    const subject6 = parseFloat(document.getElementById('sub6').value);
  
    const average = (subject1 + subject2 + subject3 + subject4 + subject5 + subject6) / 3;
  
    let grade;
  
    if (average >= 90) {
      grade = 'A';
    } else if (average >= 80) {
      grade = 'B';
    } else if (average >= 70) {
      grade = 'C';
    } else if (average >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    document.getElementById('result').innerHTML = `Your average grade is ${average.toFixed(2)} (${grade})`;
  }
  