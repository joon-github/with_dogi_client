import { useMutation } from '@tanstack/react-query';

interface LoginForm {
  email: string;
  password: string;
}

const onSubmit = async (data: LoginForm): Promise<void> => {
  console.log('data', data);
}

const useOnSubmitLoginForm = () => {
  return useMutation({
    mutationFn: onSubmit,
  });
}
  

export default useOnSubmitLoginForm;