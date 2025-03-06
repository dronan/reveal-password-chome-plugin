// background.js
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: togglePasswordVisibility,
  });
});

function togglePasswordVisibility() {
  document
    .querySelectorAll(
      'input[type="password"], input[data-original-type="password"]'
    )
    .forEach((input) => {
      if (input.type === "password") {
        input.setAttribute("data-original-type", "password");
        input.type = "text";
      } else {
        input.type = "password";
        input.removeAttribute("data-original-type");
      }
    });
}
