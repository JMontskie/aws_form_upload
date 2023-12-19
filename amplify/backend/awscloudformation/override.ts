import { AmplifyProjectInfo, AmplifyRootStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyRootStackTemplate, amplifyProjectInfo: AmplifyProjectInfo) {
    resources.authRole.roleName = "AmplifyProjectAuthRole"
   resources.authRole.path = "/myorganization/myteam/"
   resources.unauthRole.roleName = "AmplifyProjectUnauthRole"
   resources.unauthRole.path = "/myorganization/myteam/"
}
