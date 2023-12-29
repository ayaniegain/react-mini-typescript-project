import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import 'animate.css';
import "../App.css"


function MealDetails() {
  const { state: item } = useLocation();

  let singlePage = item[0];


//   const { id } = useParams();


  return (
    // <>
    //   <h1 className="text-3xl flex justify-center ">Meal recipe</h1>
    //   <div className="flex flex-wrap gap-6 p-4 justify-center">
    //     <div className="my-4 bg-blue-50 w-64 h-60">
    //       <img
    //         src={singlePage.strMealThumb}
    //         alt={singlePage.strMeal}
    //         className="w-64 h-48"
    //       />
    //       <section className="flex justify-evenly my-2">
    //         <span className="text-sm">{singlePage.strMeal}</span>
    //         <span className="text-sm">{singlePage.idMeal}</span>
    //       </section>
    //     </div>
    //   </div>
    // </>



    <section className="bg-white dark:bg-gray-900 my-36 p-6 ">
      <h2 className=" text-3xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white font-s">Page Details</h2>        
  <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white animate__animated animate__bounce">{singlePage.strMeal}</h2>
      <p>{singlePage.idMeal}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio placeat aperiam beatae. Porro quae expedita quam cumque corrupti soluta veniam.</p>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-8 geeks">
      <img className="w-full rounded-lg " src={singlePage.strMealThumb} alt="office content 1" />
      {/* <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" /> */}
    </div>
  </div>
</section>
  );
}

export default MealDetails;
