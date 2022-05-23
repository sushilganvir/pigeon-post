import "./category-card.css";
import Category from "./category/category";

const CategoryCard = () => {
  const newsCategoryName = [
    { id: 1, name: "all" },
    { id: 2, name: "national" },
    { id: 3, name: "business" },
    { id: 4, name: "sports" },
    { id: 5, name: "world" },
    { id: 6, name: "politics" },
    { id: 7, name: "technology" },
    { id: 8, name: "startup" },
    { id: 9, name: "entertainment" },
    { id: 10, name: "miscellaneous" },
    { id: 11, name: "hatke" },
    { id: 11, name: "science" },
    { id: 11, name: "automobile" },
  ];

  return (
    <div className="category__list">
      {newsCategoryName.map(categoryList => (
         <Category categoryName={categoryList.name} />
      ) 
        
      )}      
    </div>
  );
};

export default CategoryCard;
