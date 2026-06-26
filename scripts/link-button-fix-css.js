const fs = require('fs');
const p = 'index.html';
let s = fs.readFileSync(p, 'utf8');
const link = '<link rel="stylesheet" href="github-button-fix.css?v=2">';
if (!s.includes('github-button-fix.css')) {
  s = s.replace('</head>', link + '\n</head>');
}
fs.writeFileSync(p, s, 'utf8');
