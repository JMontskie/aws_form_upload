/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile($filter: ModelSubscriptionFileFilterInput) {
    onCreateFile(filter: $filter) {
      id
      userID
      fileName
      fileSize
      fileType
      description
      dateCreated
      dateModified
      s3Location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile($filter: ModelSubscriptionFileFilterInput) {
    onUpdateFile(filter: $filter) {
      id
      userID
      fileName
      fileSize
      fileType
      description
      dateCreated
      dateModified
      s3Location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile($filter: ModelSubscriptionFileFilterInput) {
    onDeleteFile(filter: $filter) {
      id
      userID
      fileName
      fileSize
      fileType
      description
      dateCreated
      dateModified
      s3Location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
