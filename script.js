function BMI(weight, height,) {
    return weight / (height * height);
}

console.log(BMI());

function Status(bmi) {
    if (bmi < 18.5) {
        return "لديك نقص زائد";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        return "وزنك صحي";
    }
    else {
        return "لديك زيادة وزن";
    }

}

function calculate() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmiResult = BMI(weight, height);
    let desc = Status(bmiResult);
    document.getElementById("result").innerText = bmiResult, desc;
    if (bmiResult < 18.5) {
        return document.getElementById("result").style.color = "orange";
    }
    else if (bmiResult >= 18.5 && bmiResult < 25.0) {
        return document.getElementById("result").style.color = "green";
    }
    else {
        return document.getElementById("result").style.color = "red";
    }
}

