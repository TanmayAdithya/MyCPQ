import logo from '../assets/MyCPQ Logo.png';
import HeroBtn from '../components/HeroBtn';

const LandingPage = () => {
  return (
    <div id="hero" className="flex flex-1 flex-col items-center">
      {/* Navbar */}
      <nav className="flex w-full justify-between box-border px-24 py-6 items-center">
        <a href="/">
          <img className="w-16 object-cover" src={logo} />
        </a>
        <div className="flex justify-center items-center">
          <HeroBtn title="GitHub" />
        </div>
      </nav>
      {/* Heading */}
      <div className="flex flex-col flex-1 justify-center items-center mt-24">
        <p className="my-6 drop-shadow-xl font-custom text-gray-600">
          An Open Source CPQ Software To Manage Your Business In A Heart Beat{' '}
        </p>
        <div className="flex flex-col justify-center items-center mb-8">
          <span className="flex items-center text-8xl font-custom font-medium text-cpq-blue">
            Precision
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="112"
              width="112"
              viewBox="0 0 512 512"
              className="mx-3"
            >
              <path
                fill="#002244"
                d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
              />
            </svg>
            in Every Pixel,
          </span>

          <span className="flex items-center text-8xl font-custom font-medium text-cpq-blue">
            Excellence in Every Quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="112"
              width="84"
              viewBox="0 0 384 512"
              className="mx-3"
            >
              <path
                fill="#002244"
                d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm54.2 253.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.7 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 349l-9.8 32.8z"
              />
            </svg>
          </span>
        </div>
        <HeroBtn title="Dashboard" />
      </div>
    </div>
  );
};

export default LandingPage;
