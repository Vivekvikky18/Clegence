import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';

class Quiz extends Component {

   renderAnswerOptions=(key)=> {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={this.props.answer}
        questionId={this.props.questionId}
        onAnswerSelected={this.props.onAnswerSelected}
      />
    );
  }

  render (){
    return (
      <CSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div key={this.props.questionId}>
          <QuestionCount counter={this.props.questionId} total={this.props.questionTotal} />
          <Question content={this.props.question} />
          <ul className="answerOptions">
            {this.props.answerOptions && this.props.answerOptions.map(this.renderAnswerOptions)}
          </ul>
          <div style={{marginLeft:'30%' ,padding: '5px',}}>
          <button style={{color: 'blue', padding: '5px', borderRadius: '15px',marginRight: '5px'}}
          disabled={this.props.questionId===1 ? true : false} onClick={()=>this.props.back()} >
            Pervious
          </button> 
          
          <button 
          style={{color: 'Red', padding: '5px', borderRadius: '15px',marginRight: '5px'}}
          onClick={()=>this.props.submit()}>
            Submit Answer
          </button>
          <button
          style={{color: 'blue', padding: '5px', borderRadius: '15px',marginRight: '5px'}}
           disabled={this.props.questionId===this.props.questionTotal ? true : false} onClick={()=>this.props.next()}>
            Next
          </button>
          <button 
          style={{color: 'green', padding: '5px', borderRadius: '15px',marginRight: '5px'}}
          onClick={()=>this.props.showAnswer()}
          >
            Show Answer
          </button>
          </div>
        </div>
       </CSSTransitionGroup>
    );
  }
  
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  back:PropTypes.func.isRequired,
  next:PropTypes.func.isRequired,
};

export default Quiz;
