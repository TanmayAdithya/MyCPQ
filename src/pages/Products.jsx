import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import ProductsData from '../data/ProductsData';

const columns = [
  {
    accessorKey: 'name',
    header: 'Product Name',
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: 'basePrice',
    header: 'Base Price',
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

const Products = () => {
  const [products, setProducts] = useState(ProductsData);
  const table = useReactTable({
    data: products, // Renamed 'products' to 'data' for consistency
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between pt-4 w-full mb-10">
        <h1 className="text-3xl font-normal font-custom">Products</h1>
        <button className="flex items-center bg-orange-500 hover:bg-orange-600  text-white border-0 rounded-md px-4 py-2 hover:shadow-xl hover:rounded-xl transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="12"
            width="12"
            viewBox="0 0 448 512"
            className="mr-2"
          >
            <path
              fill="#ffffff"
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
          Add Product
        </button>
      </div>
      {/* Search Bar */}
      <div className="flex items-baseline border-2 rounded-lg border-gray-300 w-1/4 px-2 py-1 mb-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="14"
          width="14"
          viewBox="0 0 512 512"
          className="fill-gray-500 mr-2"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <form>
          <input
            id="customer-info"
            type="text"
            placeholder="Search"
            className="outline-none w-full bg-transparent"
          />
        </form>
      </div>
      {/* Products Table */}
      <div className="w-full bg-blue-200 border-0 rounded-t-xl">
        <div className="flex">
          {table.getHeaderGroups().map((headerGroup) => (
            <div key={headerGroup.id} className="flex flex-1 p-2">
              {headerGroup.headers.map((header) => (
                <div
                  key={header.id}
                  className="text-left w-full font-medium text-sky-900"
                >
                  {header.column.columnDef.header}
                </div>
              ))}
            </div>
          ))}
        </div>
        {table.getRowModel().rows.map((row) => (
          <div key={row.id} className="flex">
            {row.getVisibleCells().map((cell) => (
              <div
                key={cell.id}
                className="flex-1 p-2 border-b-2 border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors duration-300"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
