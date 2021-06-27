echo Setting the current environment for the default environment
export CDK_DEFAULT_ACCOUNT=$AWS_DEFAULT_REGION
export CDK_DEFAULT_REGION=$(aws sts get-caller-identity --query "Account" --output text)
