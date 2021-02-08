const input = document.getElementById('input');


const search = document.getElementById('search');
search.addEventListener('click',function(){

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+input.value)
    .then(res => res.json())
    .then(data => displaydishes(data.meals))


const displaydishes = dishes =>{
    const dishesDiv = document.getElementById('dishes');
    dishesDiv.innerHTML = "";
    dishes.forEach(dish => {
        const dishDiv = document.createElement('div');
        dishDiv.className = 'dish';

        const dishInfo = `
         <a href="${dish.strSource}"><img src="${dish.strMealThumb}"></a>
         <h2 class="text-center">${dish.strMeal}</h2>
    `
    dishDiv.innerHTML = dishInfo;
    dishesDiv.appendChild(dishDiv);
    });
    }
});




