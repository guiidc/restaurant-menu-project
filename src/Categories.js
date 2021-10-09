import React from 'react';
import items from './data';


const Categories = ({ filterCategories }) => {

  const getCategoriesList = () => {
    const categoriesList =  new Set(items.map(({category}) => category));
    return ['All', ...categoriesList]
  }


  return (
    <div className="btn-container">
      { getCategoriesList().map((categorie) => (
        <button
          key={ categorie }
          className="filter-btn"
          onClick={ () => filterCategories(categorie) }
        >
          { categorie }
        </button>
      ))}
    </div>
  );
};

export default Categories;
