import React, { Component } from 'react';

import Header from './Header'
import SentimentEditor from './Editor/SentimentEditor'
import TitleEditor from './Editor/TitleEditor'
import BodyEditor from './Editor/BodyEditor'

import sentiment from 'sentiment'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.changeBG = this.changeBG.bind(this)
    this.state = {color: '#ffffff'}
  }

/*
 * convertScoreToColor
 * uses `sentiment` NPM package to naively analyze sentiment
 * of users text.
 *
 * returns a score using AFINN list of english
 * words by Finn Årup Nielsen. Each word rated
 * uses an integer from minus five (negative) and plus five (positive).
 *
 * @param {integer} score -
 * @description
 */
  convertScoreToColor(score) {
    let positiveColors = ['#ebf2f9', '#d8e6f4', '#c4daef', '#b1cdea', '#9dc1e5', '#8ab5e0', '#76a8db', '#629cd6', '#4f90d1', '#3c84cc']
    let negativeColors = ['#fbeaea', '#f8d6d6', '#f4c1c1', '#f1adad', '#ee9999', '#ea8484', '#e77070', '#e35b5b', '#e04747', '#dd3333']
    // If the score is positive
    if (score > 0) {
      if (score < 10) {
        return positiveColors[score - 1]
      }
      return positiveColors[9]
    } else if (score < 0) {
      score *= -1
      if (score < 10) {
        return negativeColors[score - 1]
      }
      return negativeColors[9]
    }
    return '#ffffff'
  }
  convertScoreToTextColor(score) {
    if (score > 0) {

    }
  }

  changeBG(words) {
    let { score } = sentiment(words)
    let color = this.convertScoreToColor(score)
    this.setState({color})
  }

  render() {
    let { color } = this.state
    let style = { backgroundColor: color }

    return (
      <div className="App" style={style}>
        <Header>
          <h1>Sentimentor</h1>
          <p>Sentimentor is a text editor that responds to your input with real-time sentiment analysis.</p>
        </Header>
        <SentimentEditor>
          <TitleEditor />
          <BodyEditor changeBG={this.changeBG} />
        </SentimentEditor>
      </div>
    )
  }
}

export default App;
