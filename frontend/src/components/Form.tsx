import axios from "axios";
import React, { FormEvent, FormEventHandler, useState } from "react";
import styled from "styled-components";

const FormStyles = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  max-width: 70%;
  width: 70%;
  height: auto;

  margin: 0 auto;

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
    border-radius: 5px;

    font-size: 24px;
    line-height: 30px;
    vertical-align: middle;
    text-indent: 10px;

    &&::-webkit-input-placeholder {
      font-size: 30px;
      color: rgba(255, 255, 255, 0.4);
      line-height: 30px;
      text-transform: uppercase;
      vertical-align: middle;
    }
  }

  label {
    display: none;
  }
`;

export default function Form() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_BACKEND_URL!, {
        url,
      })
      .then((res) => res.data)
      .then(({ message }) => console.log(message));
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      <InputStyles>
        <label htmlFor="originalUrl">URL</label>
        <input
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          type="url"
          placeholder="Insert your URL here..."
          name="originalUrl"
          id="url"
          autoFocus
        />
      </InputStyles>
      <button>Submit</button>
    </FormStyles>
  );
}
