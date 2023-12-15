const Sidebar = () => {
  return (
    <aside className="flex flex-col bg-cpq-blue min-h-screen w-64 items-start p-8">
      <div className="border-b border-light-yellow w-full">
        <p className="font-custom ml-1 text-left text-light-yellow text-3xl mt-6 mb-6 w-full">
          MyCPQ
        </p>
      </div>
      <ul className="flex flex-col items-start w-full mt-6 ">
        <li className="group mb-6 w-full flex justify-start items-start p-2 hover:bg-light-yellow border-solid border-0 rounded transition-colors duration-300 ease-in-out">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              width="26"
              viewBox="0 0 24 24"
              id="dashboard"
              className="mr-6"
            >
              <path
                className="group-hover:fill-cpq-blue"
                fill="#fffbeb"
                d="M8.5 3h-3a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 0 0-5zm0 4h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 0 3zm0 3h-3A2.5 2.5 0 0 0 3 12.5v6A2.5 2.5 0 0 0 5.5 21h3a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 8.5 10zm1.5 8.5A1.5 1.5 0 0 1 8.5 20h-3A1.5 1.5 0 0 1 4 18.5v-6A1.5 1.5 0 0 1 5.5 11h3a1.5 1.5 0 0 1 1.5 1.5zm8.5-2.5h-3a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 0 0-5zm0 4h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 0 3zm0-17h-3A2.5 2.5 0 0 0 13 5.5v6a2.5 2.5 0 0 0 2.5 2.5h3a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 18.5 3zm1.5 8.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 15.5 4h3A1.5 1.5 0 0 1 20 5.5z"
              ></path>
            </svg>
            <p className="group-hover:text-cpq-blue text-lg text-light-yellow">
              Dashboard
            </p>
          </div>
        </li>
        <li className="group mb-6 w-full flex justify-start items-start p-2  hover:bg-light-yellow border-solid border-0 rounded transition-colors duration-300 ease-in-out">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="20"
              viewBox="0 0 640 512"
              className="mr-8 group-hover:stroke-cpq-blue"
            >
              <path
                className="group-hover:fill-cpq-blue"
                fill="#fffbeb"
                d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
              />
            </svg>
            <p className="group-hover:text-cpq-blue text-lg text-light-yellow">
              Customers
            </p>
          </div>
        </li>
        <li className="group mb-6 w-full flex justify-start items-start p-2  hover:bg-light-yellow border-solid border-0 rounded transition-colors duration-300 ease-in-out">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 512 512"
              className="mr-8"
            >
              <path
                className="group-hover:fill-cpq-blue"
                fill="#fffbeb"
                d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
              />
            </svg>
            <p className="group-hover:text-cpq-blue text-lg text-light-yellow">
              Analytics
            </p>
          </div>
        </li>
        <li className="group w-full flex justify-start items-start p-2 hover:bg-light-yellow border-solid border-0 rounded transition-colors duration-300 ease-in-out">
          <a className="flex justify-center items-center text-lg  text-light-yellow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="18"
              viewBox="0 0 448 512"
              className="mr-8 group-hover:fill-cpq-blue"
            >
              <path
                className="group-hover:fill-cpq-blue"
                fill="#fffbeb"
                d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"
              />
            </svg>
            <p className="group-hover:text-cpq-blue text-lg text-light-yellow">
              Products
            </p>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
