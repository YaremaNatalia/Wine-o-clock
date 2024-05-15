import { FC } from 'react';

import Container from '@/components/Container';
import { IoIosArrowForward } from 'react-icons/io';
import { IProps } from './PageNavigation.types';
import { PageNavigationWrapper } from './PageNavigation.styled';

const PageNavigation: FC<IProps> = ({
  firstTitle,
  secondTitle,
  thirdTitle,
}) => {
  const isLastTitle = !thirdTitle;

  return (
    <Container>
      <PageNavigationWrapper>
        <p>{firstTitle}</p>
        <IoIosArrowForward size={12} />
        <p className={isLastTitle ? 'currentPageTitle' : ''}>{secondTitle}</p>
        {thirdTitle && (
          <>
            <IoIosArrowForward size={12} />
            <p className='currentPageTitle'>{thirdTitle}</p>
          </>
        )}
      </PageNavigationWrapper>
    </Container>
  );
};

export default PageNavigation;
