(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var one = require("./module1");
var two = require("./module2");

one.doModuleOneThing();
two.doModuleTwoThing();
},{"./module1":2,"./module2":3}],2:[function(require,module,exports){
(function(m1) {
	m1.doModuleOneThing = function() {
		console.log("I am module 1. Feel my POWER!");
	}
})(module.exports);
},{}],3:[function(require,module,exports){
(function(m2) {
	m2.doModuleTwoThing = function() {
		console.log("I am module 2. Feel my POWER!");
	}
})(module.exports);
},{}]},{},[1]);
