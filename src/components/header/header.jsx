import React, { Component } from 'react';

class HeaderComponent extends Component {
  /**
   * Simple HTML component to display navbar section
   */
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h3 className="navbar-brand">HANGMAN GAME</h3>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        </div>
      </nav>
    )
  }
}

export default HeaderComponent;
