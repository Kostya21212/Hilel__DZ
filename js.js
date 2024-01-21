function addTime (){
const userTime = prompt('Введіть кількість годин')
const hourSec = 60
const hourMin = 60
if(userTime === null){
    alert('Ви вийшли')
}else if(userTime.trim()=== '' || userTime === 0){
    alert('Ви нічого не ввели')
}else if(isNaN(userTime)){
    alert('Введіть число!')
}
else{
    const result = userTime * (hourSec * hourMin)
    alert(`В ${userTime} годин : ${result} секунд`)
}
}
addTime ()