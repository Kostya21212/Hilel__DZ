// debugger
// var drawCats = function (howManyTimes){
//     for (var i = 0; i < howManyTimes; i++){
//         console.log(i + ' =^.^=')
//     }
//    drawCats(10)
// };
document.addEventListener('DOMContentLoaded', documentOnReady)


function documentOnReady(){
const checkThemeEl = document.getElementById('checkTheme')
console.log(checkThemeEl)
const black = '#151515';
const white = '#aaa';

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
}
const object = {
  name: 'Ivan',
  age: 25,
  city: 'Kyiv'
}
const first = object.first
object.first = 123
console.log(object.first)

const array = ['🧍‍♂️','🛤️','🧖','🧗‍♀️','🔑','⭐','🥵'];

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