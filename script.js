const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const Height = parseInt(document.querySelector('#Height').value)
    const Weight = parseInt(document.querySelector('#Weight').value)
    const Result = document.querySelector('#Result')
    const Conclusion = document.querySelector('#Conclusion')

    Result.style.display = 'none'; // Hide initially
    Conclusion.style.display = 'none'; // Hide initially

    if(Height === '' || Height < 0 || isNaN(Height)){
        Result.innerHTML = `Please enter a Valid Height.`
        Result.style.display = 'block'; // Show Result
    } else if(Weight === '' || Weight < 0 || isNaN(Weight)){
        Result.innerHTML = `Please enter a valid Weight`
        Result.style.display = 'block'; // Show Result
    }else {
        const bmi = (Weight / ((Height*Height) / 10000)).toFixed(2)
        Result.innerHTML = `<span> Your BMI Index is : ${bmi}</span>`
        Result.style.display = 'block'; // Show Result
        
        // Conclusion:
        if(bmi < 18.6){
            Conclusion.innerHTML = `You are Under Weight, You should gain your Weight`
        }else if (bmi > 24.9){
            Conclusion.innerHTML = ` You are Over Weight, You should lose you Weight `
        }else{
            Conclusion.innerHTML = ` Great You have a Good Physique `
        }
        Conclusion.style.display = 'block';
    }
})