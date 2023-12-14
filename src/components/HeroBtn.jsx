import PropTypes from 'prop-types';

const HeroBtn = ({ title, link }) => {
  return (
    <a
      className="text-center text-light-yellow border-solid border-cpq-blue bg-cpq-blue border-2 rounded-3xl px-4 py-2 hover:drop-shadow-2xl  hover:bg-light-yellow hover:text-cpq-blue"
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
