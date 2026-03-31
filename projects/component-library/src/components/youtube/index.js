import purify from "purify-css"
import * as fs from "node:fs";

let content = fs.readFileSync("shorts-ui-controls.html", "utf-8");
let css = fs.readFileSync("shorts-ui-controls.css", "utf8");
let options = {
  output: "shorts-ui-controls-purified.css"
}
purify(content, css, options)
