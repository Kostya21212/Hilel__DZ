document.addEventListener("DOMContentLoaded", onReady);
function onReady() {
  const formNameDataEl =  document.getElementById('formInputData');
  const firstNameInput = document.getElementById("firstName");
  const CountryInput = document.getElementById("country");
  const petNameInput = document.getElementById("petName");
  const outDataTextEl = document.getElementById('outDataText')
  const textOutputEl = document.createElement('p')
  const codeEl = document.getElementById('code')
  console.log(codeEl.value)
  
  formNameDataEl.addEventListener('submit', function (e){
    e.preventDefault()
    
    const inputNames = [firstNameInput.value, CountryInput.value, petNameInput.value, codeEl.value]
    
    
   
    
    for(let i =0; i < inputNames.length;i++){
      if(inputNames[i] === ''){
        console.log('you not type some name')
        return;
      }
    }
    inputNames.sort(function(){
      return Math.random() - 0.5;
    })
    const messageOutput = `Hello ${inputNames[0]} from ${inputNames[1]} and your pet ${inputNames[2]} and your code ${inputNames[3]}`
    console.log(inputNames)
    console.log(firstNameInput.value)
    textOutputEl.innerHTML = messageOutput
    outDataTextEl.appendChild(textOutputEl)

    
    })
    // firstNameInput.addEventListener('input', function (e){
    //   textOutputEl.innerHTML = e.target.value
    //   outDataTextEl.appendChild(textOutputEl)
    // })
  console.log(formNameDataEl);
}

    
  
 
