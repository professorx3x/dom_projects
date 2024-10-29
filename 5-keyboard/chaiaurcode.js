const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div>
  <table>
  <tr>
  <th>key</th>
  <th>keyCode</th>
  <th>code</th>
  </tr>
  <tr>
  <th>${e.key}</th>
  <th>${e.keyCode}</th>
  <th>${e.code}</th>
  </tr>a
  </div>
  `;
});
