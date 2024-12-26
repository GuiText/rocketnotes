import styled from "styled-components";

export const Container = styled.button`
  background: none;
  // fazemos a condição para ver se o botão está ativo
  color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  border: none;
  font-size: 16px;
`