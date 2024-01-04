import ProductsData from '../data/ProductsData';

const Overview = () => {
  return (
    <div className="pt-4 pr-4">
      <div className="mb-12">
        <h1 className="text-3xl font-custom mb-6">Welcome, John Doe</h1>
        <div className="flex items-center bg-white shadow-md shadow-slate-300 border-0 rounded-xl px-6 py-4 w-1/2">
          <h3 className="text-4xl border-r-2 border-slate-500 pr-6 mr-6 font-custom">
            Top <br />
            Products
          </h3>
          <ol>
            <li className="flex items-center align-middle text-center mb-1 text-xl">
              <div className="w-6 h-6 rounded-full bg-slate-500 flex items-center justify-center text-sm text-white mr-1">
                1
              </div>
              Product A
            </li>
            <li className="flex items-center align-middle text-center mb-1 text-xl">
              <div className="w-6 h-6 rounded-full bg-slate-500 flex items-center justify-center text-sm text-white mr-1">
                2
              </div>
              Product D
            </li>
            <li className="flex items-center align-middle text-center mb-1 text-xl">
              <div className="w-6 h-6 rounded-full bg-slate-500 flex items-center justify-center text-sm text-white mr-1">
                3
              </div>
              Product E
            </li>
          </ol>
        </div>
      </div>
      <div className="flex w-full justify-between mb-12">
        <div className="w-full">
          <h1 className="text-xl font-custom mb-4 w-fit">Recent Quotes</h1>
          <div className="flex bg-white shadow-md shadow-slate-300 border-0 rounded-xl p-4 items-center w-[80%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22"
              width="18"
              viewBox="0 0 384 512"
              className="mr-2"
            >
              <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 80c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm128 72c8.8 0 16 7.2 16 16v17.3c8.5 1.2 16.7 3.1 24.1 5.1c8.5 2.3 13.6 11 11.3 19.6s-11 13.6-19.6 11.3c-11.1-3-22-5.2-32.1-5.3c-8.4-.1-17.4 1.8-23.6 5.5c-5.7 3.4-8.1 7.3-8.1 12.8c0 3.7 1.3 6.5 7.3 10.1c6.9 4.1 16.6 7.1 29.2 10.9l.5 .1 0 0 0 0c11.3 3.4 25.3 7.6 36.3 14.6c12.1 7.6 22.4 19.7 22.7 38.2c.3 19.3-9.6 33.3-22.9 41.6c-7.7 4.8-16.4 7.6-25.1 9.1V440c0 8.8-7.2 16-16 16s-16-7.2-16-16V422.2c-11.2-2.1-21.7-5.7-30.9-8.9l0 0 0 0c-2.1-.7-4.2-1.4-6.2-2.1c-8.4-2.8-12.9-11.9-10.1-20.2s11.9-12.9 20.2-10.1c2.5 .8 4.8 1.6 7.1 2.4l0 0 0 0 0 0c13.6 4.6 24.6 8.4 36.3 8.7c9.1 .3 17.9-1.7 23.7-5.3c5.1-3.2 7.9-7.3 7.8-14c-.1-4.6-1.8-7.8-7.7-11.6c-6.8-4.3-16.5-7.4-29-11.2l-1.6-.5 0 0c-11-3.3-24.3-7.3-34.8-13.7c-12-7.2-22.6-18.9-22.7-37.3c-.1-19.4 10.8-32.8 23.8-40.5c7.5-4.4 15.8-7.2 24.1-8.7V232c0-8.8 7.2-16 16-16z" />
            </svg>
            <h2 className="text-md">Sample Quote</h2>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-xl font-custom mb-4 w-fit">Recent products</h1>
          <div className="flex bg-white shadow-md shadow-slate-300 border-0 rounded-xl p-4 items-center w-[80%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="18"
              viewBox="0 0 448 512"
              className="mr-2"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            <h2 className="text-md">Customer Name</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full bg-blue-200 border-0 rounded-t-xl">
          <p className="p-2 text-2xl text-sky-900 font-custom">Products</p>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left font-medium p-2 text-sky-900">Name</th>
                <th className="text-left font-medium text-sky-900">ID</th>
                <th className="text-left font-medium text-sky-900">
                  Base Price
                </th>
              </tr>
            </thead>
            <tbody className="border-b-2 rounded-xl border-sky-950 w-full">
              {ProductsData.map((product) => {
                return (
                  <tr
                    key={product.productId}
                    className="border-b-2 border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors duration-300"
                  >
                    <td className="p-2">{product.name}</td>
                    <td>{product.id}</td>
                    <td>{product.basePrice}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
