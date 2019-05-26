import React, { Component } from 'react';
import { connect } from 'react-redux';
// notification implementation
import Swal from 'sweetalert2';
//import actions to be used
import { pushLetter, winGame, loseGame } from '../../redux/actions/game';
//init params to play
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const attemsLimitToFaild = 7;


class KeywordComponent extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Handle current game status.
   * Compare all the characters using toUpperCase() method
   * if someone make match, it is going to appear on the screen
   */
  handleClick(letter) {
    let { word, letterFound, failed } = this.props.game;
    let foundLetter = false;
    //find letter maches and replace the letter if exist
    for (let i = 0; i < word.length; i++) {
      if(letter.toUpperCase() === word[i].toUpperCase()){
        letterFound[i] = letter.toLowerCase();
        foundLetter = true;
      }
    }
    //if don't found some letter faild value is going to be update
    const payload = {
      letterFound,
      failed: failed + (foundLetter ? 0 : 1 )
    }

    if(JSON.stringify(word) === JSON.stringify(letterFound)){
      //win game
      this.props.winGame({wins: (this.props.game.wins + 1)});
      Swal.fire('Winner!', 'You win the game.','success' )
    } else if (attemsLimitToFaild === payload.failed){
      //lose the game
      this.props.loseGame({losers: (this.props.game.losers + 1)})
      Swal.fire({type: 'error', title: 'Oops...', text: 'You lose the game, try again :)!'});
    } else {
      //continue playing
      this.props.pushLetter(payload);
    }
  }

  render() {
    if( this.props.game.word.length ) {
      return(
        <div className="container">
          {
            letters.map(letter => {
              return <button
                        onClick={() => this.handleClick(letter)}
                        className="btnLetter"
                        key={letter}>
                          {letter.toUpperCase()}
                      </button>
            })
          }
        </div>
      )
    }

    return(<div></div>)
  }
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps, {pushLetter, winGame, loseGame})(KeywordComponent);
