import fs from 'fs';
import path from 'path';

const compareObj = (src1, src2) => {
  const result = {};

  Object.keys(src1).forEach((key) => {
    if ({}.hasOwnProperty.call(src2, key)) {
      if (src1[key] === src2[key]) {
        result[`  ${key}`] = src1[key];
      } else {
        result[`+ ${key}`] = src2[key];
        result[`- ${key}`] = src1[key];
      }
    } else {
      result[`- ${key}`] = src1[key];
    }
  });

  Object.keys(src2).forEach((key) => {
    if (!({}.hasOwnProperty.call(src1, key))) {
      result[`+ ${key}`] = src2[key];
    }
  });

  return result;
};

const getDiff = (path1, path2) => {
  const file1 = fs.readFileSync(path.resolve(process.cwd(), path1));
  const file2 = fs.readFileSync(path.resolve(process.cwd(), path2));

  const serializeFile1 = JSON.parse(file1);
  const serializeFile2 = JSON.parse(file2);

  const result = JSON.stringify(compareObj(serializeFile1, serializeFile2), null, ' ');

  return result;
};

export default getDiff;
