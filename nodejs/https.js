import https from 'node:https';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
}).on('error', (err) => {
  console.error('Error:', err);
});
