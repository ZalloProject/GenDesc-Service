const jsdom = require('jsdom');
global.dom = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.navigator = global.window.navigator;