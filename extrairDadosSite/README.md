# puppeteer 
    ver sobre em: npm puppeteer
    abre navegador
    npm i puppeteer

# Usar no código
# excutar é node file.js
    const puppeteer = require('puppeteer');

    (async () => {
        // abre navegador
    const browser = await puppeteer.launch();
    // se quiser ver ele indo no navegador
    // const browser = await puppeteer.launch({headless: false});
        // Espera browser abrir nova página
    const page = await browser.newPage();
        // espera ir até certo endereço
    await page.goto('https://example.com');
        // espera tirar uma print da página
    await page.screenshot({ path: 'example.png' });

    // dps de tudo fecha o browser
    await browser.close();
    })();

# Garimpar dados
    Em vez de 
        await page.screenshot({ path: 'example.png' });
    Usar await page.evaluate(() => {
        <!-- toda essa função será executada no browser -->
    })
