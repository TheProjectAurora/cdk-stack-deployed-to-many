#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TestCdkStack } from '../lib/test-cdk-stack';
import { IAM } from 'aws-sdk'

let iamClient = new IAM()
const app = new cdk.App();
iamClient.listAccountAliases({}, function(err : any, data : any) {
  if (err) console.log(err, err.stack); // an error occurred
  else { 
    new TestCdkStack(app, 'TestCdkStack', {
      env: { 
        account: process.env.CDK_DEFAULT_ACCOUNT, 
        region: process.env.CDK_DEFAULT_REGION 
      },
      accountAlias : data['AccountAliases'][0]
    });
  }
});