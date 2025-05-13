const saveJSON = function(surveyData, fileName = "prefill_data.json"){
    const jsonStr = JSON.stringify(surveyData.prefillData, null, 2); // Pretty print
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(url); // Clean up
}



function handleDisableButtons(){
    document.getElementById("loaderTop").style.display = "block";
    document.getElementById("loaderBottom").style.display = "block";
    document.getElementById("savePdfButton").disabled = true;
    document.getElementById("savePdfButton").classList.add("blurred");
    document.querySelector(".closeButton").disabled = true;
    document.querySelectorAll('.jsonButton').forEach(btn => {
        btn.disabled = true;
        btn.classList.add("blurred");
    });
    document.querySelectorAll('.closeButton').forEach(btn => {
        btn.disabled = true;
        btn.classList.add("blurred");
    });
}

function handleEnableButtons(){
    document.getElementById("loaderTop").style.display = "none";
    document.getElementById("loaderBottom").style.display = "none";
    document.getElementById("savePdfButton").disabled = false;
    document.getElementById("savePdfButton").classList.remove("blurred");
    document.querySelector(".closeButton").disabled = false;
    document.querySelectorAll('.jsonButton').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("blurred");
    });
    document.querySelectorAll('.closeButton').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("blurred");
    });
}