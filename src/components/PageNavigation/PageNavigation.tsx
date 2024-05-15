import { FC } from 'react';

import Container from '@/components/Container';
import { IoIosArrowForward } from 'react-icons/io';
import { IProps } from './PageNavigation.types';
import { PageNavigationWrapper } from './PageNavigation.styled';
import { Link } from 'react-router-dom';

const PageNavigation: FC<IProps> = ({
  firstTitle,
  firstLink,
  secondTitle,
  secondLink = '',
  thirdTitle,
}) => {
  const isLastTitle = !thirdTitle;

  return (
    <Container>
      <PageNavigationWrapper>
        <Link to={firstLink}>
          <p>{firstTitle}</p>
        </Link>
        <IoIosArrowForward size={12} />
        <Link to={secondLink}>
          <p className={isLastTitle ? 'currentPageTitle' : ''}>{secondTitle}</p>
        </Link>
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
