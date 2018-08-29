import { connect } from 'react-redux';
import App from '../';

const mapStateToProps = (state) => {
  return {
    hello: 'world'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
