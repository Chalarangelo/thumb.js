/*
  Creates the required EventListener(s) to deal with a custom touch event type.
  Parameters:
  touchEventType
    A string representing the custom touch event type to listen out for.
    Possible values:
      tap - Represents a tap (or click) event.
      longtap - Represents a long tap (or click) event.
      press - Alias for 'longtap'.
      pan - Represents any pan event.
      panany - Alias for 'pan'.
      panup - Represents a pan up event.
      panright - Represents a pan right event.
      pandown - Represents a pan down event.
      panleft - Represents a pan left event.
      swipe - Represents any swipe event.
      swipeany - Alias for 'swipe'.
      swipeup - Represents a swipe up event.
      swiperight - Represents a swipe right event.
      swipedown - Represents a swipe down event.
      swipeleft - Represents a swipe left event.
  touchEventHandler
    The object which receives a notification when an event of the specified type
    occurs. This must be an object implementing the EventListener interface, or
    a JavaScript function.
*/
EventTarget.prototype.addTouchEventListener = function(touchEventType, touchEventHandler){
  switch (touchEventType) {
    // Tap event handling
    case 'tap':
      // Touch events are natively supported, no simulation required
      if ('ontouchstart' in document.documentElement){

      }
      // Simulated touch event handling
      else {

      }
      break;
    // Long tap event handling
    case 'longtap':
    case 'press':
      // Touch events are natively supported, no simulation required
      if ('ontouchstart' in document.documentElement){

      }
      // Simulated touch event handling
      else {

      }
      break;
    // Pan handling
    case 'pan':
    case 'panany':
      // Touch events are natively supported, no simulation required
      if ('ontouchstart' in document.documentElement){

      }
      // Simulated touch event handling
      else {

      }
      break;
    case 'panup':
      // Touch events are natively supported, no simulation required
      if ('ontouchstart' in document.documentElement){

      }
      // Simulated touch event handling
      else {

      }
      break;
    case 'panright':
      // Touch events are natively supported, no simulation required
      if ('ontouchstart' in document.documentElement){

      }
      // Simulated touch event handling
      else {

      }
      break;
    case 'pandown':
      // Touch events are natively supported, no simulation required
      if ('ontouchstart' in document.documentElement){

      }
      // Simulated touch event handling
      else {

      }
      break;
    case 'panleft':
      // Touch events are natively supported, no simulation required
      if ('ontouchstart' in document.documentElement){

      }
      // Simulated touch event handling
      else {

      }
      break;
    // Swipe handling
    case 'swipe':
    case 'swipeany':
      // Touch events are natively supported, no simulation required
      if ('ontouchstart' in document.documentElement){

      }
      // Simulated touch event handling
      else {

      }
      break;
    case 'swipeup':
      // Touch events are natively supported, no simulation required
      if ('ontouchstart' in document.documentElement){

      }
      // Simulated touch event handling
      else {

      }
      break;
    case 'swiperight':
      // Touch events are natively supported, no simulation required
      if ('ontouchstart' in document.documentElement){

      }
      // Simulated touch event handling
      else {

      }
      break;
    case 'swipedown':
      // Touch events are natively supported, no simulation required
      if ('ontouchstart' in document.documentElement){

      }
      // Simulated touch event handling
      else {

      }
      break;
    case 'swipeleft':
      // Touch events are natively supported, no simulation required
      if ('ontouchstart' in document.documentElement){

      }
      // Simulated touch event handling
      else {

      }
      break;
    default:
      console.log('The value of \'touchEventType\' did not match any of the possible values, no EventListener(s) have been created!')
  }
}
