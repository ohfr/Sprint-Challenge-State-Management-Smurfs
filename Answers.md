1. What problem does the context API help solve?
    Solves the problem of prop drilling 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    reducers take in state, create a copy with changes and return it without changing the original, store is the data for the entire application and is picked up by any component that needs it, actions are functions that describe what needs to happen to the state and is passed to the reducer. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    application state is a global state that can be used by any component, component state has to be passed down to any other component that needs it

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk allows us to write async actions, such as api calls, our action-creators are now 'thunks', which are functions that return a function

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    Redux !! Easy to keep multiple reducers and different initial states with redux