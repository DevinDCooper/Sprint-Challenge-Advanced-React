// - [ ] Why would you use class component over function components (removing hooks from the question)?
// - we would use a class component for when we would need to use lifecycle methods or it makes sense to have a small piece component level state.


// - [ ] Name three lifecycle methods and their purposes.
// - The Birth/Mounting Phase: Your render method is invoked, componentDidMount gets called as well.
// - Growth/Updating Phase:
// setState can be used to change the component’s state data, forcing a call to render.
// shouldComponentUpdate is a method one could use here to stop a component from calling render if necessary.
// - Death/Un-mounting Phase
// Component is removed from the screen.
// componentWillUnmount is called and can be used for any clean up you may need to do.

// - [ ] What is the purpose of a custom hook?
// Custom Hooks are a mechanism to reuse stateful logic

// - [ ] Why is it important to test our apps?
// - we want to test our apps to make sure the users cant break them.