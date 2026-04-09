const fs = require('fs');
const https = require('https');

https.get('https://www.ever.co.id/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        fs.writeFileSync('ever.html', data);
        console.log('HTML Downloaded');
    });
});
