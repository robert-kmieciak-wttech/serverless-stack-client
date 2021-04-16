const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-test-upload",
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://bk7nvvl325.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_S6CTrxMUx",
      APP_CLIENT_ID: "43u3jfr62lifd1smtgjd5si3j8",
      IDENTITY_POOL_ID: "us-east-2:d4026a56-5d14-4671-bd76-9277e234dd63",
    },
  };

  export default config;