import Container from '@/components/Container';
import Section from '@/components/Section';
import Input from './Input';
import { AriaLabels, FormTypes } from '@/constants';
import IconButton from './IconButton';

const App = () => {
  return (
    <Section>
      <Container>
        <div>App</div>
        <form>
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
        <IconButton
          ariaLabel={AriaLabels.search}
          btnSize={40}
          children={<div></div>}
        />
      </Container>
    </Section>
  );
};

export default App;
