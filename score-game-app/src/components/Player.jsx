import React, {Component} from 'react';

class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
            score : 0,
        }
    }

    buttonClicked = () => {
        this.props.updatePlayer(this.props.name);
        this.setState({score : this.state.score + 1});
    }

    render(){
        return(
            <div>
                <h2>Player {this.props.name}</h2>
                <h3>Score : {this.state.score}</h3>
                <button onClick = {this.buttonClicked}>Click Me!</button>
            </div> 
        )
    }
}
export default Player