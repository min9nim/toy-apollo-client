import ApolloClient, {gql} from "apollo-boost";
import fetch from 'node-fetch'

const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    fetch,
});

client.query({
  query: gql`
      {
          rates(currency: "USD") {
              currency
          }
      }
  `
}).then(result => console.log(result));
