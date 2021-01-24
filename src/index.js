import SodexoData from './modules/sodexo-data';
import FazerData from './modules/fazer-data';


const list = document.querySelector('#info1');
const SodexoLangBtn = document.querySelector('.SodexoChangeLang');
const SodexoSortBtn = document.querySelector('.SodexoSort');
const SodexoRndmBtn = document.querySelector('.SodexoRndm');

const list2 = document.querySelector('#info2');
const FazerLangBtn = document.querySelector('.FazerChangeLang');
const FazerSortBtn = document.querySelector('.FazerSort');
const FazerRndmBtn = document.querySelector('.FazerRndm');

SodexoLangBtn.addEventListener("click", SodexoDisplayFood);
SodexoSortBtn.addEventListener("click", SodexoSortFood);
SodexoRndmBtn.addEventListener("click", SodexoRandomFood);

FazerLangBtn.addEventListener("click", FazerDisplayFood);
FazerSortBtn.addEventListener("click", FazerSortFood);
FazerRndmBtn.addEventListener("click", FazerRandomFood);

const SodexoCoursesEn = SodexoData.coursesEn;
const SodexoCoursesFi = SodexoData.coursesFi;

let SodexoLang = true;
let SodexosortFI = false;
let SodexoSortEn = false;

SodexoCoursesFi.forEach(SodexoMyFunction);

function SodexoDisplayFood() {
  if (SodexoLang) {
    list.innerHTML = '';
    SodexoLang = false;
    SodexoCoursesEn.forEach(SodexoMyFunction);
  } else {
    list.innerHTML = '';
    SodexoLang = true;
    SodexoCoursesFi.forEach(SodexoMyFunction);
  }
}

function SodexoSortFood() {
  if (!SodexoLang) {
    if (!SodexoSortEn) {
      list.innerHTML = '';
      SodexoCoursesEn.sort().forEach(SodexoMyFunction);
      SodexoSortEn = true;
    } else {
      list.innerHTML = '';
      SodexoCoursesEn.reverse().forEach(SodexoMyFunction);
      SodexoSortEn = false;
    }
  } else {
    if (!SodexosortFI) {
      list.innerHTML = '';
      SodexoCoursesFi.sort().forEach(SodexoMyFunction);
      SodexosortFI = true;
    } else {
      list.innerHTML = '';
      SodexoCoursesFi.reverse().forEach(SodexoMyFunction);
      SodexosortFI = false;
    }
  }
}

function SodexoRandomFood() {
  if (SodexoLang) {
    list.innerHTML = '';
    list.innerHTML = SodexoCoursesFi[Math.floor(Math.random() * SodexoCoursesFi.length)];
  } else {
    list.innerHTML = '';
    list.innerHTML = SodexoCoursesEn[Math.floor(Math.random() * SodexoCoursesEn.length)];
  }
}

function SodexoMyFunction(course, index) {
  let li = document.createElement('li');
  let text = document.createTextNode(course);
  li.appendChild(text);
  list.appendChild(li);
}

//fazer

const FazerCoursesEn = FazerData.coursesEn;
const FazerCoursesFi = FazerData.coursesFi;

let FazerLang = true;
let FazersortFI = false;
let FazerSortEn = false;

FazerCoursesFi.forEach(FazerMyFunction);

function FazerDisplayFood() {
  if (FazerLang) {
    list2.innerHTML = '';
    FazerLang = false;
    FazerCoursesEn.forEach(FazerMyFunction);
  } else {
    list2.innerHTML = '';
    FazerLang = true;
    FazerCoursesFi.forEach(FazerMyFunction);
  }
}

function FazerSortFood() {
  if (!FazerLang) {
    if (!FazerSortEn) {
      list2.innerHTML = '';
      FazerCoursesEn.sort().forEach(FazerMyFunction);
      FazerSortEn = true;
    } else {
      list2.innerHTML = '';
      FazerCoursesEn.reverse().forEach(FazerMyFunction);
      FazerSortEn = false;
    }
  } else {
    if (!FazersortFI) {
      list2.innerHTML = '';
      FazerCoursesFi.sort().forEach(FazerMyFunction);
      FazersortFI = true;
    } else {
      list2.innerHTML = '';
      FazerCoursesFi.reverse().forEach(FazerMyFunction);
      FazersortFI = false;
    }
  }
}

function FazerRandomFood() {
  if (FazerLang) {
    list2.innerHTML = '';
    list2.innerHTML = FazerCoursesFi[Math.floor(Math.random() * FazerCoursesFi.length)];
  } else {
    list2.innerHTML = '';
    list2.innerHTML = FazerCoursesEn[Math.floor(Math.random() * FazerCoursesEn.length)];
  }
}

function FazerMyFunction(course, index) {
  let li = document.createElement('li');
  let text = document.createTextNode(course);
  li.appendChild(text);
  list2.appendChild(li);
}
