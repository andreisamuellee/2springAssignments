import SodexoData from './modules/sodexo-data';

const list = document.querySelector('.info');
const langBtn = document.querySelector('.changeLang');
const sortBtn = document.querySelector('.sort');
const rndmBtn = document.querySelector('.rndm');

langBtn.addEventListener("click", displayFood);
sortBtn.addEventListener("click", sortFood);
rndmBtn.addEventListener("click", randomFood);

console.log(SodexoData);
const coursesEn = SodexoData.coursesEn;
const coursesFi = SodexoData.coursesFi;

let lang = true;
let sortFI = false;
let sortEN = false;

coursesFi.forEach(myFunction);

function displayFood() {
  if (lang) {
    list.innerHTML = '';
    lang = false;
    coursesEn.forEach(myFunction);
  } else {
    list.innerHTML = '';
    lang = true;
    coursesFi.forEach(myFunction);
  }
}

function sortFood() {
  if (!lang) {
    if (!sortEN) {
      list.innerHTML = '';
      coursesEn.sort().forEach(myFunction);
      sortEN = true;
    } else {
      list.innerHTML = '';
      coursesEn.reverse().forEach(myFunction);
      sortEN = false;
    }
  } else {
    if (!sortFI) {
      list.innerHTML = '';
      coursesFi.sort().forEach(myFunction);
      sortFI = true;
    } else {
      list.innerHTML = '';
      coursesFi.reverse().forEach(myFunction);
      sortFI = false;
    }
  }
}

function randomFood() {
  if (lang) {
    list.innerHTML = '';
    list.innerHTML = coursesFi[Math.floor(Math.random() * coursesFi.length)];
  } else {
    list.innerHTML = '';
    list.innerHTML = coursesEn[Math.floor(Math.random() * coursesEn.length)];
  }
}

function myFunction(course, index) {
  let li = document.createElement('li');
  let text = document.createTextNode(course);
  li.appendChild(text);
  list.appendChild(li);
}
