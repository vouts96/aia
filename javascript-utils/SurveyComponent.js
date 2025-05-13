function SurveyComponent() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang") || "en"; // default to English if no lang is provided

    console.log(lang)
    let json_q = null;
    if(lang === 'en'){
        json_q = json_questionnaire_en
    }
    else if(lang === 'gr'){
        json_q = json_questionnaire_gr
    }
    const survey = new Survey.Model(json_q);
    survey.locale = lang
    const [surveyData, setSurveyData] = React.useState(null); // Set to null initially
    const [isSurveyCompleted, setIsSurveyCompleted] = React.useState(false); // Track survey completion
  
    survey.onComplete.add((sender, options) => {
        const { beneficence, non_maleficence, autonomy, justice, explicability, totalScore, questionDetails, prefillData } = calculateScore(sender.data, json_q);
        setSurveyData({ beneficence, non_maleficence, autonomy, justice, explicability, totalScore, questionDetails, prefillData }); // Set both total score and question details
        setIsSurveyCompleted(true); // Mark the survey as completed
    });
  
    const handleSavePdf = () => {
        if (surveyData) {
            savePdf(surveyData, lang);  // Pass the whole surveyData to savePdf
        }
    };

    const handleCloseModal = () => {
        setIsSurveyCompleted(false); // Close the modal
    };

    const handleSaveJSON = () => {
        if (surveyData) {
            saveJSON(surveyData)  // Pass the whole surveyData to saveJSON
        }
    }

    // This function just opens the file picker
    const triggerUpload = () => {
        document.getElementById('uploadJSON').click();
    };
    
    // This function reads the file
    const handleUploadJSON = (event) => {
        const file = event.target.files[0];
        if (!file) return;
    
        const reader = new FileReader();
        reader.onload = (e) => {
        try {
            const uploadedData = JSON.parse(e.target.result);
            console.log("Uploaded prefill data:", uploadedData);
            survey.mergeData(uploadedData);  // <- Pre-fill the survey
        } catch (error) {
            console.error("Failed to parse JSON:", error);
            alert("Το αρχείο δεν είναι έγκυρο JSON.");
        }
        };
        reader.readAsText(file);
        handleCloseJSONModal();
    };

    const handleCloseJSONModal = () => {
        document.getElementById('uploadJSONModal').style.display = "none"
    }
  
      
  
    if(lang === 'gr'){
        return (
            <>
                <div id="uploadJSONModal">
                    <div className="modal-content">
                        <p>Θα θέλατε να προσυμπληρώσετε τη φόρμα;</p>
                        <button onClick={triggerUpload} className="jsonButton" style={{ marginRight: "10px" }}>
                            Ανέβασμα JSON αρχείου
                        </button>
                        <button onClick={handleCloseJSONModal} className="closeButton">Κλείσιμο</button>

                        {/* Hidden file input */}
                        <input
                        type="file"
                        id="uploadJSON"
                        accept=".json"
                        style={{ display: "none" }}
                        onChange={handleUploadJSON}
                        />
                    </div>
                </div>

              <SurveyReact.Survey model={survey} />
              
              
              {isSurveyCompleted && (
                <div id="savePdfModal">
                    <div className="modal-content">
                        <h3>Ευχαριστούμε που ολοκληρώσατε την έρευνα!</h3>
                        <p>Θα θέλατε να αποθηκεύσετε τα αποτελέσματά σας ως PDF;</p>
                        <button onClick={handleSavePdf} id="savePdfButton">Αποθήκευση ως PDF</button>
                        <p>Θα θέλατε να αποθηκεύσετε τις απαντήσεις σας σε μορφή JSON για μελλοντική χρήση;</p>
                        <button onClick={handleSaveJSON} className="jsonButton">Αποθήκευση απαντήσεων σε μορφή JSON</button>
                        <br/><br/>
                        <button onClick={handleCloseModal} className="closeButton">Κλείσιμο</button> 
                    </div>
                </div>
              )}
            </>
          );
    }
    else if(lang === 'en'){
        return (
        <>
            <div id="uploadJSONModal">
                    <div className="modal-content">
                        <p>Would you like to prefill the survey?</p>
                        <button onClick={triggerUpload} className="jsonButton" style={{ marginRight: "10px" }}>
                            Upload JSON file
                        </button>
                        <button onClick={handleCloseJSONModal} className="closeButton">Close</button>

                        {/* Hidden file input */}
                        <input
                        type="file"
                        id="uploadJSON"
                        accept=".json"
                        style={{ display: "none" }}
                        onChange={handleUploadJSON}
                        />
                    </div>
                </div>

            <SurveyReact.Survey model={survey} />
            
            {isSurveyCompleted && (
            <div id="savePdfModal">
                <div className="modal-content">
                    <h3>Thank you for completing the survey!</h3>
                    <p>Would you like to save your results as a PDF?</p>
                    <button onClick={handleSavePdf} id="savePdfButton">Save as PDF</button>
                    <p>Would you like to save your answers as a JSON for future use?</p>
                    <button onClick={handleSaveJSON} className="jsonButton">Save answer values as JSON</button>
                    <br/><br/>
                    <button onClick={handleCloseModal} className="closeButton">Close</button>
                </div>
            </div>
            )}
        </>
        );
    }
}