import React from 'react'
import { IQuestionAnswersProps, IQuestionAnswer } from 'app/@core/interface'

const QuestionAnswerSec: React.FC<IQuestionAnswersProps> = ({ list }: IQuestionAnswersProps) => (
  <div className='dashboard__question-section'>
    <h2>Your questions answered</h2>
      {
        list?.map((item: IQuestionAnswer, index: number) => (
          <div key={item.question + index} className='dashboard__question-item'>
            <h4>{item.question}</h4>
            <p>{item.answer}</p>
          </div>
        ))
      }
  </div>
)

export default QuestionAnswerSec
