import Product from './Product';

const ProductList = (data) => {
  return (
    <div className="">
      {data &&
        Object.entries(data.data).map(([category, products]) => (
          <div className="mb-10" key={category}>
            <h2 className="font-bold">{category}</h2>
            <div className=" pt-3 grid grid-cols-4 gap-4">
              {products.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
