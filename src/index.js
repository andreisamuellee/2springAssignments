import LunchMenu from './data.json';
// Test
console.log('lunch menu object', LunchMenu);

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

showList();

function displayFood() {
  if (lang) {
    lang = false;
    list.innerHTML = '';
    showList();
  } else {
    lang = true;
    list.innerHTML = '';
    showList();
  }
}

function sortFood() {

  if (!sortEN) {
    list.innerHTML = '';
    let text = [];
    for (let course in LunchMenu.courses) {
      let data = LunchMenu.courses[course];
      if (lang) {
        console.log('here fi ' + data.title_fi);
        let li = document.createElement('li').innerHTML = data.title_fi.toString();
        list.appendChild(li);
      } else {
        console.log('here en ' + data.title_en);
        text.push(data.title_en);
      }
    }
    console.log('here');
    console.log('sss ' + text);
    text.sort().forEach(myFunction);
    console.log('here now');
    sortEN = true;
  }

  else {
    list.innerHTML = '';
    let text = [];
    for (let course in LunchMenu.courses) {
      let data = LunchMenu.courses[course];
      if (lang) {
        text.push(document.createTextNode(data.title_fi));
      } else {
        text.push(document.createTextNode(data.title_en));
      }
    }
    list.innerHTML = text.reverse();
    sortEN = false;
  }

  if (!sortFI) {
    list.innerHTML = '';
    let text = [];
    for (let course in LunchMenu.courses) {
      let data = LunchMenu.courses[course];
      if (lang) {
        text.push(document.createTextNode(data.title_fi));
      } else {
        text.push(document.createTextNode(data.title_en));
      }
    }
    list.innerHTML = text.sort();
    sortFI = true;
  }

  else {
    list.innerHTML = '';
    let text = [];
    for (let course in LunchMenu.courses) {
      let data = LunchMenu.courses[course];
      if (lang) {
        text.push(document.createTextNode(data.title_fi));
      } else {
        text.push(document.createTextNode(data.title_en));
      }
    }
    list.innerHTML = text.reverse();
    sortFI = false;
  }
}

function myFunction(course, index) {
  let li = document.createElement('li');
  let text = document.createTextNode(JSON.stringify(course));
  li.appendChild(text);
  list.appendChild(li);
}

function randomFood() {
  let i = 1;
  for (let course in LunchMenu.courses) {
    i++;
  }
  let random = Math.floor(Math.random() * i);
  if (lang) {
    list.innerHTML = LunchMenu.courses[random].title_fi;
  } else {
    list.innerHTML = LunchMenu.courses[random].title_en;
  }
}

function showList() {
  for (let course in LunchMenu.courses) {
    let data = LunchMenu.courses[course];
    let li = document.createElement('li');
    let text;
    if (lang) {
      text = document.createTextNode(data.title_fi);
    } else {
      text = document.createTextNode(data.title_en);
    }
    li.appendChild(text);
    list.appendChild(li);
  }
}
