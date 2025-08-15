
import recipe from '../../assets/images/recipe.png'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Category from '../Category/Category'

export default function Layout() {









  return (








    
    <>
  <div className="flex flex-col md:flex-row       Cursive">

    {/* Navbar في الموبايل */}
    <nav className="md:hidden flex justify-around bg-sidebar p-3">
      <img className='w-12 h-12' src={recipe} alt="" />
      <a href="#" className="p-2 text-gray-900 rounded-xl bg-ora">
        <i className="fa-solid fa-utensils"></i> Meals
      </a>
      <a href="#" className="p-2 text-gray-900 rounded-xl">
        <i className="fa-solid fa-utensils"></i> Ingredients
      </a>
      <a href="#" className="p-2 text-gray-900 rounded-xl">
        <i className="fa-solid fa-utensils"></i> Area
      </a>
    </nav>

    {/* Sidebar في الشاشات md وفوق */}
    <aside className="   hidden md:block md:fixed md:top-0 md:left-0 h-screen md:w-1/5 bg-sidebar px-3 py-4">
      <img  src={recipe} alt="" />
      <ul className="space-y-7 font-medium mt-5">
        <li>
          <a href="#" className="flex items-center p-3 border border-sidebor text-gray-900 rounded-xl bg-ora">
            <span className="ms-3"><i className="fa-solid fa-utensils"></i> Meals</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-3 border border-sidebor text-gray-900 rounded-xl">
            <span className="ms-3"><i className="fa-solid fa-utensils"></i> Ingredients</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-3 border border-sidebor text-gray-900 rounded-xl">
            <span className="ms-3"><i className="fa-solid fa-utensils"></i> Area</span>
          </a>
        </li>
      </ul>
    </aside>

    
    <main className="   md:ml-[20%] w-full md:w-[80%]">
      <Outlet  />
      <div className=" lg:my-container">
        <Footer />
      </div>
    </main>
  </div>
</>

  )
}
