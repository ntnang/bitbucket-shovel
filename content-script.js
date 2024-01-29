$(() => {
  $(".merge-button").on("click", () => {
    var targetElementSelector = "input[type=checkbox][name=deleteSource]";

    // Create a new observer
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach((mutation) => {
        chrome.storage.sync.get(["deleteSourceOption"]).then((result) => {
          if (
            $(targetElementSelector).length &&
            $(targetElementSelector).is(":checked") !==
              result.deleteSourceOption
          ) {
            // Your code to execute when the element is found
            $(targetElementSelector).trigger("click");
            observer.disconnect(); // Disconnect the observer
          }
        });
      });
    });

    // Configure and start the observer
    var observerConfig = { childList: true, subtree: true };
    observer.observe(document.body, observerConfig);
  });
});
