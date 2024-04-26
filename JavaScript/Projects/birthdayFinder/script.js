function calculate() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();
    
    var nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    
    var diff = nextBirthday - today;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var months = Math.floor(days / 30.44); // average number of days in a month
    var seconds = Math.floor(diff / 1000);
    
    var age = today.getFullYear() - birthdate.getFullYear();
    
    document.getElementById("result").innerHTML = `
      <p>Remaining time until your next birthday: ${days} days (${seconds} seconds)</p>
      <p>Your age: ${age} years</p>
      <p>You have lived approximately ${months} months</p>
    `;
  }
  