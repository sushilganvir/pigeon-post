import "./category.css";

const Category = (props) => {
  return (
    <div className="category__name">
      <span>{props.categoryName}</span>
    </div>
  );
};

export default Category;
