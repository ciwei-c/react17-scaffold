interface Apis {
  [prop: string]: Function
}

const apis: Apis = {};

const context = require.context("./modules/", false, /\.tsx$/);
context.keys().forEach((fileName: string) => {
  apis[fileName] = context(fileName).default || context(fileName)
})

export default apis;