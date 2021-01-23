
import FazerMenu from './assets/fazer-week-example.json';
console.log('FazerMenu', FazerMenu);

const menu = [
    {name: 'Lingonberry jam', price: 4.00},
    {name: 'Mushroom and bean casserole', price: 5.50},
    {name: 'Chili-flavoured wheat', price: 3.00},
    {name: 'Vegetarian soup', price: 4.80},
    {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
  ];

const validateName = (mealName) => {
  const nameVal = /^[A-ZÅÄÖ]{1}[a-zåäöA-ZÅÄÖ0-9\-\ \/,()]{3,63}$/;
  return nameVal.test(mealName);
};

console.log('mealname validated:', validateName('Lingonberry jam'));

for (const item of Object.values(menu)) {
  console.log('mealname ' + item.name + ' validated:', validateName(item.name));
}

const sortMenu = (menu) => {
  const sorted = menu.sort((a, b) => a.price - b.price);
  return sorted;
};
console.log('sorted menu', sortMenu(menu));

const filterByPrice = (menu, priceLimit) => {
  return menu.filter(item => item.price < priceLimit);
};
console.log('filtered menu', filterByPrice(menu, 5));

const raisePrices = (menu, percent) => {
  return menu.map(item => {
    return {
      name: item.name,
      price: item.price * (1 + percent / 100)
    };
  });
};
console.log('price raised:', raisePrices(menu, 15));

const totalPrice = (menu) => {
  return menu.reduce((a, b) => {
    return {price: a.price + b.price};
  });
};
console.log('total price', totalPrice(menu));

const vegOnly = (menuData) => {
  let vegMeals = [];
  console.log(menuData.LunchMenus[0].SetMenus);
  for (const setMenu of menuData.LunchMenus[0].SetMenus) {
    console.log(setMenu);
    for (const meal of setMenu.Meals) {
      if (meal.Diets.includes('Veg')) {
        vegMeals.push(meal.Name);
      }
    }
  }
  return vegeMeals;
};
console.log('test vegan meal function', vegOnly(FazerMenu));

