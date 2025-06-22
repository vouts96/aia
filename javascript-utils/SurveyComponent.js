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
    // Prefill from localStorage if available
    const prefill = localStorage.getItem("prefilledSurvey");
    if (prefill) {
    try {
        const parsed = JSON.parse(prefill);
        survey.mergeData(parsed);
        localStorage.removeItem("prefilledSurvey"); // optional: clear after use
    } catch (err) {
        console.error("Invalid prefilled survey data in localStorage", err);
    }
    }

    const [surveyData, setSurveyData] = React.useState(null); // Set to null initially
    const [isSurveyCompleted, setIsSurveyCompleted] = React.useState(false); // Track survey completion
  
    survey.onComplete.add((sender, options) => {
        const { beneficence, non_maleficence, autonomy, justice, explicability, totalScore, questionDetails, prefillData } = calculateScore(sender.data, json_q);
        setSurveyData({ beneficence, non_maleficence, autonomy, justice, explicability, totalScore, questionDetails, prefillData }); // Set both total score and question details
        setIsSurveyCompleted(true); // Mark the survey as completed
    });
    survey.onUploadFiles.add((_, options) => {
    const formData = new FormData();

    // Only support one ZIP file
    const zipFile = options.files[0];
    formData.append("file", zipFile);  // use "file" as the key

    fetch("https://aia.dslab.ece.ntua.gr:8000/analyze", {
        method: "POST",
        body: formData
    })
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem("semgrepAnalysis", JSON.stringify(data));

        options.callback([
            {
                file: zipFile,
                content: JSON.stringify(data, null, 2)  // Display result as JSON
            }
        ]);
    })
    .catch((error) => {
        console.error("Error: ", error);
        options.callback([], ['An error occurred during file upload.']);
    });
});

    // survey.onComplete.add((sender, options) => {
    //     const {
    //         beneficence,
    //         non_maleficence,
    //         autonomy,
    //         justice,
    //         explicability,
    //         totalScore,
    //         questionDetails,
    //         prefillData
    //     } = calculateScore(sender.data, json_q);

    //     const result = {
    //         beneficence,
    //         non_maleficence,
    //         autonomy,
    //         justice,
    //         explicability,
    //         totalScore,
    //         questionDetails,
    //         prefillData
    //     };

    //     // Save result to state
    //     setSurveyData(result);
    //     setIsSurveyCompleted(true);

    //     // Save to localStorage
    //     localStorage.setItem("surveyResults", JSON.stringify(result));
    //     localStorage.setItem("surveyLang", lang);

    //     // Redirect to thank you page with language
    //     if (lang === "gr") {
    //         window.location.href = "/thankyou-gr.html";
    //     } else {
    //         window.location.href = "/thankyou-en.html";
    //     }
    // });

  
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

  
      
  
    if(lang === 'gr'){
        return (
            <>
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