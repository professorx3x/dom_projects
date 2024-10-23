const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');
btn.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else {
      body.style.backgroundColor = e.target.id;
    }
  });
});
