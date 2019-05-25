import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordComponent extends Component {
  /**
   * This component is showing hidden word
   * replacing all characters by '_'
   * if the user find some letter, it is going to be displayed
   */
  render() {
    return(
      <div className="row">
        <div className=" container text-center">
          {
            this.props.game.letterFound.map((item, index) => {
              return <label key={index} className="boxLetter">
                      {item}
                    </label>
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps, {})(WordComponent)
