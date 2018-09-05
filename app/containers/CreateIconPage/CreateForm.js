import React from "react";
import { Form, Input, Dropdown, Button } from "semantic-ui-react";

function CreateForm (props) {
  const { 
    currentAddress, 
    gender, 
    goTo,
    onCreateTokenSubmit,
    onFormChange,
    payload,
    isRequesting
  } = props;

  return(
    <Form>
      <Form.Field>
        <label>Owner's Address:</label>
        <p style={{ fontSize: '24px', color: '#999' }} > {currentAddress && currentAddress.substr(0,9)+'...' }</p>
      </Form.Field>
      {/* <Form.Field>
        <label>SCORE Address (Current):</label>
        <label>cx0bce5bfe899c4beec7ea93f2000e16351191017e</label>
      </Form.Field> */}
      <Form.Field>
        <label>Token Symbol (Current):</label>
        <p>IDOL</p>
      </Form.Field>
      <Form.Field>
        <label>First Name:</label>
        <Input placeholder="First Name" type="text" name="name" onChange={onFormChange} value={payload.name || ''} fluid />
      </Form.Field>
      <Form.Field>
        <label>Age:</label>
        <Input placeholder='Age' type="number" name="age" onChange={onFormChange} value={payload.age || ''} fluid />
      </Form.Field>
      <Form.Field>
        <label>Gender:</label>
        <Dropdown search selection options={gender} placeholder="Select Gender" name="gender" onChange={onFormChange} value={payload.gender || ''} fluid />
      </Form.Field>
      <Form.Field>
        <label>IPFS Handle:</label>
        <Input placeholder='IPFS Handle' type="text" name="ipfs_handle" onChange={onFormChange} value={payload.ipfs_handle || ''} fluid />
      </Form.Field>
      <Button type='button' onClick={goTo}>Back</Button>
      <Button primary type='submit' 
        onClick={onCreateTokenSubmit} 
        disabled={
          !payload.name ||
          !payload.age ||
          !payload.gender ||
          !payload.ipfs_handle ||
          isRequesting
        }
        loading={isRequesting}
      >
        Create Idol Token
      </Button>
    </Form>
  )
}

export default CreateForm;