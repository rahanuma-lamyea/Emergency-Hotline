1st Question Answer :
getElementById() = It selects only one element by its id.
getElementsByClassName()= It selects Multiple elements by class name
querySelector() = It selects the first matching element using CSS selector
querySelectorAll() = It selects all matching elements using CSS selector

2nd Question Answer:
To create a new element in DOM-
1.Create a new element : use document.createElement()
2.Add content/attributes ,
3. Insert into the DOM: Here we need a parent element.

3rd Question Answer:
When an event happens on an element, it first runs on that element, then bubbles up (propagates) to its parent, then grandparent… all the way up to document. its called Event Bubbling.
example :
html code: 
<div id="parent">
  <button id="child">Click Me</button>
</div>

js code:
document.getElementById("child").addEventListener("click", () => {
  console.log("Button clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Div clicked");
});

then we got our output:
Button clicked
Div clicked


4th Question Answer:
Event Delegation is a technique where you attach a single event listener to a parent element instead of adding separate listeners to many child elements. You then detect which child triggered the event using the event’s target.
It is useful because ,
1.Better performance
2. Works for dynamically added elements
3. Cleaner and shorter code

5th Question Answer:
preventDefault()= Stops the default behavior of an element
stopPropagation()=Stops the event from bubbling up to parent elements
