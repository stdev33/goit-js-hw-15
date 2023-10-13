const categoriesList = document.getElementById('categories');
const categoryItems = Array.from(categoriesList.children);

console.log(`Number of categories: ${categoryItems.length}`);
console.log('');

categoryItems.forEach(item => {
    const categoryTitle = item.firstElementChild.textContent;
    const categoryElementsCount = item.lastElementChild.children.length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElementsCount}`);
    console.log('');
});