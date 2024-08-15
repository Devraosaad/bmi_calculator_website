// const form = document.querySelector('form')
// form.addEventListener('submit',function(e){
//     e.preventDefault()
//    const height =  parseInt(document.querySelector('#height').value)
//    const weight =  parseInt(document.querySelector('#weight').value)
//    const result =  document.querySelector('#result').value
//    if (height ===" " || height < 0 || isNaN(height)){
//     result.innerHTML = 'plz enter the valid height ';
//    }
//    else if (weight === " " || weight < 0 || isNaN(weight)){
//     result.innerHTML = 'plz enter the valid weight ';
//    }
//    else{
//     const BMI = (weight / ((height * height )/1000)).toFixed(2)
//     result.innerHTML = <span>`${BMI}`</span>;
//    }

// });


// //===========================================================
 const form = document.querySelector('#bmiForm');
 form.addEventListener('submit', function(e) {
     e.preventDefault();
     const height = parseFloat(document.querySelector('#height').value);
     const weight = parseFloat(document.querySelector('#weight').value);
     const result = document.querySelector('#result');

     if (!height || height <= 0 || isNaN(height)) {
         result.innerHTML = 'Please enter a valid height.';
     } else if (!weight || weight <= 0 || isNaN(weight)) {
         result.innerHTML = 'Please enter a valid weight.';
     } else {
         const BMI = (weight / (height * height)/10000).toFixed(2);
         result.innerHTML = `Your BMI is <span>${BMI}</span>`;
     }
 });

 //=====================================================================
//  document.querySelector('#bmiForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const height = parseFloat(document.querySelector('#height').value);
//     const weight = parseFloat(document.querySelector('#weight').value);
//     const result = document.querySelector('#result');

//     if (!height || height <= 0 || isNaN(height)) {
//         result.textContent = 'Please enter a valid height.';
//     } else if (!weight || weight <= 0 || isNaN(weight)) {
//         result.textContent = 'Please enter a valid weight.';
//     } else {
//         const BMI = (weight / (height * height)).toFixed(2);
//         result.innerHTML = `Your BMI is <span>${BMI}</span>`;
//     }
// });
