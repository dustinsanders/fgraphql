import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLString,
  GraphQLUnionType,
 } from 'graphql'
import { test } from 'ava'
import fgql, {
  boolean,
  enumerable,
  float,
  gqlBoolean,
  gqlEnum,
  gqlFloat,
  gqlId,
  gqlInputObject,
  gqlInt,
  gqlInterface,
  gqlList,
  gqlNonNull,
  gqlObject,
  gqlScalar,
  gqlSchema,
  gqlString,
  gqlUnion,
  id,
  inputObject,
  int,
  interfaceType,
  list,
  nonNull,
  object,
  scalar,
  schema,
  string,
  union,
} from '../src/index'
import keys from 'lodash/keys'

const scalarMacro = ( t, fn, GQL ) => {
  t.deepEqual(fn(), GQL)
  t.is(typeof fn(), 'object')
}

test('boolean', scalarMacro, boolean, GraphQLBoolean)
test('gqlBoolean', scalarMacro, gqlBoolean, GraphQLBoolean)

test('float', scalarMacro, float, GraphQLFloat)
test('gqlFloat', scalarMacro, gqlFloat, GraphQLFloat)

test('id', scalarMacro, id, GraphQLID)
test('gqlId', scalarMacro, gqlId, GraphQLID)

test('int', scalarMacro, int, GraphQLInt)
test('gqlInt', scalarMacro, gqlInt, GraphQLInt)

test('string', scalarMacro, string, GraphQLString)
test('gqlString', scalarMacro, gqlString, GraphQLString)

const definitionMacro = ( t, fn, GQL, config ) => {
  const instance = fn(config)

  t.deepEqual(instance, new GQL(config))
  t.is(typeof instance, 'object')
}

const enumConfig = {
  name: 'RGB',
  values: {
    RED: { value: 0 },
    GREEN: { value: 1 },
    BLUE: { value: 2 },
  },
}

test('enumerable', definitionMacro, enumerable, GraphQLEnumType, enumConfig)
test('gqlEnum', definitionMacro, gqlEnum, GraphQLEnumType, enumConfig)

const inputObjectConfig = {
  name: 'GeoPoint',
  fields: {
    lat: { type: new GraphQLNonNull(GraphQLFloat) },
    lon: { type: new GraphQLNonNull(GraphQLFloat) },
    alt: { type: GraphQLFloat, defaultValue: 0 },
  },
}

test(
  'inputObject',
  definitionMacro,
  inputObject,
  GraphQLInputObjectType,
  inputObjectConfig
)

test(
  'gqlInputObject',
  definitionMacro,
  gqlInputObject,
  GraphQLInputObjectType,
  inputObjectConfig
)

const interfaceConfig = {
  name: 'Entity',
  fields: {
    name: { type: GraphQLString },
  },
}

test(
  'interfaceType',
  definitionMacro,
  interfaceType,
  GraphQLInterfaceType,
  interfaceConfig
)

test(
  'gqlInterface',
  definitionMacro,
  gqlInterface,
  GraphQLInterfaceType,
  interfaceConfig
)

const listConfig = new GraphQLObjectType({
  name: 'Person',
  fields: () => ({
    parents: { type: GraphQLString },
    children: { type: GraphQLString },
  }),
})

test('list', definitionMacro, list, GraphQLList, listConfig)
test('gqlList', definitionMacro, gqlList, GraphQLList, listConfig)

const nonNullConfig = new GraphQLObjectType({
  name: 'Row',
  fields: () => ({
    id: { type: new GraphQLNonNull(String) },
  }),
})

test('nonNull', definitionMacro, nonNull, GraphQLNonNull, nonNullConfig)
test('gqlNonNull', definitionMacro, gqlNonNull, GraphQLNonNull, nonNullConfig)

const objectConfig = new GraphQLObjectType({
  name: 'Address',
  fields: {
    street: { type: GraphQLString },
    number: { type: GraphQLInt },
    formatted: { type: GraphQLString },
  },
})

test('object', definitionMacro, object, GraphQLObjectType, objectConfig)
test('gqlObject', definitionMacro, gqlObject, GraphQLObjectType, objectConfig)

const oddValue = value =>
  value % 2 === 1 ? value : null

const scalarConfig = {
  name: 'Odd',
  serialize: oddValue,
  parseValue: oddValue,
  parseLiteral: ast => {
    if ( ast.kind === true ) {
      return oddValue(parseInt(ast.value, 10))
    }

    return null
  },
}

test('scalar', definitionMacro, scalar, GraphQLScalarType, scalarConfig)
test('gqlScalar', definitionMacro, gqlScalar, GraphQLScalarType, scalarConfig)

const DogType = new GraphQLObjectType({
  name: 'Dog',
  fields: {
    name: { type: GraphQLString },
  },
})

const CatType = new GraphQLObjectType({
  name: 'Cat',
  fields: {
    name: { type: GraphQLString },
  },
})

const unionConfig = {
  name: 'Pet',
  types: [ DogType, CatType ],
  resolveType: () => DogType,
}

test('union', definitionMacro, union, GraphQLUnionType, unionConfig)
test('gqlUnion', definitionMacro, gqlUnion, GraphQLUnionType, unionConfig)

const schemaConfig = {
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: GraphQLString,
        args: {
          id: { type: GraphQLString },
        },
        resolve: () => 'my user',
      },
    },
  }),
}

test('schema', definitionMacro, schema, GraphQLSchema, schemaConfig)
test('gqlSchema', definitionMacro, gqlSchema, GraphQLSchema, schemaConfig)

test('default export has correct keys', t => {
  const expected = [
    'boolean',
    'gqlBoolean',
    'float',
    'gqlFloat',
    'id',
    'gqlId',
    'int',
    'gqlInt',
    'string',
    'gqlString',
    'enumerable',
    'enum',
    'gqlEnum',
    'inputObject',
    'gqlInputObject',
    'interfaceType',
    'interface',
    'gqlInterface',
    'list',
    'gqlList',
    'nonNull',
    'gqlNonNull',
    'object',
    'gqlObject',
    'scalar',
    'gqlScalar',
    'schema',
    'gqlSchema',
    'union',
    'gqlUnion',
  ]

  t.deepEqual(keys(fgql), expected)
})
