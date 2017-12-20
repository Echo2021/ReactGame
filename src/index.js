import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Square from './components/Square';
import Board from './components/Board';
import Game from './components/Game';
import styles from './less/index.less';


if(module.hot){
	module.hot.accept(()=>{
		ReactDOM.render(
				
			<AppContainer>
				<Game/>
			</AppContainer>,
				
			document.getElementById('app')
			)
	})
}

ReactDOM.render(
			<AppContainer>
				<Game/>
			</AppContainer>,
		
		document.getElementById('app')
	);