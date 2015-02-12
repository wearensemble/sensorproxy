module.exports =  {
  "stretch": {
    "description":"adafruit stretch sensor",
    "pin": 0,
    "driver":"analogSensor",
    "lowerLimit":0,
    "upperLimit":10000,
    "enabled":false
  },
  "pressure1": {
    "description":"homemade pressure sensor",
    "pin": 0 ,
    "driver":"analogSensor",
    "lowerLimit": 0,
    "upperLimit": 1100,
    "invert":true,
    "enabled":false
  },
  "compositionButton": {
    "description":"my button demo",
    "pin": 2,
    "driver": "button",
    "controlEventPush":"toggleComposition",
    "controlEventRelease":null,
    "enabled": true
  },
  "flatButton": {
    "description":"my button demo",
    "pin": 2,
    "driver": "button",
    "controlEventPush":"tempo",
    "controlEventRelease":"releaseButton",
    "enabled": true
  },
  "pressure2": {
    "description":"homemade pressure sensor",
    "pin": 0 ,
    "driver":"analogSensor",
    "lowerLimit": 0,
    "upperLimit": 1100,
    "invert":true,
    "enabled":false
  },
  "pressure3": {
    "description":"homemade pressure sensor",
    "pin": 0 ,
    "driver":"analogSensor",
    "lowerLimit": 0,
    "upperLimit": 1100,
    "invert":true,
    "enabled":false
  },
  "pressure4": {
    "description":"homemade pressure sensor",
    "pin": 0 ,
    "driver":"analogSensor",
    "lowerLimit": 0,
    "upperLimit": 1100,
    "invert":true,
    "enabled":false
  }/*
  "lcd": { 
    "description":"lcd display",
    "enabled":false,
    "driver":"upm-jhd1313m1",
    "connection":"edison", 
    "endabled":true
  }*/
}
