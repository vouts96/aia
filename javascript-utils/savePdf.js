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

const savePdf = function(surveyData, lang) {
    const { jsPDF } = window.jspdf;
    const surveyPdf = new jsPDF();
    const titleFontSize = 20;
    const subtitleFontSize = 15;
    const textFontSize = 12;
    const margin = 20;
    const lineHeight = 10;
    const maxYPosition = 280;
    const pageWidth = 180;

    surveyPdf.addFont("./fonts/NotoSans-Regular.ttf", "NotoSans", "normal");
    surveyPdf.addFont("./fonts/NotoSans-Bold.ttf", "NotoSans", "bold");
    surveyPdf.addFont("./fonts/NotoSans-Italic.ttf", "NotoSans", "italic");
    surveyPdf.addFont("./fonts/NotoSans-BoldItalic.ttf", "NotoSans", "bolditalic");


    const imgElement = document.getElementById('headerImage');

    // Cover Page
    surveyPdf.setFontSize(24);
    surveyPdf.setFont('NotoSans', 'bold');
    surveyPdf.setTextColor('#333');
    surveyPdf.text("Algorithmic Impact Assessment", surveyPdf.internal.pageSize.getWidth() / 2, 60, { align: 'center' });

    const img = document.getElementById('headerImage');
    if (img) {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        canvas.getContext('2d').drawImage(img, 0, 0);

        const imageWidth = 130;
        const imageHeight = 45;
        const pageWidth = surveyPdf.internal.pageSize.getWidth();
        const xCentered = (pageWidth - imageWidth) / 2;

        surveyPdf.addImage(canvas.toDataURL('image/png'), 'PNG', xCentered, 70, imageWidth, imageHeight);
    }

    surveyPdf.setFontSize(12);
    surveyPdf.setFont('NotoSans', 'normal');
    surveyPdf.text(`Generated on: ${new Date().toLocaleDateString()}`, surveyPdf.internal.pageSize.getWidth() / 2, 130, { align: 'center' });
    


    // Function to handle text wrapping and page breaks
    const addWrappedText = (
        text,
        fontSize = textFontSize,
        color = 'black',
        fontStyle = 'normal'
      ) => {
        surveyPdf.setFontSize(fontSize);
        surveyPdf.setTextColor(color);
        surveyPdf.setFont('NotoSans', fontStyle);
      
        const lines = surveyPdf.splitTextToSize(text, pageWidth);
      
        lines.forEach(line => {
          if (yPosition + lineHeight > maxYPosition) {
            surveyPdf.addPage();
            yPosition = 20;
          }
      
          let x = margin;
      
          // Match ***bold italic***, **bold**, *italic* ONLY when fully enclosed
          const parts = line.split(/(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*\s][^*]*?\*)/g).filter(Boolean);
      
          parts.forEach(part => {
            if (part.startsWith('***') && part.endsWith('***')) {
              const styledText = part.slice(3, -3);
              surveyPdf.setFont('NotoSans', 'bolditalic');
              surveyPdf.text(styledText, x, yPosition);
              x += surveyPdf.getTextWidth(styledText + ' ');
            } else if (part.startsWith('**') && part.endsWith('**')) {
              const styledText = part.slice(2, -2);
              surveyPdf.setFont('NotoSans', 'bold');
              surveyPdf.text(styledText, x, yPosition);
              x += surveyPdf.getTextWidth(styledText + ' ');
            } else if (part.startsWith('*') && part.endsWith('*')) {
              const styledText = part.slice(1, -1);
              surveyPdf.setFont('NotoSans', 'italic');
              surveyPdf.text(styledText, x, yPosition);
              x += surveyPdf.getTextWidth(styledText + ' ');
            } else {
              surveyPdf.setFont('NotoSans', fontStyle);
              surveyPdf.text(part, x, yPosition);
              x += surveyPdf.getTextWidth(part + ' ');
            }
          });
      
          yPosition += lineHeight;
        });
      
        surveyPdf.setFont('NotoSans', 'normal'); // reset
      };
      
    // Function to calculate percentage of total metric
    const calculatePercentage = (score, min, max) => {
        return ((score - min) / (max - min)) * 100;
    }

    // Initializing Bookmarks
    surveyPdf.outline = surveyPdf.internal.outline || surveyPdf.outline;
    const rootBookmark = surveyPdf.outline.add(
        null,
        lang === "gr" ? "Αποτελέσματα Ερωτηματολογίου" : "Survey Results",
        { pageNumber: 1 }
      );
      
    
    let yPosition = 20;
    surveyPdf.addPage()
    // Explanation Page
    let explanationTitle;
    let explanationText;

    if (lang === "gr") {
    explanationTitle = "Επεξήγηση Αξιολόγησης";
    explanationText =
        "Η αξιοπιστία ενός συστήματος ΤΝ έχει οριστεί με διάφορους τρόπους από διαφορετικούς ερευνητές. Για παράδειγμα, το CapAI ορίζει ένα αξιόπιστο σύστημα ως αυτό που είναι νόμιμο, ηθικό και τεχνικά ανθεκτικό. Εν τω μεταξύ, το National Institute of Standards and Technology περιγράφει την αξιόπιστη ΤΝ ως έγκυρη, αξιόπιστη, ασφαλή, ανθεκτική, υπόλογη, διαφανή, επεξηγήσιμη, φιλική προς την ιδιωτικότητα και δίκαιη.\n\n" +
        "Σε αυτήν την αξιολόγηση εφαρμόζουμε τις πέντε αρχές που πρότειναν οι Floridi και Cowls στο άρθρο “A Unified Framework of Five Principles for AI in Society”:\n\n" +
        "• **Beneficence**: Προώθηση της ευημερίας, της αξιοπρέπειας και της βιωσιμότητας. Η ΤΝ πρέπει να ωφελεί την ανθρωπότητα και το περιβάλλον.\n\n" +
        "• **Non-maleficence**: Αποφυγή ζημιάς στην ιδιωτικότητα, την ασφάλεια ή κατάχρησης. Η ΤΝ πρέπει να ελαχιστοποιεί τους κινδύνους και να αποτρέπει την κατάχρηση.\n\n" +
        "• **Autonomy**: Διασφάλιση ότι οι άνθρωποι διατηρούν τον έλεγχο και την τελική απόφαση έναντι των συστημάτων ΤΝ.\n\n" +
        "• **Justice**: Προώθηση της ισότητας και αποφυγή διακρίσεων. Η ΤΝ πρέπει να υποστηρίζει τη διαφορετικότητα και τη δίκαιη κατανομή των ωφελειών.\n\n" +
        "• **Explicability**: Διασφάλιση ότι τα συστήματα ΤΝ είναι διαφανή, επεξηγήσιμα και υπόλογα.\n\n" +
        "Κάθε ερώτηση πολλαπλής επιλογής βαθμολογείται με πέντε βάρη (από -5 έως 5), ένα για κάθε αρχή, με βάση το πόσο ευθυγραμμίζεται η απάντηση με την υπεύθυνη ανάπτυξη ΤΝ.\n\n" +
        "Στις ερωτήσεις μίας επιλογής, το χαμηλότερο βάρος αντιπροσωπεύει την πιο ευθυγραμμισμένη απάντηση. Στις πολλαπλής επιλογής, τα βάρη προστίθενται — θετικά (περισσότερος κίνδυνος) ή αρνητικά (περισσότερες δικλείδες ασφαλείας). Ουδέτερες απαντήσεις έχουν βάρος 0.\n\n" +
        "Εξαίρεση αποτελεί ο ηθικός πίνακας κινδύνου στο στάδιο \"Ανάπτυξη Μοντέλου\", όπου η **Non-maleficence** βαθμολογείται ως γινόμενο παραγόντων κινδύνου (Σπουδαιότητα, Επείγον, Δυσκολία, Ανιχνευσιμότητα, Πιθανότητα), κανονικοποιημένο με συντελεστή 0.5.\n\n" +
        "Τα τελικά αποτελέσματα περιλαμβάνουν απόλυτες τιμές και κανονικοποιημένα ποσοστά ανά αρχή, ώστε να απεικονίζεται με σαφήνεια η συμμόρφωση με τις αρχές υπεύθυνης ανάπτυξης ΤΝ.";
    } else {
    explanationTitle = "Assessment Explanation";
    explanationText =
        "The reliability of an AI system has been defined in various ways by different researchers. For example, CapAI defines a trustworthy system as one that is legal, ethical, and technically robust. Meanwhile, the National Institute of Standards and Technology describes trustworthy AI as valid, reliable, secure, resilient, accountable, transparent, explainable, privacy-enhancing, and fair.\n\n" +
        "In this evaluation, we apply the five principles proposed by Floridi and Cowls in “A Unified Framework of Five Principles for AI in Society”:\n\n" +
        "• **Beneficence**: Promoting well-being, dignity, and sustainability. AI should benefit humanity and the environment.\n\n" +
        "• **Non-maleficence**: Avoiding harm to privacy, safety, or misuse. AI must minimize risks and prevent misuse.\n\n" +
        "• **Autonomy**: Ensuring humans retain control and decision-making power over AI systems.\n\n" +
        "• **Justice**: Promoting fairness, equity, and avoiding discrimination. AI should support diversity and just benefit distribution.\n\n" +
        "• **Explicability**: Ensuring AI systems are transparent, interpretable, and accountable.\n\n" +
        "Each multiple-choice question is scored using 5 weights (ranging from -5 to 5), one for each metric, depending on how compliant the answer is with responsible AI development practices.\n\n" +
        "For single-choice questions, the lowest weight represents the most aligned answer. In multi-select questions, weights add up — either positively (more risk) or negatively (more safeguards). Neutral responses receive a weight of 0.\n\n" +
        "An exception applies to the ethical risk matrix used in the \"Model Development Stage\", where the **Non-maleficence** metric receives a product of several risk factors (Importance, Urgency, Difficulty, Detectability, Probability), normalized by 0.5.\n\n" +
        "Final results include both absolute values and normalized percentages per metric to clearly show alignment with ideal AI development standards.";
    }

    surveyPdf.outline.add(
        rootBookmark,
        explanationTitle,
        { pageNumber: surveyPdf.internal.getCurrentPageInfo().pageNumber }
      );
      
      addWrappedText(explanationTitle, titleFontSize, '#0D3B3E', 'bold');
      yPosition += lineHeight;
      
      addWrappedText(explanationText, 12);
      

      
    // --------------------------------

    yPosition = 20;
    surveyPdf.addPage()

    let currentPageTitle = null;
    let currentPanelTitle = null;
    let currentPageBookmark = null;

    // Questions loop starts here ---
    surveyData.questionDetails.forEach((question) => {
        // New page
        if (question.page !== currentPageTitle) {
            currentPageTitle = question.page;
            currentPanelTitle = null; // reset panel when page changes
            yPosition += lineHeight;
            

            // Add page heading
            addWrappedText(currentPageTitle, titleFontSize, '#0D3B3E', 'bold');
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
            addWrappedText(currentPanelTitle, subtitleFontSize, '#1C5C5E', 'bold');
            yPosition += lineHeight;

            // Add sub-bookmark under current page
            surveyPdf.outline.add(currentPageBookmark, currentPanelTitle, {
                pageNumber: surveyPdf.internal.getCurrentPageInfo().pageNumber,
            });
        }

        
        // Question name format
        let formattedQuestionName;

        if (lang === 'gr') {
        const match = question.name.match(/\d+/);
        const number = match ? match[0] : '';
        formattedQuestionName = `Ερώτηση ${number}`;
        } else {
        formattedQuestionName = question.name.replace(/([a-zA-Z]+)(\d+)/, (_, word, num) =>
            `${word.charAt(0).toUpperCase() + word.slice(1)} ${num}`
        );
        }

        addWrappedText(`${formattedQuestionName}: ${question.title}`, textFontSize, 'black');

        
        if (Array.isArray(question.answer)) {
            if(lang === 'gr'){
                addWrappedText(`Απάντηση:`, textFontSize, 'black', 'bold');
            }
            else if(lang === 'en'){
                addWrappedText(`Answer:`, textFontSize, 'black', 'bold');
            }
            question.answer.forEach((answer) => {
                addWrappedText(`${answer}`, textFontSize, 'black');
            });
        } else {
            if(lang === 'gr'){
                addWrappedText(`Απάντηση:`, textFontSize, 'black', 'bold');
            }
            else if(lang === 'en'){
                addWrappedText(`Answer:`, textFontSize, 'black', 'bold');
            }
            addWrappedText(`${question.answer}`, textFontSize, 'black');
        }
        surveyPdf.autoTable({
            head: [["Beneficence", "Non-maleficence", "Autonomy", "Justice", "Explicability"]],
            body: [[`${question.beneficence}`, `${question.non_maleficence}`, `${question.autonomy}`, `${question.justice}`, `${question.explicability}`]],
            margin: { top: 20, left: 20, right: 20 },
            styles: { font: 'NotoSans', fontSize: 12 },
            headStyles: { font: 'NotoSans', fillColor: [13, 59, 62], textColor: 255 },
            alternateRowStyles: { fillColor: [245, 250, 250] },
            startY: yPosition
        });
        
        yPosition = surveyPdf.lastAutoTable.finalY + lineHeight;

        surveyPdf.setDrawColor(180);
        surveyPdf.setLineWidth(0.3);
        surveyPdf.line(margin, yPosition, margin + pageWidth, yPosition);
        yPosition += lineHeight;
    });
    // Questions Loop Ends Here ---

    yPosition += 2 * lineHeight;

    // 🟨 Retrieve Semgrep result from localStorage
    const semgrepRaw = localStorage.getItem("semgrepAnalysis");
    const semgrepResult = semgrepRaw ? JSON.parse(semgrepRaw) : null;

    // Add Semgrep Section
    if (semgrepResult?.results?.length > 0) {
        if (lang === 'gr') {
            addWrappedText("Ανάλυση Κώδικα (Semgrep)", titleFontSize, '#0D3B3E', 'bold');
            surveyPdf.outline.add(rootBookmark, "Ανάλυση Κώδικα (Semgrep)", {
                pageNumber: surveyPdf.internal.getCurrentPageInfo().pageNumber
            });
        } else {
            addWrappedText("Code Analysis (Semgrep)", titleFontSize, '#0D3B3E', 'bold');
            surveyPdf.outline.add(rootBookmark, "Code Analysis (Semgrep)", {
                pageNumber: surveyPdf.internal.getCurrentPageInfo().pageNumber
            });
        }

        yPosition += lineHeight;

        semgrepResult.results.forEach((issue, idx) => {
            const lines = [
                `#${idx + 1} - ${issue.check_id}`,
                `File: ${issue.path}`,
                `Severity: ${issue.extra.severity}`,
                `Message: ${issue.extra.message}`
            ];

            lines.forEach(line => {
                addWrappedText(line, textFontSize, '#000');
            });

            yPosition += lineHeight;
        });

        localStorage.removeItem("semgrepAnalysis")
    }

    if(lang === 'gr'){
        addWrappedText("Συμπεριληπτικά Αποτελέσματα", titleFontSize, '#0D3B3E', 'bold');
        surveyPdf.outline.add(rootBookmark, "Συμπεριληπτικά Αποτελέσματα", { pageNumber: surveyPdf.internal.getCurrentPageInfo().pageNumber });
    }
    else if(lang === 'en'){
        addWrappedText("Conclusional Results", titleFontSize, '#0D3B3E', 'bold');
        surveyPdf.outline.add(rootBookmark, "Conclusional Results", { pageNumber: surveyPdf.internal.getCurrentPageInfo().pageNumber });
    }
    


    // Grouped Results
    const groupedScores = {};

    surveyData.questionDetails.forEach((question) => {
        const stage = question.page || "Unknown Stage";
        const subsection = question.panel || "Uncategorized";

        const score =
            (question.beneficence || 0) +
            (question.non_maleficence || 0) +
            (question.autonomy || 0) +
            (question.justice || 0) +
            (question.explicability || 0);

        if (!groupedScores[stage]) {
            groupedScores[stage] = {};
        }

        if (!groupedScores[stage][subsection]) {
            groupedScores[stage][subsection] = {
                score: 0,
                questionCount: 0
            };
        }

        groupedScores[stage][subsection].score += score;
        groupedScores[stage][subsection].questionCount += 1;
    });

    Object.entries(groupedScores).forEach(([stage, subsections]) => {
        yPosition += lineHeight;
    
        // Stage Heading
        addWrappedText(`${stage}`, subtitleFontSize, '#1C5C5E', 'bold');
    
        const tableBody = Object.entries(subsections).map(([subsection, data]) => [
            subsection,
            data.questionCount,
            data.score
        ]);
    
        surveyPdf.autoTable({
            head: [["Subsection", "Questions", "Total Score"]],
            body: tableBody,
            startY: yPosition,
            styles: { font: 'NotoSans', fontSize: 12 },
            headStyles: {
                font: 'NotoSans',
                fillColor: [13, 59, 62],
                textColor: 255,
                fontStyle: 'bold'
            },
            alternateRowStyles: { fillColor: [245, 250, 250] },
            margin: { left: 20, right: 20 },
        });
    
        yPosition = surveyPdf.lastAutoTable.finalY + lineHeight;
    });
    

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
      

      yPosition += lineHeight;
      if(lang === 'gr') addWrappedText(`Περιληπτικά Αποτελέσματα`, subtitleFontSize, '#1C5C5E', 'bold');
      else if(lang === 'en') addWrappedText(`Summarized Results`, subtitleFontSize, '#1C5C5E', 'bold');
      

      // Render the table
      surveyPdf.autoTable({
        head: [["Category", "Score", "Percentage"]],
        body: totalTableBody,
        startY: yPosition,
        styles: { font: 'NotoSans', fontSize: 12 },
        headStyles: {
            font: 'NotoSans',
            fillColor: [13, 59, 62], 
          textColor: 255,
          fontStyle: 'bold'
        },
        alternateRowStyles: { fillColor: [245, 250, 250] },
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
        onComplete: async () => {
            const chartImage = document.getElementById("scorePieChart").toDataURL("image/png");

            const chartHeight = 120;
            const chartWidth = 120;
            const chartX = 40;
            const pageHeight = surveyPdf.internal.pageSize.height;

            if (yPosition + chartHeight > pageHeight - 20) {
            surveyPdf.addPage();
            yPosition = 20;
            }

            // Extract the user answers and scores
            const userAnswers = surveyData.questionDetails.map(q => ({
                question: q.title,
                answer: q.answer,
                page: q.page,
                panel: q.panel
            }));
            

            const scoreSummary = {
                beneficence: surveyData.beneficence,
                non_maleficence: surveyData.non_maleficence,
                autonomy: surveyData.autonomy,
                justice: surveyData.justice,
                explicability: surveyData.explicability
            };

            const payload = {
                answers: userAnswers,
                scoreSummary: scoreSummary
              };
              
              // Double stringify here
              const stringPayload = JSON.stringify(payload);

            // Send request to your LLM API
            let llmAnalysis = "Loading analysis failed.";
            if(lang === 'en'){
                try {
                    handleDisableButtons();

                    const response = await fetch("https://gpu.dslab.ece.ntua.gr:5001/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ input: stringPayload }) 
                    });
    
                    const data = await response.json();
                    llmAnalysis = data.response || "No analysis returned.";
                } catch (err) {
                    console.error("LLM request failed:", err);
                }
                finally {
                    // Hide the loader after fetch finishes
                    handleEnableButtons();
                }
            }
            else if(lang === 'gr'){
                try {
                    handleDisableButtons();

                    
                    const response = await fetch("https://gpu.dslab.ece.ntua.gr:5002/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ input: stringPayload }) 
                    });
    
                    const data = await response.json();
                    llmAnalysis = data.response || "No analysis returned.";
                } catch (err) {
                    console.error("LLM request failed:", err);
                }
                finally {
                    // Hide the loader after fetch finishes
                    handleEnableButtons();
                  }
            }
            

            // Add LLM section to the PDF
            yPosition += lineHeight;
            if(lang === 'gr'){
                addWrappedText("Ηθική Ανάλυση μέσω LLM", titleFontSize, '#0D3B3E', 'bold');
                surveyPdf.outline.add(rootBookmark, "Ηθική Ανάλυση μέσω LLM", { pageNumber: surveyPdf.internal.getCurrentPageInfo().pageNumber });
            }
            else if(lang === 'en'){
                addWrappedText("LLM Ethical Analysis", titleFontSize, '#0D3B3E', 'bold');
                surveyPdf.outline.add(rootBookmark, "LLM Ethical Analysis", { pageNumber: surveyPdf.internal.getCurrentPageInfo().pageNumber });
            }
            

            const llmLines = llmAnalysis.split("\n");
            llmLines.forEach(line => {
                addWrappedText(line.trim(), textFontSize, 'black');
            });

            // Step 3: Add chart to PDF
            yPosition += lineHeight;
            if (yPosition + chartHeight + 40 > pageHeight) {
                surveyPdf.addPage();
                yPosition = 20;
            }
            surveyPdf.addImage(chartImage, 'PNG', chartX, yPosition, chartWidth, chartHeight);
            yPosition += chartHeight + 10;

            // Optional: Save or continue PDF generation
            surveyPdf.save("survey_results.pdf");
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