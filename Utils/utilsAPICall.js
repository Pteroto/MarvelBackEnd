/**
 * Created by Gustavo on 06/07/2015.
 */

var crypto = require('crypto');
var md5 = crypto.createHash('md5');

var publicKey = 'your key';
var privateKey = 'your key';

module.exports = {

   getKey: function getKey(){
    var returnList = Array;
    var ts = Date.now().toString();
    var hash = md5.update(ts + privateKey + publicKey).digest('hex');

    returnList['ts'] = ts.toString();
    returnList['hash'] = hash;
    returnList['publickey'] = publicKey;

    return returnList
   }
};