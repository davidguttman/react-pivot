/*
  @license
	Rollup.js v4.45.3
	Sat, 26 Jul 2025 13:41:14 GMT - commit d6908c90c26220f490ff43b226e61288c864d06a

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
export { version as VERSION, defineConfig, rollup, watch } from './shared/node-entry.js';
import './shared/parseAst.js';
import '../native.js';
import 'node:path';
import 'path';
import 'node:process';
import 'node:perf_hooks';
import 'node:fs/promises';
