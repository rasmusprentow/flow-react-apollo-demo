# Flow + Apollo + Recompose + React

This is a demo project made together with a slide show which can be found here:
The purpose is to illustrate some usages of Flow with Apollo, Recompose and React.

## Usage

Before we can run the code the api must be configured.
This can be done by downloading and setting up this project
(Swapi-GraphQl)[https://github.com/graphql/swapi-graphql].
Remember to configure the endpoint in the index file of this project.

Once the backend is setup use the following to get started.

```
yarn install
yarn start
```

To test flow types run

```
yarn flow
```



##  Type Generation
To generate type defs run

```
sh ./graphql-code.sh
```