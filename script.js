const restaurants = {
    european: [
        {
            place: 'Eataly',
            taste: 'spicy',
            price: '$$$'
        },
        {
            place: 'Terroni',
            taste: 'spicy',
            price: '$$',
        },
        {
            place: 'Piri Piri Grillhouse',
            taste: 'spicy',
            price: '$$'
        },
        {
            place: 'Paramount Fine Foods',
            taste: 'spicy',
            price: '$'
        },
        {
            place: 'Bar Koukla',
            taste: 'richAndCreamy',
            price: '$$$'
        },
        {
            place: '3 Brewers',
            taste: 'richAndCreamy',
            price: '$$'
        },
        {
            place: 'Sugo',
            taste: 'richAndCreamy',
            price: '$$'
        },
        {
            place: 'Wurst',
            taste: 'richAndCreamy',
            price: '$$'
        },
        {
            place: 'Izba',
            taste: 'richAndCreamy',
            price: '$'
        },
        {
            place: 'Patria',
            taste: 'light',
            price: '$$$'
        },
        {
            place: 'Bylbos Downtown',
            taste: 'light',
            price: '$$$'
        },
        {
            place: 'Fat Pasha',
            taste: 'light',
            price: '$$'
        },
        {
            place: 'Shook',
            taste: 'light',
            price: '$$'
        },
        {
            place: 'Jimmy the Greek',
            taste: 'light',
            price: '$'
        }
    ],
    northAmerican: [
        {
            place: 'El Catrin Destileria',
            taste: 'spicy',
            price: '$$$'
        },
        {
            place: 'La Carnita',
            taste: 'spicy',
            price: '$$'
        },
        {
            place: 'Duff\'s Famous Wings',
            taste: 'spicy',
            price: '$$'
        },
        {
            place: 'Albert\'s Real Jamaican Foods',
            taste: 'spicy',
            price: '$$'
        },{
            place: 'Dave\s Hot Chicken',
            taste: 'spicy',
            price: '$'
        },
        {
            place: 'The Keg',
            taste: 'richAndCreamy',
            price: '$$$'
        },
        {
            place: 'The Carbon Bar',
            taste: 'richAndCreamy',
            price: '$$'
        },
        {
            place: 'Descendent Detroit Style Pizza',
            taste: 'richAndCreamy',
            price: '$$'
        },
        {
            place: 'Smoke\'s Poutinerie',
            taste: 'richAndCreamy',
            price: '$'
        },
        {
            place: 'Mira\'s Restaurant',
            taste: 'light',
            price: '$$$'
        },
        {
            place: 'Joey\'s',
            taste: 'light',
            price: '$$'
        },
        {
            place: 'Chipotle',
            taste: 'light',
            price: '$'
        }
    ],
    asian: [
        {
            place: 'Pukka',
            taste: 'spicy',
            price: '$$$'
        },
        {
            place: 'Pai',
            taste: 'Spicy',
            price: '$$'
        },
        {
            place: 'The Fry',
            taste: 'spicy',
            price: '$'
        },
        {
            place: 'Buk Chang Dong Soon Tofu',
            taste: 'spicy',
            price: '$'
        },
        {
            place: 'Pukka',
            taste: 'richAndCreamy',
            price: '$$$'
        },
        {
            place: 'Banjara Bloor',
            taste: 'richAndCreamy',
            price: '$$'
        },
        {
            place: 'Soos',
            taste: 'richAndCreamy',
            price: '$$'
        },
        {
            place: 'Ramen Isshin',
            taste: 'richAndCreamy',
            price: '$$'
        },
        {
            place: 'Roti Cuisine of India',
            taste: 'richAndCreamy',
            price: '$'
        },
        {
            place: 'Ajisen Ramen',
            taste: 'richAndCreamy',
            price: '$'
        },
        {
            place: 'Yasu Toronto',
            taste: 'light',
            price: '$$$'
        },
        {
            place: 'Nome Izakaya',
            taste: 'light',
            price: '$$'
        },
        {
            place: 'Pho Tien Tan',
            taste: 'light',
            price: '$'
        },
        {
            place: 'Juicy Dumpling',
            taste: 'light',
            price: '$'
        }
    ]
};


//1. document ready
$(function() {
    const $form = $('form');
    const $results = $('.results');
    const $cuisine = $('input[name=cuisine]:checked');
    const $taste = $('input[name=taste]:checked');
    const $price = $('input[name=price]:checked');
    const $counter = $('.counter');
    var counter = 0;
    const counterMax = 3;
    let goal;
    const $radioButton = $('input[type=radio]');
    const $resetButton = $('button[type=reset]')

    // each time an option is chosen, the counter will go up by one, until it reaches 3/3
    $radioButton.on('click', function(add) {
        if(counter === counterMax) {
            counter === 3;
        } else {
            counter = counter + 1;
        }
        // console.log(counter);
        // console.log(typeof counter);
        $counter.text(counter);
    });


//create .on submit and prevent page default
    $form.on('submit', function(e) {
        e.preventDefault();

    // function to randomly choose one restaurant within the given filtered options
        const finalDestination = (array) => {
            const randomRestaurant = Math.floor(Math.random() * array.length);
            return array[randomRestaurant];
        };

        
        // stored values and variables
        // store cuisine in a variable
        const cuisine = $cuisine.val();
        console.log('cuisine: ',cuisine);
        
        // store taste/cravings in a variable
        const cravings = $taste.val();
        // console.log('taste: ',cravings);
        
        // store price in a variable
        const cost = $price.val();
        // console.log('cost: ',cost);
        
        
        // need to get into the cuisine array
        const foodOption = restaurants[cuisine];
        console.log(foodOption);
        
        // filter the cuisine and the taste, and hold a variable that will be used to be filtered with price later
        const potentialRestaurants = foodOption.filter((location) => {
            return cravings === location.taste;
        });
        // console.log('potential restaurants: ',potentialRestaurants); 

        // within potentialRestaurants, if the restaurant.price === cost, then return the value
        const recommendation = potentialRestaurants.filter((destination) => {
            return cost === destination.price;
        });
        console.log('recommendation: ',recommendation);

        // use Math.random to provide a randomized result based on the recommendation options
        // Math.random function written before the form submit function
        const dinner = finalDestination(recommendation);
        console.log('Your dinner is: ',dinner);

        // add/render results to the DOM
        const tonightsDinnerHTML = `<h2>You should go to <span class="finalAnswer">${dinner.place}</span> for dinner!</h2>`;

        $results.html(tonightsDinnerHTML);
        
        // create a reset button after form is submitted
        $resetButton.css('display', 'block');

        const tryAgain = `<h2>Let's find another place instead!</h2>`;

        $resetButton.on('click', function(){
            $resetButton.css('display', 'none');
            $results.html(tryAgain);
        });
    });//end of the form line
})//end of ready function