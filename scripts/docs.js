#!/usr/bin/env node
require('../global');

echo('Appending docs to README.md');

cd(__dirname + '/..');

// Extract docs from shell.js
var docs = grep('//@', 'shell.js');
// Remove '//@'
docs = docs.replace(/\/\/\@ */g, '');
// Append docs to README
sed('-i', /# Commands reference(.|\n)*/, '# Commands reference\n\n' + docs, 'README.md');

echo('All done.');
