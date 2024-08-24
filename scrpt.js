const jq = $.noConflict();
jq(function () {
  let singleCheck = jq(".single-slc");
  let selectAll = jq(".slc-all");
  let checkboxIndex = jq(".single-slc").index();
  // select all

  selectAll.change(function () {
    if (jq(this).prop("checked")) {
      singleCheck.prop("checked", true);
      jq(".slc-all-label").text("Remove All");
    } else if (!jq(this).prop("checked")) {
      singleCheck.prop("checked", false);
      jq(".slc-all-label").text("Select All");
    }
  });
  singleCheck.change(function () {
    if (!jq(this).prop("checked")) {
      selectAll.prop("checked", false);
    } else if (jq(this).prop("checked")) {
      selectAll.prop("checked", true);
    }
  });
  // Add
  jq(".add").click(function () {
    let hidden = jq(".hidden");
    let clonedHidden = hidden.clone().addClass("show");
    let tdElement = clonedHidden.find(".demo");
    let tdCheckBox = clonedHidden.find("input");
    let result = tdElement.text(jq(".textAdd").val());
    tdCheckBox.appendTo(".tbody");
    result.appendTo(".tbody");
  });
});
