const fs = require("fs-extra");

const bundleJsUrls = [
  "http://localhost:4001/main.bundle.js",
  "http://localhost:5001/main.bundle.js",
];

function loadMicrofrontendBundle() {
  let scriptTags = "";
  bundleJsUrls.forEach((url) => {
    scriptTags += `<script src="${url}"></script>\n`;
  });
  return scriptTags;
}

const htmlContent =
  "<html>\n" +
  "<head>\n" +
  loadMicrofrontendBundle() +
  "</head>\n" +
  "<body>\n" +
  '<div id="root"></div>\n' +
  "</body>\n" +
  "</html>\n";

fs.writeFile("./index.html", htmlContent, function (err) {
  if (err) {
    console.log("failed to create index.html file");
  }

  console.log(`Created index.html file.`);
});
