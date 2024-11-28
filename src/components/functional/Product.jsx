const Product = ({ item, type }) => {
  return (
    <div className="">
      {item && (
        <div
          key={item.id}
          className="relative rounded-lg bg-gray-100 p-3 shadow duration-150 hover:scale-105 hover:shadow-md h-full"
        >
          <img
            className="w-full rounded-lg object-cover object-center"
            src={item.image ? item.image : 'https://placehold.jp/400x400.png'}
            alt=""
          />
          <p className="my-4 font-bold text-gray-500 main-heading-font text-xs">{item.name}</p>

          {type == 'category' && (
            <a
              href="/products"
              className="absolute -bottom-3 -right-3 tag-line-font text-xs tracking-wider hover:bg-primary-700 font-bold inline-block bg-primary-500 text-white rounded-md px-3 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
              >
                <>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                </>
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
