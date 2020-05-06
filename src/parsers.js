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

export default compareObj;
