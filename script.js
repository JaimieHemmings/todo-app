const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inputBox.value === '') {
    alert('You must write something!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTaskList() {
  listContainer.innerHTML = localStorage.getItem('data');
}

showTaskList();

function addRainbowSparkleBackground() {
  const element = document.querySelector('body');
  if (element) {
    element.style.background =
      'linear-gradient(270deg, #d53369, #daae51, #e0bb4f, #e58e26, #35495e, #2b6998, #2193b0, #6dd5ed, #c471ed, #12c2e9)';
    element.style.backgroundSize = '2000% 2000%';
    element.style.animation = 'Rainbow 15s ease infinite';
    element.style.position = 'relative';
    element.style.overflow = 'hidden';

    for (let i = 0; i < 50; i++) {
      const sparkle = document.createElement('span');
      sparkle.style.position = 'absolute';
      sparkle.style.width = Math.random() * 10 + 'px';
      sparkle.style.height = Math.random() * 10 + 'px';
      sparkle.style.background = 'white';
      sparkle.style.left = Math.random() * element.offsetWidth + 'px';
      sparkle.style.top = Math.random() * element.offsetHeight + 'px';
      sparkle.style.borderRadius = '50%';
      sparkle.style.animation = `sparkle ${Math.random() * 1 + 5}s infinite`;
      element.appendChild(sparkle);
    }
  }
}

addRainbowSparkleBackground();
