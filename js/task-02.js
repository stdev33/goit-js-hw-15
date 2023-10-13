const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...createListItems(ingredients));

function createListItems(array) {
  return array.map(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listItem.classList.add('item');
    return listItem;
  });
}
