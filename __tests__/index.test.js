import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getResult = (pathResult = 'fixtures/expect.json') => {
  const pathToFileResult = path.resolve(__dirname, pathResult);
  const resultJson = JSON.parse(fs.readFileSync(pathToFileResult));

  return JSON.stringify(resultJson, null, ' ');
};

test('get diff json files', () => {
  const path1 = path.resolve(__dirname, 'fixtures/before.json');
  const path2 = path.resolve(__dirname, 'fixtures/after.json');

  const diff = getDiff(path1, path2);
  const result = getResult();

  expect(diff).toBe(result);
});

test('get diff yaml files', () => {
  const path1 = path.resolve(__dirname, 'fixtures/before.yml');
  const path2 = path.resolve(__dirname, 'fixtures/after.yml');

  const diff = getDiff(path1, path2);
  const result = getResult();

  expect(diff).toBe(result);
});

test('get diff ini files', () => {
  const path1 = path.resolve(__dirname, 'fixtures/before.ini');
  const path2 = path.resolve(__dirname, 'fixtures/after.ini');

  const diff = getDiff(path1, path2);
  const result = getResult();

  expect(diff).toBe(result);
});
