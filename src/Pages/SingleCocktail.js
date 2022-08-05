import React from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

const SingleCocktail = () => {
  const { singleCocktail } = useGlobalContext();
  const {
    strDrink,
    strCategory,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strInstructions,
  } = singleCocktail;

  return (
    <>
      <main className="border-2 border-green-500 w-[85%] max-w-[850px] min-h-[33rem] bg-white p-2 flex flex-col lg:flex-row justify-center overflow-hidden relative lg:space-x-5">
        <div className="img-container">
          <img
            src={strDrinkThumb}
            alt={strDrink}
            className="h-[18rem] w-full max-w-[400px] object-cover lg:h-full"
          />
        </div>
        <div className="text-container mt-5 max-w-[450px] min-h-[13rem] space-y-1 flex flex-col justify-center">
          <h1>
            <span className="text-green-500 font-bold">Name:</span> {strDrink}
          </h1>
          <h2>
            <span className="text-green-500 font-bold">Category:</span>{" "}
            {strCategory}
          </h2>
          <p className="text-sm text-justify">
            {" "}
            <span className="text-green-500 font-bold">Instructions:</span>{" "}
            {strInstructions}
          </p>
          <span>
            <span className="text-green-500 font-bold">Ingredients:</span>
          </span>
          <ul className="translate-x-[2.5rem]">
            <li className="bullet list-disc">{strIngredient1}</li>
            <li className="bullet list-disc">{strIngredient2}</li>
            {strIngredient3 && (
              <li className="bullet list-disc">{strIngredient3}</li>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="absolute top-4 left-4 lg:left-0 bg-green-500 w-[4rem] text-center py-1 rounded-sm flex items-center justify-around text-white"
        >
          <BiLogOut />
          Back
        </Link>
      </main>
    </>
  );
};

export default SingleCocktail;
