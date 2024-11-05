const Product = ({ product }) => {
  return (
    <div className="">
      {product && (
        <div className="w-full p-5 text-xs bg-gray-50 rounded-md">
          <a href="/product-detail" className="relative">
            <img
              className="rounded-md w-full"
              src={product.image ? product.image : 'https://placehold.jp/400x400.png'}
              alt=""
            />
          </a>
          <h2 className="text-third-500 text-sm my-5 font-semibold hover:text-third-400">{product.name}</h2>
          <p className="text-gray-400">{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
