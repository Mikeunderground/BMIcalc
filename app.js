/// Gather inputs
let submit = document.getElementById("submit");
let results = document.getElementById("results");
let bmi = 0;

// BMI function BMI = weight(ikg)/height^2(meters) ---- 65, 1.8 == around 20
function bmiFunction() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  console.log("clicked");
  console.log(height, weight);

  let bmi = weight / Math.pow(height, 2);
  console.log(bmi);
  results.innerHTML = bmi;
  return bmi;
}

submit.addEventListener("click", bmiFunction);
