import { FormTypes, theme } from '@/constants';

const setInputBorder = (formType: FormTypes): string => {
  switch (formType) {
    case FormTypes.register:
      return `${theme.border.primaryBorder} ${theme.colors.decorativeColor}`;

    case FormTypes.auth:
      return `${theme.border.primaryBorder} ${theme.colors.decorativeColor}`;

    case FormTypes.confirmOrder:
      return `${theme.border.primaryBorder} ${theme.colors.decorativeLightGrey}`;
    
    default:
      return 'none';
  }
};

export default setInputBorder;
