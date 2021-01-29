import React from 'react';
import { ThemeProvider } from 'styled-components';

import QuizScreen from '../../src/screens/Quiz';

export default function guysQuiz({ externalDB }) {
  return (
    <ThemeProvider theme={externalDB.theme}>
      <QuizScreen
        externalQuestions={externalDB.questions}
        externalBg={externalDB.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const externalDB = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Falha em pegar os dados');
      }).then((response) => response)
    
      return {
        props: {
          externalDB,
        },
      };
  } catch(err) {
    throw new Error(err);
  }
}
