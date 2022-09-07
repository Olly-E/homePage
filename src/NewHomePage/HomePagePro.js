import React, {useState, useCallback, useEffect, useRef} from 'react';
import styled from 'styled-components';
import blob from '../NewHomePage/home_img/blob.png'





const HomePagePro = () => {


  return (
    <Footer>
      <img src={blob} alt="" />
      <Absolute>
        <div>
          <h1>Send us a message for more information.</h1> 
          <p>Sign up and enjoy all the advantages we offer you.</p>
          <p>(470) 255-0365</p>
          <p>(800) 750-7442</p>
        </div>
      <Forms>
        <div>
        <input type="Enter full Name" />
        <input type="Enter Phone Number" />
        <input type="Enter Email Number" />
        <textarea name="" id="" cols="30" rows="10" resize="none"></textarea>
        </div>
        <button>Submit</button>
      </Forms>
      </Absolute>
     
    </Footer>
  );
}

export default HomePagePro;

const Footer = styled.div`
  height: 100vh;
  background: #0081FE;
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  img {
    width: 80%;
    height: 63%;
    margin-top: 13rem;
    position: relative;
  }
`
const Absolute = styled.div`
  display: flex;
  position: absolute;
  align-items: flex-end;
  width: 60%;
  top: 10%;
  div{
    flex: 1;
    margin-bottom: 1rem;
    h1 {
      font-size: 3.5rem;
      margin-bottom: 1.3rem;
    }
    p {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`
const Forms = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 2rem;
  height: fit-content;
  border: 1px solid #e0e0e0;
  width: 30%;
  right: 15%;
  flex: 0.8;
  top: 13%;
  box-sizing: border-box;
  align-items: left;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    

  }
  input {
    height: 3rem;
    top: 0;
    border-radius: 0.3rem;
    outline: none;
    border: 1px solid #0A142F;
  }
  textarea {
    border: 1px solid #0A142F;
    resize: none;
    outline: none;
    height: 15rem;
    border-radius: 0.3rem;
  }
  button {
    color: white;
    width: 8rem;
    height: 2.5rem;
    background: #0081FE;
    border-radius: 0.4rem;
    box-shadow: 0px 24px 34px rgba(32, 70, 100, 0.1);
    border: none;
    margin-top: 3rem;
  }
`;