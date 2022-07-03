window.addEventListener("load",function() { // on page load
    document.getElementById("myForm").addEventListener("submit",function(e) { // on submit
      e.preventDefault(); // stop submission
      // get values - the + converts a string containing a number to a number
      var age = +document.getElementById("age").value || 0; // if nothing entered make it 0
      var h = +document.getElementById("height").value || 0; // if nothing entered make it 0
      var w = +document.getElementById("weight").value || 0; // if noting entered make it 0
      var sos = +document.getElementById("sos").value || 0; // if noting entered make it 0
      if (isNaN(age)) age = 0;
      if (isNaN(h)) h = 0;
      if (isNaN(w)) w = 0;
      if (isNaN(sos)) sos = 0; 

        var bmi = w/(h*h);
        var y = 19.73603+(age*0.049293)+(bmi*-0.0117344)+(sos*-0.0146625); 
        var x = Math.pow (2.71828183, y);
        var z = x+1;
        var prob = 100*(x / z);

        var round = Math.round(prob*100)/100;

       document.getElementById("probability").innerHTML = round;
      
    })    
  })