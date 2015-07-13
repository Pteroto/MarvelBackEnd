/**
 * Created by Gustavo on 12/07/2015.
 */

module.exports = {

    getName: function getName(json){
        if (json.data.results[0].name != null) {
            return json.data.results[0].name
        } else { return ''}
    },

    getDescription: function getDescription(json){
        if (json.data.results[0].description != null) {
            return json.data.results[0].description
        } else { return ''}
    },

    getImage: function getImage(json){
        if (json.data.results[0].thumbnail.path != null) {
            return json.data.results[0].thumbnail.path +'.'+ json.data.results[0].thumbnail.extension
        } else { return ''}
    },

    setJson: function setJson(jsonString){
        return JSON.parse(jsonString)
    },

    getCreditsMarvel: function getCreditsMarvel(json) {
        if (json.attributionHTML != null) {
            return json.attributionHTML
        } else { return ''}
    }
};