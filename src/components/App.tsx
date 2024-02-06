import Container from '@/components/Container';
import Section from '@/components/Section';
import Button from './Button';
import { MouseEvent } from 'react';
import { makeBlur } from '@/utils';
import { ButtonDesign } from '@/constants';
import { Toaster } from 'react-hot-toast';
import Footer from './Footer';
import MainWineTime from './MainWineTime';


const App = () => {
  // const onBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
  //   makeBlur(e.currentTarget);
  //   console.log(11111);
  // };

  return (
    <>
      <Section>
        <Container>
          {/* <p>App</p> */}
          {/* <Button
            width={275}
            height={60}
            sidePadding={20}
            fontSize={16}
            title='Shop now'
            onClick={onBtnClick}
            buttonDesign={ButtonDesign.burgundy}
          /> */}
          <MainWineTime />
          <Footer />
        </Container>
      </Section>
      <Toaster position='top-right' reverseOrder={false} />
    </>
  );
};

export default App;
