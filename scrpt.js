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
  // Select All button
  // selectAll.change(function () {
  //   if (jq(this).prop("checked")) {
  //     singleCheck.prop("checked", true);
  //     jq(".slc-all-label").text("Remove All");
  //   } else {
  //     singleCheck.prop("checked", false);
  //     jq(".slc-all-label").text("Select All");
  //   }
  // });
  // single checkBoxes
  jq(document).on("change", ".single-slc", function () {
    let totalCheckboxes = jq(".single-slc").length;
    let checkCount = jq(".single-slc:checked").length;
    selectAll.prop("checked", totalCheckboxes === checkCount);
    if (checkCount === 0) jq(".slc-all-label").text("Select All");
    else if (checkCount === totalCheckboxes)
      jq(".slc-all-label").text("Remove All");
  });

  // Adding the new row
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
    tableRow.appendTo(".table");
    // if (selectAll.prop("checked")) {
    //   tableRow.find("input").prop("checked", true);
    // }
  });
});
