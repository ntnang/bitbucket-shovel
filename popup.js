$(() => {
  chrome.storage.sync.get(["deleteSourceOption"]).then((result) => {
    $("input[type=checkbox][name=deleteSourceOption]").prop(
      "checked",
      result.deleteSourceOption
    );
  });

  $("input[type=checkbox][name=deleteSourceOption]").on("click", (e) => {
    chrome.storage.sync.set({ deleteSourceOption: e.target.checked });
  });
});
