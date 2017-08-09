//------------------------HERE IS AN EXAMPLE-----------------------
//
// import reducer from "./reducer";
// import { createTodo } from "./actions";
//
// describe("CREATE_TODO", function () {
//     test("creates a new todo", function () {
//         const initialState = {todos: [], nextId: 1}
//         const state = reducer(initialState, createTodo("Test"));
//         expect(state.todos).toHaveLength(1);
//         expect(state.todos[0]).toEqual({id: 1, done: false, text: "Test"});
//     })
//
//     test("updates nextId", function () {
//         const initialState = {todos: [], nextId: 1}
//         const state = reducer(initialState, createTodo("Test"));
//         expect(state.nextId).toEqual(2);
//     })
// })
import reducer from './reducer'
import {createTodo, filterTodos, toggleTodo} from './actions'

describe('CREATE_TODO', function () {
  test('creates a new todo', function () {
    const initialState = {
      todos: [],
      nextId: 1,
      done: false
    }
    const state = reducer(initialState, createTodo('Test'))
     expect(state.todos).toHaveLength(1)
     expect(state.todos[0]).toEqual({
       id: 1,
       done: false,
       text: 'Test'
     })
  })
})
describe('FILTER_TODOS', () => {
  test('filter', () => {
    const initialState = {
      todos: [],
      nextId: 1,
      done: false
    }
    const state = reducer(initialState, filterTodos('completed'))
    expect(state.filter).toEqual('completed')
  })
})
