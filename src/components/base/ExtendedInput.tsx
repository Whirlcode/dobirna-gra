import React, { InputHTMLAttributes } from "react";
import { styled } from "@mui/joy/styles";
import Input, { InputTypeMap } from "@mui/joy/Input";
import { DefaultComponentProps } from '@mui/types'

const StyledFloatingInput = styled("input")({
  border: "none",
  minWidth: 0,
  outline: 0,
  padding: 0,
  paddingTop: "1em",
  flex: 1,
  color: "inherit",
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontStyle: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  textOverflow: "ellipsis",
  "&::placeholder": {
    opacity: 0,
    transition: "0.1s ease-out",
  },
  "&:focus::placeholder": {
    opacity: 1,
  },
  "&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label":
  {
    top: "0.5rem",
    fontSize: "0.75rem",
  },
  "&:focus ~ label": {
    color: "var(--Input-focusedHighlight)",
  },
  "&:-webkit-autofill": {
    alignSelf: "stretch",
  },
  "&:-webkit-autofill:not(* + &)": {
    marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
    paddingInlineStart: "var(--Input-paddingInline)",
    borderTopLeftRadius:
      "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    borderBottomLeftRadius:
      "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
  },
});

const StyledFloatingLabel = styled("label")(({ theme }) => ({
  position: "absolute",
  lineHeight: 1,
  top: "calc((var(--Input-minHeight) - 1em) / 2)",
  color: theme.vars.palette.text.tertiary,
  fontWeight: theme.vars.fontWeight.md,
  transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
}));

interface ExtendedInputProps {
  label: string | undefined
}

interface ExtendedInputTypeMap extends InputTypeMap<ExtendedInputProps & InputHTMLAttributes<HTMLInputElement>> {}

const ExtendedInnerInput = React.forwardRef<HTMLInputElement, DefaultComponentProps<ExtendedInputTypeMap>>(
  (props, ref) => {
    const id = React.useId();
    return (
      <React.Fragment>
        <StyledFloatingInput {...props} ref={ref} id={id}/>
        <StyledFloatingLabel htmlFor={id}>{props.label}</StyledFloatingLabel>
      </React.Fragment>
    );
  }
);

const DefaultSx = {
  "--Input-minHeight": "56px",
  "--Input-radius": "6px",
  height: "60px",
  width: "100%",
};

export default function ExtendedInput(props: DefaultComponentProps<ExtendedInputTypeMap>) {
  return (
    <Input
      {...props}
      slots={{ input: ExtendedInnerInput }}
      slotProps={{
        input: { label: props.label, placeholder: props.placeholder }
      }}
      sx={{
        ...DefaultSx,
        ...props.sx
      }}
    />
  );
}