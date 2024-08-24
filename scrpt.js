const jq = $.noConflict();
jq(function () {
  let singleCheck = jq(".single-slc");
  let selectAll = jq(".slc-all");

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
    }
    let totalCheckboxes = jq(".single-slc").length;
    let checkCount = jq(".single-slc:checked").length;
    selectAll.prop("checked", totalCheckboxes === checkCount);
    if (checkCount === 0) jq(".slc-all-label").text("Select All");
  });
  // Add
  jq(".add").click(function () {
    let textInput = jq(".textAdd").val();
    let tableRow = jq(".table tr").eq(1).clone();
    tableRow.find("input:checked").prop("checked", false);
    tableRow.find(".name").text(textInput);

    // First Way
    // const lastTableRowNumber =
    //   Number(
    //     jq(".table tr")
    //       .eq(jq(".table tr").length - 1)
    //       .find(".number")
    //       .text()
    //   ) + 1;
    // tableRow.find(".number").text(lastTableRowNumber);

    // Second Way
    const tableRowLength = jq(".table tr").length;
    tableRow.find(".number").text(tableRowLength);
    tableRow.appendTo(".tbody");
  });
});
