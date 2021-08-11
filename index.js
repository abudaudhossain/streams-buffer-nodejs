const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf-8');

ourReadStream.on('data',(chake) => {
    console.log(chake)
})