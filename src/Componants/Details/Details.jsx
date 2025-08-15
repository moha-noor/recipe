import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'







function renderIngredients(details) {
  
  

  const ingredientsList = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = details[`strIngredient${i}`];
    console.log(ingredient);
    const measure = details[`strMeasure${i}`];
    console.log(measure);

    if (ingredient && ingredient.trim() !== "") {
      ingredientsList.push(
        <div key={i} className="flex justify-between p-2 border-b-2 last-of-type:border-b-0">
          <span className="font-medium">{ingredient}</span>
          <span className="text-gray-500">{measure}</span>
        </div>
      );
    }
  }

  return ingredientsList;
}













export default function Details() {

let {idMeal} = useParams();
const [Details, setDetails] = useState(null);

 async function MealDetails(idMeal) {

try{
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
console.log(data.meals[0] )
setDetails(data.meals[0])
} catch (error) {
    console.error("Error", error)
}
finally{
    console.log("Finally")

}
}




useEffect(() => {
  MealDetails(idMeal)

 
  
}, [])






  return (


<>




    


{  Details == null             ?          <h2>loading...</h2>             :          <div className="container h-lvh">
  <div className="flex gap-4 flex-col lg:flex-row h-lvh bg-BGP ">
    <div className="lg:w-2/3">
      <h1 className="text-5xl font-semibold mb-4 md:mb-4 font-Pacifico">{Details.strMeal}</h1>
      <div className="grid gap-4 items-stretch lg:grid-cols-2">
        <div>
          <img src={Details.strMealThumb} className="w-full rounded-2xl mb-8" alt="Migas" />
          <ul className="flex gap-4 justify-center">
            <li className="bg-red-600  text-white py-2 px-4 rounded-lg ">
              <Link to={Details.strYoutube} target="_blank" className="flex gap-2 justify-center items-center">
                youtube </Link>
            </li>
            <li className=" bg-btn  text-white py-2 px-4 rounded-lg ">
              <Link target="_blank" className="flex gap-2 justify-center items-center"> <i class="fa-solid fa-globe"></i>  source</Link>
            </li>
          </ul>
        </div>
        <p className="font-Pacifico">{Details.strInstructions}</p>
        </div>
        </div>
        <div className="lg:w-1/3 p-4">
        <div className="bg-white rounded-2xl p-4">
            <h3 className="text-2xl font-semibold mb-4 border-b-4 p-2">Ingredients</h3>
            {renderIngredients(Details)}
      </div>
    </div>
  </div>
</div>

}




</>
  )
}
