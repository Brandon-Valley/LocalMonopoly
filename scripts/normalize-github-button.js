const fs = require('fs');
const p = 'index.html';
let s = fs.readFileSync(p, 'utf8');
const runtime = `
<script>
(function(){
  function normalizeGithubButton(){
    var topActions = document.getElementById('topActions');
    var restart = document.getElementById('restartTopBtn');
    if (!topActions || !restart) return;
    document.querySelectorAll('a.github-corner-button').forEach(function(a){ a.remove(); });
    var a = document.createElement('a');
    a.className = 'github-corner-button';
    a.href = 'https://github.com/Brandon-Valley/LocalMonopoly';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label','Open GitHub repository');
    a.title = 'GitHub repository';
    a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.508.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.111-1.466-1.111-1.466-.908-.622.069-.609.069-.609 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.094.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.594 1.028 2.688 0 3.848-2.337 4.695-4.566 4.944.359.31.679.923.679 1.861 0 1.343-.012 2.426-.012 2.756 0 .268.18.58.688.482A10.024 10.024 0 0 0 22 12.021C22 6.484 17.523 2 12 2Z"></path></svg>';
    restart.insertAdjacentElement('afterend', a);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', normalizeGithubButton); else normalizeGithubButton();
  setTimeout(normalizeGithubButton, 300);
  setTimeout(normalizeGithubButton, 1200);
})();
</script>`;
if (!s.includes('function normalizeGithubButton()')) {
  s = s.replace('</body>', runtime + '\n</body>');
}
fs.writeFileSync(p, s, 'utf8');
