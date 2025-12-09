# Copilot RTL

افزونه‌ای ساده برای کپی کردن CSS راست‌چین Copilot Chat و اضافه کردن آن به تنظیمات کاربر VS Code.

نحوه استفاده

1. پوشه `D:\business\copilot-rtl` را در VS Code باز کن.
2. فشار بده F5 تا پنجره توسعه باز شود.
3. از Command Palette (Ctrl+Shift+P) دستور `Enable Copilot RTL` را اجرا کن.
4. افزونه‌ی `Custom CSS and JS Loader` را نصب کن (اگر نصب نشده):

```powershell
code --install-extension be5invis.vscode-custom-css
```

5. سپس در Command Palette اجرا کن: `Enable Custom CSS and JS` و پس از آن `Reload Window`.

توجه

- این افزونه تنها فایل CSS را در `%APPDATA%\\Code\\User\\copilot-rtl.css` کپی می‌کند و مسیر آن را در `settings.json` اضافه می‌کند.

بسته‌بندی و نصب محلی

برای بسته‌بندی افزونه و نصب محلی از `vsce` استفاده کن. اگر `vsce` نصب نیست، می‌توانی با `npm` یا `npx` آن را اجرا کنی:

```powershell
npm install -g vsce
vsce package
``` 

خروجی یک فایل `.vsix` خواهد بود. برای نصب محلی از آن استفاده کن:

```powershell
code --install-extension .\copilot-rtl-0.0.1.vsix
```

نکته: برای انتشار در Marketplace باید یک حساب منتشرکننده داشته باشی و `vsce publish` یا `npx vsce publish` را استفاده کنی.

اگر می‌خواهی من ادامه بدهم و `vsce package` را روی این پروژه اجرا کنم یا فایل `.vsix` تولید کنم، بگو تا راهنمایی یا اجرای دستورات را انجام دهم.
- بعد از هر آپدیت VS Code ممکن است لازم باشد دوباره فرایند `Enable Custom CSS and JS` را اجرا کنی.
