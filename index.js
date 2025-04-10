//code for example questionnare with 2 weights and all question types 
/*const calculateScore = function(surveyData, surveyJson) {
    let score1 = 0;
    let score2 = 0;
    const questionDetails = [];  // To store question details for the PDF report

    // Iterate through the survey data responses
    Object.keys(surveyData).forEach(question => {
        const response = surveyData[question];
        const questionElement = surveyJson.pages.flatMap(page => page.elements).find(element => element.name === question);

        if (!questionElement) {
            console.warn(`Question ${question} not found in survey JSON`);
            return;
        }

        let questionScore1 = 0;
        let questionScore2 = 0;
        let questionAnswer = '';

        // Handle different question types using a switch-case
        switch (questionElement.type) {
            case "radiogroup":
            case "checkbox":
                if (Array.isArray(response)) {
                    questionAnswer = response.join(', ');
                    response.forEach(answer => {
                        const choice = questionElement.choices.find(choice => choice.value === answer);
                        if (choice) {
                            questionScore1 += choice.weight1;
                            questionScore2 += choice.weight2;
                        }
                    });
                } else {
                    questionAnswer = response;
                    const choice = questionElement.choices.find(choice => choice.value === response);
                    if (choice) {
                        questionScore1 += choice.weight1;
                        questionScore2 += choice.weight2;
                    }
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;

                break;

            case "rating":
                const ratingAnswer = response;
                questionScore1 = ratingAnswer;
                questionScore2 = ratingAnswer;  // If needed, adjust scoring
                questionAnswer = ratingAnswer;

                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;

                break;

            case "dropdown":
                const dropdownChoice = questionElement.choices.find(choice => choice.value === response);
                if (dropdownChoice) {
                    questionScore1 = dropdownChoice.weight1;
                    questionScore2 = dropdownChoice.weight2;
                    questionAnswer = response;
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;

                break;

            case "tagbox":
                if (Array.isArray(response)) {
                    questionAnswer = response.join(', ');
                    response.forEach(answer => {
                        const tagboxChoice = questionElement.choices.find(choice => choice.value === answer);
                        if (tagboxChoice) {
                            questionScore1 += tagboxChoice.weight1;
                            questionScore2 += tagboxChoice.weight2;
                        }
                    });
                } else {
                    const tagboxChoice = questionElement.choices.find(choice => choice.value === response);
                    if (tagboxChoice) {
                        questionScore1 = tagboxChoice.weight1;
                        questionScore2 = tagboxChoice.weight2;
                        questionAnswer = response;
                    }
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            case "boolean":
                if (response === true) {
                    questionScore1 += questionElement.weight1true;
                    questionScore2 += questionElement.weight2true; // You can adjust these values as per your needs
                    questionAnswer = "Yes";
                } else if (response === false) {
                    questionScore1 += questionElement.weight1false
                    questionScore2 += questionElement.weight2false
                    questionAnswer = "No";
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            case "imagepicker":
                const imageChoice = questionElement.choices.find(choice => choice.value === response);
                if (imageChoice) {
                    questionScore1 = imageChoice.weight1;
                    questionScore2 = imageChoice.weight2;
                    questionAnswer = response;
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            case "ranking":
                if (Array.isArray(response)) {
                    questionAnswer = response.join(', ');
                    response.forEach((item, index) => {
                        const rankingChoice = questionElement.choices.find(choice => choice.value === item);
                        if (rankingChoice) {
                            questionScore1 += rankingChoice.weight1 * (index + 1);
                            questionScore2 += rankingChoice.weight2 * (index + 1);
                        }
                    });
                }
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            case "text":
            case "comment":
                questionAnswer = response;
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: questionAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            case "multipletext":
                let multipleTextScore1 = 0;
                let multipleTextScore2 = 0;
                let multipleTextAnswer = '';

                questionElement.items.forEach(item => {
                    const itemAnswer = response[item.name];
                    multipleTextAnswer += `${item.title}: ${itemAnswer || 'No answer'}\n`;

                    if (itemAnswer) {
                        multipleTextScore1 += 1;
                        multipleTextScore2 += 1; // Adjust as per your rules
                    }
                });
                questionScore1 = multipleTextScore1;
                questionScore2 = multipleTextScore2;
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: multipleTextAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            case "matrix":
                let matrixScore1 = 0;
                let matrixScore2 = 0;
                let matrixAnswer = '';
                Object.keys(response).forEach(row => {
                    const column = response[row];
                    matrixAnswer += `${row}: ${column || 'No answer'}\n`;
                    const columnIndex = questionElement.columns.indexOf(column);
                    if (columnIndex !== -1) {
                        matrixScore1 += columnIndex + 1;  // Customize scoring
                        matrixScore2 += columnIndex + 1;
                    }
                });
                questionScore1 = matrixScore1;
                questionScore2 = matrixScore2;
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: matrixAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            case "matrixdropdown":
                let matrixDropdownScore1 = 0;
                let matrixDropdownScore2 = 0;
                let matrixDropdownAnswer = ''
                Object.keys(response).forEach(row => {
                    const columnResponses = response[row];
                    matrixDropdownAnswer += `${row}:\n`;
                    Object.keys(columnResponses).forEach(column => {
                        const columnValue = columnResponses[column];
                        matrixDropdownAnswer += `  ${column}: ${columnValue || 'No answer'}\n`;
                        const choice = questionElement.choices.find(choice => choice.value === columnValue);
                        if (choice) {
                            matrixDropdownScore1 += choice.weight1;
                            matrixDropdownScore2 += choice.weight2;
                        }
                    });
                });
                questionScore1 = matrixDropdownScore1;
                questionScore2 = matrixDropdownScore2;
                questionDetails.push({
                    name: question,
                    title: questionElement.title,
                    type: questionElement.type,
                    answer: matrixDropdownAnswer,
                    score1: questionScore1,
                    score2: questionScore2
                });
        
                score1 += questionScore1;
                score2 += questionScore2;
                break;

            default:
                console.warn(`Unknown question type: ${questionElement.type}`);
                break;
        }
    });

    return { score1, score2, totalScore: score1 + score2, questionDetails };
}; */
/* const savePdf = function(surveyData) {
    const { jsPDF } = window.jspdf;
    const surveyPdf = new jsPDF();
    surveyPdf.text("Survey Results", 20, 20);

    let yPosition = 30;
    const margin = 20;
    const lineHeight = 10;
    const maxYPosition = 250;

    surveyData.questionDetails.forEach((question) => {
        if (yPosition + lineHeight > maxYPosition) {
            surveyPdf.addPage();
            yPosition = 20;
        }

        surveyPdf.text(`${question.name}: ${question.title}`, margin, yPosition);
        yPosition += lineHeight;
        surveyPdf.text(`Type: ${question.type}`, margin, yPosition);
        yPosition += lineHeight;
        surveyPdf.text(`Score1: ${question.score1}`, margin, yPosition);
        yPosition += lineHeight;
        surveyPdf.text(`Score2: ${question.score2}`, margin, yPosition);
        yPosition += lineHeight;

        if (Array.isArray(question.answer)) {
            question.answer.forEach((answer) => {
                if (yPosition + lineHeight > maxYPosition) {
                    surveyPdf.addPage();
                    yPosition = 20;
                }
                surveyPdf.text(`Answer: ${answer}`, margin, yPosition);
                yPosition += lineHeight;
            });
        } else {
            if (yPosition + lineHeight > maxYPosition) {
                surveyPdf.addPage();
                yPosition = 20;
            }
            surveyPdf.text(`Answer: ${question.answer}`, margin, yPosition);
            yPosition += lineHeight;
        }

        yPosition += 2 * lineHeight;
    });

    yPosition += 4 * lineHeight;
    if (surveyData.score1 !== undefined) {
        if (yPosition + lineHeight > maxYPosition) {
            surveyPdf.addPage();
            yPosition = 20;
        }
        surveyPdf.text(`Total Score 1: ${surveyData.score1}`, margin, yPosition);
    } else {
        surveyPdf.text("Total Score 1: 0", margin, yPosition);
    }


    yPosition += 2 * lineHeight;
    if (surveyData.score2 !== undefined) {
        if (yPosition + lineHeight > maxYPosition) {
            surveyPdf.addPage();
            yPosition = 20;
        }
        surveyPdf.text(`Total Score 2: ${surveyData.score2}`, margin, yPosition);
    } else {
        surveyPdf.text("Total Score 2: 0", margin, yPosition);
    }

    yPosition += 2 * lineHeight;
    if (surveyData.totalScore !== undefined) {
        if (yPosition + lineHeight > maxYPosition) {
            surveyPdf.addPage();
            yPosition = 20;
        }
        surveyPdf.text(`Total Score: ${surveyData.totalScore}`, margin, yPosition);
    } else {
        surveyPdf.text("Total Score: 0", margin, yPosition);
    }

    surveyPdf.save("survey_results.pdf");
}; */

//maxmin for demo 
// const maxBeneficence = 22
// const minBeneficence = -26
// const maxNonMaleficence = 134.5
// const minNonMaleficence = -31
// const maxAutonomy = 10
// const minAutonomy = -10 
// const maxJustice = 7
// const minJustice = -13
// const maxExplicability = 12
// const minExplicability = -12 


//maxmin for actual questionnaire
const maxBeneficence = 101
const minBeneficence = -106
const maxNonMaleficence = 459
const minNonMaleficence = -199
const maxAutonomy = 94
const minAutonomy = -61 
const maxJustice = 110
const minJustice = -81
const maxExplicability = 44
const minExplicability = -26 


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
                        }
                    });
                } else {
                    const choice = questionElement.choices.find(choice => choice.value === response);
                    questionAnswer = choice ? choice.text : response;  // Store text instead of value
                    
                    if (choice) {
                        questionBeneficence += choice.beneficence;
                        questionNonMaleficence += choice.non_maleficence;
                        questionAutonomy += choice.autonomy;
                        questionJustice += choice.justice;
                        questionExplicability += choice.explicability;
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
                } else if (response === false) {
                    questionBeneficence += questionElement.beneficenceFalse
                    questionNonMaleficence += questionElement.non_maleficenceFalse
                    questionAutonomy += questionElement.autonomyFalse
                    questionJustice += questionElement.justiceFalse
                    questionExplicability += questionElement.explicabilityFalse
                    questionAnswer = "False/No";
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
                    }
                });
                questionBeneficence = multipleTextBeneficence;
                questionNonMaleficence = multipleTextNonMaleficence;
                questionAutonomy = multipleTextAutonomy;
                questionJustice = multipleTextJustice;
                questionExplicability = multipleTextExplicability;
                questionDetails.push({
                    name: question,
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
                Object.keys(response).forEach(row => {
                    const columnResponses = response[row];
                    // Find row text
                    const rowObj = questionElement.rows.find(r => r.value === row);
                    const rowText = rowObj ? rowObj.text : row;

                    matrixDropdownAnswer += `${rowText}:\n`;

                    let rowWeight = 1;
                    Object.keys(columnResponses).forEach(columnName => {

                        const columnValue = columnResponses[columnName];

                        // Find column text
                        const columnObj = questionElement.columns.find(col => col.name === columnName);
                        const columnText = columnObj ? columnObj.title : columnName;

                        matrixDropdownAnswer += `  ${columnText}: ${columnValue || 'No answer'}\n`;

                        const choice = questionElement.choices.find(choice => choice.value === columnValue); 
                                    
                                    
                        if (choice) {
                            rowWeight *= choice.weight;
                        }
                    });
                    matrixWeight += rowWeight;
                });
                questionBeneficence = 0;
                questionNonMaleficence = matrixWeight * 0.5;
                questionAutonomy = 0;
                questionJustice = 0;
                questionExplicability = 0;
                questionDetails.push({
                    name: question,
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
    });



    return { beneficence, non_maleficence, autonomy, justice, explicability, totalScore: beneficence + non_maleficence + autonomy + justice + explicability, questionDetails };
};


const savePdf = function(surveyData) {
    const { jsPDF } = window.jspdf;
    const surveyPdf = new jsPDF();
    const titleFontSize = 20;
    const subtitleFontSize = 15;
    const textFontSize = 12;
    const margin = 20;
    const lineHeight = 10;
    const maxYPosition = 250;
    const pageWidth = 180;

    const imgElement = document.getElementById('headerImage');

    // Cover Page
    surveyPdf.setFontSize(24);
    surveyPdf.setFont('helvetica', 'bold');
    surveyPdf.setTextColor('#333');
    surveyPdf.text("Algorithmic Impact Assessment", surveyPdf.internal.pageSize.getWidth() / 2, 60, { align: 'center' });

    const img = document.getElementById('headerImage');
    if (img) {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        canvas.getContext('2d').drawImage(img, 0, 0);
        surveyPdf.addImage(canvas.toDataURL('image/png'), 'PNG', 50, 70, 110, 45);
    }

    surveyPdf.setFontSize(12);
    surveyPdf.setFont('helvetica', 'normal');
    surveyPdf.text(`Generated on: ${new Date().toLocaleDateString()}`, surveyPdf.internal.pageSize.getWidth() / 2, 130, { align: 'center' });
    


    // Function to handle text wrapping and page breaks
    const addWrappedText = (
        text,
        fontSize = textFontSize,
        color = 'black',
        fontStyle = 'normal' // 👈 New parameter!
      ) => {
        surveyPdf.setFontSize(fontSize);
        surveyPdf.setTextColor(color);
        surveyPdf.setFont(undefined, fontStyle); // 👈 Set font style (e.g., bold)
      
        const lines = surveyPdf.splitTextToSize(text, pageWidth);
        lines.forEach(line => {
          if (yPosition + lineHeight > maxYPosition) {
            surveyPdf.addPage();
            yPosition = 20;
          }
          surveyPdf.text(line, margin, yPosition);
          yPosition += lineHeight;
        });
      
        // Reset to normal just in case
        surveyPdf.setFont(undefined, 'normal');
    };
      

    // Function to calculate percentage of total metric
    const calculatePercentage = (score, min, max) => {
        return ((score - min) / (max - min)) * 100;
    }

    // Initializing Bookmarks
    surveyPdf.outline = surveyPdf.internal.outline || surveyPdf.outline;
    const rootBookmark = surveyPdf.outline.add(null, "Survey Results", { pageNumber: 1 });
    
    let yPosition = 20;
    surveyPdf.addPage()
    // Explanation Page
    surveyPdf.outline.add(rootBookmark, "Assessment Explanation", { pageNumber: surveyPdf.internal.getCurrentPageInfo().pageNumber });

    addWrappedText("Assessment Explanation", titleFontSize, '#0A74DA', 'bold')
    yPosition += lineHeight;

    // Explanation text in English
    addWrappedText("The reliability of an AI system has been defined in various ways by different researchers. For example, CapAI defines a trustworthy system as one that is legal, ethical, and technically robust. Meanwhile, the National Institute of Standards and Technology describes trustworthy AI as valid, reliable, secure, resilient, accountable, transparent, explainable, privacy-enhancing, and fair.", 12);

    addWrappedText("In this evaluation, we apply the five principles proposed by Floridi and Cowls in “A Unified Framework of Five Principles for AI in Society”:", 12);

    addWrappedText("• Beneficence:", 12, 'black', 'bold');
    addWrappedText("Promoting well-being, dignity, and sustainability. AI should benefit humanity and the environment.", 12);

    addWrappedText("• Non-maleficence:", 12, 'black', 'bold');
    addWrappedText("Avoiding harm to privacy, safety, or misuse. AI must minimize risks and prevent misuse.", 12);

    addWrappedText("• Autonomy:", 12, 'black', 'bold');
    addWrappedText("Ensuring humans retain control and decision-making power over AI systems.", 12);

    addWrappedText("• Justice:", 12, 'black', 'bold');
    addWrappedText("Promoting fairness, equity, and avoiding discrimination. AI should support diversity and just benefit distribution.", 12);

    addWrappedText("• Explicability:", 12, 'black', 'bold');
    addWrappedText("Ensuring AI systems are transparent, interpretable, and accountable.", 12);

    addWrappedText("Each multiple-choice question is scored using 5 weights (ranging from -5 to 5), one for each metric, depending on how compliant the answer is with responsible AI development practices.", 12);

    addWrappedText("For single-choice questions, the lowest weight represents the most aligned answer. In multi-select questions, weights add up — either positively (more risk) or negatively (more safeguards). Neutral responses receive a weight of 0.", 12);

    addWrappedText("An exception applies to the ethical risk matrix used in the \"Model Development Stage\", where the Non-maleficence metric receives a product of several risk factors (Importance, Urgency, Difficulty, Detectability, Probability), normalized by 0.5.", 12);

    addWrappedText("Final results include both absolute values and normalized percentages per metric to clearly show alignment with ideal AI development standards.", 12);
    // --------------------------------

    yPosition = 20;
    surveyPdf.addPage()

    let currentPageTitle = null;
    let currentPanelTitle = null;
    let currentPageBookmark = null;

    surveyData.questionDetails.forEach((question) => {
        // New page
        if (question.page !== currentPageTitle) {
            currentPageTitle = question.page;
            currentPanelTitle = null; // reset panel when page changes
            yPosition += lineHeight;
            

            // Add page heading
            addWrappedText(currentPageTitle, titleFontSize, '#0A74DA', 'bold');
            yPosition += lineHeight;

            // Add page-level bookmark
            currentPageBookmark = surveyPdf.outline.add(rootBookmark, currentPageTitle, {
                pageNumber: surveyPdf.internal.getCurrentPageInfo().pageNumber,
            });
        }

        // New panel (if any)
        if (question.panel && question.panel !== currentPanelTitle) {
            currentPanelTitle = question.panel;
            yPosition += lineHeight / 2;

            // Add sub-heading
            addWrappedText(currentPanelTitle, subtitleFontSize, '#0A74DA', 'bold');
            yPosition += lineHeight;

            // Add sub-bookmark under current page
            surveyPdf.outline.add(currentPageBookmark, currentPanelTitle, {
                pageNumber: surveyPdf.internal.getCurrentPageInfo().pageNumber,
            });
        }

        

        let formattedQuestionName = question.name.replace(/([a-zA-Z]+)(\d+)/, (_, word, num) =>
            `${word.charAt(0).toUpperCase() + word.slice(1)} ${num}`
        );   
        addWrappedText(`${formattedQuestionName}: ${question.title}`, subtitleFontSize, 'black');
        
        if (Array.isArray(question.answer)) {
            addWrappedText(`Answer:`, textFontSize, 'black', 'bold');
            question.answer.forEach((answer) => {
                addWrappedText(`${answer}`, textFontSize, 'black');
            });
        } else {
            addWrappedText(`Answer:`, textFontSize, 'black', 'bold');
            addWrappedText(`${question.answer}`, textFontSize, 'black');
        }
        surveyPdf.autoTable({
            head: [["Beneficence", "Non-maleficence", "Autonomy", "Justice", "Explicability"]],
            body: [[`${question.beneficence}`, `${question.non_maleficence}`, `${question.autonomy}`, `${question.justice}`, `${question.explicability}`]],
            margin: { top: 20, left: 20, right: 20 },
            styles: { fontSize: 12 },
            headStyles: { fillColor: [135, 206, 235], textColor: 255 },
            alternateRowStyles: { fillColor: [245, 245, 245] },
            startY: yPosition
        });
        
        yPosition = surveyPdf.lastAutoTable.finalY + lineHeight;

        surveyPdf.setDrawColor(180);
        surveyPdf.setLineWidth(0.3);
        surveyPdf.line(margin, yPosition, margin + pageWidth, yPosition);
        yPosition += lineHeight;
    });

    yPosition += 2 * lineHeight;

    addWrappedText("Conclusional Results", titleFontSize, '#0A74DA', 'bold');
    surveyPdf.outline.add(rootBookmark, "Conclusional Results", { pageNumber: surveyPdf.internal.getCurrentPageInfo().pageNumber });

    // // Total scores for the five new categories
    const totalTableBody = [
        [
          "Beneficence",
          surveyData.beneficence ?? 0,
          surveyData.beneficence !== undefined
            ? `${calculatePercentage(surveyData.beneficence, minBeneficence, maxBeneficence).toFixed(2)}%`
            : "0%"
        ],
        [
          "Non-maleficence",
          surveyData.non_maleficence ?? 0,
          surveyData.non_maleficence !== undefined
            ? `${calculatePercentage(surveyData.non_maleficence, minNonMaleficence, maxNonMaleficence).toFixed(2)}%`
            : "0%"
        ],
        [
          "Autonomy",
          surveyData.autonomy ?? 0,
          surveyData.autonomy !== undefined
            ? `${calculatePercentage(surveyData.autonomy, minAutonomy, maxAutonomy).toFixed(2)}%`
            : "0%"
        ],
        [
          "Justice",
          surveyData.justice ?? 0,
          surveyData.justice !== undefined
            ? `${calculatePercentage(surveyData.justice, minJustice, maxJustice).toFixed(2)}%`
            : "0%"
        ],
        [
          "Explicability",
          surveyData.explicability ?? 0,
          surveyData.explicability !== undefined
            ? `${calculatePercentage(surveyData.explicability, minExplicability, maxExplicability).toFixed(2)}%`
            : "0%"
        ],
        [
            "Total Score",
            surveyData.beneficence + surveyData.non_maleficence + surveyData.autonomy + surveyData.justice + surveyData.explicability ?? 0,
          ],
      ];
      
      // Render the table
      surveyPdf.autoTable({
        head: [["Category", "Score", "Percentage"]],
        body: totalTableBody,
        startY: yPosition,
        styles: { fontSize: 12 },
        headStyles: {
          fillColor: [173, 216, 230], // light blue
          textColor: 20,
          fontStyle: 'bold'
        },
        alternateRowStyles: { fillColor: [245, 245, 245] },
        margin: { left: 20, right: 20 },
      });
      
      yPosition = surveyPdf.lastAutoTable.finalY + lineHeight;

      // Pie chart data
    const chartLabels = ["Beneficence", "Non-maleficence", "Autonomy", "Justice", "Explicability"];
    const chartData = [
        calculatePercentage(surveyData.beneficence ?? 0, minBeneficence, maxBeneficence),
        calculatePercentage(surveyData.non_maleficence ?? 0, minNonMaleficence, maxNonMaleficence),
        calculatePercentage(surveyData.autonomy ?? 0, minAutonomy, maxAutonomy),
        calculatePercentage(surveyData.justice ?? 0, minJustice, maxJustice),
        calculatePercentage(surveyData.explicability ?? 0, minExplicability, maxExplicability)
    ].map(val => parseFloat(val.toFixed(2))); // optional rounding
      

    // Draw the chart on the canvas
    const ctx = document.getElementById("scorePieChart").getContext("2d");

    if (window.activeChart) {
        window.activeChart.destroy(); // clean up previous chart
    }

    // Step 2: Render chart and export to PDF
    window.activeChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: chartLabels,
        datasets: [{
        data: chartData,
        backgroundColor: [
            '#5DADE2', // Beneficence - blue
            '#EC7063', // Non-maleficence - red
            '#AF7AC5', // Autonomy - purple
            '#F5B041', // Justice - orange
            '#58D68D'  // Explicability - green
        ]
        }]
    },
    options: {
        responsive: false,
        animation: {
        duration: 0,
        onComplete: () => {
            const chartImage = document.getElementById("scorePieChart").toDataURL("image/png");

            const chartHeight = 120;
            const chartWidth = 120;
            const chartX = 40;
            const pageHeight = surveyPdf.internal.pageSize.height;

            if (yPosition + chartHeight > pageHeight - 20) {
            surveyPdf.addPage();
            yPosition = 20;
            }

            // Step 3: Add chart to PDF
            surveyPdf.addImage(chartImage, 'PNG', chartX, yPosition, chartWidth, chartHeight);
            yPosition += chartHeight + 10;

            // Optional: Save or continue PDF generation
            surveyPdf.save("survey_results_with_chart.pdf");
        }
        },
        plugins: {
        title: {
            display: true,
            text: 'Ethics Score Distribution',
            font: {
            size: 16,
            weight: 'bold'
            },
            padding: {
            top: 10,
            bottom: 20
            }
        },
        datalabels: {
            formatter: value => `${value.toFixed(1)}%`,
            color: '#fff',
            font: { weight: 'bold' }
        },
        legend: {
            position: 'bottom'
        }
        }
    },
    plugins: [ChartDataLabels]
    });
    

    //surveyPdf.save("survey_results.pdf");
};


function SurveyComponent() {
    const survey = new Survey.Model(json_questionnaire);
    const [surveyData, setSurveyData] = React.useState(null); // Set to null initially
    const [isSurveyCompleted, setIsSurveyCompleted] = React.useState(false); // Track survey completion
  
    survey.onComplete.add((sender, options) => {
        const { beneficence, non_maleficence, autonomy, justice, explicability, totalScore, questionDetails } = calculateScore(sender.data, json_questionnaire);
        setSurveyData({ beneficence, non_maleficence, autonomy, justice, explicability, totalScore, questionDetails }); // Set both total score and question details
        setIsSurveyCompleted(true); // Mark the survey as completed
    });
  
    const handleSavePdf = () => {
        if (surveyData) {
            savePdf(surveyData);  // Pass the whole surveyData to savePdf
        }
    };

    const handleCloseModal = () => {
        setIsSurveyCompleted(false); // Close the modal
    };
  
    return (
      <>
        <SurveyReact.Survey model={survey} />
        
        {isSurveyCompleted && (
          <div id="savePdfModal">
           <div className="modal-content">
            <h3>Thank you for completing the survey!</h3>
            <p>Would you like to save your results as a PDF?</p>
            <button onClick={handleSavePdf} id="savePdfButton">Save as PDF</button>
            <button onClick={handleCloseModal} className="closeButton">Close</button>
           </div>
          </div>
        )}
      </>
    );
}

// Rendering the component
const root = ReactDOM.createRoot(document.getElementById("surveyElement"));
root.render(<SurveyComponent />);
