import Product from './Product';

const CategoryList = ({ categories }) => {
  return (
    <div className="px-8 xl:px-0 xl:w-10/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 ">
        {categories && categories.map((category) => <Product item={category} type="category" key={category.id} />)}
      </div>
    </div>
  );
};

export default CategoryList;
