/**
 * Created by Gustavo on 06/07/2015.
 */

var http = require('http');
var express = require('express');
var url = require('url');
var router = express.Router();
var apiCall = require('../Utils/utilsAPICall');
var jsonParser = require('../Utils/utilsJSONParser');

/* GET hero page. */
router.get('/', function(req, res) {
    getHero(function(result){
        var resultJson = jsonParser.setJson(result);
        /*res.send(
            '<h1>'+jsonParser.getName(resultJson) +'</h1>'+
            jsonParser.getDescription(resultJson)+'<br>'+
            '<img src='+ jsonParser.getImage(resultJson)+ ' width="250" height="250">'+'<br>'+
            jsonParser.getCreditsMarvel(resultJson)
        );*/
        res.render('hero', {hero: jsonParser.getName(resultJson),
            desc: jsonParser.getDescription(resultJson),
            img: jsonParser.getImage(resultJson),
            copyright: jsonParser.getCreditsMarvel(resultJson)});
    });
});

module.exports = router;

function getHero(result){

    var apiKeyList = apiCall.getKey();

    var ts = apiKeyList['ts'];
    var hash = apiKeyList['hash'];
    var publicKey = apiKeyList['publickey'];
    var name = 'thor';

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