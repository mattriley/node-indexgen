const path = require('path');

module.exports = ({ io }) => scriptDataList => {
    return Promise.all(scriptDataList.map(scriptData => {
        const filePath = path.join(scriptData.dirPath, 'index.js');
        return io.fs.promises.writeFile(filePath, scriptData.script);
    }));
};
