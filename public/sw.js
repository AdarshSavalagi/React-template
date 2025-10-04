self.addEventListener('message', event => {
  if (event.data && event.data.type === 'UPLOAD_LOGS') {
    const logsToUpload = event.data.payload;
    console.log('hello from service worker ', logsToUpload)
    // fetch('/api/logs', {          
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(logsToUpload),
    // })
    // .then(response => response.json())
    // .then(data => console.log('Logs uploaded:', data))
    // .catch(error => console.error('Error uploading logs:', error));
  }
});