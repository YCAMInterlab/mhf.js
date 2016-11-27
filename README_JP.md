## Math Helper Function in Javascript

## Synopsis
mhf.jsは、数学ヘルパーの関数コレクションです。ガウス分布、マップ、クランプ、limit3などが含まれた、ミニマルなライブラリです。

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
このライブラリは、コンピュテーショナル デザイン、及びパラメトリック デザインをウェブに広めようとする、大きなライブラリのプロジェクト/シリーズの一部です。
高度なコンピューテーショナル デザインや3Dモデルの出力、Gコード生成、CNCフライス加工ツール用のパスや、レーザー切断用のパスの生成、ロボット運動計画などを可能にする、全ての複雑な形態機能を備えた数学的頭脳になることを目的としています。

## Build Requirements
node.js (4.4.0+) & npm

## Installation
このライブラリをプロジェクトに追加するためには、以下の操作を行って下さい。:  
```
npm install --save https://github.com/YCAMInterlab/mhf.js.git
```

もしく以下の方法でも追加できます。:  
```
npm install --save mhf
```

## Examples
See https://github.com/rezaali/webgl-sketches/

## Contribution
Copyright 2015-2016 [Reza Ali](http://www.syedrezaali.com) co-developed by [YCAMInterLab](http://interlab.ycam.jp/en/) during the [Guest Research Project v.3](http://interlab.ycam.jp/en/projects/guestresearch/vol3)

## License
Apache-2.0
