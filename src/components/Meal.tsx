import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

import "../App.css"

interface MealData {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

function Meal() {
  const navigate = useNavigate();
  const [value, setValue] = useState<MealData[]>([]);

  async function getMealData() {
    let res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    let data = await res.json();

    setValue(data.meals);
  }

  useEffect(() => {
    getMealData();
  }, []);


  let handleNavigate=(id:any)=>{

    let item= value.filter((e)=>e.idMeal==id)

    navigate(`/meal/${id}`, { state: item });
  }

  if(!value) return null;

  return (
    <div className="bg-gray-800">
          <h1 className="text-3xl flex justify-center text-white ">Meal recipe</h1>
{value.length!==0?





<div className="flex flex-wrap gap-6 p-4 justify-center">
      {value.map((e: MealData) => (
        
        <div onClick={()=>handleNavigate(e.idMeal)} key={e.idMeal} className="my-4 bg-blue-50 w-64 h-60 cursor-pointer thruBlue geeks">
          <img src={e.strMealThumb} alt={e.strMeal} className="w-64 h-48" />
          <section className="flex justify-evenly my-2">
            <span className="text-sm" >{e.strMeal}</span>
            <span className="text-sm">{e.idMeal}</span>
          </section>
        </div>
      ))}
      </div>
      :

<Loader/>
}
    </div>


  );
}

export default Meal;
