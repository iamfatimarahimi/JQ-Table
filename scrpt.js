const jq = $.noConflict();
jq(function () {
  let selectAll = jq(".slc-all");
  // Function to update checkboxes based on Select All button
  function updateCheckboxes() {
    let singleCheck = jq(".single-slc");
    singleCheck.prop("checked", selectAll.prop("checked"));
    if (selectAll.prop("checked")) {
      jq(".slc-all-label").text("Remove All");
    } else {
      jq(".slc-all-label").text("Select All");
    }
  }

  // Select All button functionality
  selectAll.change(function () {
    updateCheckboxes();
  });
  // single checkBoxes
  jq(document).on("change", ".single-slc", function () {
    let totalCheckboxes = jq(".single-slc").length;
    let checkCount = jq(".single-slc:checked").length;
    selectAll.prop("checked", totalCheckboxes === checkCount);
    if (checkCount === 0) jq(".slc-all-label").text("Select All");
    else if (checkCount === totalCheckboxes)
      jq(".slc-all-label").text("Remove All");
  });

// Adding a new row
  jq(".add").click(function () {
    let textInput = jq(".textAdd").val();
    let tableRow = jq(".table tr").eq(1).clone();
    tableRow.find("input:checked").prop("checked", false);
    tableRow.find(".name").text(textInput).find(".number").text(lastTableRowNumber);
    // Dynamic Numbers
    const tableRowLength = jq(".table tr").length;
    tableRow.find(".number").text(tableRowLength);
    tableRow.appendTo(".table");
  });
});
