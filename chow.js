
const timetable = {
    "Monday": {
      "breakfast": "Oat served with milk and scrambled eggs",
      "snack": "An Apple",
      "lunch": "White rice with turkey stew",
      "dinner": "Catfish pepper soup"
    },
    "Tuesday": {
      "breakfast": "Indomie cooked with fresh pepper and boiled eggs",
      "snack": "Crackers",
      "lunch": "beans with plantain and goat meat",
      "dinner": "Garri with groundnut"
    },
    "Wednesday": {
      "breakfast": "Acha pudding with milk and scrambled eggs",
      "snack": "Smoothie banana, apple, dates and lettuce",
      "lunch": "Spagetti cooked with palm oil and grilled fish",
      "dinner": "Greek yoghurt and fruits"
    },
    "Thursday": {
        "breakfast": "Toasted slice bread with sunny side up and jasmine tea",
        "snack": "An Apple",
        "lunch": "Eba with vegetable soup and goat meat",
        "dinner": "Pancake"
      },
      "Friday": {
        "breakfast": "beans cooked with dry fish and bread",
        "snack": "Crackers",
        "lunch": "Yam porridge with acha and vegetable",
        "dinner": "Grilled fish"
      },
      "Saturday": {
        "breakfast": "Boiled yam with egg sauce",
        "snack": "pineapple",
        "lunch": "Amala with okra soup and chicken",
        "dinner": "Greek yoghurt and fruits"
      },
      "Sunday": {
        "breakfast": "Roasted plantain with grilled croaker fish",
        "snack": "Smoothie banana, apple and avocado",
        "lunch": "EAT OUT.",
        "dinner": "Pancake"
      },
  };
  document.getElementById("sendMeal").addEventListener("click", function() {
    const selectedDay = document.getElementById("day").value;
    const selectedMealType = document.getElementById("meal").value;
    const meal = getMeal(selectedDay, selectedMealType);
    document.getElementById("result").textContent = `For ${selectedDay}, ${selectedMealType} is ${meal}.`;
  });
 

  function getMeal(day, mealType) {
    const selectedDay = timetable[day];
    if (selectedDay && selectedDay[mealType]) {
      return selectedDay[mealType];
    } else {
      return "No meal found for the given day and meal type.";
    }
  }
  