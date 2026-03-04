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





