const args = process.argv.slice(2)[0].split('-')

let finalDate = new Date(`${args[3] || new Date().getFullYear()}-${args[2] || new Date().getMonth()}-${args[1] || new Date().getDay()}T${args[0] - 3 || new Date().getHours()}:00:00.000Z`)

let time = Math.floor((finalDate - new Date()) / 1000) * 1000;

const interval = setInterval(() => {
  if (time > 1000) {
    time -= 1000
    let timeLeft = time
    let secondsLeft = Math.floor(timeLeft /= 1000) % 60
    let minutesLeft = Math.floor(timeLeft /= 60) % 60
    let hoursLeft = Math.floor(timeLeft /= 60) % 24
    let daysLeft = Math.floor(timeLeft /= 24)
    console.log(`${daysLeft} дней, ${hoursLeft}:${minutesLeft}:${secondsLeft}`)
  } else {
    console.log('Время кончилось')
    clearInterval(interval)
  }
}, 1000)