import './form-input.styles.scss';

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
    <div className="group">
      <input className="form-input" {...inputOptions} />
      {label && (
        <label
          className={`${
            inputOptions.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
