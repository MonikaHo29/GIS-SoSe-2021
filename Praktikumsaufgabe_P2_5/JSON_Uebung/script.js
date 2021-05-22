"use strict";
async function communicate(_url) {
    let response = await fetch(_url);
    console.log("Start");
    console.log("Response", response);
    console.log("End");
}
communicate("https://hs-furtwangen.github.io/GIS-SoSe-2021/content/2-chapter/L2.5/test.txt");
//# sourceMappingURL=script.js.map