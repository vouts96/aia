const json_simple = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question1",
          "title": "What is your favorite item?",
          "choices": [
            { "value": "Item1", "weight1": 1, "weight2": 2 },
            { "value": "Item2", "weight1": 2, "weight2": 1 },
            { "value": "Item3", "weight1": 3, "weight2": 3 }
          ]
        },
        {
          "type": "rating",
          "name": "question2",
          "title": "Rate your experience (1-5):"
        },
        {
          "type": "checkbox",
          "name": "question3",
          "title": "Select the items you like:",
          "choices": [
            { "value": "Item1", "weight1": 5, "weight2": 6 },
            { "value": "Item2", "weight1": 8, "weight2": 9 },
            { "value": "Item3", "weight1": 7, "weight2": 8 }
          ]
        },
        {
          "type": "dropdown",
          "name": "question4",
          "title": "Choose an item from the list:",
          "choices": [
            { "value": "Item 1", "weight1": 1, "weight2": 2 },
            { "value": "Item 2", "weight1": 2, "weight2": 3 },
            { "value": "Item 3", "weight1": 3, "weight2": 4 }
          ]
        },
        {
          "type": "tagbox",
          "name": "question5",
          "title": "Select multiple tags:",
          "choices": [
            { "value": "Item 1", "weight1": 1, "weight2": 2 },
            { "value": "Item 2", "weight1": 2, "weight2": 3 },
            { "value": "Item 3", "weight1": 3, "weight2": 4 }
          ]
        }
      ]
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "boolean",
          "name": "question6",
          "title": "Do you agree with the statement?",
          "weight1true": 1,
          "weight2false": -1,
          "weight1false": -2,
          "weight2true": 2
        },
        {
          "type": "imagepicker",
          "name": "question8",
          "title": "Select an image:",
          "choices": [
            { "value": "Image 1", "weight1": 1, "weight2": 2, "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg" },
            { "value": "Image 2", "weight1": 2, "weight2": 3, "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg" },
            { "value": "Image 3", "weight1": 3, "weight2": 4, "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg" },
            { "value": "Image 4", "weight1": 4, "weight2": 5, "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg" }
          ]
        },
        {
          "type": "ranking",
          "name": "question9",
          "title": "Rank the items in order of preference:",
          "choices": [
            { "value": "Item 1", "weight1": 1, "weight2": 2 },
            { "value": "Item 2", "weight1": 2, "weight2": 3 },
            { "value": "Item 3", "weight1": 3, "weight2": 4 }
          ]
        },
        {
          "type": "text",
          "name": "question10",
          "title": "Please provide your comments:"
        },
        {
          "type": "comment",
          "name": "question11",
          "title": "Leave your feedback here:"
        },
        {
          "type": "multipletext",
          "name": "question12",
          "title": "Please provide multiple answers:",
          "items": [
            { "name": "text1", "title": "First text" },
            { "name": "text2", "title": "Second text" }
          ]
        },
        {
          "type": "matrix",
          "name": "question13",
          "title": "Rate the items in the matrix:",
          "columns": ["Column 1", "Column 2", "Column 3"],
          "rows": ["Row 1", "Row 2"]
        },
        {
          "type": "matrixdropdown",
          "name": "question14",
          "title": "Please select your options in the matrix:",
          "columns": [
            { "name": "Column 1" },
            { "name": "Column 2" },
            { "name": "Column 3" }
          ],
          "choices": [
            { "value": 1, "weight1": 1, "weight2": 2 },
            { "value": 2, "weight1": 2, "weight2": 3 },
            { "value": 3, "weight1": 3, "weight2": 4 },
            { "value": 4, "weight1": 4, "weight2": 5 },
            { "value": 5, "weight1": 5, "weight2": 6 }
          ],
          "rows": ["Row 1", "Row 2"]
        },
        {
          "type": "file",
          "name": "question15",
          "title": "Please upload your file:"
        }
      ]
    }
  ]
};
