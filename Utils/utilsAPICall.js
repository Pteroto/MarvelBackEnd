/**
 * Created by Gustavo on 06/07/2015.
 */

var crypto = require('crypto');

var publicKey = 'cb4d52d0be976cd19824a9a3887bf177';
var privateKey = 'a65eeb1e21b9783ac2fafabe7aec0773b2de1772';

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