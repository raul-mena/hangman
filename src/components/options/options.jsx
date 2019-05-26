import React, { Component } from 'react';
import { connect } from 'react-redux';
//generate random word
import randomWords from 'random-words';

//set initalStates, calling new game actions
import { setNewGame, resetGame } from '../../redux/actions/game';

class OptionsComponent extends Component {

  constructor(props){
    super(props);
    //set initial level for the game
    this.state = {
      level: 1
    }
    //bind the functions
    this.createNewGame = this.createNewGame.bind(this);
    this.handleChangeLevel = this.handleChangeLevel.bind(this);
  }

  /**
   * This function prepare the game, inital with a random word.
   * Depend of the leve is words numbers is going to display
   * Create a copy with '_' simbol, it is the object displayed on the screen
  */
  createNewGame(){
    const word = randomWords({exactly:1, wordsPerString: parseInt(this.state.level)})[0].split('');
    const letterFound = word.map(item => {return item === ' ' ? item : '_'});
    let payload = {
      word,
      letterFound,
      level: this.state.level
    }

    this.props.setNewGame(payload);
  }
  /**
   * This function set the level when the select option change
  */
  handleChangeLevel(event){
    this.setState({level: event.target.value});
  }

  render() {
    return(
      <div className="row">
        <div className="card-body">
          <div className="boxOptions">
            Failed: <h2 className="redColor">{this.props.game.failed}</h2>
          </div>
          <div className="boxOptions">
            <div className="row">
              <div className="col-md-4">
                Level:
              </div>
              <div className="col-md-8">
                <select id="mySelectLevel" className="form-control" value={this.state.level} onChange={this.handleChangeLevel}>
                    <option value="1">Easy</option>
                    <option value="2">Medium</option>
                    <option value="3">Hard</option>
                </select>
              </div>
            </div>
          </div>
          <div className="boxOptions">
            <button onClick={this.createNewGame} className="btn btn-primary">New Game</button>
            <button onClick={() => this.props.resetGame()} className="btn btn-primary">Reset parameters</button>
          </div>
          <div className="boxOptions">
            <table>
              <tbody>
                <tr>
                  <td>Won games:</td>
                  <td>{this.props.game.wins}</td>
                </tr>
                <tr>
                  <td>Lost games :</td>
                  <td>{this.props.game.losers}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps, {setNewGame, resetGame})(OptionsComponent)
