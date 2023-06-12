fetch('/data')
    .then(response => response.json())
    .then(foods => {
        const foodsList = document.querySelector('#foods-list');
        foods.forEach(food => {
            const li = document.createElement('li');
            li.textContent = `${food.name} - ${food.cuisine} - $${food.price}`;
            foodsList.appendChild(li);
        });
    });