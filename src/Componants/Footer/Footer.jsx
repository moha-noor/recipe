import React from "react";
import recipe from "../../assets/images/recipe.png";
export default function Footer() {
  return (
    <>
      <div className="">
        <div className="flex justify-between border-b p-5 border-gray-200">
          <a href="#">
           <div className="inline-block align-middle "> <img className="w-12 h-12  " src={recipe} alt="" /></div>
           <h4 className=" ps-3 inline-block ">Recipe</h4>
          </a>
          <h5 className="text-blue-700">Route</h5>
        </div>
        <p className=" text-left  md:text-center  py-3">© 2025 Nagy Osama™. All Rights Reserved.</p>
        </div>

      
    </>
  );
}
