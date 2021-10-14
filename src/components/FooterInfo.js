import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";

const FooterSection = styled.div`
  background: black;
  color: white;
  padding: 6rem 6rem;
`;

const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        
    }
`;

const Col1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.4;
    cursor: pointer;
    h1{
        margin-bottom: 1rem;
        font-weight: lighter;
        
        &:hover {
        transform: scale(1.45);
        transition: 0.1s;
    }
    p{
        font-weight: light;
    }

`;

const igIcon = styled(FaInstagram)`
  transform: scale(1.5);
`;

const Col2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 2.0;
    
    h4{
        font-weight: lighter;

        &:hover {
        transform: scale(1.45);
        transition: 0.1s;
        cursor: pointer;
        
    }
`;

const Col3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.4;
    cursor: pointer;
    h4{
        font-weight: lighter;
    }
    }
`;
const FooterInfo = () => {
  return (
    <FooterSection>
      <FooterContainer>
          <Col1>
            <h1 to="/">Quarters</h1>
            <p>Luxury homes worldwide</p>
            <igIcon />
          </Col1>
          <Col2>
            <h4>Instagram</h4>
            <h4>Facebook</h4>
            <h4>Twitter</h4>
          </Col2>
          <Col3>
            <h4>Mohammed Wasif Uddin</h4>
          </Col3>
      </FooterContainer>
    </FooterSection>
  );
};

export default FooterInfo;
