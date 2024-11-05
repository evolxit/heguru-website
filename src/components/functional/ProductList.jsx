import Product from './Product';

const ProductList = (data) => {
  return (
    <div className="">
      {data &&
        Object.entries(data.data).map(([category, products]) => (
          <div className="mb-10" key={category}>
            <h2 className="font-semibold text-xl main-heading-font text-gray-500 bg-gray-100 p-4 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-category inline mb-1 mr-2 text-primary-500"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4h6v6h-6z" />
                <path d="M14 4h6v6h-6z" />
                <path d="M4 14h6v6h-6z" />
                <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              </svg>
              {category}

              <a
                href="viber://chat?number='09787868000'"
                target="_blank"
                rel="noopener noreferrer"
                className="float-right px-4 py-2 border bg-primary-500 rounded inline-block w-fit cursor-pointer text-white hover:bg-primary-600 hover:border-0 text-sm tag-line-font tracking-wider"
              >
                Buy Now
              </a>
            </h2>
            <div className=" pt-4 grid grid-cols-4 gap-4">
              {products.map((product) => (
                <Product item={product} type="product" key={product.id} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
