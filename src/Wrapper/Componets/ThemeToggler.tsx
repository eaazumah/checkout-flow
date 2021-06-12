import React from "react";
import { WiMoonAltWaningCrescent1 } from "react-icons/wi";
import styled from "styled-components";
import { useSettings } from "../../_shared";

interface Props {}

const ThemeToggler = (props: Props) => {
  const { toggleTheme } = useSettings();
  return (
    <ActionButton onClick={toggleTheme}>
      <Moon size={30} />
    </ActionButton>
  );
};

const Moon = styled(WiMoonAltWaningCrescent1)`
  color: ${(pros) => pros.theme.backgroundColor};
`;

const ActionButton = styled.button`
  position: absolute;
  right: 50px;
  bottom: 50px;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  height: 60px;
  transition: background-color 0.2s ease-in-out;
  outline: none;
  position: absolute;
  width: 60px;
  font-family: Fredoka One;
  font-size: 18px;
  :hover {
    background-color: ${(pros) => pros.theme.opposite.surface};
  }
  background-color: ${(pros) => pros.theme.opposite.backgroundColor};
`;

export default ThemeToggler;
