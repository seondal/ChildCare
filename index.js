const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => "Hello World!",
  },
};

const server = new ApooloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 5000 }).then((res) => {
  console.log(`server running at ${res.url}`);
});
