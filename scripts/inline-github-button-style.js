const fs = require('fs');
const p = 'index.html';
let s = fs.readFileSync(p, 'utf8');
s = s.replace('class="github-corner-button" href="https://github.com/Brandon-Valley/LocalMonopoly"', 'class="github-corner-button" style="position:fixed!important;top:78px!important;right:14px!important;z-index:999999!important;width:58px!important;height:58px!important;border-radius:999px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;" href="https://github.com/Brandon-Valley/LocalMonopoly"');
s = s.replace('<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">', '<svg style="width:38px!important;height:38px!important;display:block!important;" viewBox="0 0 24 24" aria-hidden="true" focusable="false">');
fs.writeFileSync(p, s, 'utf8');
