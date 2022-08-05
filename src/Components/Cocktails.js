import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";
import CocktailsSearch from "./CocktailsSearch";
import Loading from "../Images/loading.svg";
import { motion } from "framer-motion";

const Cocktails = () => {
  const { cocktails, status, isLoading, setSingleCocktail } =
    useGlobalContext();

  const animateDiv = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  return (
    <>
      <CocktailsSearch />
      <main className="w-[80%] flex flex-col items-center">
        {status && !isLoading && (
          <motion.section
            className="w-full grid lg:grid-cols-3 justify-items-center gap-4 "
            transition={{ staggerChildren: 0.2 }}
            variants={animateDiv}
            initial="hidden"
            animate="show"
          >
            {cocktails.map((item, index) => {
              const {
                idDrink,
                strDrink,
                strCategory,
                strDrinkThumb,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strInstructions,
              } = item;
              return (
                <motion.div
                  className="h-[23rem] w-[80%] min-w-[300px] bg-white my-4 p-2 rounded-md shadow-[.25rem_.35rem] border-l-2 border-t-2 border-black hover:shadow-[.40rem_.40rem_.75rem] duration-300"
                  key={idDrink}
                  variants={animateDiv}
                  whileInView={{ opacity: 1 }}
                >
                  <img
                    src={strDrinkThumb}
                    alt=""
                    className="h-[15rem] w-full object-cover"
                  />
                  <div className="cocktails-text h-[6.5rem] p-2">
                    <h1
                      className={`text-green-500 tracking-widest font-[600] ${
                        strDrink.length > 17 ? "text-sm mt-3" : "text-2xl"
                      }`}
                    >
                      {strDrink}
                    </h1>
                    <h2>{strCategory}</h2>
                    <Link
                      to={`/${idDrink}`}
                      className="bg-green-500 p-1 rounded-sm mt-2 w-[6rem] text-white shadow-md text-sm block"
                      onClick={() =>
                        setSingleCocktail({
                          idDrink,
                          strDrink,
                          strCategory,
                          strDrinkThumb,
                          strIngredient1,
                          strIngredient2,
                          strIngredient3,
                          strInstructions,
                        })
                      }
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.section>
        )}
        {isLoading && <img src={Loading} alt="loading" className="text-lg" />}
        {!status && <h1>No Item Match with Your Search</h1>}
      </main>
    </>
  );
};

export default Cocktails;
