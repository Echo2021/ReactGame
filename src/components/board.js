import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';

class Board extends React.Component {
	
	
	renderSquare(i){
		//console.log(this.props.squares);
		return <Square key={i} value={this.props.squares[i]} onClick={()=>this.props.onClick(i)} highlight={this.props.line.includes(i)}/>;
	}
	render(){


		return(
				<div>
					<div className="board-row">
						{this.renderSquare(0)}
						{this.renderSquare(1)}
						{this.renderSquare(2)}
					</div>
					<div className="board-row">
						{this.renderSquare(3)}
						{this.renderSquare(4)}
						{this.renderSquare(5)}
					</div>
					<div className="board-row">
						{this.renderSquare(6)}
						{this.renderSquare(7)}
						{this.renderSquare(8)}
					</div>
				</div>
			);


	}
}


export default Board