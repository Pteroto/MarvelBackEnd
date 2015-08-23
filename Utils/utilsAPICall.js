/**
 * Created by Gustavo on 06/07/2015.
 */

var crypto = require('crypto');

var publicKey = 'your public key';
var privateKey = 'your private key';

module.exports = {

   getKey: function getKey(){
    var returnList = Array;
    var ts = Date.now().toString();
    var hash = crypto.createHash('md5').update(ts + privateKey + publicKey).digest('hex');

    returnList['ts'] = ts.toString();
    returnList['hash'] = hash;
    returnList['publickey'] = publicKey;

    return returnList
   }
};