alert('Welcome to the Bulking Meal Plan! Check out our daily meal recommendations.');

function showMealDetails(day) {
    var mealDetailsTitle = document.getElementById('mealDetailsTitle');
    var mealDetailsContent = document.getElementById('mealDetailsContent');
    var dateTime = document.getElementById('dateTime');

    // Simulated meal data (replace with your actual meal data)
    var meals = [
        { day: 1, title: 'Day 1 (Monday)', content: 'Breakfast: Scrambled eggs, Lunch: Grilled chicken, Dinner: Salmon' },
        { day: 2, title: 'Day 2 (Tuesday)', content: 'Breakfast: Oatmeal, Lunch: Turkey sandwich, Dinner: Quinoa bowl' },
        { day: 3, title: 'Day 3 (Wednesday)', content: 'Breakfast: Greek yogurt, Lunch: Shrimp stir-fry, Dinner: Sweet potato' },
        { day: 4, title: 'Day 4 (Thursday)', content: 'Breakfast: Protein smoothie, Lunch: Beef and broccoli, Dinner: Brown rice' },
        { day: 5, title: 'Day 5 (Friday)', content: 'Breakfast: Whole grain toast, Lunch: Tuna salad, Dinner: Grilled vegetables' },
        { day: 6, title: 'Day 6 (Saturday)', content: 'Breakfast: Pancakes, Lunch: Chicken wrap, Dinner: Quiche' },
        { day: 7, title: 'Day 7 (Sunday)', content: 'Breakfast: Avocado toast, Lunch: Pasta salad, Dinner: Baked chicken' },
    ];

    // Find the meal for the selected day
    var selectedMeal = meals.find(meal => meal.day === day);

    // Display meal details
    mealDetailsTitle.textContent = selectedMeal.title;
    mealDetailsContent.textContent = selectedMeal.content;

    // Display current date and time
    var currentTime = new Date();
    var formattedDateTime = currentTime.toLocaleString();
    dateTime.textContent = 'Updated on ' + formattedDateTime;

    // Show the meal modal
    document.getElementById('mealModal').style.display = 'block';
}

function hideMealDetails() {
    // Hide the meal modal
    document.getElementById('mealModal').style.display = 'none';
}