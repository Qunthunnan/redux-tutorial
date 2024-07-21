import { useEffect } from 'react';
import './App.css';
import { reducer } from './reducer';
import * as actions from './actions';
import { bindActionCreators, createStore } from 'redux';

function App() {
	useEffect(()=>{
		const incBtn = document.querySelector('.inc');
		const decBtn = document.querySelector('.dec');
		const rndBtn = document.querySelector('.rnd');
		const result = document.querySelector('.result');

		function update() {
			result.textContent = getState().value;
		}

		//Створення стору, передача функції reducer
		const store = createStore(reducer);

		const { dispatch, subscribe, getState } = store;

		subscribe(update);

		const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

		incBtn.addEventListener('click', inc);
		decBtn.addEventListener('click', dec);
		rndBtn.addEventListener('click', rnd);
	}, []);

  return (
	<div className="App">
		<div className="calculator">
			<span className="result">0</span>
			<nav className="actions">
				<button className="inc">INC</button>
				<button className="dec">DEC</button>
				<button className="rnd">RND</button>
			</nav>
		</div>
	</div>
  );
}

export default App;
