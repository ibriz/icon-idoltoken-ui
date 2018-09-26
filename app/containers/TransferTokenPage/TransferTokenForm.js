import React from 'react';
import { Form, Button, Input, Dropdown } from 'semantic-ui-react';

function TransferTokenForm (props) {
  const { tokenTypes, 
    onTransferTokenSubmit, 
    onTransferTokenChange,
    goTo, 
    formData, 
    isRequesting,
    currentAddress,
    addressObject
  } = props;
  return (
    <Form>
      <Form.Field>
        <label>Owner's Address:</label>
        <label>{currentAddress}</label>
      </Form.Field>
      <Form.Field>
        <label>Token Type:</label>
        <Dropdown search selection options={tokenTypes} placeholder="Token Type" 
          value={formData.tokenType || ''} onChange={onTransferTokenChange} name="tokenType" fluid />
      </Form.Field>
      <Form.Field>
        <label>To Address:</label>
        <Dropdown search selection options={addressObject} placeholder="To Address" 
          value={formData.toAddress || ''} onChange={onTransferTokenChange} name="toAddress" fluid />
      </Form.Field>
      <Form.Field>
        <label>Idol Token ID:</label>
        <Input placeholder="Idol Token ID" type="text" 
          value={formData.tokenId || ''} onChange={onTransferTokenChange} name="tokenId" fluid />
      </Form.Field>
      <Button type='button' onClick={goTo}>Back</Button>

      <Button primary type='submit' onClick={onTransferTokenSubmit}
        disabled={
          formData.formAddress == "" ||
          formData.tokenType == "" ||
          formData.toAddress == "" ||
          formData.tokenId == "" ||
          isRequesting
        }
        loading={isRequesting}
      >Transfer Idol Token</Button>
    </Form>
  );
}

export default TransferTokenForm;