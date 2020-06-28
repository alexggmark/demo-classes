import Model from './model'
import View from './view'
import Controller from './controller'

console.log('Running?');

const app = new Controller(new Model, new View);