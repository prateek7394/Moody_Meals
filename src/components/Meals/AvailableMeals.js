import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Masala Dosa",
    description: "Special South Indian dish🤗",
    price: 80,
  },
  {
    id: "m2",
    name: "Kabab Roll",
    description: "Our speciality❤️",
    price: 50,
  },
  {
    id: "m3",
    name: "Chilly Potato",
    description: "Delicious, spicy potato sticks😍",
    price: 60,
  },
  {
    id: "m4",
    name: "Butter Paneer",
    description: "Healthy...and Yummy!!😋",
    price: 120,
  },
  {
    id: "m5",
    name: "Pav Bhaji",
    description: "Have a try!🤤",
    price: 80,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id = {meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
