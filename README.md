# Welcome to My Spaceship
***

## Task
/* What is the problem? */
The objective of **My Spaceship** is to build a flight-path simulator 
for a rocket ship moving across an infinite 2D space using 
the Computer Graphics Coordinate System. Starting at coordinates `(0, 0)` facing `'up'`, 
the function `my_spaceship` receives a string of movement commands 
(`'R'` to turn right, `'L'` to turn left, and `'A'` to advance 1 unit) 
and must return the ship's final coordinates and orientation formatted 
strictly as the string `"{x: X, y: Y, direction: 'DIRECTION'}"`.

/* where is the challenge? */
The main challenge lies in handling cyclical 90-degree rotations cleanly without out-of-bounds index errors, 
mapping movement accurately to the Computer Graphics Coordinate System 
(where moving `'up'` decreases `y` and moving `'down'` increases `y`), 
and returning the exact string structure expected by the test suite.


## Description
/* How have you solved the problem? */

To solve this problem cleanly, the solution represents the four cardinal directions in clockwise order 
inside an array: `['up', 'right', 'down', 'left']`, starting at index `0` (`'up'`). 

As the function iterates through each character in `flight_path`:
```
'R' updates the direction index clockwise using `(dirIndex + 1) % 4`.
'L' updates the direction index counter-clockwise using `(dirIndex + 3) % 4` (avoiding negative modulo issues in JavaScript).
'A' inspects the active direction and increments or decrements `x` (for `'right'`/`'left'`) or `y` (for `'down'`/`'up'`) by `1`.
```
Once the loop finishes, a template literal formats `x`, `y`, and `directions[dirIndex]` into the required output string.

## Installation
No external packages or build tools (`npm install` or `make`) are required—only a standard JavaScript runtime such as Node.js.

## Usage
/* How does it work? */
```
Load ex00/my_spaceship.js in Node.js (or call my_spaceship(flight_path) 
inside your JavaScript test runner) with a flight-path string:
node -e 'const fs = require("fs"); eval(fs.readFileSync("ex00/my_spaceship.js", "utf8")); console.log(my_spaceship("RAALALL"));'
```

### The Core Team
Tessoh tchinda Raustand (raustand_t)

<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
