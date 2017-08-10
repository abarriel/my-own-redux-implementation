import React from 'react';
import connect from './connect';
import { incriment } from './actions';

const App = ({ title, count, incriment }) => {
  const incr = e => {
    e.preventDefault();
    incriment();
  }
  return (
    <div className="App">
    <a href="#" onClick={incr}>{title}</a>
    <span>{count}</span>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({ incriment: () => dispatch(incriment()) });
const mapStateToProps = (state) => ({
  count: state.count
}) 
export default connect(mapStateToProps,mapDispatchToProps)(App);
