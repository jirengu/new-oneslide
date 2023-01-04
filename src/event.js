let eventList = {}
function on(event, handler) {
  if(!eventList[event]) {
    eventList[event] = [handler]
  }else {
    eventList[event].push(handler)
  }
}
function fire(event, data) {
  if(eventList[event]) {
    eventList[event].forEach(handler => handler(data))
  }
}
function off(event, handler) {
  if(eventList[event]) {
    if(!handler) {
      delete eventList[event]
    }else {
      let index = eventList[event].indexOf(handler)
      eventList[event].splice(index, 1)
    }
  }
}
export default {
  on: on,
  fire: fire,
  off: off
}


