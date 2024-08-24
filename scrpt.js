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
    let tableRow = jq(".table tr").eq(1).clone();
    tableRow.appendTo(".tbody");
  });
});
