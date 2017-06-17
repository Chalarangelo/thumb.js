/*
  Override the following values with your own if you want to change the global
  constants for each touchEventType.
*/
// The maximum time (in ms) before the tap (or click) event is cancelled.
var SHORT_TAP_TIMEOUT = 300;
// The amount of movement allowed around the touch point when executing a tap
// (or click) event. This is a pseudo-distance metric (similar, but not
// identical to the Euclidean distance metric).
var SHORT_TAP_MOVE_THRESHOLD = 20;
// The minimum duration (in ms) before the long tap (or click) event's listener
// is fired.
var LONG_TAP_DURATION = 300;
// The amount of movement allowed around the touch point when executing a long
// tap (or click) event. This is a pseudo-distance metric (similar, but not
// identical to the Euclidean distance metric).
var LONG_TAP_MOVE_THRESHOLD = 20;
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
      this.longTapTimeoutId = 0;
      // Touch events are natively supported, no simulation required
      if ('ontouchstart' in document.documentElement){
        function longTapMoveHandler(e){
          e.preventDefault();
          for(var i = 0; i < e.changedTouches.length; i ++)
            if (e.changedTouches[i].identifier == this.longTapTouch.identifier)
              if(Math.abs(e.changedTouches[i].clientX - this.longTapStartX) + Math.abs(e.changedTouches[i].clientY - this.longTapStartY) > LONG_TAP_MOVE_THRESHOLD){
                this.removeEventListener('touchmove',longTapMoveHandler);
                clearTimeout(this.longTapTimeoutId);
              }
        }
        function longTapHandler(e){
          e.preventDefault();
          this.removeEventListener('touchmove',longTapMoveHandler);
          clearTimeout(this.longTapTimeoutId);
          touchEventHandler({
            target: e.target,
            type: e.type,
            bubbles: e.bubbles,
            cancelable: e.cancelable,
            view: e.view,
            detail: e.detail,
            screenX: e.changedTouches[0].screenX,
            screenY: e.changedTouches[0].screenY,
            clientX: e.changedTouches[0].clientX,
            clientY: e.changedTouches[0].clientY
          });
        }
        this.addEventListener('touchstart', function(e){
          e.preventDefault();
          this.longTapTouch = {
            identifier: e.changedTouches[0].identifier,
            clientX: e.changedTouches[0].clientX,
            clientY: e.changedTouches[0].clientY
          };
          this.longTapStartX = this.longTapTouch.clientX;
          this.longTapStartY = this.longTapTouch.clientY;
          this.longTapTimeoutId = setTimeout(function(){
            longTapHandler(e);
          }, LONG_TAP_DURATION);
          this.addEventListener('touchmove', longTapMoveHandler);
        });
        this.addEventListener('touchend', function(e){
          e.preventDefault();
          for(var i = 0; i < e.changedTouches.length; i ++)
            if (e.changedTouches[i].identifier == this.longTapTouch.identifier){
              this.removeEventListener('touchmove',longTapMoveHandler);
              clearTimeout(this.longTapTimeoutId);
            }
        });
        this.addEventListener('touchleave', function(e){
          e.preventDefault();
          for(var i = 0; i < e.changedTouches.length; i ++)
            if (e.changedTouches[i].identifier == this.longTapTouch.identifier){
              this.removeEventListener('touchmove',longTapMoveHandler);
              clearTimeout(this.longTapTimeoutId);
            }
        });
        this.addEventListener('touchcancel', function(e){
          e.preventDefault();
          for(var i = 0; i < e.changedTouches.length; i ++)
            if (e.changedTouches[i].identifier == this.longTapTouch.identifier){
              this.removeEventListener('touchmove',longTapMoveHandler);
              clearTimeout(this.longTapTimeoutId);
            }
        });
      }
      // Simulated touch event handling
      else {
        function longTapMoveHandler(e){
          e.preventDefault();
          if(Math.abs(e.clientX - this.longTapStartX) + Math.abs(e.clientY - this.longTapStartY) > LONG_TAP_MOVE_THRESHOLD)
            clearTimeout(this.longTapTimeoutId);
        }
        function longTapHandler(e){
          e.preventDefault();
          this.removeEventListener('mousemove',longTapMoveHandler);
          clearTimeout(this.longTapTimeoutId);
          touchEventHandler(e);
        }
        this.addEventListener('mousedown', function(e){
          e.preventDefault();
          this.longTapStartX = e.clientX;
          this.longTapStartY = e.clientY;
          this.longTapTimeoutId = setTimeout(function(){
            longTapHandler(e);
          }, LONG_TAP_DURATION);
          this.addEventListener('mousemove', longTapMoveHandler);
        });
        this.addEventListener('mouseup', function(e){
          e.preventDefault();
          clearTimeout(this.longTapTimeoutId);
        });
        this.addEventListener('mouseleave', function(e){
          e.preventDefault();
          clearTimeout(this.longTapTimeoutId);
        });
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
};
