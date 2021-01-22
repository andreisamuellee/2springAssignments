import LunchMenu from '../data.json';
console.log('lunch menu object', LunchMenu);

const coursesEn = [];
const coursesFi = [];

activate();


function activate() {
  for (let course in LunchMenu.courses) {
    let data = LunchMenu.courses[course];
    console.log('lang fi ' + data.title_fi);
    coursesFi.push(data.title_fi);
    console.log('lang en ' + data.title_en);
    coursesEn.push(data.title_en);
  }
}

const SodexoData = {
  coursesEn,
  coursesFi,
  activate
};

export default SodexoData;
