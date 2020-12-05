const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

// Hardcoded data
const customers = [
  { id: '1', name: 'John Doe', email: 'jdoe@gmail.com', age: 35 },
  { id: '2', name: 'Steve Smith', email: 'steve@gmail.com', age: 25 },
  { id: '3', name: 'Sara Williams', email: 'sara@gmail.com', age: 32 },
];

//CustomerType
const CustomerType= new GraphQLObjectType({
  name: 'Customer',
  fields:() => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    age: {type: GraphQLInt}
  })
});

// Root Query
const RootQuery= new GraphQLObjectType({
  name: 'RootQueryType',
  customer:{
    type:CustomerType
  }
});

module.exports = new GraphQLSchema({

});