const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

const cssStart = html.indexOf('    .github-corner-button {');
const cssEnd = html.indexOf('    .github-corner-button:hover {', cssStart);
if (cssStart === -1 || cssEnd === -1) throw new Error('GitHub button CSS block not found');

const newCss = `    .github-corner-button {
      width: 34px;
      height: 34px;
      min-height: 34px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      color: #ffffff;
      background: #172033;
      border: 1px solid var(--line);
      box-shadow: none;
      text-decoration: none;
    }

`;
html = html.slice(0, cssStart) + newCss + html.slice(cssEnd);
html = html.replace('      width: 38px;\n      height: 38px;', '      width: 24px;\n      height: 24px;');
html = html.replace('      width: 22px;\n      height: 22px;', '      width: 24px;\n      height: 24px;');

const anchorMatch = html.match(/\n\s*<a class="github-corner-button"[\s\S]*?<\/a>/);
if (!anchorMatch) throw new Error('GitHub button anchor not found');
let anchor = anchorMatch[0];
html = html.replace(anchorMatch[0], '');
anchor = anchor.replace(/ style="[^"]*"/g, '');
anchor = anchor.replace('<svg style="width:38px!important;height:38px!important;display:block!important;" viewBox="0 0 24 24" aria-hidden="true" focusable="false">', '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">');
anchor = anchor.replace('<svg style="width:24px!important;height:24px!important;display:block!important;" viewBox="0 0 24 24" aria-hidden="true" focusable="false">', '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">');

const restart = '        <button class="top-log-btn" id="restartTopBtn" type="button">Restart</button>';
if (!html.includes(restart)) throw new Error('Restart button not found');
html = html.replace(restart, restart + anchor);

fs.writeFileSync(file, html, 'utf8');
