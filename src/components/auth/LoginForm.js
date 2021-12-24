import {useAuth} from '../../firebase/context'
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Heading,
  GridItem,
  Alert,
  AlertIcon,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';


const LoginForm = () => {
  const { handleSubmit, register, setError, formState } = useForm();    
  
  const { sendSignInLinkToEmail } = useAuth();

  const onSubmit = async data => {
    console.log(data);
    try {
      await sendSignInLinkToEmail(data.email);
    } catch (error) {
      setError('email', {
        type: 'manual',
        message: error.message,
      });
    }
  };

  return (
    <GridItem
      colStart={[1, null, null, 2, null, null]}
      colSpan={[3, null, null, 1, null, null]}
      p={6}
    >
      <Heading as="h1" mb={6}>
        Login
      </Heading>

      {formState.isSubmitSuccessful && (
        <Alert status="success" variant="subtle" mt={6} mb={6}>
          <AlertIcon />
          Check your email to complete login!
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input name="email" placeholder="Email" defaultValue='test'  {...register("email")}/>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </GridItem>
  );
};

export default LoginForm;
