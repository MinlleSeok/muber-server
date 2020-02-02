
// Here is the issue: https://github.com/okgrow/merge-graphql-schemas/issues/154

// For simple, you can create a global.d.ts file and put these declaration:

// declare module 'merge-graphql-schemas' {
//   export function fileLoader(...args: any[]): any;
//   export function mergeResolvers(...args: any[]): any;
//   export function mergeTypes(...args: any[]): any;
// }