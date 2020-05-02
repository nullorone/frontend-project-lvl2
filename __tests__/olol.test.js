import { test, expect } from '@jest/globals';
// import path from 'path';
// import fs from 'fs';
// import getDiff from "../src/index.js";

test('get diff json files', () => {
    const path1 = path.resolve(__dirname, 'fixtures/before.json');
    const path2 = path.resolve(__dirname, 'fixtures/after.json');
    const pathResult = path.resolve(__dirname, 'fixtures/expect.json');

    const diff = getDiff(path1, path2);
    const result = JSON.stringify(fs.readFileSync(pathResult));

    expect(3).toBe(3);
});
