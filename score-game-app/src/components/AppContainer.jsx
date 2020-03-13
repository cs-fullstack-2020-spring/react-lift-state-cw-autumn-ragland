import React, { Component } from 'react';
import Player from './Player'

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastClicked: "Who",
        }
    }

    updatePlayer = (clicker, score) => {
        this.setState({lastClicked : clicker});
    }

    render() {
        return (
            <div>
                <h2>{this.state.lastClicked} Clicked the Button Last</h2>
                <Player name="Autumn" updatePlayer = {this.updatePlayer}/>
                <Player name="Kevin" updatePlayer = {this.updatePlayer}/>
            </div>
        )
    }
}
export default AppContainer