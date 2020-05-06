import fs from 'fs';
import path from 'path';
import jsYaml from 'js-yaml';
import compareObj from './parsers.js';

const selectParser = (pathFile1, pathFile2) => {
  let extFile = '';
  const file1 = fs.readFileSync(path.resolve(process.cwd(), pathFile1), 'utf8');
  const file2 = fs.readFileSync(path.resolve(process.cwd(), pathFile2), 'utf8');

  if (path.extname(pathFile1) === '.json' && path.extname(pathFile2) === '.json') {
    extFile = 'json';
  } else if ((path.extname(pathFile1) === '.yaml' || path.extname(pathFile1) === '.yml') && (path.extname(pathFile2) === '.yaml' || path.extname(pathFile2) === '.yml')) {
    extFile = 'yaml';
  } else if (extFile === '') {
    throw new Error('Not correct file type');
  }

  if (extFile === 'yaml') {
    return [jsYaml.safeLoad(file1), jsYaml.safeLoad(file2)];
  }

  return [JSON.parse(file1), JSON.parse(file2)];
};

const getDiff = (path1, path2) => {
  const [obj1, obj2] = selectParser(path1, path2);

  const result = JSON.stringify(compareObj(obj1, obj2), null, ' ');

  return result;
};

export default getDiff;
