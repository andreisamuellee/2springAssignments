const coursesEn = [
  "Hamburger, cream sauce and poiled potates",
  "Goan style fish curry and whole grain rice",
  "Vegan Chili sin carne and whole grain rice",
  "Broccoli puree soup, side salad with two napas",
  "Lunch baguette with BBQ-turkey filling",
  "Cheese / Chicken / Vege / Halloum burger and french fries"];

const coursesFi = [
  "Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
  "Goalaista kalacurrya ja täysjyväriisiä",
  "vegaani Chili sin carne ja täysjyväriisi",
  "Parsakeittoa,lisäkesalaatti kahdella napaksella",
  "Lunch baguette with BBQ-turkey filling",
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

let lang = true;
let sortFI = false;
let sortEN = false;

const list = document.querySelector('.info');
const langBtn = document.querySelector('.changeLang');
const sortBtn = document.querySelector('.sort');
const rndmBtn = document.querySelector('.rndm');


langBtn.addEventListener("click", displayFood);
sortBtn.addEventListener("click", sortFood);
rndmBtn.addEventListener("click", randomFood);

coursesFi.forEach(myFunction);

function displayFood() {
  if (lang) {
    list.innerHTML = '';
    coursesEn.forEach(myFunction);
    lang = false;
  } else {
    list.innerHTML = '';
    coursesFi.forEach(myFunction);
    lang = true;
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

function randomFood(){
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
