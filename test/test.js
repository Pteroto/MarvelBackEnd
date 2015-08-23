/**
 * Created by Gusta on 23/08/2015.
 */
var assert = require("assert");
var hero = require("../models/heroModel");
var fs = require('fs');

var jsonResult = JSON.parse(fs.readFileSync('test/jsonResult.txt', 'utf8'));

describe('test jsonParsers', function() {
    describe('test hero model', function() {
        it('should return results of json', function() {
            assert.equal(hero.getName(jsonResult), 'Thor');
        })
    })
});