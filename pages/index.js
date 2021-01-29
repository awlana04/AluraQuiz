import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';

import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';

import Widget from '../src/components/Widget';
import Link from '../src/components/Link';

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

        <Widget 
          as={motion.section}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%'}
          }}
          transition={{
            delay: 0,
            duration: 0.5
          }}
          initial="hidden"
          animate="show"
        >
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
    
        <Widget
          as={motion.section}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%'}
          }}
          transition={{
            delay: 0.5,
            duration: 0.5
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da galera</h1>

            <ul>
              {db.external.map((externalLink) => {
                const [projectName, githubUser] = externalLink
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');
                
                return (
                  <li key={externalLink}>
                    <Widget.Topic as={Link} href={externalLink}>
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>

        <Footer 
          as={motion.footer}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%'}
          }}
          transition={{
            delay: 1.0,
            duration: 0.5
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>

      <GitHubCorner />
    </QuizBackground>
  );
}
