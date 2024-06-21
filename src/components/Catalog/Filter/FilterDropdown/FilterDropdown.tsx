import { FC, useEffect, useRef, useState } from 'react';
import {
  DropdownFilter,
  DropdownNavigation,
  List,
  Option,
} from './FilterDropdown.styled';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

import { IProps } from './FilterDropdown.types';
import { setToggle } from '@/utils';

const FilterDropdown: FC<IProps> = ({ options, value, title, onChange }) => {
  const [showList, setShowList] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowList(false);
    }
  };

  const handleEscapePress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowList(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleBackdropClick);
    document.addEventListener('keydown', handleEscapePress);
    return () => {
      document.removeEventListener('mousedown', handleBackdropClick);
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, []);

  const handleSelectDropdownValue = (value: string) => {
    onChange(value);
    setShowList(false);
  };

  return (
    <DropdownFilter ref={dropdownRef}>
      <DropdownNavigation onClick={setToggle(setShowList)}>
        {title}
        <div className='valueWrapper'>
          <span className='selectedValue'>{value}</span>
          {showList ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
        </div>
      </DropdownNavigation>
      {showList && (
        <List>
          {options?.map((option) => (
            <Option
              key={option.label}
              onClick={() => {
                handleSelectDropdownValue(option.value);
              }}
            >
              {option.label}
            </Option>
          ))}
        </List>
      )}
    </DropdownFilter>
  );
};

export default FilterDropdown;
