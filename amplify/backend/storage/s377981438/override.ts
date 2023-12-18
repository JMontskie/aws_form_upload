import {  AmplifyProjectInfo, AmplifyS3ResourceTemplate } from '@aws-amplify/cli-extensibility-helper';


export function override(resources: AmplifyS3ResourceTemplate, amplifyProjectInfo: AmplifyProjectInfo) {
    resources.s3AuthPublicPolicy.policyDocument.Statement = [
        ...resources.s3AuthPublicPolicy.policyDocument.Statement,
        {
            Effect: 'Allow',
            Action: ['s3:PutObject', 's3:PutObjectAcl', 's3:GetObject'],
            Resource: 'arn:aws:s3:::mntsfilebucket-s3/*'
        },
        {
            Effect: 'Allow',
            Action: ['s3:PutObject', 's3:PutObjectAcl', 's3:GetObject'],
            Resource: 'arn:aws:s3:::mntsfilebucket-s3/*',
            Condition: {
                StringEquals: {
                    'aws:SourceArn': 'arn:aws:cognito-idp:ap-southeast-2:242771580077:userpool/ap-southeast-2_VFr01y6Nx'
                }
            }
        }
    ];
}
