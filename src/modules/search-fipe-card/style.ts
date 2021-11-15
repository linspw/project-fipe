import styled from "styled-components";

const Card = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 10px #b5cdd880;
  padding: 48px;
  max-width: 600px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    padding: 16px;
  }
`;

export { Card };
