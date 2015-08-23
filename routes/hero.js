/**
 * Created by Gustavo on 06/07/2015.
 */

var http = require('http');
var express = require('express');
var url = require('url');
var router = express.Router();
var apiCall = require('../Utils/utilsAPICall');
var heroParser = require('../models/heroModel');

/* GET hero page. */
router.get('/:hero', function(req, res) {
    var hero = req.params.hero;
    getHero(function(result){
        var resultJson = JSON.parse(result);
        res.render('hero', {hero: heroParser.getName(resultJson),
            desc: heroParser.getDescription(resultJson),
            img: heroParser.getImage(resultJson),
            copyright: heroParser.getCreditsMarvel(resultJson)});
    }, hero);
});

module.exports = router;

function getHero(result, hero){

    var apiKeyList = apiCall.getKey();

    var ts = apiKeyList['ts'];
    var hash = apiKeyList['hash'];
    var publicKey = apiKeyList['publickey'];
    var name = hero;

    var options = {
        protocol: 'http:',
        host: 'gateway.marvel.com',
        pathname: '/v1/public/characters',
        query: {'ts':ts, 'hash':hash, 'apikey': publicKey, 'name': name},
        method: 'GET'
    };

    var urlHero = url.format(options);

    var callback = function(res) {
        var body = '';

        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            body += chunk;
            console.log('BODY: ' + chunk);
        });

        res.on('end', function() {
            result(body);
        });
    };

    http.get(urlHero, callback).end();
}