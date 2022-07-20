import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals =() =>{
    // Meals component is splitted further into two components:
    // i.e. MealsSummary and AvailableMeals
    return(
        <>
        
            <MealsSummary />
            <AvailableMeals />
        </>
    )
}

export default Meals;