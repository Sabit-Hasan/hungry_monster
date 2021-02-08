// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
// .then(res => res.json())
// .then(data => displayCard(data));

// const displayCard = data =>{
//     const cards = document.getElementById('cards');
//     for (let i = 0; i < data.categories.length; i++) {
//         const element = data.categories[i];

//         const card = document.createElement('div');
//         card.classList.add('card-container','card');
//         const cardInfo = `
//             <img src="${element.strCategoryThumb}">
//             <div class= 'card-body'>
//                 <h3>${element.strCategory}</h3>
//             </div>
//         `;

//         card.innerHTML = cardInfo;
//         cards.appendChild(card);
//     }
// };

const searchItem = () =>{
    const searchText = document.getElementById('search-item').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data => searchMeal(data));
}

const searchMeal = data =>{
    if(data.meals != null){
        (function(){
            for (let i = 0; i < data.meals.length; i++) {
                const element = data.meals[i];
                const searchCard = document.getElementById('search-card');
                const card = document.createElement('div');
                card.classList.add('card-container','card');
                const cardInfo = `
                <img src="${element.strMealThumb}">
                <div class= 'card-body'>
                <h3>${element.strMeal}</h3>
                </div>
                `;
                card.innerHTML = cardInfo;
                searchCard.appendChild(card);
            }
        })();
    }
    else{
         alert("This items is not available.");
    }
}



