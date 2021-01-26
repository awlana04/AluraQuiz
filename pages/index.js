import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto 6%;
  padding-top: 45px;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();

  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - CSS</title>
      </Head>
      <QuizContainer>
        <QuizLogo /> 

        <Widget>
          <Widget.Header>
            <h1>Quiz CSS da Alura</h1>
          </Widget.Header>
          
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();

              router.push(`/quiz?name=${name}`);
            }}
            >
              <input 
                onChange={function (event) {
                  setName(event.target.value);
                }}
                placeholder="Revele seu nome para jogar :>" 
              />

              <button type="submit" disabled={name.length === 0}>
                Bora estilizar {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <p>
              Teste os seus conhecimentos sobre CSS e vamos ver quantos layouts você vai deixar de quebrar
            </p>
          </Widget.Content>
        </Widget>
    
        <Footer />
      </QuizContainer>

      <GitHubCorner />
    </QuizBackground>
  );
}
