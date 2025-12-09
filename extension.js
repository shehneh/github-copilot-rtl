const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

function activate(context) {
  let disposable = vscode.commands.registerCommand('copilot-rtl.enableRtl', function () {
    try {
      const cssSource = path.join(context.extensionPath, 'media', 'vscode-rtl.css');
      const cssDest = path.join(process.env.APPDATA || process.env.LOCALAPPDATA, 'Code', 'User', 'copilot-rtl.css');

      // ensure destination folder exists
      const destDir = path.dirname(cssDest);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }

      fs.copyFileSync(cssSource, cssDest);

      // update settings.json
      const settingsPath = path.join(process.env.APPDATA || process.env.LOCALAPPDATA, 'Code', 'User', 'settings.json');
      let settings = {};
      try {
        if (fs.existsSync(settingsPath)) {
          settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
        }
      } catch (e) {}

        const importPath = `file:///${cssDest.replace(/\\/g, '/')}`;
      settings['vscode_custom_css.imports'] = [ importPath ];
      fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2), 'utf8');

      vscode.window.showInformationMessage('Copilot RTL: CSS copied and settings updated. Now run "Enable Custom CSS and JS" and reload the window.');
    } catch (err) {
      vscode.window.showErrorMessage('Copilot RTL: Failed to install. ' + String(err));
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
