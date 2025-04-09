import json

# Load the questionnaire JSON
with open('modified_survey.json', 'r') as file:
    questionnaire = json.load(file)

# Initialize metrics
metrics = ['beneficence', 'non_maleficence', 'explicability', 'justice', 'autonomy']
min_metrics = {metric: 0 for metric in metrics}
max_metrics = {metric: 0 for metric in metrics}

def calculate_metrics(page):
    for element in page['elements']:
        if element['type'] == 'panel':
            # Recursively process panels
            calculate_metrics(element)
        elif element['type'] == 'radiogroup':
            # For radiogroup, only one answer can be selected
            for metric in metrics:
                # Find the max and min values for the current metric in this question
                max_value = max(choice.get(metric, 0) for choice in element['choices'])
                min_value = min(choice.get(metric, 0) for choice in element['choices'])
                # Add to the total max and min metrics
                max_metrics[metric] += max_value
                min_metrics[metric] += min_value
        elif element['type'] == 'checkbox':
            # For checkbox, multiple answers can be selected
            for metric in metrics:
                # Sum all positive values for max and all negative values for min
                max_value = sum(choice.get(metric, 0) for choice in element['choices'] if choice.get(metric, 0) > 0)
                min_value = sum(choice.get(metric, 0) for choice in element['choices'] if choice.get(metric, 0) < 0)
                # Add to the total max and min metrics
                max_metrics[metric] += max_value
                min_metrics[metric] += min_value
        elif element['type'] == 'boolean':
            # For boolean, only one answer (True or False) can be selected
            for metric in metrics:
                # Compare True and False values for the current metric
                true_value = element.get(f'{metric}True', 0)
                false_value = element.get(f'{metric}False', 0)
                # Add the max and min values to the totals
                max_metrics[metric] += max(true_value, false_value)
                min_metrics[metric] += min(true_value, false_value)        
        elif element['type'] == 'matrixdropdown':
            num_rows = len(element['rows'])
            num_columns = len(element['columns'])
            num_choices = len(element['choices'])
            additional_value = (num_rows * num_columns * num_choices) / 2
            max_metrics['non_maleficence'] += additional_value
            min_metrics['non_maleficence'] += 0

# Iterate through each page and calculate metrics
for page in questionnaire['pages']:
    calculate_metrics(page)

# Print results
print("Maximum Metrics:", max_metrics)
print("Minimum Metrics:", min_metrics)