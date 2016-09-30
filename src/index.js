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
  GraphQLString,
  GraphQLUnionType,
 } from 'graphql'

// Scalars
export const boolean = () => GraphQLBoolean
export const gqlBoolean = boolean

export const float = () => GraphQLFloat
export const gqlFloat = float

export const id = () => GraphQLID
export const gqlId = id

export const int = () => GraphQLInt
export const gqlInt = int

export const string = () => GraphQLString
export const gqlString = string

// Definitions
const makeTypeFn = Type =>
  ( ...args ) => new Type(...args)

export const enumerable = makeTypeFn(GraphQLEnumType)
export const gqlEnum = enumerable

export const inputObject = makeTypeFn(GraphQLInputObjectType)
export const gqlInputObject = inputObject

export const interfaceType = makeTypeFn(GraphQLInterfaceType)
export const gqlInterface = interfaceType

export const list = makeTypeFn(GraphQLList)
export const gqlList = list

export const nonNull = makeTypeFn(GraphQLNonNull)
export const gqlNonNull = nonNull

export const object = makeTypeFn(GraphQLObjectType)
export const gqlObject = object

export const scalar = makeTypeFn(GraphQLScalarType)
export const gqlScalar = scalar

export const union = makeTypeFn(GraphQLUnionType)
export const gqlUnion = union

export default {
  boolean,
  gqlBoolean,
  float,
  gqlFloat,
  id,
  gqlId,
  int,
  gqlInt,
  string,
  gqlString,
  enumerable,
  enum: enumerable,
  gqlEnum,
  inputObject,
  gqlInputObject,
  interfaceType,
  interface: interfaceType,
  gqlInterface,
  list,
  gqlList,
  nonNull,
  gqlNonNull,
  object,
  gqlObject,
  scalar,
  gqlScalar,
  union,
  gqlUnion,
}
