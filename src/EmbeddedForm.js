// react imports
import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

// aws imports
import { getCurrentUser } from "aws-amplify/auth";
import AWS from "aws-sdk";

// graphql imports
import * as mutations from "./graphql/mutations";

// Form.io imports
import { Form, formio } from "@formio/react";
import "formiojs/dist/formio.full.css"; // Import Form.io styles

// local imports
import { generateClient } from "aws-amplify/api";


function EmbeddedForm() {
  const formUrl = "https://dewgfuiksrvttfo.form.io/fileuploadform"; // Replace with your actual form URL

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmission = async (submission, data) => {
    //handle submission logic here
    const client = generateClient();
    
    try {
      const currentUser = await getCurrentUser();
      const userId = currentUser.username;
      console.log (client);
      const fileData = {
        // Set the properties of the file data object based on your requirements
        // For example:
        userID: userId,
        fileName: data.fileName,
        fileSize: data.fileSize,
        fileType: data.fileType,
        description: data.description,
        dateCreated: data.dateCreated,
        s3Location: data.s3Location,
        // Add more properties as needed
      };

      // Call the createFile mutation to submit the file data to DynamoDB
      await client.graphql({
        query: mutations.createFile,
        variables: { 
          input: fileData 
        },
      });

      console.log("Data submitted to DynamoDB successfully!");
    } catch (error) {
      console.error("Error submitting data to DynamoDB:", error);
    }
  
    console.log(submission);
    setIsModalOpen(true);
  };


  return (
    <div>
      <Form src={formUrl} onSubmit={handleSubmission} />

      <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(false)}>
        <ModalHeader>File Upload</ModalHeader>
        <ModalBody>Your file has been uploaded successfully!</ModalBody>
      </Modal>
    </div>
  );
}

export default EmbeddedForm;
