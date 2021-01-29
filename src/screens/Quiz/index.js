import React, { useEffect, useState } from 'react';

import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import AlternativeForms from '../../components/AlternativeForms';

import Widget from '../../components/Widget';
import BackLinkArrow from '../../components/BackLinkArrow';

import Button from '../../components/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ 
  questionIndex, 
  question, 
  totalQuestions, 
  addResult,
  onSubmit 
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  
  const questionId = `questionId__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />

        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        src={question.image}
        alt='Descrição' 
        style={{ 
          width: '100%', 
          height: '150px', 
          objectFit: 'cover' 
        }}
      />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <AlternativeForms 
          onSubmit={(event) => {
            event.preventDefault();
            setIsQuestionSubmited(true);

            setTimeout(() => {
              addResult(isCorrect);
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);

              onSubmit();
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            
            return (
              <Widget.Topic 
                as="label" 
                htmlFor={alternativeId} 
                key={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input 
                  type="radio" 
                  name={questionId} 
                  id={alternativeId} 
                  style={{ display: 'none' }}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />

                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>

          {isQuestionSubmited && isCorrect && <p>Não é que o bicho é brabo!? Acertou muleke!</p>}
          {isQuestionSubmited && !isCorrect && <p>IIIII, dá zero pra ele.</p>}
        </AlternativeForms>
      </Widget.Content>
    </Widget>
  );
}

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        Tela de resultsado:
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou 
          {' '}
          
          {results.filter((x) => x).length}
          
          {' '}
          perguntas
        </p>
        
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #
              {index + 1} 
              
              Resultado: 
              {' '}

              {result === true 
                ? 'Acertou malandro!' 
                : 'Errou!'
              }
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
}

export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState([]);
 
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];

  const totalQuestions = externalQuestions.length;

  const bg = externalBg;
  
  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function addResult(result) {
    setResults([...results, result]);
  }

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.QUIZ && 
          <QuestionWidget
            questionIndex={questionIndex}
            question={question}
            totalQuestions={totalQuestions}
            addResult={addResult}
            onSubmit={handleSubmitQuiz}
          />
        }

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && 
          <ResultWidget results={results} />
        }
      </QuizContainer>
    </QuizBackground>
  );
};
