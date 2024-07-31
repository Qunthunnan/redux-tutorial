// import { connect } from "react-redux";
// import * as actions from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, rnd } from "./actions";

// function Counter ({value, inc, dec, rnd}) {
function Counter () {
    const value = useSelector(state => state.value);
    const dispatch = useDispatch();

    return (
        <div className="calculator">
        <span className="result">{ value }</span>
        <nav className="actions">
            <button onClick={ () => {dispatch(inc())} } className="inc">INC</button>
            <button onClick={ () => {dispatch(dec())}  } className="dec">DEC</button>
            <button onClick={ () => {dispatch(rnd())}  } className="rnd">RND</button>
        </nav>
    </div>
    )
}

// function mapStateToProps(state) {
//     return {
//         value: state.value
//     }
// }

// function mapDispatchToProps(dispatch) {
//     const { inc, dec, rnd} = actions;
//     return {
//         inc: () => dispatch(inc()),
//         dec: () => dispatch(dec()),
//         rnd: () => dispatch(rnd())
//     }
// }

export default Counter;

// export default connect(mapStateToProps, actions)(Counter);