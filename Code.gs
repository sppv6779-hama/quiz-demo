function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('理科クイズゲーム')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
