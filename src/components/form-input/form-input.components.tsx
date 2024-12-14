import { FormInputLabel, Group, Input } from './form-input.styles';

interface FormInputProps {
  label: string;
  inputOptions: {
    type: string;
    required: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    value: string;
  };
}

const FormInput = ({ label, inputOptions }: FormInputProps) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {label && (
        <FormInputLabel shrink={inputOptions.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
