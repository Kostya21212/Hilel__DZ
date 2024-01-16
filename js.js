// debugger
// var drawCats = function (howManyTimes){
//     for (var i = 0; i < howManyTimes; i++){
//         console.log(i + ' =^.^=')
//     }
//    drawCats(10)
// };
document.addEventListener('DOMContentLoaded', documentOnReady)


function documentOnReady(){
const arraySmiles = ['🛤️','🧖','🧗‍♀️','🛤️','🧖','🧗‍♀️', '😀','🦁','🧩'];
const checkThemeEl = document.getElementById('checkTheme')

const black = '#151515';
const white = '#aaa';
const smilesWrapEl = document.getElementById('smile-wrap-element')
checkThemeEl.addEventListener('change', function (){
    const styleObj = document.documentElement.style
    if(checkThemeEl.checked){
      styleObj.setProperty("--primery-color",white);  
      styleObj.setProperty("--contrast-color",black) ; 
    }
    else{
        styleObj.setProperty("--primery-color",black);  
        styleObj.setProperty("--contrast-color",white) ; 
    }
    
});


arraySmiles.forEach(i => {
  const newEl = document.createElement('div')
  newEl.textContent = i;
  newEl.classList.add('smile-card');
  smilesWrapEl.appendChild(newEl)
})
}
const object = {
  name: 'Ivan',
  age: 25,
  city: 'Kyiv'
}
const first = object.first
object.first = 123
console.log(object.first)

const array = ['🛤️','🧖','🧗‍♀️','🛤️','🧖','🧗‍♀️'];

for(let i = 0; i < array.length; i++){
  const value = array[i]
  if( value === '🧍‍♂️'){
   console.log('People')
  } else if (value === '🛤️' ){
    console.log('sub')
  }
   
}
array.forEach( function(i, index ) {
  console.log('Element from forEach:', i, index)
})
const a =12
