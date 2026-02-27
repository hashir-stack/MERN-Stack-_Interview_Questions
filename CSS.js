// What are the components of a CSS box model ?

// Content -> The actual text, image, or other data inside the element.
// "Hello World" inside a <div>

// Padding -> Space between the content and the element’s border. It pushes the border outward.

// Border -> The line surrounding the padding and content. Can have thickness, style, and color.

// Margin -> Space outside the border, creating distance between this element and others.

// Visual Order (from inside out)
// - Content → the core (text, image, etc.)
// - Padding → space around the content
// - Border → wraps around padding + content
// - Margin → space outside the border

// This means the total width of the box =  content width + padding + border + margin.

// -----------------------------------------------------------------------------------------------------------------

// What is the difference between class selector and id selector in CSS ?

// 📘 Class Selector
// A class selector is used to apply styles to multiple elements that share the same class attribute.
// - Syntax: .classname
// - Definition: A reusable selector that groups elements together for consistent styling.
// Example:
// .button {
//   background-color: blue;
//   color: white;
// }

// <button class="button">Save</button>
// <button class="button">Cancel</button>

// 📘 ID Selector
// An ID selector is used to apply styles to a single, unique element identified by its id attribute.
// - Syntax: #idname
// - Definition: A unique selector that targets one specific element on the page.
// Example:
// #main-header {
//   font-size: 24px;
//   text-align: center;
// }


// <h1 id="main-header">Welcome!</h1>



// ✅ Quick Summary
// - Class selector (.): reusable, for groups of elements.
// - ID selector (#): unique, for one element only.

// --------------------------------------------------------------------------------------------------------------------------------------

