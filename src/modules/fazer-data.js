import LunchMenuFi from '../fazer-data-fi.json';
import LunchMenuEn from '../fazer-data-en.json';

console.log('fazer lunch menu object fi ', LunchMenuFi);
console.log('fazer lunch menu object en ', LunchMenuEn);

const coursesEn = [];
const coursesFi = [];

activate(0);

function activate(dayOfWeek) {
  for (let course in LunchMenuFi.LunchMenus[dayOfWeek].SetMenus) {
    let data = LunchMenuFi.LunchMenus[dayOfWeek].SetMenus[course];
    for (let meal in data.Meals) {
      let food = data.Meals[meal];
      coursesFi.push(food.Name);
    }
  }
  for (let course in LunchMenuEn.LunchMenus[dayOfWeek].SetMenus) {
    let data = LunchMenuEn.LunchMenus[dayOfWeek].SetMenus[course];
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
