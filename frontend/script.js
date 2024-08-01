document.getElementById('accept-btn').addEventListener('click', function() {
  let ip = 'xxx.xxx.xxx.xxx';  // Ganti dengan cara untuk mendapatkan IP sebenarnya
  fetch('/access', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ip: ip, action: 'accept' })
  }).then(response => response.json())
    .then(data => {
      document.getElementById('response-text').innerText = "Akses telah diterima.";
      acceptedIPs.push(ip);
    });
});

document.getElementById('decline-btn').addEventListener('click', function() {
  let ip = 'xxx.xxx.xxx.xxx';  // Ganti dengan cara untuk mendapatkan IP sebenarnya
  fetch('/access', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ip: ip, action: 'decline' })
  }).then(response => response.json())
    .then(data => {
      document.getElementById('response-text').innerText = "Akses telah ditolak.";
      declinedIPs.push(ip);
    });
});

document.getElementById('show-accepted').addEventListener('click', function() {
  fetch('/access/accepted')
    .then(response => response.json())
    .then(data => {
      let list = document.getElementById('accepted-ips');
      list.style.display = list.style.display === 'none' ? 'block' : 'none';
      list.innerHTML = data.map(ip => `<li>${ip}</li>`).join('');
    });
});

document.getElementById('show-declined').addEventListener('click', function() {
  fetch('/access/declined')
    .then(response => response.json())
    .then(data => {
      let list = document.getElementById('declined-ips');
      list.style.display = list.style.display === 'none' ? 'block' : 'none';
      list.innerHTML = data.map(ip => `<li>${ip}</li>`).join('');
    });
});
