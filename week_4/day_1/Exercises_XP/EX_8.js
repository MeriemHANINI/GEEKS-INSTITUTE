// Part I
function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
        const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}`;
        
        // Display in DOM
        const div = document.createElement('div');
        div.textContent = sentence;
        document.body.appendChild(div);
    }
    
    // Invoke inner function once
    addIngredients('apple', 'orange', 'carrot');
}

// Invoke outer function
makeJuice('large');

// Part II
function makeJuice(size) {
    const ingredients = [];
    
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }
    
    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(', ')}`;
        
        // Display in DOM
        const div = document.createElement('div');
        div.textContent = sentence;
        document.body.appendChild(div);
    }
    
    // Invoke addIngredients twice (6 ingredients total)
    addIngredients('apple', 'orange', 'carrot');
    addIngredients('ginger', 'spinach', 'lemon');
    
    // Invoke displayJuice once
    displayJuice();
}

// Invoke outer function
makeJuice('medium');