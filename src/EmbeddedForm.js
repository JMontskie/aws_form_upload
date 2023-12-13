import React from 'react';
import { Form } from '@formio/react';
import 'formiojs/dist/formio.full.css'; // Import Form.io styles


function EmbeddedForm() {
  const formUrl = 'https://bpnkeziqwxxbkln.form.io/fileuploadform'; // Replace with your actual form URL

  return (
    <div>
      
      <Form src={formUrl} />
    </div>
  );
}

export default EmbeddedForm;
