const calculateScore = function(surveyData, surveyJson) {
    let beneficence = 0;
    let non_maleficence = 0;
    let autonomy = 0;
    let justice = 0;
    let explicability = 0;
    const questionDetails = [];  // To store question details for the PDF report




    // Helper function to search for a question recursively inside panels
    const findQuestion = (elements, questionName, parentPanelTitle = null) => {
        if (!elements) return null;
        for (const element of elements) {
            if (element.name === questionName) {
                return {
                    element,
                    panelTitle: parentPanelTitle
                };
            }
            if (element.type === "panel" && element.elements) {
                const found = findQuestion(element.elements, questionName, element.title || element.name);
                if (found) return found;
            }
        }
        return null;
    };
    
    // JSON Objsect for prefilling form 
    let prefillData = {};

    // Iterate through the survey data responses
    Object.keys(surveyData).forEach(question => {
        const response = surveyData[question];
        let questionElement = null;
        let questionPageTitle = null;
        let questionPanelTitle = null;

        for (const page of surveyJson.pages) {
            const result = findQuestion(page.elements, question);
            if (result) {
                questionElement = result.element;
                questionPanelTitle = result.panelTitle;
                questionPageTitle = page.title;
                break;
            }
        }



        if (!questionElement) {
            console.warn(`Question ${question} not found in survey JSON`);
            return;
        }

        let questionBeneficence = 0;
        let questionNonMaleficence = 0;
        let questionAutonomy = 0;
        let questionJustice = 0;
        let questionExplicability = 0;
        let questionAnswer = '';
        let answerValue = null;
        let answerValueJSON = {};
        let answerValueArray = [];

        // Handle different question types using a switch-case
        switch (questionElement.type) {
            case "radiogroup":
            case "checkbox":        
                if (questionElement.choices && Array.isArray(response)) {
                    questionAnswer = response.map(answer => {
                        const choice = questionElement.choices.find(choice => choice.value === answer);
                        return choice ? choice.text : answer;  // Store text instead of value
                    }).join(', ');

                    response.forEach(answer => {
                        const choice = questionElement.choices.find(choice => choice.value === answer);
                        if (choice) {
                            questionBeneficence += choice.beneficence;
                            questionNonMaleficence += choice.non_maleficence;
                            questionAutonomy += choice.autonomy;
                            questionJustice += choice.justice;
                            questionExplicability += choice.explicability;
                            answerValueArray.push(choice.value)
                        }
                    });
                    answerValue = answerValueArray
                } else {
                    const choice = questionElement.choices.find(choice => choice.value === response);
                    questionAnswer = choice ? choice.text : response;  // Store text instead of value
                    
                    if (choice) {
                        questionBeneficence += choice.beneficence;
                        questionNonMaleficence += choice.non_maleficence;
                        questionAutonomy += choice.autonomy;
                        questionJustice += choice.justice;
                        questionExplicability += choice.explicability;
                        answerValue = choice.value
                    }
                }
                questionDetails.push({
                    name: question,
                    answerValue: answerValue,
                    title: questionElement.title,
                    type: questionElement.type,
                    page: questionPageTitle,
                    panel: questionPanelTitle,
                    answer: questionAnswer,
                    beneficence: questionBeneficence,
                    non_maleficence: questionNonMaleficence,
                    autonomy: questionAutonomy,
                    justice: questionJustice,
                    explicability: questionExplicability
                });
        
                beneficence += questionBeneficence;
                non_maleficence += questionNonMaleficence;
                autonomy += questionAutonomy;
                justice += questionJustice;
                explicability += questionExplicability;

                break;

            case "rating":
                const ratingAnswer = response;
                questionBeneficence = ratingAnswer;
                questionNonMaleficence = ratingAnswer; 
                questionAutonomy = ratingAnswer;
                questionJustice = ratingAnswer;
                questionExplicability = ratingAnswer;
                questionAnswer = ratingAnswer;

                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    page: questionPageTitle,
                    panel: questionPanelTitle,
                    answer: questionAnswer,
                    beneficence: questionBeneficence,
                    non_maleficence: questionNonMaleficence,
                    autonomy: questionAutonomy,
                    justice: questionJustice,
                    explicability: questionExplicability
                });
        
                beneficence += questionBeneficence;
                non_maleficence += questionNonMaleficence;
                autonomy += questionAutonomy;
                justice += questionJustice;
                explicability += questionExplicability;

                break;

            case "dropdown":
                const dropdownChoice = questionElement.choices.find(choice => choice.value === response);
                if (dropdownChoice) {
                    questionBeneficence = dropdownChoice.beneficence;
                    questionNonMaleficence = dropdownChoice.non_maleficence;
                    questionAutonomy = dropdownChoice.autonomy;
                    questionJustice = dropdownChoice.justice;
                    questionExplicability = dropdownChoice.explicability;
                    questionAnswer = response;
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    page: questionPageTitle,
                    panel: questionPanelTitle,
                    answer: questionAnswer,
                    beneficence: questionBeneficence,
                    non_maleficence: questionNonMaleficence,
                    autonomy: questionAutonomy,
                    justice: questionJustice,
                    explicability: questionExplicability
                });
        
                beneficence += questionBeneficence;
                non_maleficence += questionNonMaleficence;
                autonomy += questionAutonomy;
                justice += questionJustice;
                explicability += questionExplicability;

                break;

            case "tagbox":
                if (Array.isArray(response)) {
                    questionAnswer = response.join(', ');
                    response.forEach(answer => {
                        const tagboxChoice = questionElement.choices.find(choice => choice.value === answer);
                        if (tagboxChoice) {
                            questionBeneficence += tagboxChoice.beneficence;
                            questionNonMaleficence += tagboxChoice.non_maleficence;
                            questionAutonomy += tagboxChoice.autonomy;
                            questionJustice += tagboxChoice.justice;
                            questionExplicability += tagboxChoice.explicability;
                        }
                    });
                } else {
                    const tagboxChoice = questionElement.choices.find(choice => choice.value === response);
                    if (tagboxChoice) {
                        questionBeneficence = tagboxChoice.beneficence;
                        questionNonMaleficence = tagboxChoice.non_maleficence;
                        questionAutonomy = tagboxChoice.autonomy;
                        questionJustice = tagboxChoice.justice;
                        questionExplicability = tagboxChoice.explicability;
                        questionAnswer = response;
                    }
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    page: questionPageTitle,
                    panel: questionPanelTitle,
                    answer: questionAnswer,
                    beneficence: questionBeneficence,
                    non_maleficence: questionNonMaleficence,
                    autonomy: questionAutonomy,
                    justice: questionJustice,
                    explicability: questionExplicability
                });
        
                beneficence += questionBeneficence;
                non_maleficence += questionNonMaleficence;
                autonomy += questionAutonomy;
                justice += questionJustice;
                explicability += questionExplicability;
                break;

            case "boolean":
                if (response === true) {
                    questionBeneficence += questionElement.beneficenceTrue;
                    questionNonMaleficence += questionElement.non_maleficenceTrue; 
                    questionAutonomy += questionElement.autonomyTrue;
                    questionJustice += questionElement.justiceTrue;
                    questionExplicability += questionElement.explicabilityTrue;
                    questionAnswer = "True/Yes";
                    answerValue = response;
                } else if (response === false) {
                    questionBeneficence += questionElement.beneficenceFalse
                    questionNonMaleficence += questionElement.non_maleficenceFalse
                    questionAutonomy += questionElement.autonomyFalse
                    questionJustice += questionElement.justiceFalse
                    questionExplicability += questionElement.explicabilityFalse
                    questionAnswer = "False/No";
                    answerValue = response;
                }
                questionDetails.push({
                    name: question,
                    answerValue: answerValue,
                    title: questionElement.title,
                    type: questionElement.type,
                    page: questionPageTitle,
                    panel: questionPanelTitle,
                    answer: questionAnswer,
                    beneficence: questionBeneficence,
                    non_maleficence: questionNonMaleficence,
                    autonomy: questionAutonomy,
                    justice: questionJustice,
                    explicability: questionExplicability
                });
        
                beneficence += questionBeneficence;
                non_maleficence += questionNonMaleficence;
                autonomy += questionAutonomy;
                justice += questionJustice;
                explicability += questionExplicability;
                break;

            case "imagepicker":
                const imageChoice = questionElement.choices.find(choice => choice.value === response);
                if (imageChoice) {
                    questionBeneficence = imageChoice.beneficence;
                    questionNonMaleficence = imageChoice.non_maleficence;
                    questionAutonomy = imageChoice.autonomy;
                    questionJustice = imageChoice.justice;
                    questionExplicability = imageChoice.explicability;
                    questionAnswer = response;
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    page: questionPageTitle,
                    panel: questionPanelTitle,
                    answer: questionAnswer,
                    beneficence: questionBeneficence,
                    non_maleficence: questionNonMaleficence,
                    autonomy: questionAutonomy,
                    justice: questionJustice,
                    explicability: questionExplicability
                });
        
                beneficence += questionBeneficence;
                non_maleficence += questionNonMaleficence;
                autonomy += questionAutonomy;
                justice += questionJustice;
                explicability += questionExplicability;
                break;

            case "ranking":
                if (Array.isArray(response)) {
                    questionAnswer = response.join(', ');
                    response.forEach((item, index) => {
                        const rankingChoice = questionElement.choices.find(choice => choice.value === item);
                        if (rankingChoice) {
                            questionBeneficence += rankingChoice.beneficence * (index + 1);
                            questionNonMaleficence += rankingChoice.non_maleficence * (index + 1);
                            questionAutonomy += rankingChoice.autonomy * (index + 1);
                            questionJustice += rankingChoice.justice * (index + 1);
                            questionExplicability += rankingChoice.explicability * (index + 1);
                        }
                    });
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    page: questionPageTitle,
                    panel: questionPanelTitle,
                    answer: questionAnswer,
                    beneficence: questionBeneficence,
                    non_maleficence: questionNonMaleficence,
                    autonomy: questionAutonomy,
                    justice: questionJustice,
                    explicability: questionExplicability
                });
        
                beneficence += questionBeneficence;
                non_maleficence += questionNonMaleficence;
                autonomy += questionAutonomy;
                justice += questionJustice;
                explicability += questionExplicability;
                break;

            case "text":
            case "comment":
                questionAnswer = response;
                answerValue = response;
                questionDetails.push({
                    name: question,
                    answerValue: answerValue,
                    title: questionElement.title,
                    type: questionElement.type,
                    page: questionPageTitle,
                    panel: questionPanelTitle,
                    answer: questionAnswer,
                    beneficence: questionBeneficence,
                    non_maleficence: questionNonMaleficence,
                    autonomy: questionAutonomy,
                    justice: questionJustice,
                    explicability: questionExplicability
                });
        
                beneficence += questionBeneficence;
                non_maleficence += questionNonMaleficence;
                autonomy += questionAutonomy;
                justice += questionJustice;
                explicability += questionExplicability;
                break;

            case "multipletext":
                let multipleTextBeneficence = 0;
                let multipleTextNonMaleficence = 0;
                let multipleTextAutonomy = 0;
                let multipleTextJustice = 0;
                let multipleTextExplicability = 0;
                let multipleTextAnswer = '';

                questionElement.items.forEach(item => {
                    const itemAnswer = response[item.name];
                    multipleTextAnswer += `${item.title}: ${itemAnswer || 'No answer'}\n`;

                    if (itemAnswer) {
                        multipleTextBeneficence += 0;
                        multipleTextNonMaleficence += 0;
                        multipleTextAutonomy += 0;
                        multipleTextJustice += 0;
                        multipleTextExplicability += 0;
                        answerValueJSON[item.name] = itemAnswer; 
                    }
                });
                questionBeneficence = multipleTextBeneficence;
                questionNonMaleficence = multipleTextNonMaleficence;
                questionAutonomy = multipleTextAutonomy;
                questionJustice = multipleTextJustice;
                questionExplicability = multipleTextExplicability;
                answerValue = answerValueJSON;
                questionDetails.push({
                    name: question,
                    answerValue: answerValueJSON,
                    title: questionElement.title,
                    type: questionElement.type,
                    page: questionPageTitle,
                    panel: questionPanelTitle,
                    answer: multipleTextAnswer,
                    beneficence: questionBeneficence,
                    non_maleficence: questionNonMaleficence,
                    autonomy: questionAutonomy,
                    justice: questionJustice,
                    explicability: questionExplicability
                });
        
                beneficence += questionBeneficence;
                non_maleficence += questionNonMaleficence;
                autonomy += questionAutonomy;
                justice += questionJustice;
                explicability += questionExplicability;
                break;

            case "matrix":
                let matrixBeneficence = 0;
                let matrixNonMaleficence = 0;
                let matrixAutonomy = 0;
                let matrixJustice = 0;
                let matrixExplicability = 0;
                let matrixAnswer = '';
                Object.keys(response).forEach(rowValue => {
                    const columnValue = response[rowValue];

                    // Find row text
                    const rowObj = questionElement.rows.find(r => r.value === rowValue);
                    const rowText = rowObj ? rowObj.text : rowValue;
            
                    // Find column text
                    const columnObj = questionElement.columns.find(col => col.name === columnValue);
                    const columnText = columnObj ? columnObj.title : columnValue;
            
                    matrixAnswer += `${rowText}: ${columnText || 'No answer'}\n`;
            
                    // Calculate scores
                    const columnIndex = questionElement.columns.findIndex(col => col.name === columnValue);
                    if (columnIndex !== -1) {
                        matrixBeneficence += columnIndex + 1;  
                        matrixNonMaleficence += columnIndex + 1;
                        matrixAutonomy += columnIndex + 1;
                        matrixJustice += columnIndex + 1;
                        matrixExplicability += columnIndex + 1;
                    }
                });
                questionBeneficence = matrixBeneficence;
                questionNonMaleficence = matrixNonMaleficence;
                questionAutonomy = matrixAutonomy;
                questionJustice = matrixJustice;
                questionExplicability = matrixExplicability;
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    page: questionPageTitle,
                    panel: questionPanelTitle,
                    answer: matrixAnswer,
                    beneficence: questionBeneficence,
                    non_maleficence: questionNonMaleficence,
                    autonomy: questionAutonomy,
                    justice: questionJustice,
                    explicability: questionExplicability
                });
        
                beneficence += questionBeneficence;
                non_maleficence += questionNonMaleficence;
                autonomy += questionAutonomy;
                justice += questionJustice;
                explicability += questionExplicability;
                break;

            case "matrixdropdown":
                let matrixDropdownBeneficence = 0;
                let matrixDropdownNonMaleficence = 0;
                let matrixDropdownAutonomy = 0;
                let matrixDropdownJustice = 0;
                let matrixDropdownExplicability = 0;
                let matrixDropdownAnswer = ''
                let matrixWeight = 0;

                let matrixPrefill = {};

                Object.keys(response).forEach(row => {
                    const columnResponses = response[row];
                    // Find row text
                    const rowObj = questionElement.rows.find(r => r.value === row);
                    const rowText = rowObj ? rowObj.text : row;

                    matrixDropdownAnswer += `${rowText}:\n`;

                    let rowWeight = 1;
                    matrixPrefill[row] = {};
                    Object.keys(columnResponses).forEach(columnName => {

                        const columnValue = columnResponses[columnName];

                        // Find column text
                        const columnObj = questionElement.columns.find(col => col.name === columnName);
                        const columnText = columnObj ? columnObj.title : columnName;

                        matrixDropdownAnswer += `  ${columnText}: ${columnValue || 'No answer'}\n`;

                        matrixPrefill[row][columnName] = columnValue;

                        const choice = questionElement.choices.find(choice => choice.value === columnValue); 
                                    
                                    
                        if (choice) {
                            rowWeight *= choice.weight;
                        }
                    });
                    matrixWeight += rowWeight;
                });

                answerValue = matrixPrefill;

                questionBeneficence = 0;
                questionNonMaleficence = matrixWeight * 0.5;
                questionAutonomy = 0;
                questionJustice = 0;
                questionExplicability = 0;
                questionDetails.push({
                    name: question,
                    answerValue: answerValue,
                    title: questionElement.title,
                    type: questionElement.type,
                    page: questionPageTitle,
                    panel: questionPanelTitle,
                    answer: matrixDropdownAnswer,
                    beneficence: questionBeneficence,
                    non_maleficence: questionNonMaleficence,
                    autonomy: questionAutonomy,
                    justice: questionJustice,
                    explicability: questionExplicability
                });
        
                beneficence += questionBeneficence;
                non_maleficence += questionNonMaleficence;
                autonomy += questionAutonomy;
                justice += questionJustice;
                explicability += questionExplicability;
                break;

            default:
                console.warn(`Unknown question type: ${questionElement.type}`);
                break;
        }

        // Log question data to the console
        console.log(`Question Name: ${question}`);
        console.log(`Answer Value: ${answerValue}`)
        console.log(`Question: ${questionElement.title}`);
        console.log(`Answer Type: ${questionElement.type}`);
        console.log(`Page: ${questionPageTitle}`);
        console.log(`Panel: ${questionPanelTitle}`);
        console.log(`Answer: ${questionAnswer}`);
        console.log(`Beneficence: ${questionBeneficence}`);
        console.log(`Non-maleficence: ${questionNonMaleficence}`);
        console.log(`Autonomy: ${questionAutonomy}`);
        console.log(`Justice: ${questionJustice}`);
        console.log(`Explicability: ${questionExplicability}`);
        console.log("-------------------------------");

        prefillData[question] = answerValue;
    });

    //console.log("Prefill JSON:", JSON.stringify(prefillData));

    return { beneficence, non_maleficence, autonomy, justice, explicability, totalScore: beneficence + non_maleficence + autonomy + justice + explicability, questionDetails, prefillData };
};