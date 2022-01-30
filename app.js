const fs = require('fs')
const readLine = require('readline')

const readStream = fs.createReadStream('./access.log', 'utf8')
const rl = readLine.createInterface({
    input: readStream,
    terminal: true
});

const ips = ['89.123.1.41', '34.48.240.111']
const writeStreams = ips.map(ip => fs.createWriteStream(`./logs/${ip}_requests.log`, { flags: 'a', encoding: 'utf8' }))

rl.on('line', (line) => {
  for (let i = 0; i < ips.length; i++) {
    if (line.includes(ips[i])) {
      writeStreams[i].write(`${line}\n`)
    }
  }
})

readStream.on('end', () => console.log('Файл прочитан'))