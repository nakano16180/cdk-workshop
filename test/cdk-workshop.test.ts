import * as cdk from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';

test('EventBridge rule is created with scheduled expression', () => {
  const app = new cdk.App();
  const stack = new CdkWorkshopStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Events::Rule', {
    ScheduleExpression: 'rate(5 minutes)',
    State: 'ENABLED',
    Targets: Match.arrayWith([
      Match.objectLike({
        Arn: Match.anyValue(),
      }),
    ]),
  });
});

test('EventBridge target Lambda function is created', () => {
  const app = new cdk.App();
  const stack = new CdkWorkshopStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    Handler: 'eventbridge.handler',
    Runtime: 'nodejs14.x',
  });
});
