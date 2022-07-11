import React, {useState} from 'react';
import {ScaleButton, ScaleTextField} from '@telekom/scale-components-react';
import {Form} from 'react-bootstrap';

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
          data-testid="dummyfield"
          placeholder="Enter Username"
          value={username}
          onScaleChange={updateUsername}
        />
      </div>
      <div>{username}</div>
    </Form>
  );
};

export default DummyLogin;
