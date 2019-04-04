import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleAddTweet } from '../actions/tweets';

class NewTweet extends Component {
  state = {
    text: ''
  };

  handleChange = (event) => {
    const text = event.target.value;

    this.setState(() => ({
      text
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { text } = this.state;
    const { dispatch, id } = this.props;

    dispatch(handleAddTweet(text, id));

    this.setState(() => ({
      text: ''
    }));
  }


  render() {
    const { text } = this.state;
    const textWarningLength = 280 - text.length;

    return(
      <div>
        <h3 className="center">Compose New Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            className="text-area"
            placeholder="What's happeing?"
            value={text}
            onChange={this.handleChange}
            maxLength={280}            
          />
          {textWarningLength <= 100 && (
            <div className="tweet-length">
              {textWarningLength}
            </div>
          )}
          <button 
            className="btn"
            type="submit"
            disabled={text === ''}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewTweet);