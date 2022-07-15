import React, {useState} from 'react';
import {ScaleTextField} from '@telekom/scale-components-react';
import {Form} from 'react-bootstrap';
import {TextField} from '@mui/material';

const DummyLogin = () => {
  const [username, setUsername] = useState('');

  const updateUsername = event => {
    console.log(username);
    setUsername(event.target.value);
  };

  return (
    <Form>
      <div>
        Dummy
        <ScaleTextField
          type="text"
          id="dummyfield"
          placeholder="Enter Username"
          value={username}
          onChange={updateUsername}
        />
      </div>
      <div>{username}</div>
    </Form>
  );
};

export default DummyLogin;
