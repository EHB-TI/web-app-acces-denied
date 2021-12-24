import React from 'react';
import { useAuth } from "../../firebase/context"
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
import { useHistory, useLocation } from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react';



const ConfirmForm = () => {
  const { handleSubmit, register, errors, setError, formState } = useForm();

  const { signInWithEmailLink } = useAuth();
  const { signupData } = useAuth()

  const history = useHistory();

  const location = useLocation();

  const onSubmit = async data => {
    try {
      await signInWithEmailLink(data.email, location.search);
      var name   = data.email.substring(0, data.email.lastIndexOf("@"));
      await signupData(data.email, name);
      history.push("/")

    } catch (error) {
      setError('email', {
        type: 'manual',
        message: error.message,
      });
    }
  };

  return (
    <ChakraProvider>
    <GridItem
      colStart={[1, null, null, 2, null, null]}
      colSpan={[3, null, null, 1, null, null]}
      p={6}
    >
      <Heading as="h1" mb={6}>
        Confirm Email
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input name="email" placeholder="Email" {...register('email')} />
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
    </ChakraProvider>
  );
};

export default ConfirmForm;