# react-view-controller
Controller for React Component

A pattern where Component should worry about only rendering the data.
Controller will take care of providing the data to the Component and
handling the events.

The idea is Component should be as dumb as possible.

Controller should be responsible for the logic.

This library delegates all life cycle callbacks of Component to Contoller.
Controller then, in the life cycle callbacks, can fetch the data, attach an event listener, 
and work on data.

### How to use
See 
[examples](https://github.com/omkarsheral1989/react-view-controller/tree/master/example).


 
