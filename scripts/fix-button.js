const fs = require('fs');
const p = 'index.html';
let s = fs.readFileSync(p, 'utf8');
s = s.replace('      width: 40px;\n      height: 40px;\n      border-radius: 999px;', '      position: fixed;\n      top: max(10px, env(safe-area-inset-top));\n      right: max(10px, env(safe-area-inset-right));\n      z-index: 999999;\n      width: 44px;\n      height: 44px;\n      border-radius: 999px;');
s = s.replace('      flex: 0 0 auto;\n      color: #ffffff;', '      color: #ffffff;');
fs.writeFileSync(p, s, 'utf8');
