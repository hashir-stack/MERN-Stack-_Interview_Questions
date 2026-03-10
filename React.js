//1 Explain Virtual DOM , and how its work ?

// The Virtual DOM is a lightweight, in-memory copy of the real DOM (Document Object Model). It is a JavaScript representation of the actual webpage structure that allows frameworks like React to update the UI more efficiently.
// Instead of changing the real DOM directly (which is slow), changes are first applied to the Virtual DOM. Then React compares the new Virtual DOM with the old one, finds the differences, and updates only the necessary parts of the real DOM.
// 👉 In short:
// Virtual DOM = A fast, virtual copy of the real DOM that helps update webpages quickly and efficiently

// -----------------------------------------------------------------------------------------------------------------------
//2 What is State Management in React ?

// State management in React refers to the way we handle and organize the data that changes over time in an application, and how those changes update the user interface (UI).

// In React, the state is like the memory of a component — it stores information that can change (like user input, API data, or UI status). State management is the process of controlling how this state is updated, shared between components, and kept consistent across the app.

// - Local State: Managed inside a single component using useState.

// - Shared/Global State: Passed between multiple components using props, Context API, or external libraries like Redux or Zustand.

// - Immutable Updates: State cannot be changed directly; instead, you use functions (like setState) to update it.

// - Re-rendering: When state changes, React automatically re-renders the component to reflect the new data.

// ------------------------------------------------------------------------------------------------------------------------------

// What is useState Hook in React ?

// 👉 One-line definition (interview style):
// useState is a React Hook that lets functional components store and update stateful values, triggering re-renders when the state changes.
// It gives you a way to store values that can change over time (like user input, counters, or toggles) and automatically re-render the component when those values update.

// 🔑 How It Works
// - You call useState(initialValue) inside your component.
// - It returns two things:
// - The current state value.
// - A function to update that value.

// import React, { useState } from "react";

// function Counter() {
//   // count = current state value
//   // setCount = function to update state
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------

// What is useEffect hook in React ?

// useEffect is a React Hook that lets you perform side effects in functional components.
// Side effects are actions that happen outside the normal rendering process, such as fetching data, setting up event listeners, updating the DOM directly, or starting timers.

// 🔑 How It Works
// - useEffect takes a function (effect) that runs after the component renders.
// - It can also take a dependency array to control when the effect runs.
// - You can return a cleanup function to remove subscriptions, timers, or listeners when the component unmounts.

// import React, { useState, useEffect } from "react";

// function Timer() {
//   const [count, setCount] = useState(0);

//   // Runs after every render
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prev) => prev + 1);
//     }, 1000);

//     // Cleanup when component unmounts
//     return () => clearInterval(interval);
//   }, []); // Empty array → runs only once after first render

//   return <h1>Seconds passed: {count}</h1>;
// }

// -------------------------------------------------------------------------------------------------------------------------------
//  What is Context Hook in React ?

// useContext is a React Hook that lets components consume values from Context directly, eliminating the need for prop drilling.

// useContext is a React Hook that allows functional components to access values from a Context directly, without needing to pass props manually through every level of the component tree.
// It’s part of React’s Context API, which is designed to share data globally across components (like themes, authentication, or user preferences) and avoid prop drilling.


// 🔑 How It Works
// - You create a context using React.createContext().
// - Wrap your components with a Provider that supplies a value.
// - Inside any child component, call useContext(MyContext) to read that value.

// import React, { createContext, useContext } from "react";

// const ThemeContext = createContext("light");

// function App() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// function Toolbar() {
//   const theme = useContext(ThemeContext); // Access context value
//   return <p>Current theme: {theme}</p>;
// }

// - ThemeContext provides the value "dark".
// - Toolbar uses useContext(ThemeContext) to read it directly.
// - No need to pass theme as a prop through multiple components.

// --------------------------------------------------------------------------------------------------------------------------

// Explain the component lifecycle in React ?

// In React, every component goes through a lifecycle with three main phases: Mounting, Updating, and Unmounting. These phases allow you to run code at specific points, such as initializing state, responding to prop changes, or cleaning up resources.

// - Mounting → Component is created and added to DOM.
// - Updating → Component re-renders when state/props change.
// - Unmounting → Component is removed and cleanup happens.

// -----------------------------------------------------------------------------------------------------------------------------

// What is Context API , and how is it different from props ?

// The Context API in React is a built-in feature that allows you to share data across multiple components without manually passing props at every level. Props, on the other hand, are used to pass data directly from a parent to a child component. The key difference is that Context avoids “prop drilling” (passing props through many layers), making global state management easier.

// Props
// - Definition: Props (short for properties) are read-only attributes used to pass data from a parent component to a child component.
// - Key Point: They are immutable and flow one-way (top-down).
// - Use Case: Best for simple, localized data passing (e.g., sending a button label or user info to a child component).

// Context API
// - Definition: The Context API is a React feature that provides a way to share values (like state, themes, or authentication) across the entire component tree without explicitly passing props at each level.
// - Key Point: It creates a global-like state accessible by any component that consumes the context.
// - Use Case: Best for data needed by many components (e.g., theme settings, user authentication, language preferences).

// Summary
// - Use Props when data is specific to a component and passed directly.
// - Use Context API when data is global and needed by multiple components at different levels

// ------------------------------------------------------------------------------------------------------------------------

// How can you optimize performance within a react application ?

// In React, I optimize performance by preventing unnecessary re-renders with memoization (React.memo, useMemo, useCallback), splitting code with lazy loading, and virtualizing large lists. I also debounce frequent events, optimize assets like images, and leverage React 18 features such as concurrent rendering to keep the UI responsive. The goal is to balance readability with performance, applying optimizations where they make the biggest impact."

// - Use React.memo to prevent functional components from re-rendering when props haven’t changed.

// - Use useCallback to memoize functions so they aren’t recreated on every render.

// - Use useMemo to cache expensive computations.

// 👉 Example
// const memoizedValue = useMemo(() => expensiveCalculation(data), [data]);

// - Use lazy loading for images.
// - Compress and optimize images before serving.

// - Use react-window or react-virtualized for rendering large lists efficiently (only render visible items).
// - Always provide unique keys for list items to help React track changes.

// --------------------------------------------------------------------------------------------------------------------------------

// What do you mean by Higher Order Component in React ?

// An HOC is a function that takes a component and returns a new component.
// Think of an HOC like a wrapper. If a regular component transforms props into UI, an HOC transforms a component into another component with extra "powers" or data.

// Why Use Them?

// Authentication: Checking if a user is logged in before showing a page.

// Logging: Tracking when certain components mount or user interactions occur.

// Data Fetching: Wrapping components to provide them with data from an API.

// Styling/Theming: Injecting specific theme props into a component.

// A Practical Example

// Imagine you have several components that need to know if a user is "Authorized." Instead of writing the check inside every single component, you create an HOC:


// // This is the Higher-Order Component
// function withAuthorization(WrappedComponent) {
//   return function(props) {
//     const isAuthorized = checkUserStatus(); // Hypothetical logic

//     if (!isAuthorized) {
//       return <p>You are not allowed to see this!</p>;
//     }

//     // Pass the original props through to the wrapped component
//     return <WrappedComponent {...props} />;
//   };
// }

// Usage
//const SecureProfile = withAuthorization(UserProfile);

// Not much more used after the introduction of React Hooks

// -----------------------------------------------------------------------------------------------------------------------










