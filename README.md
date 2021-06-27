# Welcome to your CDK TypeScript project!

This is demo project and technical example. This is not supposed to be the complete, or the
most beautiful thing. My goal was to understand, how to make easy to maintain CDK stack which
can be deployed to the multiple AWS Accounts and regions. 

And as this is the demo, this might change when I learn better how to use this.

## Usage

I can only tell how to use this at Linux (and most like Mac). Windows users are at their own.

Rename the `environment/example.json` to `environment/<your account alias>.json`. This is crucial
part of the system. This file contains the "context" of the system. It has all configurations which
are related to the current account alias. If the file is missing, this fails. 

Run `. set-current-cdk-env.sh`. It sets the environment variables `CDK_DEFAULT_ACCOUNT`and 
`CDK_DEFAULT_REGION`. These are used to know which account and region the stack is supposed to
be installed. The script get region from the `AWS_DEFAULT_REGION` environment variable and 
account id is requested from the AWS STS service with AWS CLI.

## Functionality

This uses AWS SDK to fetch the account alias. That could also be from the environment variables if
the `set-current-cdk-env.sh` is used. (Hm - maybe that's better idea. That avoids one additional
step and possible error.)

When the system knows what the account alias is, it loads the file `environment/<account alias>.json`.
From that it selects the proper region part. If the region doesn't exist, it uses the whole file.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
