import PrivateLinks from '@/components/PrivateLinks';
import {
  ButtonForms,
  ButtonTypes,
  FormTypes,
  IconSizes,
  InputTypes,
  PagePaths,
  privateLinks,
} from '@/constants';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  ContactsWrapper,
  DeliveryContainer,
  Form,
  PrivacyPolicyContainer,
} from './BasketContacts.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { INewUser } from '@/types/types';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { FaCheck } from 'react-icons/fa';
import { PrivacyPolicy } from '@/components/SignUpForm/SignUpForm.styled';
import { Link } from 'react-router-dom';
import regExp from '@/constants/regExp';
import Messages from '@/constants/messages';
import { IBasketContacts } from './BasketContacts.types';

const BasketContacts: FC<IBasketContacts> = ({ onOrderConfirm }) => {
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({
    agree: false,
    notCall: false,
    personalDataConsent: false,
  });

  const logInPrivateLink = [privateLinks[1]];
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<INewUser>({
    defaultValues: {
      agree: false,
      notCall: false,
      personalDataConsent: false,
    },
  });

  const checkboxDescription = (
    <PrivacyPolicy>
      * By confirming the order, I agree to the terms of the{' '}
      <Link to={PagePaths.homePath}> user agreement</Link>{' '}
    </PrivacyPolicy>
  );

  useEffect(() => {
    toast.dismiss();
    errors.email && toast.error(Messages.emailReqErr);
    errors.firstName &&
      toast.error(
        errors.firstName.type === 'required'
          ? Messages.firstNameReqErr
          : Messages.firstNameErr
      );
    errors.lastName &&
      toast.error(
        errors.lastName.type === 'required'
          ? Messages.lastNameReqErr
          : Messages.lastNameErr
      );
    errors.phoneNumber &&
      toast.error(
        errors.phoneNumber.type === 'required'
          ? Messages.phoneNumberReqErr
          : Messages.phoneNumberErr
      );
    errors.deliveryType && toast.error(Messages.deliveryTypeErr);
  }, [isSubmitting, errors]);

  const handleCheckboxChange = (key: string) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleFormSubmit: SubmitHandler<INewUser> = (data) => {
    console.log(data);
    const orderNumber = Math.random().toString(36).substring(10).toUpperCase();
    onOrderConfirm(orderNumber);
    setCheckboxStates({
      agree: false,
      notCall: false,
      personalDataConsent: false,
    });
    reset();
  };

  const isFormValid =
    checkboxStates.agree && checkboxStates.personalDataConsent;

  return (
    <ContactsWrapper>
      <div className='titleWrapper'>
        <h2>Contact details</h2>
        <PrivateLinks navLinks={logInPrivateLink} basket={true} />
      </div>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className='inputsWrapper'>
          <div className='nameWrapper'>
            <Input
              settings={{
                ...register('firstName', {
                  required: true,
                  pattern: new RegExp(regExp.name),
                }),
              }}
              placeholder='First Name'
              formType={FormTypes.confirmOrder}
              leftDistance={19}
            />
            <Input
              settings={{
                ...register('lastName', {
                  required: true,
                  pattern: new RegExp(regExp.name),
                }),
              }}
              formType={FormTypes.confirmOrder}
              placeholder='Last name'
              leftDistance={19}
            />
          </div>
          <Input
            settings={{
              ...register('phoneNumber', {
                required: true,
                pattern: new RegExp(regExp.phoneNumber),
              }),
            }}
            formType={FormTypes.confirmOrder}
            placeholder='Phone'
            leftDistance={19}
            type={InputTypes.phone}
          />
          <Input
            settings={{ ...register('email', { required: true }) }}
            formType={FormTypes.confirmOrder}
            placeholder='Email'
            leftDistance={19}
            type={InputTypes.email}
          />
        </div>
        <div className='checkboxWrapper'>
          <Input
            {...register('personalDataConsent', { required: true })}
            formType={FormTypes.confirmOrder}
            type={InputTypes.checkbox}
            altElem={<FaCheck size={IconSizes.checkbox} />}
            checked={checkboxStates.personalDataConsent}
            onChange={() => handleCheckboxChange('personalDataConsent')}
            description='* Consent to the processing of personal data'
          />
          <Input
            settings={{
              ...register('notCall'),
            }}
            formType={FormTypes.confirmOrder}
            type={InputTypes.checkbox}
            altElem={<FaCheck size={IconSizes.checkbox} />}
            checked={checkboxStates.notCall}
            onChange={() => handleCheckboxChange('notCall')}
            description='No need to call back'
          />
        </div>
        <DeliveryContainer>
          <h2>Method of delivery</h2>
          <div className='radioInputs'>
            <label>
              <input
                {...register('deliveryType', { required: true })}
                type='radio'
                value='Courier'
              />
              Courier delivery
            </label>
            <label>
              <input
                {...register('deliveryType', { required: true })}
                type='radio'
                value='Post offices'
              />
              Pickup from post offices
            </label>
          </div>
          <p>
            <span> WARNING!</span> When receiving the order, the courier may
            request documents confirming your age.
          </p>
        </DeliveryContainer>
        <PrivacyPolicyContainer>
          <Input
            {...register('agree', { required: true })}
            formType={FormTypes.confirmOrder}
            type={InputTypes.checkbox}
            altElem={<FaCheck size={IconSizes.checkbox} />}
            checked={checkboxStates.agree}
            onChange={() => handleCheckboxChange('agree')}
            description={checkboxDescription}
          />
          <Button
            buttonForm={ButtonForms.button}
            title='Confirm the order'
            disabled={!isFormValid}
            type={ButtonTypes.submit}
          />
        </PrivacyPolicyContainer>
      </Form>
    </ContactsWrapper>
  );
};

export default BasketContacts;
