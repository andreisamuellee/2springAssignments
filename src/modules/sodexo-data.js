import LunchMenu from '../data.json';
console.log('lunch menu object', LunchMenu);

const coursesEn = [];
const coursesFi = [];

activate();


function activate() {
  for (let course in LunchMenu.courses) {
    let data = LunchMenu.courses[course];
    coursesFi.push(data.title_fi);
    coursesEn.push(data.title_en);
  }
}

const SodexoData = {
  coursesEn,
  coursesFi,
  activate
};

export default SodexoData;
