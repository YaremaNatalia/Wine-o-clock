import Container from '@/components/Container';
import Section from '@/components/Section';
import Button from './Button';
import { MouseEvent } from 'react';
import { makeBlur } from '@/utils';

const App = () => {
  const onBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);
    console.log(11111);
  };

  return (
    <Section>
      <Container>
        <p>App</p>
        <Button
          width={275}
          height={60}
          padding={20}
          title='Shop now'
          onClick={onBtnClick}
        />
      </Container>
    </Section>
  );
};

export default App;
