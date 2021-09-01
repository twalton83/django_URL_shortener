import React from "react";
import styled from "styled-components";

const FormStyles = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  max-width: 70%;
  height: auto;

  margin: 0 auto;
  margin-top: 20%;

  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

  h2 {
    border-radius: 5px 5px 0px 0px;

    background-color: #070747;
    color: white;

    height: 36px;

    font-weight: 400;
    line-height: 36px;
  }

  button {
    height: 40px;
    width: 124px;

    background-color: #66e630;
    color: black;

    font-weight: 600;
    text-transform: uppercase;
    font-size: 24px;

    border: none;
    border-radius: 0px 5px 5px 0px;
  }
`;

const InputStyles = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  input {
    height: 100%;
    width: 100%;
    border: none;
    font-size: 24px;
    line-height: 30px;
    vertical-align: middle;

    &&::-webkit-input-placeholder {
      font-size: 30px;
      color: rgba(255, 255, 255, 0.4);
      line-height: 30px;
      text-transform: uppercase;
      vertical-align: middle;
    }
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 32px;

    width: 33%;

    background-color: #070747;
    color: white;
    height: 100%;
    border-radius: 5px 0px 0px 5px;
  }
`;

export default function Form() {
  return (
    <FormStyles>
      <InputStyles>
        <label htmlFor="originalUrl">URL:</label>
        <input
          type="url"
          placeholder="https://google.com/"
          name="originalUrl"
          id="url"
          autoFocus
        />
      </InputStyles>
      <button>Submit</button>
    </FormStyles>
  );
}
