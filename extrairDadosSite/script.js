const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://instagram.com/rocketseat_oficial');
  
  const imgList = await page.evaluate(() => {
        // inpecionar elemento
        // pegar todas as imgs que estão na parte de posts
        const nodeList = document.querySelectorAll("article img ")

        // transformar o nodeLIst em array
        const imgArray = [...nodeList]

        // transformar os nodes (elementos html) em objs JS
        const imgList = imgArray.map(img => {
            return {
                src: img.src
            }
        })

        // console.log(imgList)
        // colocar pra fora da função
        return imgList
    })

    //   escrever os dados em um arquivo local (json)
    fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err => {
        if(err) throw new Error('erro')
        console.log("Deu certo")
    })
    /* writeFile('nameFile', dadosJSON, callback error)
        escrever no aquivo
    */
//   await browser.close();
})();