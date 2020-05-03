import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import getDiff from "../src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('get diff json files', () => {
  const path1 = path.resolve(__dirname, 'fixtures/before.json');
  const path2 = path.resolve(__dirname, 'fixtures/after.json');
  const pathResult = path.resolve(__dirname, 'fixtures/expect.json');
  const resultJson = JSON.parse(fs.readFileSync(pathResult));

  const diff = getDiff(path1, path2);
  const result = JSON.stringify(resultJson, null, ' ');

  expect(diff).toBe(result);
});
