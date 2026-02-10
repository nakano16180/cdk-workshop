# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## LocalStack region notes

- LocalStack supports multiple AWS regions, but resources are isolated per region.
- If you deploy with one region (for example `us-east-1`) and list resources in another (for example `ap-northeast-1`), CLI results will look empty.
- Keep deploy and verification commands aligned to the same region and endpoint.

Example checks against LocalStack:

```bash
aws --endpoint-url=http://localhost:4566 --region us-east-1 cloudformation list-stacks
aws --endpoint-url=http://localhost:4566 --region us-east-1 lambda list-functions
```

Tip: when using profiles, verify active region with:

```bash
aws configure get region --profile <profile-name>
```


Sources:

- LocalStack configuration and region behavior (resources are addressed per AWS service/region context): https://docs.localstack.cloud/
- AWS CLI region configuration and precedence (`--region`, env vars, profile config): https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html

