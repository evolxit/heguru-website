const Product = ({ item, type }) => {
  return (
    <div className="">
      {item && (
        <div key={item.id} className="rounded-lg bg-gray-100 p-3 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img
            className="w-full rounded-lg object-cover object-center"
            src={item.image ? item.image : 'https://placehold.jp/400x400.png'}
            alt=""
          />
          <p className="my-4 font-bold text-gray-500 main-heading-font">{item.name}</p>

          {type == 'category' && (
            <a
              href="/products"
              class="text-xs hover:bg-primary-700 font-bold inline-block bg-primary-500 text-white rounded px-3 py-2"
            >
              See More
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
