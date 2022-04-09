function introduction(name) {
    return (`Hi, my name is ${name}.`);
}
introduction(Jimmy);

function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguage(Jimmy, Ember.js);

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
