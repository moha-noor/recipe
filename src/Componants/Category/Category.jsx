import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Category() {

// اليوز ستيت الخاص بكل البوتونز ما عداال All
const [Allmeals, setMeals] = useState(null)
// اليوز ستيت الخاص بالبوتون All
const [btnallmels, setbtnallmels] = useState(null)
// اليوز ستيت الخاص بالعرض
const [displayedMeals, setDisplayedMeals] = useState([]); 
// عشان يتحول البوتون لاسود
const [activeCategory, setActiveCategory] = useState("All")




// الفانكشن الخاص بالاي بي اي جميع البوتون ما عدا ال All
  async function Callapis() {

try{
    const {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    setMeals(data.categories)
} catch (error) {
    console.error("Error", error)
}
finally{
    console.log("Finally")

}
}




// الفانكشن الخاص بالاي بي اي لل All
  async function CallAllapis() {

try{
    const {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s")
    setbtnallmels(data.meals)
    console.log(data.meals)
// أول ما تفتح الصفحة يعرض كل الوجبات
setDisplayedMeals(data.meals)

} catch (error) {
    console.error("Error", error)
}
finally{
    console.log("Finally")

}
}


async function fetchMealsByCategory(category) {
  try {
    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    setDisplayedMeals(data.meals);
  } catch (error) {
    console.error("Error", error)
  }
  finally{
    console.log("Finally")
  }
};



useEffect(() => {
  Callapis()
CallAllapis()


  }, [])


  return (
    <>

    <div className='bg-BGP'>
      
      <h1 className="py-8 text-4xl font-bold Pacifico   bg-gradient-to-r from-[#F29724]   via-[#ca1023c4] to-[#c90519]  bg-clip-text text-transparent">Learn, Cook, Eat Your Food</h1>



<div className='border-b border-gray-300'>
<div className=" px-5      ">
  
<div  className=" inline-block  ">
            <div  className="myButtons">
              <button
  onClick={() => setDisplayedMeals(btnallmels)}
  type="button"
  className={`border border-gray-300  cursor-pointer font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2
    ${displayedMeals === btnallmels 
      ? "bg-black text-white"   
      : "text-gray-900 hover:bg-white focus:bg-black focus:text-white" 
    }`}
>
  All
</button>
  
            </div>
          </div>
  { Allmeals == null ? 
     <p>Loading...</p> :
     Allmeals.map((cate) => (
          <div key={cate.idCategory} className=" inline-block   ">
            <div className="myButtons">
              <button
              onClick={() => fetchMealsByCategory(cate.strCategory)}
                type="button"
                className="text-gray-900 border border-gray-300 bg-transparent cursor-pointer hover:bg-white focus:bg-black focus:text-white font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                {cate.strCategory}
              </button>  
            </div>
          </div>
        )) }

</div>

</div>





      <div className="pt-30 px-10 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 text-center mt-5">
        {displayedMeals?.map((meal) => (
          <div key={meal.idMeal && Math.random()} className=" meal text-center hover:shadow-xl group  hover:scale-105 duration-300 transition-all bg-white p-12 pb-4 mb-8  rounded-[35px]">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full group-hover:rotate-[360deg] duration-700 transition-all rounded-full drop-shadow-xl  -translate-y-20  shadow-2xl"
            />
            <h3 className="font-semibold -mt-12 font-Pacifico tracking-wider	 text-xl">{meal.strMeal}</h3>
            <h4 className="flex justify-center items-center gap-2 text-emerald-600">
  {meal.strArea && <i className="fa-solid fa-earth-africa" />}
  {meal.strArea}
</h4>

            <Link to={`/Details/${meal.idMeal}`} className="flex justify-center items-center">
              <button className="text-white bg-gradient-to-r mt-4 bg-btn cursor-pointer hover:bg-emerald-600 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300  px-8 py-2 rounded-full">skdlskdl</button>
            </Link>

          </div>
        ))}
      </div>

    </div>




    </>
  );
}

