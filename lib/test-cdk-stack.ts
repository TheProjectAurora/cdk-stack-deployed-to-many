import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3'
import * as fs from 'fs'

interface AliasStackProps extends cdk.StackProps {
  readonly accountAlias?: string
}

export class TestCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: AliasStackProps) {
    super(scope, id, props);
    
    const fullContext = JSON.parse(fs.readFileSync(`./environment/${props?.accountAlias}.json`).toString())
    let context
    if (props?.env?.region != undefined) {
      context = fullContext[props?.env?.region]      
    } else {
      context = fullContext
    }
    new s3.Bucket(this, "TestBucket", {
      bucketName : `${context.BucketName}-${props?.accountAlias}-${props?.env?.region}`,      
    })
  }
}
