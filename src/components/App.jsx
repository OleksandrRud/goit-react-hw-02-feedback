import React, { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  leaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positivePercentage = Math.floor((this.state.good * 100) / total);
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.leaveFeedback}
            options={this.options}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 && <Notification message="There is no feedback" />}
          {total > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
