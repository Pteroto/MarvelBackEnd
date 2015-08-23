/**
 * Created by Gusta on 23/08/2015.
 */
/**
 * Created by Gustavo on 12/07/2015.
 */

module.exports = {

    getName: function getName(json){
        try {
            return json.data.results[0].name
        } catch(err) {
            return ''
        }
    },

    getDescription: function getDescription(json){
        try {
            return json.data.results[0].description
        } catch(err) {
            return ''
        }
    },

    getImage: function getImage(json){
        try {
            return json.data.results[0].thumbnail.path +'.'+ json.data.results[0].thumbnail.extension
        } catch(err) {
            return ''
        }
    },

    getCreditsMarvel: function getCreditsMarvel(json) {
        try {
            return json.attributionHTML
        } catch(err) {
            return ''
        }
    }
};