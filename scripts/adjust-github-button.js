const fs = require('fs');
const p = 'index.html';
let s = fs.readFileSync(p, 'utf8');
s = s.replace('      top: max(10px, env(safe-area-inset-top));\n      right: max(10px, env(safe-area-inset-right));', '      top: calc(var(--top) + 12px);\n      right: 14px;');
s = s.replace('      width: 44px;\n      height: 44px;', '      width: 58px;\n      height: 58px;');
s = s.replace('      width: 22px;\n      height: 22px;', '      width: 38px;\n      height: 38px;');
fs.writeFileSync(p, s, 'utf8');
