import LunchMenuFi from '../fazer-data-fi.json';
import LunchMenuEn from '../fazer-data-en.json';

console.log('fazer lunch menu object fi ', LunchMenuFi);
console.log('fazer lunch menu object en ', LunchMenuEn);

const coursesEn = [];
const coursesFi = [];

activate();

function activate() {
  for (let course in LunchMenuFi.LunchMenus[0].SetMenus) {
    let data = LunchMenuFi.LunchMenus[0].SetMenus[course];
    for (let meal in data.Meals) {
      let food = data.Meals[meal];
      coursesFi.push(food.Name);
    }
  }
  for (let course in LunchMenuEn.LunchMenus[0].SetMenus) {
    let data = LunchMenuEn.LunchMenus[0].SetMenus[course];
    for (let meal in data.Meals) {
      let food = data.Meals[meal];
      coursesEn.push(food.Name);
    }
  }
}

console.log('CoursesEn ' + coursesEn);
console.log('CoursesFi ' + coursesFi);


const FazerData = {
  coursesEn,
  coursesFi,
  activate
};

console.log(FazerData);


export default FazerData;
