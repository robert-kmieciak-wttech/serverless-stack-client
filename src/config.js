const dev = {
  STRIPE_KEY: "pk_test_51IePSqEgbuy1suXY3leYxgBHUTLiwZFw4UIbwT9IOtq9x7cnsWx6pjRVwKF0r5ZJGpDbnQyPJiRf1Uf6iewtkKb100mmQQUAAi",
  s3: {
    REGION: "us-east-2",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1p8y5m2nd26uk"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://if7oetl1uk.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_FTVX6t98B",
    APP_CLIENT_ID: "5bagsrgq7ji99roatvo5pf8jmh",
    IDENTITY_POOL_ID: "us-east-2:6a5ceec7-8782-4d6f-9253-bf5ed18e81db"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51IePSqEgbuy1suXY3leYxgBHUTLiwZFw4UIbwT9IOtq9x7cnsWx6pjRVwKF0r5ZJGpDbnQyPJiRf1Uf6iewtkKb100mmQQUAAi",
  s3: {
    REGION: "us-east-2",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-1847no1pqjmm8"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://bk7nvvl325.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_8wIz8SpmG",
    APP_CLIENT_ID: "2i7mnr0la2o025gq1iturli3dq",
    IDENTITY_POOL_ID: "us-east-2:ab24ce3e-cc1b-4075-b591-086ccc390d08"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;