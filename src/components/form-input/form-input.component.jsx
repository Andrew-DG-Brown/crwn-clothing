import { Group, Input, FormInputLabel } from "./form-input.styles";

const FormInput = ({ label, wrongUser, wrongPass, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          wrongUser={otherProps.type === "email" ? wrongUser : false}
          wrongPass={otherProps.type === "password" ? wrongPass : false}
          shrink={otherProps.value.length}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
