fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => displayCard(data));

const displayCard = data =>{
    const cards = document.getElementById('cards');
    for (let i = 0; i < data.categories.length; i++) {
        const element = data.categories[i];

        const card = document.createElement('div');
        card.classList.add('card-container','card');
        const cardInfo = `
            <img src="${element.strCategoryThumb}">
            <div class= 'card-body'>
                <h3>${element.strCategory}</h3>
            </div>
        `;

        card.innerHTML = cardInfo;
        cards.appendChild(card);
    }
};

const searchItem = data => {
    const searchValue = document.getElementById('searchInput').value;
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchValue;

    fetch(url)
    .then(res => res.json())
    .then(data =>searchMeal(data));
};


const searchMeal = data =>{
    if(data.meals != null ){
    (function() {
        const searchCard = document.getElementById('search-cards');
        const childDiv = document.createElement('div');
        childDiv.classList.add('card-container','card');
        const newCardInfo = `
            <img src = "${data.meals[0].strMealThumb}">
            <div class = "card-body">
                <h3>${data.meals[0].strMeal}</h3>
            </div>
        `;
        childDiv.innerHTML = newCardInfo;
        searchCard.appendChild(childDiv);
    })();
}
else{
    document.write("Egun nai,Jgula ache oi gula search din.");
}
};

