const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2022,10,6,10,30,00);
// console.log(futureDate.getFullYear())

const year = futureDate.getFullYear()
const month = futureDate.getMonth()
const date = futureDate.getDate()
const day = futureDate.getDay()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const seconds = futureDate.getSeconds()

giveaway.textContent = `Giveaway Ends On ${weekdays[day]}, ${date} ${months[month]} ${year}, ${hours}:${minutes}`

const futureTime = futureDate.getTime();
function format(item){
  if (item < 10){
    return item = `0${item}`
  }
  else{
    return item
  }
}

function getRamainingTime(){
  const today = new Date().getTime();
  const t = futureTime-today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  //calculating
  let days = Math.floor(t/oneDay)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t%oneHour) / oneMinute)
  let seconds = Math.floor((t%oneMinute) / 1000)
  // set values array;
  const values = [days, hours, minutes, seconds]
  items.forEach(function(item,index){
    item.innerHTML = format(values[index])
  })
  if (t < 0){
    clearInterval(countDown);
    deadline.innerHTML = '<h4 class="expired">sorry, this giveaway has expired </h4>'

  }
}

let countDown = setInterval(getRamainingTime,1000)
