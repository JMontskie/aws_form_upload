/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFile = /* GraphQL */ `
  query GetFile($id: ID!, $userID: String!, $fileName: String!) {
    getFile(id: $id, userID: $userID, fileName: $fileName) {
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
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $id: ID
    $userIDFileName: ModelFilePrimaryCompositeKeyConditionInput
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFiles(
      id: $id
      userIDFileName: $userIDFileName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncFiles = /* GraphQL */ `
  query SyncFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
