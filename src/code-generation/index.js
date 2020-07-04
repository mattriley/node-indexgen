module.exports = {
    __modulename: 'codeGeneration',
    generateFiles: require('./generate-files'),
    generateScripts: require('./generate-scripts'),
    getDependencyInfo: require('./get-dependency-info'),
    getModuleInfo: require('./get-module-info'),
    writeScripts: require('./write-scripts')
};