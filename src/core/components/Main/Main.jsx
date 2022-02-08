import PropTypes from 'prop-types';

const Main = ({ children }) => (
  <main>
    <div className="container wrapper">
      {children}
    </div>
  </main>
);

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: null,
};

export default Main;
