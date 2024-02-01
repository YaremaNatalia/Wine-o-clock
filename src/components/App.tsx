import Container from '@/components/Container';
import Section from '@/components/Section';
import Input from './Input';
import { FormTypes } from '@/constants';

const App = () => {
  return (
    <Section>
      <Container>
        <div>App</div>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <Input
            formType={FormTypes.register}
            placeholder='Search'
            label='Email'
          />
          <Input
            formType={FormTypes.register}
            placeholder='Search'
            label='Email'
          />
        </form>
      </Container>
    </Section>
  );
};

export default App;
