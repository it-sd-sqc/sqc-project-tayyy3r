// Dependencies ////////////////////////////////////////////
import { strict as assert } from 'node:assert'
import { closeSync, openSync, readFileSync, writeFileSync }
  from 'node:fs'
import { parse } from 'node-html-parser'

// This module uses the CommonJS module format, so we need
// to import it differently.
import pkg from 'svgoban'
const { serialize } = pkg

// Configuration ///////////////////////////////////////////
const srcPath = 'data/book.html'
const dstPath = 'docs/generated-schema.sql'

const sqlHeader = `DROP TABLE IF EXISTS words;

CREATE TABLE words (
  id SERIAL PRIMARY KEY,
  word TEXT NOT NULL,
  definition TEXT NOT NULL
);

INSERT INTO chapters (title, body) VALUES;
`
