import json

def modify_question(question):
    if question["type"] == "radiogroup" or question["type"] == "checkbox":
        new_choices = []
        for choice in question["choices"]:
            if isinstance(choice, dict):
                value = choice["value"]
            else:
                value = choice
            new_choice = {
                "text": choice["text"],
                "value": value,
                "beneficence": 0 ,
                "non_maleficence": 0 ,
                "autonomy": 0 ,
                "justice": 0 ,
                "explicability": 0 
            }
            new_choices.append(new_choice)
        question["choices"] = new_choices
    elif question["type"] == "boolean":
        question.update({
            "beneficenceTrue": 0,
            "non_maleficenceTrue": 0,
            "autonomyTrue": 0,
            "justiceTrue": 0,
            "explicabilityTrue": 0,
            "beneficenceFalse": 0,
            "non_maleficenceFalse": 0,
            "autonomyFalse": 0,
            "justiceFalse": 0,
            "explicabilityFalse": 0
        })
    elif question["type"] == "matrixdropdown":
        question["choices"] = [
            {"value": 1, "weight": 1},
            {"value": 2, "weight": 2},
            {"value": 3, "weight": 3},
            {"value": 4, "weight": 4},
            {"value": 5, "weight": 5}
        ]
    return question

def modify_survey(json_data):
    for page in json_data["pages"]:
        for element in page["elements"]:
            if "elements" in element:  # For panels
                for sub_element in element["elements"]:
                    modify_question(sub_element)
            else:
                modify_question(element)
    return json_data

# Load the JSON file
with open('json_demo.json', 'r') as file:
    survey_data = json.load(file)

# Modify the survey data
modified_survey = modify_survey(survey_data)

# Save the modified JSON to a new file
with open('modified_survey.json', 'w') as file:
    json.dump(modified_survey, file, indent=4)

print("Survey has been modified and saved to 'modified_survey.json'.")