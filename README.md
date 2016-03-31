## Math Helper Function in Javascript

## Synopsis
mhf.js is a collection of math helper functions. This minimal library provides functions such as gaussian, map, clamp, and limit3.

## Code Example
```js
var mhf = require('mhf');
var map = mhf.map;
var input = 0.5;
var inputMin = 0.0;
var inputMax = 1.0;
var outputMin = -1.0;
var outputMax = 1.0;
var clamp = false;
var result = map( input, inputMin, inputMax, outputMin, outputMax, clamp );
```

## Motivation
This library is part of a larger project / series of libraries that aspires to bring computational and parametric design to the web. This library aspires to help make math functions modular and simpler to use in all types of operations that enable higher level computational design, 3d printing, g-code generation, cnc milling tool path creation, laser cutting paths, robotic motion planning, and more.

## Build Requirements
node.js (4.4.0+) & npm

## Installation
You can add this library to your project by running:
```
npm install --save https://github.com/YCAMInterlab/mhf.js.git
```

or via npm:
```
npm install --save mhf
```

## Examples
See https://github.com/rezaali/webgl-sketches/

## Contribution
Copyright 2015-2016 [Reza Ali](http://www.syedrezaali.com) co-developed by [YCAMInterLab](http://interlab.ycam.jp/en/) during the [Guest Research Project v.3](http://interlab.ycam.jp/en/projects/guestresearch/vol3)

## License
Apache-2.0
