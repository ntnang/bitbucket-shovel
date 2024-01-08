$(() => {
  chrome.storage.sync.get(["deleteSourceOption"]).then((result) => {
    $(".merge-button").on("click", () => {
      var targetElementSelector = "input[type=checkbox][name=deleteSource]";

      // Create a new observer
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach((mutation) => {
          if (
            $(targetElementSelector).length &&
            $(targetElementSelector).attr("aria-checked") ==
              result.deleteSourceOption
          ) {
            // Your code to execute when the element is found
            $(targetElementSelector).trigger("click");
            observer.disconnect(); // Disconnect the observer
            console.log("Element found!");
          }
        });
      });

      // Configure and start the observer
      var observerConfig = { childList: true, subtree: true };
      observer.observe(document.body, observerConfig);
    });
  });

  $("input[type=checkbox][name=deleteSourceOption]").on("click", (e) => {
    chrome.storage.sync.set({ deleteSourceOption: e.target.checked });
  });
});
