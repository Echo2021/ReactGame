import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {

	render(){
			
			if(this.props.highlight){
				return(
					<button className="square" onClick={()=>this.props.onClick()} style={{color:"red"}}>
						{this.props.value}
					</button>
				);
			}else {
				return(
					<button className="square" onClick={()=>this.props.onClick()} >
						{this.props.value}
					</button>
				);
			}
			
		
		
	}
}


export default Square