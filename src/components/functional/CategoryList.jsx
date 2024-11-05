const CategoryList = ({ categories }) => {
  return (
    <div className="px-8 xl:px-0 xl:w-10/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 ">
        {categories &&
          categories.map((category) => (
            <div
              key={category.id}
              className="rounded-lg bg-gray-200 p-3 shadow duration-150 hover:scale-105 hover:shadow-md"
            >
              <img
                className="w-full rounded-lg object-cover object-center"
                src={category.image ? category.image : 'https://placehold.jp/400x400.png'}
                alt=""
              />
              <p className="my-4 font-bold text-gray-500 main-heading-font">{category.name}</p>

              <a
                href="/products"
                class="text-xs hover:bg-primary-700 font-bold inline-block bg-primary-500 text-white rounded px-3 py-2"
              >
                See More
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
