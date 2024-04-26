import { createContext } from "react";
import Form from "./Form";
import Item from "./Item";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { useForm } from "react-hook-form";

interface FormContextType {
  register: ReturnType<typeof useForm>["register"];
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  errors: ReturnType<typeof useForm>["formState"]["errors"];
  watch: ReturnType<typeof useForm>["watch"];
}
export const FormContext = createContext<FormContextType | null>(null);
const FormConteainer = ({ children }: { children: React.ReactNode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  return (
    <FormContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        watch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

const FormComponents = Object.assign(FormConteainer, {
  Form,
  Item,
  SubmitButton,
  Input,
});

export default FormComponents;
