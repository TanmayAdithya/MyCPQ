import { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomerDetails = () => {
  // Customer Information
  const [customerName, setCustomerName] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [phoneNum, setPhoneNum] = useState();
  const [email, setEmail] = useState('');

  // Address
  const [addressLineOne, setAddressLineOne] = useState('');
  const [addressLineTwo, setAddressLineTwo] = useState('');
  const [addressLineThree, setAddressLineThree] = useState('');
  const [zipCode, setZipCode] = useState();
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const onClick = () => {
    console.log('Submited');
  };

  return (
    <div>
      <div className="w-full py-4 mb-2">
        <span className="text-sm font-semibold uppercase text-slate-600">
          Customers/
        </span>
        <span className="text-sm uppercase text-slate-500">
          Update Customer
        </span>
      </div>
      <div className="flex justify-between items-end border-b-2 pb-3 border-slate-300">
        <div className="flex flex-col justify-start">
          <h1 className="text-2xl font-bold mb-2 text-gray-900">
            Edit Customer
          </h1>
          <h2 className="text-md text-slate-500">
            Update your customer profile information here
          </h2>
        </div>
        <div className="flex justify-between">
          <Link to="/dashboard/customers">
            <button className="px-4 py-2 border-2 border-slate-400 uppercase mr-2 rounded-sm hover:rounded-md hover:bg-slate-100 transition-all">
              Cancel
            </button>
          </Link>
          <button
            type="/submit"
            onChange={onClick}
            className="px-4 py-2 border-2 text-white border-orange-500 hover:border-orange-600 hover:bg-orange-600 hover:shadow-sm hover:shadow-orange-200 hover:rounded-md transition-all duration-300 uppercase rounded-sm bg-orange-500"
          >
            Update Customer
          </button>
        </div>
      </div>
      <div className="flex pt-4 mt-4 pb-12 border-b-2 border-slate-300 ">
        <div className="w-full">
          <h1 className="text-xl font-semibold uppercase">
            Customer Information
          </h1>
        </div>
        {/* Customer Information */}
        <form className="w-full">
          <div className="bg-slate-50 mt-2 p-2 border-2 rounded-sm border-slate-300">
            <p className="text-slate-600">Name</p>
            <input
              className="bg-transparent font-semibold w-full text-slate-800 outline-none"
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          <div className="bg-slate-50 mt-2 p-2 border-2 rounded-sm border-slate-300">
            <p className="text-slate-600">Customer ID</p>
            <input
              className="bg-transparent font-semibold w-full text-slate-800 outline-none"
              type="text"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
            />
          </div>
          <div className="bg-slate-50 mt-2 p-2 border-2 rounded-sm border-slate-300">
            <p className="text-slate-600">Phone Number</p>
            <div className="flex">
              <span className="text-slate-600 mr-1">+91</span>
              <input
                className="bg-transparent font-semibold w-full text-slate-800 outline-none"
                type="text"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
            </div>
          </div>
          <div className="bg-slate-50 mt-2 p-2 border-2 rounded-sm border-slate-300">
            <p className="text-slate-600">Email</p>
            <input
              className="bg-transparent font-semibold w-full text-slate-800 outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>
      </div>
      {/* Address */}
      <div className="flex pt-4 mt-4 pb-12 border-b-2 border-slate-300">
        <div className="w-full">
          <h1 className="text-xl font-semibold uppercase">Address</h1>
        </div>
        <form className="w-full">
          <div className="bg-slate-50 mt-2 p-2 border-2 rounded-sm border-slate-300">
            <input
              className="bg-transparent font-semibold w-full text-slate-800 outline-none"
              type="text"
              placeholder="Address Line 1"
              value={addressLineOne}
              onChange={(e) => setAddressLineOne(e.target.value)}
            />
          </div>
          <div className="bg-slate-50 mt-2 p-2 border-2 rounded-sm border-slate-300">
            <input
              className="bg-transparent font-semibold w-full text-slate-800 outline-none"
              type="text"
              placeholder="Address Line 2"
              value={addressLineTwo}
              onChange={(e) => setAddressLineTwo(e.target.value)}
            />
          </div>
          <div className="bg-slate-50 mt-2 p-2 border-2 rounded-sm border-slate-300">
            <input
              className="bg-transparent font-semibold w-full text-slate-800 outline-none"
              type="text"
              placeholder="Address Line 3"
              value={addressLineThree}
              onChange={(e) => setAddressLineThree(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <div className="bg-slate-50 mt-2 p-2 border-2 rounded-sm border-slate-300 mr-2">
              <input
                className="bg-transparent font-semibold w-full text-slate-800 outline-none"
                type="text"
                placeholder="Zipcode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            <div className="bg-slate-50 mt-2 p-2 border-2 rounded-sm border-slate-300 mr-2">
              <input
                className="bg-transparent font-semibold w-full text-slate-800 outline-none"
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="bg-slate-50 mt-2 p-2 border-2 rounded-sm border-slate-300">
              <input
                className="bg-transparent font-semibold w-full text-slate-800 outline-none"
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <select className="mt-2 p-2 w-1/2 border-2 bg-slate-50 border-slate-300 font-medium text-slate-400 rounded-sm focus:outline-none focus:ring focus:border-slate-800 ">
              <option
                className="font-semibold text-slate-800"
                value="India"
                disabled
              >
                Select a Country
              </option>
              <option value="India">India</option>
            </select>
          </div>
        </form>
      </div>
      {/* Additional Contacts */}
      <div className="flex pt-4 mt-4 pb-12 border-b-2 border-slate-300">
        <div className="w-full">
          <h1 className="text-xl font-semibold uppercase">
            Additional Contacts
          </h1>
        </div>
        <div className="w-full flex items-center">
          <button className="flex items-center px-3 py-1 border-0 rounded-sm bg-slate-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 448 512"
              className="mr-2 fill-white"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
            Add Additional Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
