// import { createContext, useContext, useState } from 'react';

// const CustomerContext = createContext();

// export const useCustomerContext = () => {
//   return useContext(CustomerContext);
// };

// export const CustomerProvider = ({ children }) => {
//   const [customerData, setCustomerData] = useState([{ email: 'helo' }]);

//   const addCustomer = (customer) => {
//     setCustomerData((prevData) => [...prevData, customer]);
//   };

//   return (
//     <CustomerContext.Provider value={{ customerData, addCustomer }}>
//       {children}
//     </CustomerContext.Provider>
//   );
// };
