const fs = require('fs');
const p = 'index.html';
let s = fs.readFileSync(p, 'utf8');
const css = `

    /* Keep the GitHub button available before a board is chosen. */
    body:not(.board-built) #topActions {
      display: flex !important;
      visibility: visible !important;
      opacity: 1 !important;
    }

    body:not(.board-built) #logsHudBtn,
    body:not(.board-built) #restartTopBtn {
      display: none !important;
    }

    body:not(.board-built) #topActions .github-corner-button {
      display: inline-flex !important;
    }
`;
if (!s.includes('Keep the GitHub button available before a board is chosen')) {
  s = s.replace('    .top-actions:empty {', css + '\n    .top-actions:empty {');
}
fs.writeFileSync(p, s, 'utf8');
