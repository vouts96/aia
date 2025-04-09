const demo_json_questionnaire = {
    "title": "Algorithmic Impact Assessment : Simple Version",
    "description": "This is  a demo version meant to be used for presentation purposes with just about 10% of the questions of the original. ",
    "logoPosition": "right",
    "pages": [
        {
            "name": "page1",
            "title": "General Info ",
            "elements": [
                {
                    "type": "panel",
                    "name": "panel1",
                    "title": "Developers",
                    "elements": [
                        {
                            "type": "text",
                            "name": "question29",
                            "title": " What's the name of your organisation?"
                        },
                        {
                            "type": "comment",
                            "name": "question30",
                            "title": "Give a short description of your organisation."
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel2",
                    "title": "Questionnaire answerers ",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question31",
                            "title": "What's your relationship to the reviewed system?",
                            "choices": [
                                {
                                    "text": "I'm an independent reviewer not working in the organisation that made the system.",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "I do not work on the system's development but I am a part of the organisation that made it.",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "I worked on the development of the system and I am a part of the organisation that made it.",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ],
                            "showOtherItem": true
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel3",
                    "title": "System",
                    "elements": [
                        {
                            "type": "boolean",
                            "name": "question32",
                            "title": "Is your system a General Purpose AI model?",
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
                        }
                    ]
                }
            ]
        },
        {
            "name": "page2",
            "title": "Design Stage : Organisation",
            "elements": [
                {
                    "type": "panel",
                    "name": "panel4",
                    "title": "Strategy ",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question22",
                            "title": "Do you have a strategy to deploy AI powered solutions in your organization?",
                            "choices": [
                                {
                                    "text": "Yes. We have a well-defined AI strategy",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": -3
                                },
                                {
                                    "text": "No. We are currently in the process of developing an AI strategy",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": -1
                                },
                                {
                                    "text": "No. We have not yet started to develop an AI strategy",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel5",
                    "title": "Infastructure / Security",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question23",
                            "title": "How would you rate your organization's current IT infrastructure in terms of scalability and flexibility to accommodate the evolving computational needs of AI projects?",
                            "choices": [
                                {
                                    "text": "Fully adaptable: can instantly accommodate any AI computational needs",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": -3,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Highly scalable: designed with growth and future AI demands in mind",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": -2,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Moderately scalable: can handle current projects but need enhancements for more complex applications",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": -1,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Limited scalability: might need significant updates for large AI projects",
                                    "value": "Item 4",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Not scalable at all",
                                    "value": "Item 5",
                                    "beneficence": 0,
                                    "non_maleficence": 2,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel6",
                    "title": "Data",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question24",
                            "title": "How centralized is your organization's in-house data, facilitating easy access for AI initiatives?",
                            "choices": [
                                {
                                    "text": "Fully centralized: data is consistently managed and readily accessible organization\u2014wide",
                                    "value": "Item 1",
                                    "beneficence": -2,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Moderately centralized: majority of data is in unified databases, but some silos remain",
                                    "value": "Item 2",
                                    "beneficence": -1,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Partially fragmented: some centralized databases, but many department\u2014specific silos exist",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Highly fragmented: data is scattered across different silos",
                                    "value": "Item 4",
                                    "beneficence": 1,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel7",
                    "title": "Governance",
                    "elements": [
                        {
                            "type": "boolean",
                            "name": "question25",
                            "title": "Does your organisation have a defined set of values that should guide the development of AI systems?",
                            "beneficenceTrue": -2,
                            "non_maleficenceTrue": 0,
                            "autonomyTrue": 0,
                            "justiceTrue": 0,
                            "explicabilityTrue": 0,
                            "beneficenceFalse": 2,
                            "non_maleficenceFalse": 0,
                            "autonomyFalse": 0,
                            "justiceFalse": 0,
                            "explicabilityFalse": 0
                        },
                        {
                            "type": "boolean",
                            "name": "question26",
                            "visibleIf": "{question25} = true",
                            "title": " Have those values been communicated externally ?",
                            "beneficenceTrue": -2,
                            "non_maleficenceTrue": 0,
                            "autonomyTrue": 0,
                            "justiceTrue": 0,
                            "explicabilityTrue": 0,
                            "beneficenceFalse": 2,
                            "non_maleficenceFalse": 0,
                            "autonomyFalse": 0,
                            "justiceFalse": 0,
                            "explicabilityFalse": 0
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel8",
                    "title": "Staff",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question27",
                            "title": "How well resourced is your company with the right level of in-house talent necessary for successful AI deployment? ",
                            "choices": [
                                {
                                    "text": "Very well resourced",
                                    "value": "Item 1",
                                    "beneficence": -2,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Moderately well resourced",
                                    "value": "Item 2",
                                    "beneficence": -1,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Moderately under resourced",
                                    "value": "Item 3",
                                    "beneficence": 1,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Significantly under resourced",
                                    "value": "Item 4",
                                    "beneficence": 2,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel9",
                    "title": "Culture",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question28",
                            "title": "How urgently is your organization looking to embrace AI?",
                            "choices": [
                                {
                                    "text": "High urgency: the move to embrace AI is seen as highly important and urgent",
                                    "value": "Item 1",
                                    "beneficence": -2,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Moderate urgency: embracing AI is seen as important but the organization is not acting with urgency",
                                    "value": "Item 2",
                                    "beneficence": -1,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Limited urgency: embracing AI is seen as an inevitable driver of some change but not important or critical",
                                    "value": "Item 3",
                                    "beneficence": 1,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "No urgency: there is no discussion or momentum around embracing AI within the organization",
                                    "value": "Item 4",
                                    "beneficence": 2,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "page3",
            "title": "Design State : Use case\n",
            "elements": [
                {
                    "type": "panel",
                    "name": "panel10",
                    "title": "Objectives",
                    "elements": [
                        {
                            "type": "comment",
                            "name": "question19",
                            "title": " Write a short description of the defined and documented objectives of the AI application?\n"
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel11",
                    "title": "Automation",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question20",
                            "title": "Choose what represents the system best.",
                            "choices": [
                                {
                                    "text": "People will be responsible for troubleshooting triggered by system alerts but will not otherwise oversee system operation. For example, an AI system that generates keywords from unstructured text alerts the operator of errors, such as improper format of submission files.",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 5,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "The system will support effective hand-off to people but will be designed to automate most use. For example, an AI system that generates keywords from unstructured text that can be configured by system admins to alert the operator when keyword generation falls below a certain confidence threshold.",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 4,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "The system will require effective hand-off to people but will be designed to automate most use. For example, an AI system that generates keywords from unstructured text alerts the operator when keyword generation falls below a certain confidence threshold (regardless of system admin configuration).",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 3,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "People will evaluate system outputs and can intervene before any action is taken: the system will proceed unless the reviewer intervenes. For example, an AI system that generates keywords from unstructured text will deliver the generated keywords for operator review but will finalize the results unless the operator intervenes.",
                                    "value": "Item 4",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 2,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "People will make decisions based on output provided by the system: the system will not proceed unless a person approves. For example, an AI system that generates keywords from unstructured text but does not finalize the results without review and approval from the operator",
                                    "value": "Item 5",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 1,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel12",
                    "title": "Ethical assessments/Risks",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question21",
                            "title": " Is the project within an area of intense public scrutiny (e.g. because of privacy concerns) and/or frequent litigation?   ",
                            "choices": [
                                {
                                    "text": "Yes. The project falls within an area that creates high controversy among the general public.",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": 2,
                                    "autonomy": 0,
                                    "justice": 2,
                                    "explicability": 0
                                },
                                {
                                    "text": "Yes. The project falls within an area that creates high controversy among a specific demographic while the general public is mostly neutral about it.",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": 1,
                                    "autonomy": 0,
                                    "justice": 1,
                                    "explicability": 0
                                },
                                {
                                    "text": "Neutral. The project falls within an area that that has the potential to create controversy among the general public but hasn't so far.",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 1,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "No. This project's area is not controversial.",
                                    "value": "Item 4",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "page4",
            "title": "Development Stage : Data",
            "elements": [
                {
                    "type": "panel",
                    "name": "panel13",
                    "title": "Source and Documentation",
                    "elements": [
                        {
                            "type": "checkbox",
                            "name": "question15",
                            "title": "Which of the following best describes this system's inputs and outputs?",
                            "choices": [
                                {
                                    "text": "Structured data (e.g., databases, spreadsheets)",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": -1,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Unstructured data (e.g., text, images, audio)",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": 1,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Semi-structured data (e.g., JSON, XML)",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Real-time data streams (e.g., IoT sensors)",
                                    "value": "Item 4",
                                    "beneficence": 0,
                                    "non_maleficence": -1,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel14",
                    "title": "Privacy and Legality",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question16",
                            "title": " What is the highest security classification of the input data used by the system? ",
                            "choices": [
                                {
                                    "text": "None",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Protected A",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": 2,
                                    "autonomy": 2,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Classified-Confidential",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 3,
                                    "autonomy": 3,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Protected B-Protected C",
                                    "value": "Item 4",
                                    "beneficence": 0,
                                    "non_maleficence": 4,
                                    "autonomy": 4,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Secret-Top Secret",
                                    "value": "Item 5",
                                    "beneficence": 0,
                                    "non_maleficence": 5,
                                    "autonomy": 5,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel15",
                    "title": "Quality and Bias ",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question17",
                            "title": "Can the method of collecting data lead to bias?\n",
                            "choices": [
                                {
                                    "text": "Yes, and we have identified specific biases (e.g., sampling bias, measurement bias)",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 4,
                                    "explicability": 0
                                },
                                {
                                    "text": "Yes, but we are unsure of the specific biases",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 2,
                                    "explicability": 0
                                },
                                {
                                    "text": "No, we believe our data collection method is unbiased",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": -1,
                                    "explicability": 0
                                },
                                {
                                    "text": "We have not assessed this",
                                    "value": "Item 4",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 5,
                                    "explicability": 0
                                }
                            ]
                        },
                        {
                            "type": "comment",
                            "name": "question18",
                            "visibleIf": "{question17} anyof ['Item 2', 'Item 1']",
                            "title": "If yes, how did you combat this? "
                        }
                    ]
                }
            ]
        },
        {
            "name": "page5",
            "title": "Development Stage : Model ",
            "elements": [
                {
                    "type": "panel",
                    "name": "panel16",
                    "title": "Algorithm ",
                    "elements": [
                        {
                            "type": "comment",
                            "name": "question9",
                            "title": "Describe in general, if possible in a non-technical manner, the technology/technologies you intend to use (This could include: (1) The date and the version of the system; (2) A description of hardware on which the system is intended to run; (3) Where the system is a component of products, photographs or illustrations showing external features, marking and internal layout of these products)"
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel17",
                    "title": "Fairness",
                    "elements": [
                        {
                            "type": "checkbox",
                            "name": "question10",
                            "title": "Which of these fairness tools have you used?",
                            "choices": [
                                {
                                    "text": "Fairlearn : Open-source Python library developed by Microsoft. It provides tools for assessing and mitigating unfairness in machine learning models. Fairlearn offers both fairness metrics and algorithms for reducing different types of biases. It also includes visualization tools to help interpret fairness metrics and mitigation results.",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": -1,
                                    "explicability": 0
                                },
                                {
                                    "text": "AIF360 (AI Fairness 360) : A comprehensive toolkit from IBM designed to help you detect and mitigate bias in machine learning models. It includes a wide range of fairness metrics and bias mitigation algorithms, making it a great all-in-one solution.",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": -1,
                                    "explicability": 0
                                },
                                {
                                    "text": "Fairness Indicators : A library developed by Google to assess the fairness of machine learning models. It provides tools for evaluating fairness metrics and visualizing disparities across different demographic groups. It works seamlessly with TensorFlow Extended and TensorFlow Model Analysis.",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": -1,
                                    "explicability": 0
                                },
                                {
                                    "text": "FairComp : An open-source library for comparing different fairness interventions and metrics. It provides a standardized framework for evaluating the trade-offs between fairness and accuracy. It also enables benchmarking of models against various fairness metrics.",
                                    "value": "Item 4",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": -1,
                                    "explicability": 0
                                },
                                {
                                    "text": "Fairness Measures : Offers a collection of simple, easy-to-use tools to assess fairness issues. It\u2019s not as broad as some other libraries, but if you need a straightforward way to calculate fairness metrics like disparate impact or equal opportunity, this tool will get the job done.",
                                    "value": "Item 5",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": -1,
                                    "explicability": 0
                                },
                                {
                                    "text": "FairTest : A testing toolkit designed to help you find discrimination in predictive models. It works by automatically scanning your model\u2019s outputs for signs of unfair treatment across different groups. It can help you find where problems lie.",
                                    "value": "Item 6",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": -1,
                                    "explicability": 0
                                },
                                {
                                    "text": "FairML : Focuses on understanding how fairness issues affect your model\u2019s predictions. It helps you identify which variables might be contributing to biased outcomes. If you\u2019re looking to figure out where bias is sneaking in, FairML offers solid insights.",
                                    "value": "Item 7",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": -1,
                                    "explicability": 0
                                },
                                {
                                    "text": "Aequitas : Afairness auditing tool that helps you evaluate the impact of your machine learning models on different demographic groups. It provides reports on how fair your model\u2019s decisions are, making it easier for you to spot where bias is creeping in.",
                                    "value": "Item 8",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": -1,
                                    "explicability": 0
                                },
                                {
                                    "text": "Themis : A fairness testing library that focuses on individual fairness\u2014ensuring that similar individuals receive similar outcomes from your AI system. It\u2019s especially useful when you want to make sure your model treats people equitably at an individual level.",
                                    "value": "Item 9",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": -1,
                                    "explicability": 0
                                },
                                {
                                    "text": "Themis-ML : An extension of Themis, built specifically for machine learning models. It includes fairness measures and bias mitigation strategies tailored to common ML workflows. If you\u2019re using machine learning and need more granular fairness controls, this tool is for you.",
                                    "value": "Item 10",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": -1,
                                    "explicability": 0
                                },
                                {
                                    "text": "Fairness Comparison: A benchmarking tool that allows you to compare different fairness metrics across models. It\u2019s a handy way to see how various models stack up in terms of bias and fairness before deciding which one to deploy.",
                                    "value": "Item 11",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": -1,
                                    "explicability": 0
                                },
                                {
                                    "text": "Other (describe)",
                                    "value": "Item 12",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": -1,
                                    "explicability": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel18",
                    "title": "Explanability and Transparency",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question11",
                            "title": " Does the model provide explainations for its reasoning? ",
                            "choices": [
                                {
                                    "text": "Yes. It provides explanation to all the stakeholders (if its a loan application decision it provides explanation both to people whose loan got rejected/accepted and to the bank)",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": -4
                                },
                                {
                                    "text": "Yes. It provides explanation only part of the stakeholders (either only the clients or only the bank)",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": -2
                                },
                                {
                                    "text": "It doesn't provide any explanation",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 5
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel19",
                    "title": "Traceability ",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question12",
                            "title": "Will you maintain a log detailing all of the changes made to the model of and the system ?",
                            "choices": [
                                {
                                    "text": "No",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 5
                                },
                                {
                                    "text": "To some extent - Only for a brief period of time",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 2
                                },
                                {
                                    "text": "Yes",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": -3
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel20",
                    "title": "Robustness and testing the tool \n",
                    "elements": [
                        {
                            "type": "checkbox",
                            "name": "question13",
                            "title": "Has your system undergone the following tests ?",
                            "choices": [
                                {
                                    "text": "Regression testing: Regression testing is a type of testing that is used to find bugs in software that have already been fixed. This is done by running the software with different inputs and comparing the output to the expected output. This type of testing is used to verify that a software program continues to function properly after it has been modified or updated. This type of testing is typically performed after a new version of the software has been released, or after a change has been made to the code.",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": -1,
                                    "autonomy": -1,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Functional testing: Functional testing is a type of testing that is used to verify that a system or software performs as expected. Load testing is a type of testing that is used to verify that a system or software can handle a heavy load or traffic. This type of testing is typically performed by running the software through a series of tests that exercise the various functions of the software.",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": -1,
                                    "autonomy": -1,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Load testing: Load testing is a type of testing that is used to find bugs in software by running it with different inputs and checking if the output is as expected. It is used to verify that a software program is able to handle the load that is expected to be placed on it. This type of testing is typically done by running the software through a series of tests that simulate the load that the software will experience in production.",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": -1,
                                    "autonomy": -1,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Stress testing: Stress testing involves subjecting a system to intense or extreme conditions in order to see how well it holds up. This can help to identify potential issues that may only arise under high levels of stress or strain.",
                                    "value": "Item 4",
                                    "beneficence": 0,
                                    "non_maleficence": -1,
                                    "autonomy": -1,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Negative testing: Negative testing involves deliberately providing invalid or incorrect inputs to a system in order to see how it responds. This can help to uncover errors in input validation or handling that could lead to security vulnerabilities or data loss.",
                                    "value": "Item 5",
                                    "beneficence": 0,
                                    "non_maleficence": -1,
                                    "autonomy": -1,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Fuzz testing: A fuzz test (also known as a fuzzing test) is a software testing technique, usually automated or semi-automated, that involves providing invalid, unexpected, or random data to the inputs of a computer program. The program is then monitored for exceptions such as crashes, failing built-in code assertions, or potential memory leaks. Fuzz testing is effective in finding coding errors and security vulnerabilities. This involves feeding random or invalid data into a system and seeing how it responds. This can help to find potential vulnerabilities in the system.",
                                    "value": "Item 6",
                                    "beneficence": 0,
                                    "non_maleficence": -1,
                                    "autonomy": -1,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Use case testing: Use case testing involves testing the system with realistic scenarios to see how it responds. This can help to identify potential usability issues.",
                                    "value": "Item 7",
                                    "beneficence": 0,
                                    "non_maleficence": -1,
                                    "autonomy": -1,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Security testing: Security Testing involves testing the system for security vulnerabilities. This can help to identify potential security risks.",
                                    "value": "Item 8",
                                    "beneficence": 0,
                                    "non_maleficence": -1,
                                    "autonomy": -1,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Black-box testing: Black-box testing is a method of software testing that examines the functionality of a software program without knowing the internal code structure. The tester is only aware of what the software is supposed to do but not how it does it. Black-box testing can be used to test the functionality of a software program, the usability of a user interface, and the compliance of a program with external standards.",
                                    "value": "Item 9",
                                    "beneficence": 0,
                                    "non_maleficence": -1,
                                    "autonomy": -1,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Mutation testing: Mutation testing is a type of software testing that involves modifying a program\u2019s source code or its inputs and then testing to see if the program still behaves as expected. The goal of mutation testing is to find faults in a program\u2019s code or inputs that can cause the program to produce incorrect results.",
                                    "value": "Item 10",
                                    "beneficence": 0,
                                    "non_maleficence": -1,
                                    "autonomy": -1,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Fault injection testing: Fault injection testing is a method of testing software by Introducing faults into the software program to see if the program can detect and handle the faults. Fault injection can be used to test the robustness of a program\u2019s error-handling capabilities.",
                                    "value": "Item 11",
                                    "beneficence": 0,
                                    "non_maleficence": -1,
                                    "autonomy": -1,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ],
                            "showOtherItem": true
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel21",
                    "title": "Ethical Considerations ",
                    "elements": [
                        {
                            "type": "matrixdropdown",
                            "name": "question14",
                            "title": "How would you rate the risks the system poses \n( Importance \u2013 How consequential is this harm for the well-being of stakeholders? Which are irremediable and serious  \nUrgency \u2013 How immediate is this threat?   \nDifficulty \u2013 How difficult will it be to mitigate this harm? \nDetectability \u2013 How perceivable is this harm given the current design?\nProbability - How possible is this harm to happen ? )",
                            "columns": [
                                {
                                    "name": "Column 1",
                                    "title": "Importance"
                                },
                                {
                                    "name": "Column 2",
                                    "title": "Urgency"
                                },
                                {
                                    "name": "Column 3",
                                    "title": "Difficulty"
                                },
                                {
                                    "name": "Column 4",
                                    "title": "Detectability"
                                },
                                {
                                    "name": "Column 5",
                                    "title": "Probability"
                                }
                            ],
                            "choices": [
                                {
                                    "value": 1,
                                    "weight": 1
                                },
                                {
                                    "value": 2,
                                    "weight": 2
                                },
                                {
                                    "value": 3,
                                    "weight": 3
                                },
                                {
                                    "value": 4,
                                    "weight": 4
                                },
                                {
                                    "value": 5,
                                    "weight": 5
                                }
                            ],
                            "rows": [
                                {
                                    "value": "Row 1",
                                    "text": "Autonomy"
                                },
                                {
                                    "value": "Row 2",
                                    "text": "Physical damage"
                                },
                                {
                                    "value": "Row 3",
                                    "text": "Psychological"
                                },
                                {
                                    "value": "Row 4",
                                    "text": "Reputational "
                                },
                                {
                                    "value": "Row 5",
                                    "text": "Financial"
                                },
                                {
                                    "value": "Row 6",
                                    "text": "Human Rights"
                                },
                                {
                                    "value": "Row 7",
                                    "text": "Societal and Cultural "
                                },
                                {
                                    "value": "Row 8",
                                    "text": "Political and Economic"
                                },
                                {
                                    "value": "Row 9",
                                    "text": "Environmental "
                                }
                            ],
                            "hideIfRowsEmpty": true
                        }
                    ]
                }
            ]
        },
        {
            "name": "page6",
            "title": "Evaluation Stage \n",
            "elements": [
                {
                    "type": "panel",
                    "name": "panel22",
                    "title": "Testing ",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question4",
                            "title": "Has the strategy for testing the AI model been defined?\n",
                            "choices": [
                                {
                                    "text": "Yes, the testing strategy is fully documented and includes detailed validation steps.",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": -4,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Yes, but the testing strategy is only partially documented.",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": -2,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "No, we do not have a defined testing strategy.",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 4,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel23",
                    "title": "Deploy",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question5",
                            "title": "Has the deployment strategy been documented?",
                            "choices": [
                                {
                                    "text": "Yes, the deployment strategy is fully documented.",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": -4,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Yes, but the documentation is incomplete or lacks detail.",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": -2,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "No, we have not documented the deployment strategy.",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 4,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel24",
                    "title": "Compliance checks ",
                    "elements": [
                        {
                            "type": "checkbox",
                            "name": "question6",
                            "title": " Does your AI comply with any ISO standards",
                            "choices": [
                                {
                                    "text": "ISO/IEC TR 24028:2020 (Surveys approaches to establish trust in AI systems through transparency, explainability, controllability, etc., engineering pitfalls and typical associated threats and risks to AI systems and approaches to assess and achieve trustworthiness characteristics of AI systems.)",
                                    "value": "Item 1",
                                    "beneficence": -1,
                                    "non_maleficence": -1,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "ISO/IEC 42001:2023 (International standard that specifies requirements for establishing, implementing, maintaining, and continually improving an Artificial Intelligence Management System (AIMS) within organizations, ensuring responsible development and use of AI systems.)",
                                    "value": "Item 2",
                                    "beneficence": -1,
                                    "non_maleficence": -1,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "ISO/IEC DIS 42005 (International standard that provides guidance for organizations performing AI system impact assessments. It includes considerations for how and when to perform such assessments and at what stages of the AI system lifecycle, as well as how this process can be integrated into an organization\u2019s AI risk management system.)",
                                    "value": "Item 3",
                                    "beneficence": -1,
                                    "non_maleficence": -1,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ],
                            "showOtherItem": true
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel25",
                    "title": "Certification and Audits ",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question7",
                            "title": "Did you establish thorough mechanisms that facilitate the system\u2019s auditability (eg documentation of the development process, the sourcing of training data and complaints about negative impacts, and the logging of the system\u2019s processes)?",
                            "choices": [
                                {
                                    "text": "Yes, we have fully established and documented auditability mechanisms.",
                                    "value": "Item 1",
                                    "beneficence": -4,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": -2
                                },
                                {
                                    "text": "Yes, but the mechanisms are incomplete or lack detail.",
                                    "value": "Item 2",
                                    "beneficence": -2,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": -1
                                },
                                {
                                    "text": "No, but we are in the process of establishing auditability mechanisms.",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "No, we have not established any auditability mechanisms.",
                                    "value": "Item 4",
                                    "beneficence": 4,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 2
                                }
                            ]
                        },
                        {
                            "type": "comment",
                            "name": "question8",
                            "visibleIf": "{question7} anyof ['Item 1', 'Item 2']",
                            "title": "If yes, describe them."
                        }
                    ]
                }
            ]
        },
        {
            "name": "page7",
            "title": "Operation Stage \n",
            "elements": [
                {
                    "type": "panel",
                    "name": "panel26",
                    "title": "Continuous Monitoring and feedback ",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question2",
                            "title": " Do you have an arranged strategy for how to update the AI application continuously?",
                            "choices": [
                                {
                                    "text": "Yes, we have a fully documented and automated update strategy with regular intervals and version control.",
                                    "value": "Item 1",
                                    "beneficence": -5,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "We have a partial strategy, with updates performed as needed but no formal schedule.",
                                    "value": "Item 2",
                                    "beneficence": -3,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Updates are performed ad-hoc, with no formal strategy or documentation.",
                                    "value": "Item 3",
                                    "beneficence": -1,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "No, we do not have a strategy for continuous updates.",
                                    "value": "Item 4",
                                    "beneficence": 5,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "panel28",
                    "title": "Attacks and Security ",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "question3",
                            "title": "How is the AI system protected from data poisoning attacks?",
                            "choices": [
                                {
                                    "text": "Robust validation pipelines, anomaly detection, and data provenance tracking",
                                    "value": "Item 1",
                                    "beneficence": 0,
                                    "non_maleficence": -4,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Some validation, but no automated anomaly detection",
                                    "value": "Item 2",
                                    "beneficence": 0,
                                    "non_maleficence": -2,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "Basic checks, relies on data source integrity without verification",
                                    "value": "Item 3",
                                    "beneficence": 0,
                                    "non_maleficence": 0,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                },
                                {
                                    "text": "No data validation or checks against poisoning",
                                    "value": "Item 4",
                                    "beneficence": 0,
                                    "non_maleficence": 4,
                                    "autonomy": 0,
                                    "justice": 0,
                                    "explicability": 0
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "page8",
            "title": "Retirement Stage",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question1",
                    "title": " Has the organization conducted a thorough risk assessment prior to decommissioning the AI system?",
                    "choices": [
                        {
                            "text": "Comprehensive risk assessment completed, covering ethical, technical, and operational impacts",
                            "value": "Item 1",
                            "beneficence": -4,
                            "non_maleficence": 0,
                            "autonomy": 0,
                            "justice": 0,
                            "explicability": 0
                        },
                        {
                            "text": "Partial risk assessment covering key risks but with gaps in ethical considerations",
                            "value": "Item 2",
                            "beneficence": -2,
                            "non_maleficence": 0,
                            "autonomy": 0,
                            "justice": 0,
                            "explicability": 0
                        },
                        {
                            "text": "Basic assessment focusing only on operational risks, with minimal ethical or technical analysis",
                            "value": "Item 3",
                            "beneficence": 0,
                            "non_maleficence": 0,
                            "autonomy": 0,
                            "justice": 0,
                            "explicability": 0
                        },
                        {
                            "text": "No formal risk assessment conducted",
                            "value": "Item 4",
                            "beneficence": 4,
                            "non_maleficence": 0,
                            "autonomy": 0,
                            "justice": 0,
                            "explicability": 0
                        }
                    ]
                }
            ]
        }
    ]
}