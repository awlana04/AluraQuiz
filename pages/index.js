import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';

import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';

import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

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
            <form onSubmit={(event) => {
              event.preventDefault();

              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input 
                name="userName"
                value={name}
                placeholder="Revele seu nome para jogar :>" 
                onChange={(event) => setName(event.target.value)}
              />

              <Button type="submit" disabled={name.length === 0}>
                Bora estilizar {name}
              </Button>
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
