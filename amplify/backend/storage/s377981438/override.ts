import {  AmplifyProjectInfo, AmplifyS3ResourceTemplate } from '@aws-amplify/cli-extensibility-helper';


export function override(resources: AmplifyS3ResourceTemplate, amplifyProjectInfo: AmplifyProjectInfo) {
    resources.s3AuthPublicPolicy.policyDocument.Statement = [
        ...resources.s3AuthPublicPolicy.policyDocument.Statement,
        {
            Effect: 'Allow',
            Action: 's3:*Object',
            Resource: 'arn:aws:s3:::mntsfilebucket-s3/*'
        },
        {
            Effect: 'Allow',
            Action: 's3:ListBucket',
            Resource: 'arn:aws:s3:::mntsfilebucket-s3'
        }
    ];
}


