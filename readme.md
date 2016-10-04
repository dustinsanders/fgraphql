# fGraphQL
[![Build Status][travis-image]][travis-url]

fGraphQL is a functional wrapper around GraphQL that allows all types to be used as functions, more information about GraphQL types can be found [here](http://graphql.org/graphql-js/type/).

## Installation
`$ npm install fgraphql graphql`

## API
Exposes functions that return GraphQL types, all types are individually exported as well as being attached to default export.
* **Scalar**: returns GraphQL type
  * `boolean` or `gqlBoolean`
  * `float` or `gqlFloat`
  * `id` or `gqlId`
  * `int` or `gqlInt`
  * `string` or `gqlString`

* **Definition**: passes along arguments and returns a new instance of the GraphQL class
  * `enumerable` or `gqlEnum` (additionally `enum` is available on the default export)
  * `inputObject` or `gqlInputObject`
  * `interfaceType` or `gqlInterfaceType` (additionally `interface` is available on default export)
  * `list` or `gqlList`
  * `nonNull` or `gqlNonNull`
  * `object` or `gqlObject`
  * `scalar` or `gqlScalar`
  * `union` or `gqlUnion`

* **Schema**: passes along arguments and returns a new instance of the GraphQL schema
  * `schema` or `gqlSchema`

## Support
tested with `"graphql": "^0.7.1"`, graphql is a peer dependency

## [Repo](https://github.com/dustinsanders/fgraphql)

## TODO
* Examples

[travis-image]: https://img.shields.io/travis/dustinsanders/fgraphql.svg?style=flat-square
[travis-url]: https://travis-ci.org/dustinsanders/fgraphql
