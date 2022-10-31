import React, { Component } from "react";
import Statistics from "./Statictics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";

export class App extends Component { 

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  
  handleIncrement = (ev) => {
    const nameOfReview = ev.currentTarget.value;
    this.setState((prevState) => ({[nameOfReview]: prevState[nameOfReview] + 1 }));
    };
  
  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(((prevValue, currentValue) => { return prevValue + currentValue;
}),0);
    return total;
  };

  countPositiveFeedbackPercentage = () => { 
    const percentage = Math.round(this.state.good * 100 / this.countTotalFeedback());
    return percentage;
  }

  render() { 

    const percentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const percenage = this.countPositiveFeedbackPercentage(); 

    return (
      <div>
        <Section title={"Please leave feedback"}>
           <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement}></FeedbackOptions>
        </Section>
       
        <Section title={"Statistics"}>
          <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={percentage}/>
       </Section>
       
        
        </div>

  );
    
  }
}


