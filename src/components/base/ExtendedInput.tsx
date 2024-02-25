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

const DefaultSx = {
  "--Input-minHeight": "56px",
  "--Input-radius": "6px",
  height: "60px",
  width: "100%",
};

const HideArrowSx = {
  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":
  {
    "WebkitAppearance": "none",
    margin: 0,
  },
  "&[type=number]": {
    "MozAppearance": "textfield",
  }
}

interface ExtendedInputProps {
  label: string,
  hideArrow?: boolean
}

interface ExtendedInputTypeMap extends InputTypeMap<ExtendedInputProps & InputHTMLAttributes<HTMLInputElement>> { }

const ExtendedInnerInput = React.forwardRef<HTMLInputElement, DefaultComponentProps<ExtendedInputTypeMap>>(
  (props, ref) => {
    const id = React.useId();
    const { hideArrow, label, ...otherProps } = props;
    const additionalSx = hideArrow ? HideArrowSx : {};
    return (
      <React.Fragment>
        <StyledFloatingInput
          {...otherProps}
          ref={ref}
          id={id}
          sx={{
            ...props.sx,
            ...additionalSx
          }}
        />
        <StyledFloatingLabel htmlFor={id}>{label}</StyledFloatingLabel>
      </React.Fragment>
    );
  }
);

export default function ExtendedInput(props: DefaultComponentProps<ExtendedInputTypeMap>) {
  const {
    label,
    hideArrow,
    ...otherProps
  }: ExtendedInputTypeMap["props"] = props;
  return (
    <Input
      {...otherProps}
      slots={{ input: ExtendedInnerInput }}
      slotProps={{ input: { label, hideArrow, ...otherProps } }}
      sx={{ ...DefaultSx, ...props.sx }}
    />
  );
}