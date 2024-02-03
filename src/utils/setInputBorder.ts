import { FormTypes, theme } from '@/constants';

const setInputBorder = (formType: FormTypes): string => {
  switch (formType) {
    case FormTypes.register:
      return `${theme.border.primaryBorder} ${theme.colors.decorativeColor}`;

    default:
      return 'none';
  }
};

export default setInputBorder;
