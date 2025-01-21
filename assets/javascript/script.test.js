import { JSDOM } from "jsdom";

const dom = new JSDOM(`
  <html>
    <body>
      <input class="add__num" value="42">
      <button class="button">Click me</button>
    </body>
  </html>
`);

global.document = dom.window.document;
