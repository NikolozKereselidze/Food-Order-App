import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Khinkali",
    description:
      "Dumpling made of twisted knobs of dough, stuffed with meat and spices.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Lobio",
    description:
      "various kinds of prepared beans (cooked or stewed), containing coriander, walnuts, garlic and onion",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Mtsvadi",
    description: "Dish of skewered and grilled cubes of meat",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Chakapuli",
    description:
      "Stew made with lamb or beef, dry white wine, tarragon leaves, unripe (sour) green plums, green onions, green peppers, green coriander, garlic and salt",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
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
