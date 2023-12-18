import PropTypes from 'prop-types';

const HeroBtn = ({ title, link }) => {
  return (
    <a
      className="text-center text-white border-solid border-cpq-blue bg-cpq-blue border-2 rounded-3xl px-6 py-3 hover:drop-shadow-2xl  hover:bg-white hover:text-cpq-blue transition-colors duration-300 ease-in-out"
      href={link}
    >
      {title}
    </a>
  );
};

HeroBtn.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default HeroBtn;
