import styled from "styled-components";
import { color, space, fontSize, buttonStyle, variant } from "styled-system";

const buttonSize = variant({
  prop: "size",
  key: "buttonSizes",
});

export const StyledButton = styled.button`
  display: inline-block;
  padding: 0.8rem;

  cursor: pointer;
  text-transform: uppercase;
  font-weight: 900;
  border: none;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  ${color}
  ${space}
  ${fontSize}
  ${buttonStyle}
  ${buttonSize}
`;

StyledButton.defaultProps = {
  variant: "primary",
};
