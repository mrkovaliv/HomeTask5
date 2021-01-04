window.addEventListener('DOMContentLoaded', () => {

    
    // 1
    function findNumber(n, m) {
        let result = '';
        if (!isNaN(n) && !isNaN(m)) {
            if (n < m) {
                while (n < m - 1) {
                    n++;
                    result += n + ' ';
                }

            } else {
                while (m < n - 1) {
                    m++;
                    result += m + ' ';
                }
            }
            alert(result);
        } else {
            alert("Введіть дані відповідного типу!");
        }

    }
    let n1 = +prompt('Введіть перше число n:', 0);
    let m1 = +prompt('Введіть друге число m:', 0);
    findNumber(n1, m1);


    // 2
    let powerNumber = (n, m = 2) => {
        return Math.pow(n, m);
    };

    let analogPowerNumber = function (n, m = 2) {
        return Math.pow(n, m);
    };

    let n2 = +prompt('Введіть число n:', 0);
    let m2 = +prompt('Введіть степінь для числа n:', 0);

    if (!isNaN(n2) && !isNaN(m2)) {
        alert(powerNumber(n2, m2));
        alert(analogPowerNumber(n2, m2));
    } else {
        alert("Введіть дані відповідного типу!");
    }

    //Number 1
    let n3 = +prompt('Введіть число з плаваючою точкою n :', 0);
    let m3 = +prompt('Введіть число з плаваючою точкою m :', 0);

    if (!isNaN(n3) && !isNaN(m3)) {
        n3 = Math.round((n3 * 0.3));
        m3 = Math.round((m3 * 0.3));
        alert(n3);
        alert(m3);

    } else {
        alert("Введіть дані відповідного типу!");
    }
    //2
    let n4 = +prompt('Введіть число n :', 0);
    let m4 = +prompt('Введіть число m :', 0);

    function getRandom(min, max) {
        return (Math.random() * (max - min) + min).toFixed(1);

        //Отримання цілого випадкового включаючи мінімум та максимум 
        // min = Math.ceil(min);
        // max = Math.floor(max);
        // return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (!isNaN(n4) && !isNaN(m4)) {
        alert(getRandom(n4, m4));

    } else {
        alert("Введіть дані відповідного типу!");
    }

    // String 1
    function findSame(str1, str2) {
        let pos = 0;
        let res = " Всі індекси: ";
        let count = 0;

        while (true) {
          let rightPos = str1.indexOf(str2, pos);
          if (rightPos == -1) break;
          
          res += rightPos + ' ';
          count++;
          pos = rightPos + 1;
        }
    
        if (count==0){
            res = 'Немає повторень'
        } else {
            res = 'Кількість повторень: ' + count + res;
        }
        return res;
    }

    str1 = prompt('Введіть першу стічку:', '');
    str2 = prompt('Введіть другу стічку:', '');
    if (str1 == null || str2 == null) {
        alert("Введіть коректно дані!");

    } else {
        alert(findSame(str1, str2));
    }
    
    //2
    let onlyNumber = 'ECMAScript 2015 (6th Edition, ECMA-262)'.match(/[0-9]+/g);
    console.log(onlyNumber.join());

    //3
    let onlyUpperLetters = 'ECMAScript 2015 (6th Edition, ECMA-262)'.match(/[A-Z]/g);
    console.log(onlyUpperLetters.join());  
    
    let pageHtml = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="theme-color" content="#000000">
      <!--
          manifest.json provides metadata used when your web app is added to the
          homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
        -->
      <!-- <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"> -->
      <h1> </h1>
    
      <script type="text/javascript" src="main.js">
        console.log("gtm")
        </script>
      <!--
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the \`public\` folder during the build.
          Only files inside the \public\` folder can be referenced from the HTML.
    
          Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
          work correctly both with client-side routing and a non-root public URL.
          Learn how to configure a non-root public URL by running \`npm run build\`.
        -->
      <title>React App</title>
    
      <style>
        @font-face {
          font-family: "Antic Slab";
          font-style: normal;
          font-weight: 400;
          /* src: local("Antic Slab Regular"), local("AnticSlab-Regular"), url(/antic-slab.woff2) format("woff2");
          unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02bb-02bc, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; */
        }
        *, *:before, *:after { box-sizing: border-box; }
        html, body { height: 100vh; }
        body { font-family: "Antic Slab", serif; margin: 0 }
        hr { width: 100%; }
    
        .friends .header {
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: #eee;
        }
    
        .friends .header > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
    
    
        .friends .header > nav {
          flex: 1;
        }
    
        .friends .header > nav ul {
          display: flex;
          justify-content: space-around;
          list-style: none;
          padding-left: 0;
        }
      </style>
    </head>
    
    <body>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <div id="⚛️" style="height: 100%">
        <h1>Contacts page </h1>
        <h1>Feeel free to contact</h1>
        <h1>Support </h1>
            
            
        <h2>H2 tag</h2>
    
        <span>
            If you have any questions, please contact:
            <p><a href="mailto:support@gmail.com">Mail</a></p>
            <p><a href="tel:067-777-77-77">+ (380)-067 777 77 77 </a></p>
            <p><a href="tel:097-777-77-77">+ (380) 097 777 77 77 </a></p>
    
    
        </span>
    
      </div>
      <!--
          This HTML file is a template.
          If you open it directly in the browser, you will see an empty page.
    
          You can add webfonts, meta tags, or analytics to this file.
          The build step will place the bundled scripts into the <body> tag.
    
        -->
    </body>
    </html>`
   

    let allColors = pageHtml.match(/#(([a-f0-9]{6})|([a-f0-9]{3}))\b/gi);
    console.log(allColors);

    let resNum= pageHtml.match(/[\+]\ \(380\)[\- ]0((6[6783])|(9[356789])|(73)|(50))[\- ][0-9]{3}[\- ][0-9]{2}[\- ][0-9]{2}/g);
    console.log(resNum);

    let allScript = pageHtml.match(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi);
    console.log(allScript);  

    let newHTMl = pageHtml.replace(/<h1\b/gi, '<h2');
    newHTMl = newHTMl.replace(/<\/h1\b/gi, '</h2');
    console.log(newHTMl);


});