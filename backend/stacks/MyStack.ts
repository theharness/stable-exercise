import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Create the AppSync GraphQL API
    const api = new sst.AppSyncApi(this, "AppSyncApi", {
      graphqlApi: {
        schema: "graphql/schema.graphql",
      },
      dataSources: {
        mail: "src/main.handler",
      },
      resolvers: {
        "Query listMail": "mail",
      },
    });

    // Show the AppSync API Id and API Key in the output
    // @ts-ignore
    this.addOutputs({
      ApiId: api.graphqlApi.apiId,
      ApiKey: api.graphqlApi.apiKey,
      APiUrl: api.graphqlApi.graphqlUrl,
    });
  }
}