const fs = require('fs');
const p = 'index.html';
let s = fs.readFileSync(p, 'utf8');
const css = `
<style id="github-button-hard-stop">
.top-actions .github-corner-button {
  position: static !important;
  top: auto !important;
  right: auto !important;
  z-index: auto !important;
  width: 34px !important;
  height: 34px !important;
  min-height: 34px !important;
  border-radius: 999px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex: 0 0 auto !important;
  color: #fff !important;
  background: #172033 !important;
  border: 1px solid var(--line) !important;
  box-shadow: none !important;
  text-decoration: none !important;
}
.top-actions .github-corner-button svg {
  width: 24px !important;
  height: 24px !important;
  display: block !important;
  fill: currentColor !important;
}
body > a.github-corner-button,
.app > a.github-corner-button,
.map-area > a.github-corner-button {
  display: none !important;
}
</style>`;
if (!s.includes('github-button-hard-stop')) {
  s = s.replace('</head>', css + '\n</head>');
}
fs.writeFileSync(p, s, 'utf8');
