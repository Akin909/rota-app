import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const font = css`
  text-decoration: none;
  color: black;
  font-weight: 800;
  &:hover {
    text-decoration: underline;
  }
`;

export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)}
    }
  `
};
export const StyledLink = styled(Link)`
  ${font};
`;

export const Form = styled.form`
  background-color: #BBDEFB;
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  
  ${media.handheld`
      width: 80%;
  `}
`;

export const Input = styled.input`
  border: none;
  width: 80%;
  margin: 1rem 0;
  height: 2rem;
  padding-left: 1rem;
`;
export const PageLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  align-items: center;
  justify-content:center;
`;

export const Button = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  border: none;
  box-shadow: 0 1px 1px grey;
  ${font}
`;
