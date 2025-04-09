const json_questionnaire = {
  "title": "Algorithmic Impact Assessment",
  "logoPosition": "right",
  "pages": [
      {
          "name": "page1",
          "title": "General Info  ",
          "elements": [
              {
                  "type": "panel",
                  "name": "panel21",
                  "title": "Developers",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question1",
                          "title": "What kind of entity is your organisation?",
                          "choices": [
                              {
                                  "text": "Provider: a natural or legal person, public authority, agency or other body that develops an AI system or a general purpose AI model (or that has an AI system or a general purpose AI model developed) and places them on the market or puts the system into service under its own name or trademark, whether for payment or free of charge.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Deployer: any natural or legal person, public authority, agency or other body using an AI system under its authority except where the AI system is used in the course of a personal non-professional activity.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Distributor: any natural or legal person in the supply chain, other than the provider or the importer, that makes an AI system available on the Union market.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Importer: any natural or legal person located or established in the Union that places on the market an AI system that bears the name or trademark of a natural or legal person established outside the Union.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Authorised representative: any natural or legal person located or established in the Union who has received and accepted a written mandate from a provider of an AI system or a general purpose AI model to, respectively, perform and carry out on its behalf the obligations and procedures established by this Regulation.",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Product manufacturer: places on the market or puts into service an AI system together with their product and under their own name or trademark; (NOTE : if the product has a newly developed AI system in it your organisations counts as a provider.)",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "text",
                          "name": "question2",
                          "title": "What's the name of your organisation?"
                      },
                      {
                          "type": "comment",
                          "name": "question3",
                          "title": "Give a short description of your organisation."
                      },
                      {
                          "type": "text",
                          "name": "question293",
                          "title": "Give your organisation's website link (if you have one)."
                      },
                      {
                          "type": "text",
                          "name": "question4",
                          "title": "If your organisation has a mission statement, include it here."
                      },
                      {
                          "type": "multipletext",
                          "name": "question5",
                          "title": "Contact details of your organisation :",
                          "items": [
                              {
                                  "name": "text1",
                                  "title": "email"
                              },
                              {
                                  "name": "text2",
                                  "title": "phone number"
                              },
                              {
                                  "name": "text3",
                                  "title": "country"
                              },
                              {
                                  "name": "text4",
                                  "title": "zip code"
                              },
                              {
                                  "name": "text5",
                                  "title": "city"
                              },
                              {
                                  "name": "text6",
                                  "title": "street"
                              },
                              {
                                  "name": "text7",
                                  "title": "number"
                              }
                          ]
                      }
                  ]
              },
              {
                  "type": "panel",
                  "name": "panel24",
                  "title": "Questionnaire answerers ",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question6",
                          "title": "Is the questionnaire being filled by one or multiple persons ?",
                          "choices": [
                              {
                                  "text": "One",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "More people",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "multipletext",
                          "name": "question7",
                          "visibleIf": "{question6} = 'Item 1'",
                          "title": "Details of the person filling the questionnaire :",
                          "items": [
                              {
                                  "name": "text1",
                                  "title": "Name"
                              },
                              {
                                  "name": "text2",
                                  "title": "Job title"
                              },
                              {
                                  "name": "text3",
                                  "title": "Email"
                              },
                              {
                                  "name": "text7",
                                  "title": "Phone"
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question8",
                          "visibleIf": "{question6} = 'Item 1'",
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
                      },
                      {
                          "type": "multipletext",
                          "name": "question10",
                          "visibleIf": "{question6} = 'Item 2'",
                          "title": "Contact details of the reviewers team :",
                          "items": [
                              {
                                  "name": "text1",
                                  "title": "Email"
                              },
                              {
                                  "name": "text2",
                                  "title": "Phone"
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question11",
                          "visibleIf": "{question6} = 'Item 2'",
                          "title": "What were the reviewers' relationship with the reviewed system ?",
                          "choices": [
                              {
                                  "text": "Independent reviewers not working in the organisation that made the system",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Did not work on the system's development but they are a part of the organisation that made it.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "They worked on the system's development and are a part of the organisation that made it.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "comment",
                          "name": "question9",
                          "title": "Describe how did you acquire the needed information for replying to all of the questions."
                      },
                      {
                          "type": "boolean",
                          "name": "question12",
                          "title": "Have you or any other authorities conducted another impact assessment?",
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
                      },
                      {
                          "type": "text",
                          "name": "question13",
                          "visibleIf": "{question12} = true",
                          "title": "Give a link to the other assessments."
                      },
                      {
                          "type": "comment",
                          "name": "question14",
                          "title": " What are the potential limitations of the questionnaire?"
                      },
                      {
                          "type": "boolean",
                          "name": "question16",
                          "title": "Will some independent party review your answer's once the assessment is completed? ",
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
                      },
                      {
                          "type": "multipletext",
                          "name": "question17",
                          "visibleIf": "{question16} = true",
                          "title": "Give the contact details of said party",
                          "items": [
                              {
                                  "name": "text1",
                                  "title": "Name"
                              },
                              {
                                  "name": "text4",
                                  "title": "Job Title "
                              },
                              {
                                  "name": "text2",
                                  "title": "Email\n"
                              },
                              {
                                  "name": "text3",
                                  "title": "Phone"
                              }
                          ]
                      }
                  ]
              },
              {
                  "type": "panel",
                  "name": "panel25",
                  "title": "System",
                  "elements": [
                      {
                          "type": "text",
                          "name": "question15",
                          "title": "What's the system's title/name?"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question18",
                          "title": "Project Phase :",
                          "choices": [
                              {
                                  "text": "Design",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Development",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Evaluation",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Operation",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Retirement",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "checkbox",
                          "name": "question20",
                          "title": "Does your system meet any of the following scope criteria ?",
                          "validators": [
                              {
                                  "type": "expression"
                              }
                          ],
                          "choices": [
                              {
                                  "text": "The system is being placed on the market/into service inside the EU",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "The system's output is used in the EU",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "The system is located in a non-EU country where 'EU Member State law' applies by virtue of public international law",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showNoneItem": true,
                          "noneText": "None of the above"
                      },
                      {
                          "type": "checkbox",
                          "name": "question22",
                          "title": "Does your system engage in any of the prohibited practices ?",
                          "choices": [
                              {
                                  "text": "Real time biometric systems : e.g. biometric categorisation , predictive policing , expanding facial recognition databases , real-time remote biometrics ( exceptions do apply for crime prevention and criminal investigation in law enforcement and national security contexts).",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Social scoring algorithms that can be used to evaluate individuals based on personal characteristics and/or their behaviour in a manner that could cause harm or lead to unfavourable treatment of that individual.",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Manipulative tactics that exploit the vulnerabilities of specific individuals to distort their behaviour in a manner that is likely to cause physical or phycological harm ( e.g. emotion recognition , subliminal techniques, manipulation, and deception )",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showNoneItem": true,
                          "noneText": "None of the above"
                      },
                      {
                          "type": "checkbox",
                          "name": "question24",
                          "title": "Does your system fall within any of the following excluded categories?",
                          "choices": [
                              {
                                  "text": "AI systems developed and used exclusively for military purposes",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "AI systems used by public authorities or international organisations in third countries for law enforcement and judicial cooperation",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "AI research and development activity",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "AI components provided under free and open-source licences",
                                  "value": "Item 7",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "People using AI systems for purely personal non professional activity",
                                  "value": "Item 8",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showNoneItem": true,
                          "noneText": "None of the above"
                      },
                      {
                          "type": "checkbox",
                          "name": "question23",
                          "title": "Does your AI system (or the product for which your AI system is a 'safety component') fall within any of the following high-risk categories?\n",
                          "choices": [
                              {
                                  "text": "Two- or three-wheel vehicles and quadricycles",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Motor vehicles and their trailers",
                                  "value": "Item 9",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Agricultural and forestry vehicles",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Interoperability of the rail systems",
                                  "value": "Item 8",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Civil aviation security",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Marine equipment",
                                  "value": "Item 7",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Machinery",
                                  "value": "Item 13",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Toys",
                                  "value": "Item 14",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Recreational craft & personal watercraft",
                                  "value": "Item 15",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Lifts and safety components of lifts",
                                  "value": "Item 16",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Equipment and protective systems intended for use in potentially explosive atmospheres",
                                  "value": "Item 17",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Radio equipment",
                                  "value": "Item 18",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Pressure equipment",
                                  "value": "Item 19",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Cableway installations",
                                  "value": "Item 20",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Personal protective equipment",
                                  "value": "Item 21",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Appliances burning gaseous fuels",
                                  "value": "Item 22",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Medical devices",
                                  "value": "Item 23",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Biometrics (to the extent that these do not fall under prohibited practices )",
                                  "value": "Item 27",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Critical infrastructure",
                                  "value": "Item 28",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Educational and vocational training",
                                  "value": "Item 29",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Employment, workers management, and access to self-employment",
                                  "value": "Item 30",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Access to and enjoyment of essential private services and public services and benefits",
                                  "value": "Item 31",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Law enforcement",
                                  "value": "Item 32",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Migration, asylum, and border control management",
                                  "value": "Item 33",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Administration of justice and democratic processes",
                                  "value": "Item 34",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "None of the above",
                                  "value": "Item 35",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "boolean",
                          "name": "question25",
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
                      },
                      {
                          "type": "comment",
                          "name": "question19",
                          "title": "Describe your system. (Mention its purpose,  its intended uses and anything else you deem important)"
                      },
                      {
                          "type": "comment",
                          "name": "question21",
                          "title": "If you have links to any supplementary information on the system (demonstrations, functional specifications, slide decks, or system architecture diagrams) please include links below."
                      }
                  ]
              }
          ]
      },
      {
          "name": "page2",
          "title": "Design Stage : Organisation  ",
          "elements": [
              {
                  "type": "panel",
                  "name": "panel1",
                  "title": "Strategy",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question26",
                          "title": "Do you have a strategy to deploy AI powered solutions in your organization?",
                          "choices": [
                              {
                                  "text": "Yes. We have a well-defined AI strategy",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -2
                              },
                              {
                                  "text": "No. We are currently in the process of developing an AI strategy",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -1
                              },
                              {
                                  "text": "No. We have not yet started to develop an AI strategy",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question27",
                          "visibleIf": "{question26} = 'Item 4'",
                          "title": "Describe shortly that strategy \n"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question40",
                          "title": "Is it clear who / what team is leading the AI strategy for your company or is it being managed in a more organic and decentralized manner?",
                          "choices": [
                              {
                                  "text": "There is clear leadership / ownership of our organization\u2019s AI strategy",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -2
                              },
                              {
                                  "text": "Hybrid system",
                                  "value": "Item 5",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -1
                              },
                              {
                                  "text": "Organic and decentralized",
                                  "value": "Item 4",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question41",
                          "title": "Do you have a process in place to measure the impact of the development / deployment of AI / AI-powered solutions?",
                          "choices": [
                              {
                                  "text": "Yes, we have a process and clearly defined metrics",
                                  "value": "Item 4",
                                  "beneficence": -3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, we have a process but are still working on actual metrics",
                                  "value": "Item 5",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we don\u2019t have a process or metrics, but we are likely to have this in the next 12 months",
                                  "value": "Item 6",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we don\u2019t have a process of metrics and we are unlikely to have this in the next 12 months",
                                  "value": "Item 7",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question42",
                          "visibleIf": "{question41} anyof ['Item 4', 'Item 5']",
                          "title": "Describe that process."
                      },
                      {
                          "type": "radiogroup",
                          "name": "question43",
                          "title": "Has your company established a financial strategy to ensure sustainable funding for AI development initiatives?",
                          "choices": [
                              {
                                  "text": "Yes . A short and long-term financial strategy is in place",
                                  "value": "Item 4",
                                  "beneficence": -3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes . Only a short-term financial strategy is in place",
                                  "value": "Item 5",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No . But we are currently underway with developing a financial strategy",
                                  "value": "Item 6",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No. We have no plans presently to develop a financial strategy",
                                  "value": "Item 7",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question294",
                          "visibleIf": "{question43} anyof ['Item 4', 'Item 5']",
                          "title": "Describe that strategy."
                      },
                      {
                          "type": "radiogroup",
                          "name": "question44",
                          "title": "How is your company prioritizing budget allocation between AI development and other technological initiatives? ",
                          "choices": [
                              {
                                  "text": "AI deployment is the highest priority for budget allocation, and we have been given an additional budget for it",
                                  "value": "Item 4",
                                  "beneficence": -3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "AI deployment is given equal priority alongside other technological initiatives. We have some additional funding available",
                                  "value": "Item 5",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "AI deployment is important, but we will have to cut spending across other technical initiatives to fund it",
                                  "value": "Item 6",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "AI deployment is important, but depends on other technical initiatives to be in place first",
                                  "value": "Item 7",
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
                  "name": "panel2",
                  "title": "Infastructure / Security",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question47",
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
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question48",
                          "title": "Does your organization have dedicated GPU resources available and integrated for processing of AI workloads?",
                          "choices": [
                              {
                                  "text": "Robust GPU infrastructure available for current and future AI workloads",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Just enough GPU resources to cater to ongoing projects",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Limited GPU resources for experimental purposes only",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we don\u2019t have dedicated GPU resources available currently",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question49",
                          "title": "How efficiently can your organization allocate compute resources for AI tasks based on their demand?",
                          "choices": [
                              {
                                  "text": "Our systems are mostly automated and efficiently allocate resources based on AI demand",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We have some automated resource allocation processes, but manual intervention is often required",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Resource allocation for AI tasks is done manually and might not be optimal",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We do not have a structured approach to resource allocation for AI",
                                  "value": "Item 4",
                                  "beneficence": 3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question50",
                          "title": "How would you assess your current data center's network performance in terms of latency and throughput, especially for AI workloads? ",
                          "choices": [
                              {
                                  "text": "Optimal: minimal issues and tailored for the most demanding AI workloads",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderately optimal: rare hiccups with current workload, but will need improvement to cater to future demand",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Sub optimal: we have occasional latency issues, especially with large AI workloads",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Not optimal: we experience frequent issues and bottlenecks",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question51",
                          "title": "As your AI projects grow in complexity and data volume, how prepared is your network to adapt to these accordingly?",
                          "choices": [
                              {
                                  "text": "Fully flexible and adaptable: can accommodate any scale of AI projects instantly",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Highly scalable: designed with significant AI growth in mind",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Adequately scalable: might need periodic updates",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Somewhat scalable: potential bottlenecks for very large AI projects",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Not scalable: significant upgrades are required for large AI projects",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question52",
                          "title": "How seamlessly is your network infrastructure integrated with your AI systems to facilitate efficient data flow and processing?",
                          "choices": [
                              {
                                  "text": "High-level integration ensuring efficient data flow for most AI tasks, ensuring seamless operations across all AI projects",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderate integration: we've optimized major pathways but still have occasional hiccups",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Some basic integrations, but often require manual adjustments",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No integration: our network and AI systems operate mostly in silos",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question53",
                          "title": "How would you assess your organization's awareness and understanding of cybersecurity threats specific to AI and machine learning systems?",
                          "choices": [
                              {
                                  "text": "High awareness: have a comprehensive understanding and / or regularly update our security protocols based on new threats",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderate awareness: aware and have taken preliminary precautions",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Limited awareness: have some basic understanding but no specific measures in place",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Unaware of security threats specific to AI workloads",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question54",
                          "title": "How does your organization ensure the protection of data utilized in AI models, especially during transit and at rest?",
                          "choices": [
                              {
                                  "text": "End-to-end encryption with regular checks and security audits, continuous monitoring and instant threat response",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Advanced encryption measures in place, but may lack regular audits",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic encryption measures in place",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No specific encryption or protection measures",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question55",
                          "title": "How equipped is your organization to detect and prevent unauthorized tampering or adversarial attacks on your AI models?",
                          "choices": [
                              {
                                  "text": "Fully equipped: have proactive monitoring and tamper detection with timely counter measures",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderately equipped: have protective measures in place but lack real-time monitoring",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Somewhat equipped: we are aware of the risks and have basics sorted but lack robust measures",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Not equipped: have not considered the cybersecurity aspect of AI workloads",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question56",
                          "title": "How does your organization manage access control to AI systems and datasets?",
                          "choices": [
                              {
                                  "text": "Dynamic and granular access controls that adjust based on project needs and security levels, with real-time monitoring",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Advanced role-based access controls with periodic audits",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic role-based access in place but may lack regular updates",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Access is largely open and not specifically restricted",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question57",
                          "title": "How ready is your company to deploy AI from a power consumption perspective? ",
                          "choices": [
                              {
                                  "text": "Highly prepared: we have dedicated infrastructure in place to optimize power consumption in AI deployment",
                                  "value": "Item 1",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Somewhat prepared: some measures in place to address power consumption concerns in AI deployment",
                                  "value": "Item 2",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Not prepared: no specific measures or considerations for power consumption in AI deployment",
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
                  "name": "panel26",
                  "title": "Data",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question295",
                          "title": "How centralized is your organization's in-house data, facilitating easy access for AI initiatives?",
                          "choices": [
                              {
                                  "text": "Fully centralized: data is consistently managed and readily accessible organization\u2014wide",
                                  "value": "Item 1",
                                  "beneficence": -3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderately centralized: majority of data is in unified databases, but some silos remain",
                                  "value": "Item 2",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Partially fragmented: some centralized databases, but many department\u2014specific silos exist",
                                  "value": "Item 3",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Highly fragmented: data is scattered across different silos",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question296",
                          "title": "To what extent is your in-house data pre-processed, cleaned, and ready for AI projects?",
                          "choices": [
                              {
                                  "text": "Consistently pre-processed: our data strategy ensures data is always AI-ready",
                                  "value": "Item 1",
                                  "beneficence": -3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Mostly pre-processed: most of our data is primed for AI use",
                                  "value": "Item 2",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Occasionally pre-processed: some datasets are AI-ready, but many require additional work",
                                  "value": "Item 3",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Rarely pre-processed: significant time is needed to clean and organize data for AI",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question297",
                          "title": "How would you describe the procedures and protocols in place for AI teams (your company's or other's ) to access and use in-house data?",
                          "choices": [
                              {
                                  "text": "Facilitative: procedures actively promote efficient data access for AI",
                                  "value": "Item 1",
                                  "beneficence": -3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Balanced: while there are protocols, they don't overly impede access",
                                  "value": "Item 2",
                                  "beneficence": -2,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Somewhat restrictive: procedures exist but are not streamlined so there can be occasional issues",
                                  "value": "Item 3",
                                  "beneficence": -1,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Restrictive: cumbersome protocols hinder timely access",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question298",
                          "title": "How well-integrated are your analytics tools with the data sources and AI platforms used within your organization?",
                          "choices": [
                              {
                                  "text": "Fully integrated: almost all tools have direct, automated interactions with data sources and operate in complete harmony",
                                  "value": "Item 1",
                                  "beneficence": -3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderately integrated: most tools connect seamlessly with our main data sources",
                                  "value": "Item 2",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Somewhat integrated: some tools interface directly with data sources, but many require manual bridging",
                                  "value": "Item 3",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Not integrated: manual processes dominate tool\u2014data interactions",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question299",
                          "title": "How would you rate the sophistication of your analytics tools in terms of handling complex AI-related data sets?",
                          "choices": [
                              {
                                  "text": "Excellent: majority of our tools are AI-optimized and cater to advanced tasks",
                                  "value": "Item 1",
                                  "beneficence": -3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Good: a balance of general-purpose and AI-specific analytics tools",
                                  "value": "Item 2",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Fair: some tools are AI-enhanced, but there's significant reliance on general tools",
                                  "value": "Item 3",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic: tools are more general-purpose and don't cater specifically to AI",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question300",
                          "title": "How adaptable and scalable are your analytics tools to cater to evolving AI project needs?",
                          "choices": [
                              {
                                  "text": "Highly adaptable: tools are frequently updated and scaled based on project demands and can be rapidly tailored to any AI analytics demand",
                                  "value": "Item 1",
                                  "beneficence": -3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderately adaptable: tools cater to most AI projects, with occasional need for third-party solutions",
                                  "value": "Item 2",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Somewhat adaptable: tools can handle current tasks but might struggle with larger, more complex projects",
                                  "value": "Item 3",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Not adaptable: tools often lag behind project requirements",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question301",
                          "title": "How would you describe the proficiency level of your staff in leveraging these analytics tools for AI projects?",
                          "choices": [
                              {
                                  "text": "Proficient: staff are adept at leveraging tool capabilities to their fullest",
                                  "value": "Item 1",
                                  "beneficence": -3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderate: most staff can handle regular AI analytics tasks efficiently",
                                  "value": "Item 2",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Intermediate: staff can use tools but often need guidance for advanced functions related to AI",
                                  "value": "Item 3",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Beginner: significant training is required",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question302",
                          "title": "What level of quality checks and processes do you have in place to check the quality and reliability of the external data used for AI training?",
                          "choices": [
                              {
                                  "text": "Advanced: external data undergoes rigorous quality checks and peer reviews",
                                  "value": "Item 1",
                                  "beneficence": -3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -3,
                                  "explicability": 0
                              },
                              {
                                  "text": "Intermediate: we have a systematic process for any external data we incorporate",
                                  "value": "Item 2",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -2,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic: we do some manual checks",
                                  "value": "Item 3",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "We have no systematic processes",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question303",
                          "title": "How effectively does your organization track the origins and lineage of data used in your AI models?",
                          "choices": [
                              {
                                  "text": "Most of our AI projects have detailed data lineage tracking incorporating end-to-end data traceability, ensuring complete transparency",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -3,
                                  "explicability": -3
                              },
                              {
                                  "text": "We have a structured system for tracking data origins, but it's not integrated with all AI projects",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -2,
                                  "explicability": -2
                              },
                              {
                                  "text": "We have basic tracking but lack comprehensive lineage details",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": -1
                              },
                              {
                                  "text": "We do not actively track data origins",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question304",
                          "title": "How does your organization ensure and verify the accuracy of the data being used in AI models?",
                          "choices": [
                              {
                                  "text": "We have a continuous data accuracy validation system integrated with real\u2014time corrections",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -3,
                                  "explicability": 0
                              },
                              {
                                  "text": "We have dedicated teams that periodically verify data accuracy",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -2,
                                  "explicability": 0
                              },
                              {
                                  "text": "We do occasional checks but lack a systematic verification process",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "We rely on external data providers without internal verification",
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
              },
              {
                  "type": "panel",
                  "name": "panel4",
                  "title": "Governance",
                  "elements": [
                      {
                          "type": "boolean",
                          "name": "question34",
                          "title": "Does your organisation have a defined set of values that should guide the development of AI systems",
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
                          "type": "comment",
                          "name": "question35",
                          "visibleIf": "{question34} = true",
                          "title": "Describe those values"
                      },
                      {
                          "type": "boolean",
                          "name": "question36",
                          "visibleIf": "{question34} = true",
                          "title": "Have those values been communicated externally ?",
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
                          "type": "comment",
                          "name": "question37",
                          "visibleIf": "{question36} = true",
                          "title": "Describe how did that communication happened/happens\n"
                      },
                      {
                          "type": "boolean",
                          "name": "question38",
                          "visibleIf": "{question34} = true",
                          "title": "Have these values been communicated internally ? ",
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
                          "type": "comment",
                          "name": "question39",
                          "visibleIf": "{question38} = true",
                          "title": "Describe how did that communication happened/happens\n"
                      },
                      {
                          "type": "boolean",
                          "name": "question46",
                          "title": "Do you have an established AI ethics review board or a similar mechanism to discuss the overall accountability and ethics practices, including potential unclear grey areas ?",
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
                          "type": "radiogroup",
                          "name": "question305",
                          "title": "What is the level of awareness across your organization regarding potential biases and fairness in data sets used for AI?",
                          "choices": [
                              {
                                  "text": "High awareness: regular training sessions and active discussions around biases",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderate awareness: occasional training or awareness programs in place",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Limited awareness: sporadic discussions but no formal understanding",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Not aware: haven't considered biases in our data",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 2,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question306",
                          "title": "Does your organization have mechanisms to actively detect biases and lack of fairness in data used for AI?",
                          "choices": [
                              {
                                  "text": "Diversity in external data is a priority; regular checks for biases are conducted with continuous monitoring and adjustment",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -2,
                                  "explicability": 0
                              },
                              {
                                  "text": "We actively seek diverse data sources and occasionally audit for biases",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We try to use diverse data but don't have systematic checks in place",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "This isn't a focus for us currently",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 2,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question307",
                          "title": "How does your organization handle and rectify identified biases and lack of fairness in data?",
                          "choices": [
                              {
                                  "text": "Systematic process for bias and fairness correction with dedicated teams and proactive strategy for bias prevention and rectification, and ensuring fairness, ingrained in data management",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -2,
                                  "explicability": 0
                              },
                              {
                                  "text": "Biases are addressed on a project-by-project basis",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Acknowledge biases but lack systematic correction mechanisms",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 2,
                                  "explicability": 0
                              },
                              {
                                  "text": "No formal process for rectification",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 3,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question308",
                          "title": "How transparent are the algorithms used in your AI systems in terms of their decision-making processes?",
                          "choices": [
                              {
                                  "text": "Highly transparent: can trace most decisions back to specific factors",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -2
                              },
                              {
                                  "text": "Moderately transparent: essential decision factors are known",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Limited transparency: some understanding but lacks depth",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 2
                              },
                              {
                                  "text": "Completely black box: no understanding of decision mechanisms",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 3
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question309",
                          "title": "Does your organization have mechanisms to detect biases and ensure fairness in AI algorithms?",
                          "choices": [
                              {
                                  "text": "Regular comprehensive automated checks with continuous monitoring for algorithmic biases complemented with manual reviews",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Automated bias detection tools in place but not used consistently",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Sporadic manual reviews",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 2,
                                  "explicability": 0
                              },
                              {
                                  "text": "No mechanisms in place",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 3,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question310",
                          "title": "What is the level of understanding across your organization about global data privacy standards (like GDPR, CCPA, etc.) and ensuring adherence to these in AI projects?",
                          "choices": [
                              {
                                  "text": "High understanding: strict adherence with regular audits and review and a proactive strategy to stay ahead of global privacy norms and regulations",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderate understanding: have protocols in place, but occasional lapses occur",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic understanding, but no systematic adherence",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Unaware of global privacy standards",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question311",
                          "title": "How does your organization handle data anonymization to protect user privacy in AI datasets?",
                          "choices": [
                              {
                                  "text": "Consistent anonymization techniques across all datasets",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Advanced anonymization techniques for most AI datasets",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic anonymization techniques applied inconsistently",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No anonymization: data is used as is",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question312",
                          "title": "In case of a data breach or privacy violation, how prepared is your organization to address and rectify the situation?",
                          "choices": [
                              {
                                  "text": "Advanced protocol: regularly reviewed with mock drills and updates , continuous monitoring and rapid response teams",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Structured protocol with designated teams but rarely reviewed",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic protocol, but not comprehensive or tested",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No established protocol for breaches",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question313",
                          "title": "How well-versed is your organization in data sovereignty laws and regulations across different regions/countries?",
                          "choices": [
                              {
                                  "text": "Detailed knowledge of varied jurisdictions with experts on board",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Good understanding of major regions/countries",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic awareness but lacks depth",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Not aware of data sovereignty laws",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question314",
                          "title": "How does your organization ensure that data storage and processing align with local data sovereignty requirements?",
                          "choices": [
                              {
                                  "text": "Strict protocols with data mapped and stored according to local laws and sovereignty rules",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Advanced Protocols: regular checks to ensure compliance with major regions' sovereignty laws",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic protocols: some alignment with sovereignty laws, but not consistent",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No specific protocols: data is stored wherever convenient",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question315",
                          "title": "How does your organization handle cross\u2014border data transfers, ensuring they adhere to data sovereignty laws?\n",
                          "choices": [
                              {
                                  "text": "Rigorous checks ensuring every transfer aligns with local sovereignty laws",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Structured protocols for most cross\u2014border transfers",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Aware but might have occasional lapses in adherence",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We don't consider sovereignty during cross\u2014border transfers",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question316",
                          "title": "How comprehensive are the AI policies and protocols in your organization overall?",
                          "choices": [
                              {
                                  "text": "Highly comprehensive policies",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderately comprehensive",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Limited",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We do not have any",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
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
                  "title": "Staff",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question58",
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
                      },
                      {
                          "type": "radiogroup",
                          "name": "question59",
                          "title": "How would you describe the proficiency level of your staff in adopting and fully leveraging the AI technologies that you are deploying?",
                          "choices": [
                              {
                                  "text": "Proficient: staff are adept at leveraging tool capabilities to their fullest",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderate: most staff can handle regular AI related tasks efficiently",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Intermediate: staff can use tools but often need guidance for advanced functions",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Beginner: significant training is required",
                                  "value": "Item 4",
                                  "beneficence": 3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question60",
                          "title": "Has your company invested in training programs to upskill existing employees in AI-related competencies?",
                          "choices": [
                              {
                                  "text": "Yes, but we hire external vendors to train our staff",
                                  "value": "Item 1",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, we have comprehensive internal training programs",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we have not implemented training programs yet but plan to in the future",
                                  "value": "Item 3",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question61",
                          "title": "When it comes to talent management, has your company started to think about \u2018accessibility\u2019 of AI technologies for employees who are disabled?",
                          "choices": [
                              {
                                  "text": "Yes, it is a core part of our AI strategy and talent planning",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, we have thought about it, but there are no clear answers",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, we are aware but we don\u2019t build these AI tools so we can\u2019t control this aspect",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, this is not a consideration at this time",
                                  "value": "Item 4",
                                  "beneficence": 3,
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
                  "name": "panel6",
                  "title": "Culture",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question62",
                          "title": "How urgently is your organization looking to embrace AI?",
                          "choices": [
                              {
                                  "text": "High urgency: the move to embrace AI is seen as highly important and urgent",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderate urgency: embracing AI is seen as important but the organization is not acting with urgency",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Limited urgency: embracing AI is seen as an inevitable driver of some change but not important or critical",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No urgency: there is no discussion or momentum around embracing AI within the organization",
                                  "value": "Item 4",
                                  "beneficence": 3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question63",
                          "title": "How receptive is your Board to embracing the changes brought about by AI?",
                          "choices": [
                              {
                                  "text": "High receptiveness: widespread acceptance and willingness to adopt",
                                  "value": "Item 1",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderate receptiveness: general acceptance and willingness to adopt",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Limited receptiveness: only limited teams / stakeholders accepting and willing to adopt",
                                  "value": "Item 3",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Not receptive: resistant to change and will struggle to adapt",
                                  "value": "Item 4",
                                  "beneficence": 2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question64",
                          "title": "How receptive is your Leadership Team to embracing the changes brought about by AI? ",
                          "choices": [
                              {
                                  "text": "High receptiveness: widespread acceptance and willingness to adopt",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderate receptiveness: general acceptance and willingness to adopt",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Limited receptiveness: only limited teams / stakeholders accepting and willing to adopt",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Not receptive: resistant to change and will struggle to adapt",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question65",
                          "title": "How receptive is your Middle Management to embracing the changes brought about by AI?",
                          "choices": [
                              {
                                  "text": "High receptiveness: widespread acceptance and willingness to adopt",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderate receptiveness: general acceptance and willingness to adopt",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Limited receptiveness: only limited teams / stakeholders accepting and willing to adopt",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Not receptive: resistant to change and will struggle to adapt",
                                  "value": "Item 4",
                                  "beneficence": 3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question66",
                          "title": "How receptive is your Employees to embracing the changes brought about by AI? ",
                          "choices": [
                              {
                                  "text": "High receptiveness: widespread acceptance and willingness to adopt",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderate receptiveness: general acceptance and willingness to adopt",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Limited receptiveness: only limited teams / stakeholders accepting and willing to adopt",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Not receptive: resistant to change and will struggle to adapt",
                                  "value": "Item 4",
                                  "beneficence": 3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "boolean",
                          "name": "question67",
                          "title": "Do you have a change management plan in place to address the changes brought about by developing/deploying AI technologies?",
                          "beneficenceTrue": -1,
                          "non_maleficenceTrue": -1,
                          "autonomyTrue": 0,
                          "justiceTrue": 0,
                          "explicabilityTrue": 0,
                          "beneficenceFalse": 2,
                          "non_maleficenceFalse": 2,
                          "autonomyFalse": 1,
                          "justiceFalse": 0,
                          "explicabilityFalse": 0
                      },
                      {
                          "type": "radiogroup",
                          "name": "question68",
                          "title": "How would you assess the quality and depth of the change management plan? ",
                          "choices": [
                              {
                                  "text": "Comprehensive: have thought through every aspect",
                                  "value": "Item 1",
                                  "beneficence": -1,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "In progress: we have some areas fully covered; others are under review",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Draft: just started developing",
                                  "value": "Item 3",
                                  "beneficence": -1,
                                  "non_maleficence": -1,
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
          "title": "Design State : Use case",
          "elements": [
              {
                  "type": "panel",
                  "name": "panel7",
                  "title": "Objectives",
                  "elements": [
                      {
                          "type": "comment",
                          "name": "question30",
                          "title": "Write a short description of the defined and documented objectives of the AI application?"
                      },
                      {
                          "type": "comment",
                          "name": "question31",
                          "title": "What client needs will the system address and how will this system meet them?"
                      },
                      {
                          "type": "checkbox",
                          "name": "question32",
                          "title": "How were those client needs identified?",
                          "choices": [
                              {
                                  "text": "Surveys among the appropriate demographics",
                                  "value": "Item 1",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Market research for similar products",
                                  "value": "Item 2",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Consultation with professionals from different fields , public institutions or NGOs",
                                  "value": "Item 3",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true,
                          "showNoneItem" : true
                      },
                      {
                          "type": "comment",
                          "name": "question33",
                          "visibleIf": "{question32} anyof ['Item 2', 'Item 1', 'Item 3', 'other']",
                          "title": "How did that consultation happen and to what extent?"
                      },
                      {
                          "type": "comment",
                          "name": "question75",
                          "title": "What problem is being solved?"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question76",
                          "title": "What area is being impacted by automation?",
                          "choices": [
                              {
                                  "text": "Health related services",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Economic interests (grants and contributions, tax benefits, debt collection)",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Social assistance (employment insurance, disability claims)",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Access and mobility (security clearances, border crossings)",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Licensing and issuance of permits",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Employment (recruitment, hiring, promotion, performance evaluation, monitoring, security clearance)",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Legal matters ( judiciary, police, prosecutor\u2019s office, civil rights )",
                                  "value": "Item 7",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Environmental protection",
                                  "value": "Item 8",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "comment",
                          "name": "question101",
                          "title": "Please describe the output produced by the system and any relevant information needed to interpret it in the context of the administrative decision."
                      },
                      {
                          "type": "comment",
                          "name": "question29",
                          "title": "Who are the stakeholders who will be affected by this system?"
                      },
                      {
                          "type": "comment",
                          "name": "question69",
                          "title": "For each stakeholder document the potential benefit and potential harms"
                      },
                      {
                          "type": "boolean",
                          "name": "question87",
                          "title": "Did you consider a mechanism to include the participation of the widest range of possible stakeholders in the AI system's design and development?",
                          "beneficenceTrue": 0,
                          "non_maleficenceTrue": -1,
                          "autonomyTrue": 0,
                          "justiceTrue": -1,
                          "explicabilityTrue": 0,
                          "beneficenceFalse": 1,
                          "non_maleficenceFalse": 0,
                          "autonomyFalse": 0,
                          "justiceFalse": 1,
                          "explicabilityFalse": 0
                      },
                      {
                          "type": "comment",
                          "name": "question317",
                          "visibleIf": "{question87} = true",
                          "title": "Describe that mechanism."
                      },
                      {
                          "type": "radiogroup",
                          "name": "question88",
                          "title": "Based on your answers to the previous questions, how would you rate the measures you put in place to ensure the involvement of the relevant stakeholders? ",
                          "choices": [
                              {
                                  "text": "Non-existent",
                                  "value": "Item 1",
                                  "beneficence": 4,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Completely inadequate",
                                  "value": "Item 2",
                                  "beneficence": 3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Almost adequate",
                                  "value": "Item 3",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Adequate",
                                  "value": "Item 4",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Fully adequate",
                                  "value": "Item 5",
                                  "beneficence": -3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question123",
                          "title": "Have you defined specific performance criteria for your system?",
                          "choices": [
                              {
                                  "text": "Yes. We have defined thorough performance criteria that are intended to be used as quality measures during the evaluation stage.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes. We have defined performance criteria that are less applicable and more like general goals that our system should meet.",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No. We have not done such process.",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question130",
                          "visibleIf": "{question123} anyof ['Item 1', 'Item 2']",
                          "title": "If yes, describe those criteria."
                      }
                  ]
              },
              {
                  "type": "panel",
                  "name": "panel9",
                  "title": "Automation",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question102",
                          "title": "Choose what represents the system best.",
                          "choices": [
                              {
                                  "text": "People will be responsible for troubleshooting triggered by system alerts but will not otherwise oversee system operation. For example, an AI system that generates keywords from unstructured text alerts the operator of errors, such as improper format of submission files.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 4,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "The system will support effective hand-off to people but will be designed to automate most use. For example, an AI system that generates keywords from unstructured text that can be configured by system admins to alert the operator when keyword generation falls below a certain confidence threshold.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 3,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "The system will require effective hand-off to people but will be designed to automate most use. For example, an AI system that generates keywords from unstructured text alerts the operator when keyword generation falls below a certain confidence threshold (regardless of system admin configuration).",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 2,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "People will evaluate system outputs and can intervene before any action is taken: the system will proceed unless the reviewer intervenes. For example, an AI system that generates keywords from unstructured text will deliver the generated keywords for operator review but will finalize the results unless the operator intervenes.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "People will make decisions based on output provided by the system: the system will not proceed unless a person approves. For example, an AI system that generates keywords from unstructured text but does not finalize the results without review and approval from the operator",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "checkbox",
                          "name": "question104",
                          "title": "Please describe whether the AI system",
                          "choices": [
                              {
                                  "text": "Is a self-learning or autonomous system",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 3,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Is overseen by a human-in-the-loop",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 2,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Is overseen by a human-on-the-loop",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Is overseen by a human-in-command",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "comment",
                          "name": "question82",
                          "title": "To what specific process does the automation relate? "
                      },
                      {
                          "type": "comment",
                          "name": "question78",
                          "title": "Describe the role of the system in the decision-making process."
                      },
                      {
                          "type": "comment",
                          "name": "question86",
                          "title": "On what legal basis is the algorithm for automated decision-making implemented?"
                      },
                      {
                          "type": "checkbox",
                          "name": "question28",
                          "title": " What is motivating your team to introduce automation into this decision-making process? ",
                          "choices": [
                              {
                                  "text": "Existing backlog of work or cases",
                                  "value": "Item 4",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Improve overall quality of decisions",
                                  "value": "Item 5",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Lower transaction costs of an existing program",
                                  "value": "Item 6",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "The system is performing tasks that humans could not accomplish in a reasonable period of time",
                                  "value": "Item 7",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Use innovative approaches",
                                  "value": "Item 8",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Eliminating delays in the current system",
                                  "value": "Item 9",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Increasing the availability of services for the citizen",
                                  "value": "Item 10",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "boolean",
                          "name": "question71",
                          "title": "Will the system be making decisions or assessments that require judgement or discretion?",
                          "beneficenceTrue": 1,
                          "non_maleficenceTrue": 0,
                          "autonomyTrue": 2,
                          "justiceTrue": 0,
                          "explicabilityTrue": 0,
                          "beneficenceFalse": 0,
                          "non_maleficenceFalse": 0,
                          "autonomyFalse": 0,
                          "justiceFalse": 0,
                          "explicabilityFalse": 0
                      },
                      {
                          "type": "boolean",
                          "name": "question72",
                          "title": "Will the system perform an assessment or other operation that would not otherwise be completed by a human?  ",
                          "beneficenceTrue": -2,
                          "non_maleficenceTrue": 0,
                          "autonomyTrue": 0,
                          "justiceTrue": 0,
                          "explicabilityTrue": 0,
                          "beneficenceFalse": 0,
                          "non_maleficenceFalse": 0,
                          "autonomyFalse": 0,
                          "justiceFalse": 0,
                          "explicabilityFalse": 0
                      },
                      {
                          "type": "comment",
                          "name": "question81",
                          "visibleIf": "{question72} = true",
                          "title": "Describe the relevant function(s) of the system. "
                      },
                      {
                          "type": "boolean",
                          "name": "question73",
                          "title": "Have attempts been made to implement process changes by methods other than automation?",
                          "beneficenceTrue": 0,
                          "non_maleficenceTrue": 0,
                          "autonomyTrue": 0,
                          "justiceTrue": 0,
                          "explicabilityTrue": 0,
                          "beneficenceFalse": 2,
                          "non_maleficenceFalse": 0,
                          "autonomyFalse": 2,
                          "justiceFalse": 0,
                          "explicabilityFalse": 0
                      },
                      {
                          "type": "comment",
                          "name": "question74",
                          "visibleIf": "{question73} = true",
                          "title": " If so, why did they fail?"
                      },
                      {
                          "type": "boolean",
                          "name": "question77",
                          "title": "Does your system rely on the initiative, cooperation or trust of persons  concerned?",
                          "beneficenceTrue": 0,
                          "non_maleficenceTrue": 1,
                          "autonomyTrue": 1,
                          "justiceTrue": 0,
                          "explicabilityTrue": 0,
                          "beneficenceFalse": 0,
                          "non_maleficenceFalse": 0,
                          "autonomyFalse": 0,
                          "justiceFalse": 0,
                          "explicabilityFalse": 0
                      },
                      {
                          "type": "radiogroup",
                          "name": "question83",
                          "title": "How would you rate the persons concerned trust of AI systems for that use case ? ",
                          "choices": [
                              {
                                  "text": "Very High - People are waiting for AI developments in that area and they have prior experience with similar systems",
                                  "value": "Item 1",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "High - People are waiting for AI developments in that area but they haven't prior experience with similar systems",
                                  "value": "Item 2",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Normal - People are indifferent about AI developments in that area",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Low - People are suspicious of AI developments in that area but they haven't prior experience with similar systems",
                                  "value": "Item 4",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Very Low - People are suspicious of AI developments in that area due to prior bad experience with similar systems",
                                  "value": "Item 5",
                                  "beneficence": 2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question103",
                          "title": "How likely is it that a lack of knowledge of the AI system among its users will result in harm to individuals or communities?",
                          "choices": [
                              {
                                  "text": "Very likely",
                                  "value": "Item 1",
                                  "beneficence": 4,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Likely",
                                  "value": "Item 2",
                                  "beneficence": 3,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Neutral",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Not very likely",
                                  "value": "Item 4",
                                  "beneficence": 1,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Not likely",
                                  "value": "Item 5",
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
                  "name": "panel3",
                  "title": "Ethical assessments/Risks",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question45",
                          "title": "Is the project within an area of intense public scrutiny (e.g. because of privacy concerns) and/or frequent litigation? ",
                          "choices": [
                              {
                                  "text": "Yes. The project falls within an area that creates high controversy among the general public.",
                                  "value": "Item 1",
                                  "beneficence": 3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes. The project falls within an area that creates high controversy among a specific demographic while the general public is mostly neutral about it.",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Neutral. The project falls within an area that that has the potential to create controversy among the general public but hasn't so far.",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
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
                      },
                      {
                          "type": "boolean",
                          "name": "question79",
                          "title": "Are clients in this line of business particularly vulnerable?",
                          "beneficenceTrue": 3,
                          "non_maleficenceTrue": 0,
                          "autonomyTrue": 0,
                          "justiceTrue": 0,
                          "explicabilityTrue": 0,
                          "beneficenceFalse": 0,
                          "non_maleficenceFalse": 0,
                          "autonomyFalse": 0,
                          "justiceFalse": 0,
                          "explicabilityFalse": 0
                      },
                      {
                          "type": "checkbox",
                          "name": "question80",
                          "visibleIf": "{question79} = true",
                          "title": "Why is that ?",
                          "choices": [
                              {
                                  "text": "They are a part of a historically marginalised group (due to race, ethnicity, gender, sexual orientation, religious or political beliefs etc)",
                                  "value": "Item 1",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "They are disabled/dealing with health issues",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "They are in a vulnerable emotional state / easily manipulated",
                                  "value": "Item 3",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "They are children",
                                  "value": "Item 4",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "They are not technologically literate",
                                  "value": "Item 5",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "radiogroup",
                          "name": "question84",
                          "title": " Are the impacts resulting from the decision reversible? ",
                          "choices": [
                              {
                                  "text": "Very easily reversible",
                                  "value": "Item 1",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Easily reversible",
                                  "value": "Item 2",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Neutral",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Difficult to reverse",
                                  "value": "Item 4",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Very difficult to reverse",
                                  "value": "Item 5",
                                  "beneficence": 2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question85",
                          "title": "Describe why the impacts resulting from the decision are as per selected option above. "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question89",
                          "title": " How long will impacts from the decision last?",
                          "choices": [
                              {
                                  "text": "seconds",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "minutes",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "hours",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "days",
                                  "value": "Item 4",
                                  "beneficence": 3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "years",
                                  "value": "Item 5",
                                  "beneficence": 4,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question90",
                          "title": "Describe why the impacts resulting from the decision are as per selected option above. "
                      },
                      {
                          "type": "checkbox",
                          "name": "question93",
                          "title": "The decision might have a negative impact on the autonomy of the persons involved in the following ways:",
                          "choices": [
                              {
                                  "text": "Autonomy/agency loss",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Impersonation/identity theft",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "IP/copyright loss",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Personality rights loss",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "checkbox",
                          "name": "question94",
                          "title": "The decision might cause physical harm on the persons involved in the following ways:",
                          "choices": [
                              {
                                  "text": "Bodily injury",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Loss of life",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Personal health deterioration",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Property damage",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "checkbox",
                          "name": "question95",
                          "title": "The decision might have a negative psychological impact on the persons involved in the following ways:",
                          "choices": [
                              {
                                  "text": "Addiction",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Alienation/isolation",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Anxiety/distress",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Coercion/manipulation",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Dehumanisation/objectification",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Harassement/abuse/intimidation",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Over-reliance",
                                  "value": "Item 7",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Radicalisation",
                                  "value": "Item 8",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Self-harm",
                                  "value": "Item 9",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Sexualization",
                                  "value": "Item 10",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Trauma",
                                  "value": "Item 11",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "checkbox",
                          "name": "question92",
                          "title": "The system might cause reputational harm to the persons involved in the following ways:",
                          "choices": [
                              {
                                  "text": "Defamation/libel/slander",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Loss of confidence/trust",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "checkbox",
                          "name": "question96",
                          "title": "The decision might cause business or financial harm to the persons involved in the following of ways",
                          "choices": [
                              {
                                  "text": "Business operations / infrastructure damage",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Confidentiality loss",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Financial/earnings loss",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Livelihood loss",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Monopolisation",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Opportunity loss",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "checkbox",
                          "name": "question97",
                          "title": "The decision might have a negative impact on human rights and civil liberties in the following ways:",
                          "choices": [
                              {
                                  "text": "Benefits / entitlements loss",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Dignity loss",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Discrimination",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Loss of freedom of speech/expression",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Loss of freedom of assembly/association",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Loss of social rights and access to public services",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Loss of right to information",
                                  "value": "Item 7",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Loss of right to free elections",
                                  "value": "Item 8",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Loss of right to liberty and security",
                                  "value": "Item 9",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Loss of right to due process",
                                  "value": "Item 10",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Privacy loss",
                                  "value": "Item 11",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "checkbox",
                          "name": "question98",
                          "title": "The decision might have a negative political economic impact in these ways:",
                          "choices": [
                              {
                                  "text": "Critical infrastructure damage",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Economic instability",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Power concentration",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Electoral interference",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Institutional trust loss",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Political instability",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Political manipulation",
                                  "value": "Item 7",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "checkbox",
                          "name": "question99",
                          "title": "The decision might have a negative environmental impact in these ways:",
                          "choices": [
                              {
                                  "text": "Biodiversity loss",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Carbon emissions",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Electronic waste",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Excessive energy consumption",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Excessive landfil",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Excessive water consumption",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Natural resource extraction",
                                  "value": "Item 7",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Pollution",
                                  "value": "Item 8",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "checkbox",
                          "name": "question91",
                          "title": "Does the system impact working conditions within the implementing authority?",
                          "choices": [
                              {
                                  "text": "The system create the risk of de-skilling your staff",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "The system promotes or requires new (digital) skills",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "The system requires special abilities not yet available in your existing staff.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "The system reduces the number of staff required in your administrative agency,",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "comment",
                          "name": "question100",
                          "title": "How could this system be unintentionally or intentionally misused?"
                      }
                  ]
              }
          ]
      },
      {
          "name": "page4",
          "title": "Development Stage : Data ",
          "elements": [
              {
                  "type": "panel",
                  "name": "panel10",
                  "title": "Source and Documentation",
                  "elements": [
                      {
                          "type": "checkbox",
                          "name": "question224",
                          "title": "Which of the following best describes this system's inputs and outputs?",
                          "choices": [
                              {
                                  "text": "Structured data (e.g., databases, spreadsheets)",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Unstructured data (e.g., text, images, audio)",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Semi-structured data (e.g., JSON, XML)",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Real-time data streams (e.g., IoT sensors)",
                                  "value": "Item 7",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 2,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question116",
                          "title": "Describe the kind of training/input data your system needs."
                      },
                      {
                          "type": "checkbox",
                          "name": "question226",
                          "title": "Who was involved in the data selection process?",
                          "choices": [
                              {
                                  "text": "Data scientists",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Domain experts",
                                  "value": "Item 2",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Legal/compliance teams",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": -1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "External consultants",
                                  "value": "Item 4",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "text",
                          "name": "question117",
                          "title": "Who was in charge of the data selection process?"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question228",
                          "title": "Is the training data reused or collected specifically for this application?",
                          "choices": [
                              {
                                  "text": "All data is publicly available",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "All data is collected specifically for this app",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "A mix of both",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question229",
                          "title": "Will the system use data from multiple sources?",
                          "choices": [
                              {
                                  "text": "Yes, from internal sources",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, from external sources",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 2
                              },
                              {
                                  "text": "Yes, from a mix of both",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 1
                              }
                          ],
                          "showNoneItem": true,
                          "noneText": "No, from a single source"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question330",
                          "title": "Will the system make direct use of data from devices belonging to citizens or economic operators?",
                          "choices": [
                              {
                                  "text": "Yes, from IoT devices",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 1
                              },
                              {
                                  "text": "Yes, from mobile devices",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                "text": "Yes, from both",
                                "value": "Item 3",
                                "beneficence": 0,
                                "non_maleficence": 1,
                                "autonomy": 1,
                                "justice": 0,
                                "explicability": 1
                            }
                          ],
                          "showOtherItem": true,
                          "showNoneItem": true,
                          "noneText": "No"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question334",
                          "title": "Will the system require input data from Internet- or telephony-connected devices?",
                          "choices": [
                              {
                                  "text": "Yes, from IoT devices",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 1
                              },
                              {
                                  "text": "Yes, from sensors",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 1
                              },
                              {
                                "text": "Yes, from both",
                                "value": "Item 3",
                                "beneficence": 0,
                                "non_maleficence": 0,
                                "autonomy": 0,
                                "justice": 0,
                                "explicability": 1
                            }
                          ],
                          "showNoneItem": true,
                          "noneText": "No"
                      },
                      {
                          "type": "comment",
                          "name": "question114",
                          "title": "Name your data sources."
                      }
                  ]
              },
              {
                  "type": "panel",
                  "name": "panel13",
                  "title": "Privacy and Legality",
                  "elements": [
                      {
                          "type": "boolean",
                          "name": "question105",
                          "title": "Is your system being trained, was it developed or is operated by using or processing personal data (including special categories of personal data)?",
                          "beneficenceTrue": 0,
                          "non_maleficenceTrue": 2,
                          "autonomyTrue": 2,
                          "justiceTrue": 0,
                          "explicabilityTrue": 0,
                          "beneficenceFalse": 0,
                          "non_maleficenceFalse": 0,
                          "autonomyFalse": 0,
                          "justiceFalse": 0,
                          "explicabilityFalse": 0
                      },
                      {
                          "type": "radiogroup",
                          "name": "question106",
                          "title": "What is the highest security classification of the input data used by the system? ",
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
                                  "non_maleficence": 1,
                                  "autonomy": 1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Classified-Confidential",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 2,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Protected B-Protected C",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 3,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Secret-Top Secret",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 4,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question110",
                          "title": "Rate the risks related to increased surveillance due to your data gathering process?",
                          "choices": [
                              {
                                  "text": "High",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 2,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderate",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Low",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question111",
                          "title": "Explain your answer to the above question. "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question125",
                          "title": "Is the data anonymised or pseudonymised?",
                          "choices": [
                              {
                                  "text": "Anonymised",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": -1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Pseudonymised",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": -1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Neither",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 1,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question107",
                          "visibleIf": "{question125} = 'Item 1'",
                          "title": "Which techniques are used for anonymisation?",
                          "choices": [
                              {
                                  "text": "De-identification",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": -1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Field generalization",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": -1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Aggregation queries",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": -1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Differential privacy",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": -1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                            {
                                "text": "Federated learning/Secure aggregation",
                                "value": "Item 4",
                                "beneficence": 0,
                                "non_maleficence": 0,
                                "autonomy": -1,
                                "justice": 0,
                                "explicability": 0
                            }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "radiogroup",
                          "name": "question108",
                          "title": "Which techniques are used for pseudonymisation?",
                          "choices": [
                              {
                                  "text": "Tokenization",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": -1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Hashing",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": -1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Encryption",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": -1,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "radiogroup",
                          "name": "question129",
                          "title": "Have the risks of re-identification been assessed?",
                          "choices": [
                              {
                                  "text": "Yes, and they are low",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes and they are moderate",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, and they are high",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 2,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, they haven't been assessed",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 3,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question131",
                          "title": "Are all the variables considered for training the model necessary? ",
                          "choices": [
                              {
                                  "text": "Yes, because the system would not work otherwise",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, because the system better/more accurate",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, they are not strictly necessary",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 2,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "checkbox",
                          "name": "question109",
                          "title": "Does the system assume the use of special categories of personal data as defined in Article 9 of the GDPR?",
                          "choices": [
                              {
                                  "text": "Racial or ethnic origin",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Political opinions",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Religious and philosophical beliefs",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Trade union membership",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Genetic data",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Biometric data",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Health data",
                                  "value": "Item 7",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Sex life and sexual orientation",
                                  "value": "Item 8",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              }
                          ],
                          "showNoneItem": true
                      },
                      {
                          "type": "checkbox",
                          "name": "question113",
                          "title": "Does sensitive data meet one of the exceptions set out in Article 9 of the GDPR?",
                          "choices": [
                              {
                                  "text": "Explicit consent",
                                  "value": "Item 1",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Necessary for employment and social security purposes",
                                  "value": "Item 2",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Protection of the vital interests of the data subject or of another natural person",
                                  "value": "Item 3",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "In the course of legitimate activities by a foundation and similar bodies",
                                  "value": "Item 4",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Related to personal data which are manifestly made public by the data subject",
                                  "value": "Item 5",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Necessary for the establishment, exercise or defence of legal claims",
                                  "value": "Item 6",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Necessary for reasons of substantial public interest, on the basis of union or Member State law",
                                  "value": "Item 7",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Necessary for medicinal purposes or for the management of health systems and services",
                                  "value": "Item 8",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Necessary for reasons of public interest in the area of public health",
                                  "value": "Item 9",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Necessary for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes",
                                  "value": "Item 10",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showNoneItem": true
                      },
                      {
                          "type": "comment",
                          "name": "question156",
                          "title": "Describe how the legal compliance with respect to data protection has been assessed."
                      },
                      {
                          "type": "radiogroup",
                          "name": "question151",
                          "title": "Will the owners of the personal information used by the system have the right to withdraw consent ,the right to object and the right to be forgotten in the AI system? ",
                          "choices": [
                              {
                                  "text": "Yes, at any time for any use case",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but only during specific timeframes and for specific use cases",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 1,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 4,
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
                  "title": "Quality and Bias ",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question115",
                          "title": "Can the method of collecting data lead to bias?",
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
                                  "justice": 3,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we believe our data collection method is unbiased",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We have not assessed this",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 4,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question118",
                          "visibleIf": "{question115} anyof ['Item 1', 'Item 2']",
                          "title": "How did you combat this ?"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question157",
                          "title": "Did you analyse or annotate unstructured data (e.g., text, images, audio) for this system?",
                          "choices": [
                              {
                                  "text": "Yes, and the annotation was done by trained professionals",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but the annotation was done by untrained individuals",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we did not analyse or annotate unstructured data",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question124",
                          "visibleIf": "{question157} anyof ['Item 2', 'Item 1']",
                          "title": "Is/was the quality of their work monitored?",
                          "choices": [
                              {
                                  "text": "Yes, through regular quality checks",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but only occasionally",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, their work is not monitored",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "boolean",
                          "name": "question112",
                          "title": "Is the dataset dynamic (ie continuously fed with new data) or static (ie fixed and clearly defined) ?\n",
                          "labelTrue": "Dynamic",
                          "labelFalse": "Static",
                          "beneficenceTrue": 0,
                          "non_maleficenceTrue": 0,
                          "autonomyTrue": 2,
                          "justiceTrue": 2,
                          "explicabilityTrue": 2,
                          "beneficenceFalse": 0,
                          "non_maleficenceFalse": 0,
                          "autonomyFalse": 0,
                          "justiceFalse": 0,
                          "explicabilityFalse": 0
                      },
                      {
                          "type": "radiogroup",
                          "name": "question152",
                          "visibleIf": "{question112} = true",
                          "title": "If dynamic, what measures ensure the continuous quality of the data?",
                          "choices": [
                              {
                                  "text": "Automated data validation checks",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -2,
                                  "explicability": 0
                              },
                              {
                                  "text": "Regular audits by data quality teams",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -2,
                                  "explicability": 0
                              },
                              {
                                  "text": "Real-time anomaly detection systems",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -2,
                                  "explicability": 0
                              },
                              {
                                  "text": "Manual review of incoming data",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -2,
                                  "explicability": 0
                              },
                              {
                                "text": "None",
                                "value": "Item 5",
                                "beneficence": 0,
                                "non_maleficence": 0,
                                "autonomy": 0,
                                "justice": 5,
                                "explicability": 0
                            }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "radiogroup",
                          "name": "question119",
                          "title": "Is the volume of data collected justified for the learning task?",
                          "choices": [
                              {
                                  "text": "Yes, we used the absolute minimum required for accuracy",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, we used a moderate amount",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we used more data than necessary",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We are unsure",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question126",
                          "title": "Are the data complete for the intended use case?",
                          "choices": [
                              {
                                  "text": "Yes, all necessary data is present",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Partially, some data is missing but it does not significantly impact results",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, critical data is missing",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 3,
                                  "explicability": 0
                              },
                              {
                                  "text": "We are unsure",
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
                          "type": "radiogroup",
                          "name": "question127",
                          "title": "Have you checked for uniqueness in the data?",
                          "choices": [
                              {
                                  "text": "Yes, using automated tools (e.g., deduplication algorithms)",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, through manual review",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "No",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 5,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question128",
                          "title": "Have you checked for accuracy in the data?",
                          "choices": [
                              {
                                  "text": "Yes, using automated validation tools",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, through manual cross-referencing with reliable sources",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "No",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 5,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question132",
                          "title": "Have you checked for timeliness and currency in the data?",
                          "choices": [
                              {
                                  "text": "Yes, we ensure data is up-to-date and relevant",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Partially, some data may be outdated",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 2,
                                  "explicability": 0
                              },
                              {
                                  "text": "No",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 5,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question145",
                          "title": "Have you checked for consistency in the data?",
                          "choices": [
                              {
                                  "text": "Yes, using consistency checks (e.g., cross-field validation)",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Partially, some inconsistencies remain",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 2,
                                  "explicability": 0
                              },
                              {
                                  "text": "No",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 5,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question146",
                          "title": "Have you checked for relevance in the data?",
                          "choices": [
                              {
                                  "text": "Yes, all data is relevant to the task",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Partially, some irrelevant data is included",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 2,
                                  "explicability": 0
                              },
                              {
                                  "text": "No",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 5,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question147",
                          "title": "Have you checked for representativeness in the data?",
                          "choices": [
                              {
                                  "text": "Yes, the data is representative of the real-world environment",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Partially, some groups or scenarios are underrepresented",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 2,
                                  "explicability": 0
                              },
                              {
                                  "text": "No",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 5,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "checkbox",
                          "name": "question148",
                          "visibleIf": "{question147} anyof ['Item 1', 'Item 2']",
                          "title": "How did you ensure representativeness?",
                          "choices": [
                              {
                                  "text": "Stratified sampling",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Oversampling underrepresented groups",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "External validation by domain experts",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true,
                          "showNoneItem": true
                      },
                      {
                          "type": "checkbox",
                          "name": "question122",
                          "title": "Does the training data include data related to the particular characteristics of the individuals such as:",
                          "choices": [
                              {
                                  "text": "sex",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "gender identity",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "race",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "colour",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "ethnic origin",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "social origin",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "genetic features",
                                  "value": "Item 7",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "language",
                                  "value": "Item 8",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "religion or belief",
                                  "value": "Item 9",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "political or any other opinion",
                                  "value": "Item 10",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "membership of a national minority",
                                  "value": "Item 11",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "property",
                                  "value": "Item 12",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "place of birth",
                                  "value": "Item 13",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "disability",
                                  "value": "Item 14",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "age",
                                  "value": "Item 15",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "sexual orientation",
                                  "value": "Item 16",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              }
                          ],
                          "showNoneItem": true
                      },
                      {
                          "type": "radiogroup",
                          "name": "question143",
                          "visibleIf": "{question122} anyof ['Item 1', 'Item 2', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11', 'Item 14', 'Item 13', 'Item 12', 'Item 15', 'Item 16', 'Item 3']",
                          "title": "Has a study of the correlations between these particular characteristics and the rest of the training data been carried out to identify possible proxies?",
                          "choices": [
                              {
                                  "text": "Yes, and we have mitigated their impact",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -5,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but no mitigation measures are in place",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -3,
                                  "explicability": 0
                              },
                              {
                                  "text": "No",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 5,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question120",
                          "title": "Has a discrimination/bias study been conducted for sensitive attributes?",
                          "choices": [
                              {
                                  "text": "Yes, and bias was identified",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 2,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but no bias was identified",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No",
                                  "value": "Item 3",
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
                          "name": "question144",
                          "visibleIf": "{question120} anyof ['Item 2', 'Item 1']",
                          "title": "Describe how the bias study has been carried out "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question121",
                          "visibleIf": "{question120} anyof ['Item 1']",
                          "title": "If bias was identified, what measures were taken to combat it?",
                          "choices": [
                              {
                                  "text": "Rebalancing the dataset",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -2,
                                  "explicability": 0
                              },
                              {
                                  "text": "Adjusting the model\u2019s weighting for sensitive attributes",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Using fairness-aware algorithms (e.g., adversarial debiasing)",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true,
                          "showNoneItem": true
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
                  "name": "panel14",
                  "title": "Algorithm ",
                  "elements": [
                      {
                          "type": "comment",
                          "name": "question164",
                          "title": "Describe in general, if possible in a non-technical manner, the technology/technologies you intend to use (This could include: (1) The date and the version of the system; (2) A description of hardware on which the system is intended to run; (3) Where the system is a component of products, photographs or illustrations showing external features, marking and internal layout of these products)"
                      },
                      {
                          "type": "comment",
                          "name": "question167",
                          "title": "Why was this algorithm chosen?"
                      },
                      {
                          "type": "comment",
                          "name": "question168",
                          "title": "How was it implemented (source code, libraries used, etc) ?"
                      },
                      {
                          "type": "boolean",
                          "name": "question186",
                          "title": "Is the model based on some pre-existing similar model/tool/system?",
                          "beneficenceTrue": 0,
                          "non_maleficenceTrue": 0,
                          "autonomyTrue": 0,
                          "justiceTrue": 0,
                          "explicabilityTrue": -2,
                          "beneficenceFalse": 0,
                          "non_maleficenceFalse": 0,
                          "autonomyFalse": 0,
                          "justiceFalse": 0,
                          "explicabilityFalse": 0
                      },
                      {
                          "type": "comment",
                          "name": "question185",
                          "visibleIf": "{question186} = true",
                          "title": "If yes, describe the source of your model : "
                      },
                      {
                          "type": "checkbox",
                          "name": "question169",
                          "title": "We can divide the types of artificial intelligence based on the method used by intelligent agents to arrive at a solution. Check all that applies to your model:",
                          "choices": [
                              {
                                  "text": "Search Method : Here the problem is represented by a set of states over which the intelligent agent performs a search.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Logic method : In this method, agents are designed that can form a cognitive representation of a complex world, use an inference process to derive new representations of that world, and use those new representations to decide what their next move will be.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Probabilistic Method : Here, unlike the previous two methods where decisions are based either on absolute knowledge of the conditions or on consideration of all possible scenarios in the face of uncertainty, probabilistic theories and laws are used so that agents convert uncertainty into degrees of belief on which to make decisions.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 3
                              },
                              {
                                  "text": "Machine Learning : Here we study how agents can improve their behavior through the diligent study of data and examples without explicit programming.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 3
                              },
                              {
                                  "text": "Physical environment interaction method : Here we consider how an agent can make inferences and act on them in the unfiltered real world.",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 3,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "checkbox",
                          "name": "question170",
                          "visibleIf": "{question169} allof ['Item 4']",
                          "title": "If your model is using machine learning check all the methods that were used in its training :\n",
                          "choices": [
                              {
                                  "text": "Supervised learning : Here the agent is trained on a tagged data set, i.e. each input data is accompanied by a corresponding output tag. The goal is for the agent to learn the mapping between inputs and outputs so that it can predict the output for new, unseen data.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Unsupervised learning : Here the data has no labels and it is the goal of the agent to extract some structure or pattern from the data and make inferences.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 1
                              },
                              {
                                  "text": "Reinforcement learning : Here learning is based on the agent's interaction with its environment. More specifically, the agent receives feedback in the form of rewards or penalties based on its actions and its goal is to discover a strategy that maximizes the cumulative reward over time.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 1
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "checkbox",
                          "name": "question171",
                          "visibleIf": "{question169} allof ['Item 5']",
                          "title": "If your model is interacting with the physical environment check all that applies :",
                          "choices": [
                              {
                                  "text": "Natural language processing : Here agents try to communicate in natural language with people and also learn by reading texts written in natural language.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Machine vision : Here agents are equipped with cameras and try to interpret visual information from their environment in order to recognize objects, make a decision or interact with their environment.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Robotics : Here agents are equipped with both sensors and physical action devices so that they can move and interact with the real world, making decisions based on their analyses of stimuli.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "radiogroup",
                          "name": "question173",
                          "title": "What is the degree of automation of the system? ",
                          "choices": [
                              {
                                  "text": "The system only makes recommendations to people already knowledgable in the field",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "The system makes recommendations to people who don't necessarily have the appropriate knowledge to contest them",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 1,
                                  "justice": 1,
                                  "explicability": 1
                              },
                              {
                                  "text": "The system makes decisions but has regular oversight from humans",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 2,
                                  "justice": 2,
                                  "explicability": 2
                              },
                              {
                                  "text": "The system makes decisions but in case of error or client complain a human can intervene and reverse the decision",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 3,
                                  "justice": 3,
                                  "explicability": 3
                              },
                              {
                                  "text": "The system makes decisions and there are no human oversight that can reverse that",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 4,
                                  "justice": 4,
                                  "explicability": 4
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question165",
                          "title": " How complicated is your model?",
                          "choices": [
                              {
                                  "text": "Simple tasks, such as classification based on few features into a few categories with clear boundaries. For such decisions, humans could easily agree on the correct answer, and identify mistakes made by the system. For example, a natural language processing system that checks spelling in documents.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderately complex tasks, such as classification into a few categories that are subjective. Typically,ground truth is defined by most evaluators arriving at the same answer. For example, a natural language processing system that autocompletes a word or phrase as the user is typing.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 2
                              },
                              {
                                  "text": "Complex tasks, such as models based on many features, not easily interpretable by humans, resulting in highly variable predictions without clear boundaries between decision criteria. For such decisions, humans would have a difficult time agreeing on the best answer, and there may be no clearly incorrect answer. For example, a natural language processing system that generates prose based on user input prompts.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 4
                              }
                          ]
                      },
                      {
                          "type": "checkbox",
                          "name": "question172",
                          "title": "What is your model used for ?",
                          "choices": [
                              {
                                  "text": "Image and object recognition: Analyzing very large data sets to automate the recognition, classification, and context associated with an image or object.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Text and speech analysis: Analyzing large data sets to recognize, process, and tag text, speech, voice, and make recommendations based on the tagging",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Risk assessment: Analyzing very large data sets to identify patterns and recommend courses of action and in some cases trigger specific actions",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Content generation: Analyzing large data sets to categorize, process, triage, personalize, and serve specific content for specific contexts",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Process optimization and workflow automation: Analyzing large data sets to identify and anomalies, cluster patterns, predict outcomes or ways to optimize; and automate specific workflows",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                            ],
                              "showOtherItem": true
                      },
                      {
                          "type": "radiogroup",
                          "name": "question166",
                          "title": "How novel is your model?",
                          "choices": [
                              {
                                  "text": "The system includes AI supported by basic research and has not yet been deployed to production systems at scale for similar uses.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "The system includes AI supported by evidence demonstrating feasibility for uses similar to this intended use in production systems.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 1
                              },
                              {
                                  "text": "This is the first time that one or more system component(s) are to be validated in relevant environment(s) for the intended use. Operational conditions that can be supported have not yet been completely defined and evaluated.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 2
                              },
                              {
                                  "text": "This is the first time the whole system will be validated in relevant environment(s) for the intended use. Operational conditions that can be supported will also be validated. Alternatively, nearly similar systems or nearly similar methods have been applied by other organizations with defined success.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 3
                              },
                              {
                                  "text": "The whole system has been deployed for all intended uses, and operational conditions have been qualified through testing and uses in production.",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 4
                              }
                          ]
                      }
                  ]
              },
              {
                  "type": "panel",
                  "name": "panel16",
                  "title": "Fairness",
                  "elements": [
                      {
                          "type": "checkbox",
                          "name": "question182",
                          "title": "Which types of fairness/fairness metrics have you implemented ",
                          "choices": [
                              {
                                  "text": "Individual fairness : Every individual should be treated like their peers regardless of their identity or the categories to which he or she belongs.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Group fairness : The system should produce equal or equivalent results for two different categories if they are summarised in a statistic.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Fairness through unawareness : Under this approach it is considered legitimate for the algorithm to ignore sensitive characteristics (e.g. race, gender, ethnicity) when making decisions, thus assuming that fairness is achieved if these characteristics are not explicitly used in the decision making process. Of course, this approach has many critics as artificial algorithms can guess latent characteristics based on the rest thus continuing the bias (e.g. if the algorithm ends up being biased based on postcode this result may hide racial bias behind as people of the same race/ethnicity tend to live in nearby neighbourhoods)",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Equal outcome : Equal outcome justice or demographic equity is a group justice approach to decision-making systems that ensures that outcomes are distributed equally across different demographic groups separated by sensitive characteristics such as gender or ethnicity.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Equal opportunity : Ensures equal opportunities for people from different groups to succeed, but only between people with similar qualifications.",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Equal impact : Algorithmic decision making is done in a way that tries to ensure that the impact of a decision is distributed equally across different demographic groups.",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Statistical parity/Demographic parity: Ensures that individuals from different groups have the same probability of receiving a positive outcome.",
                                  "value": "Item 7",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Equality of odds: Requires that the true positive rate and false positive rate are the same for different groups.",
                                  "value": "Item 8",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Predictive parity :Ensures that the predicted positive outcome has the same precision across different groups.",
                                  "value": "Item 9",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Treatment equality: Focuses on balancing the ratio of false positive rate to false negative rate across different groups.",
                                  "value": "Item 10",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -1,
                                  "explicability": 0
                              },
                              {
                                  "text": "Intersectional fairness: Regardless of the combination of protected attributes, the probabilities of the outcomes will be similar. For example, the probability of being given a loan would be similar regardless of a protected group\u2019s intersecting combination of gender, race, and nationality.",
                                  "value": "Item 11",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": -2,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "comment",
                          "name": "question183",
                          "title": "Explain why did you choose that type of fairness/fairness metric."
                      },
                      {
                          "type": "checkbox",
                          "name": "question184",
                          "title": "Which of these tools have you used?",
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
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "boolean",
                          "name": "question159",
                          "title": "If the system has an interface with the public, did you assess whether that interface reflects the variety of digital literacy and its usability by those with special needs or disabilities or those at risk of exclusion?\n",
                          "beneficenceTrue": 0,
                          "non_maleficenceTrue": 0,
                          "autonomyTrue": 0,
                          "justiceTrue": -2,
                          "explicabilityTrue": 0,
                          "beneficenceFalse": 0,
                          "non_maleficenceFalse": 0,
                          "autonomyFalse": 0,
                          "justiceFalse": 2,
                          "explicabilityFalse": 0
                      },
                      {
                          "type": "boolean",
                          "name": "question160",
                          "visibleIf": "{question159} = true",
                          "title": "if yes, did you involve or consult with persons concerned in need of assistive technology during the design and development stages or the system?",
                          "beneficenceTrue": 0,
                          "non_maleficenceTrue": 0,
                          "autonomyTrue": 0,
                          "justiceTrue": -2,
                          "explicabilityTrue": 0,
                          "beneficenceFalse": 0,
                          "non_maleficenceFalse": 0,
                          "autonomyFalse": 0,
                          "justiceFalse": 2,
                          "explicabilityFalse": 0
                      }
                  ]
              },
              {
                  "type": "panel",
                  "name": "panel15",
                  "title": "Explainability and Transparency",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question174",
                          "title": "Will the algorithm be available as open source?",
                          "choices": [
                              {
                                  "text": "No",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 4
                              },
                              {
                                  "text": "No, but other information about the algorithm (like system objectives, operating rules etc) will be available",
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
                                "explicability": -2
                            }
                          ]
                      },
                      {
                          "type": "boolean",
                          "name": "question175",
                          "title": "Will the algorithm be a trade secret?",
                          "beneficenceTrue": 0,
                          "non_maleficenceTrue": 0,
                          "autonomyTrue": 0,
                          "justiceTrue": 2,
                          "explicabilityTrue": 0,
                          "beneficenceFalse": 0,
                          "non_maleficenceFalse": 0,
                          "autonomyFalse": 0,
                          "justiceFalse": 0,
                          "explicabilityFalse": 0
                      },
                      {
                          "type": "radiogroup",
                          "name": "question176",
                          "title": "Does the model provide explainations for its reasoning? ",
                          "choices": [
                              {
                                  "text": "Yes. It provides explanation to all the stakeholders (if its a loan application decision it provides explanation both to people whose loan got rejected/accepted and to the bank)",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -2
                              },
                              {
                                  "text": "Yes. It provides explanation only part of the stakeholders (either only the clients or only the bank)",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -1
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
                      },
                      {
                          "type": "checkbox",
                          "name": "question177",
                          "title": "Does the model changes the specificity of the explanation according to the knowledge level of the recipient ?",
                          "choices": [
                              {
                                  "text": "The system provides brief explanations appropriate to be read by people who are not technologically literate and have no specified knowledge of the field the system makes decisions for)",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -2
                              },
                              {
                                  "text": "The system provides brief explanations appropriate to be read by people have no specified knowledge of the field the system makes decisions for but have basic understanding of what an artificial intelligence is.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -2
                              },
                              {
                                  "text": "The system provides explanations for people knowledgable in the field the system makes decisions in.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -2
                              },
                              {
                                  "text": "The systems provides explanation appropriate for its developers",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -2
                              }
                          ]
                      },
                      {
                          "type": "checkbox",
                          "name": "question178",
                          "title": "Have the above  groups (general audiences, experts in the field, developers) been consulted/surveyed in the process of making the explanations the systems gives better",
                          "choices": [
                              {
                                  "text": "We have tested the expandability of our model with experts in the field",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -1
                              },
                              {
                                  "text": "No we have tested the expandability of our model with developers",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -1
                              },
                              {
                                  "text": "We have tested the expandability of our model with general audiences",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -1
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question263",
                          "title": "Do you provide any type of training / information about the system to the end users ?",
                          "choices": [
                              {
                                  "text": "No, we don't provide that type of training",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 4
                              },
                              {
                                  "text": "Yes, but its optional whether the end user will engage with the training or not",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 2
                              },
                              {
                                  "text": "Yes and its mandatory",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -2
                              }
                          ]
                      },
                      {
                          "type": "checkbox",
                          "name": "question179",
                          "title": "Does the model know its limits?",
                          "choices": [
                              {
                                  "text": "It can recognise when a prompt/task cannot be decided by its current expertise level",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -1
                              },
                              {
                                  "text": "It can recognise when a prompt/task can be partially decided by its current expertise level",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -1
                              }
                          ],
                          "showNoneItem": true,
                          "noneText": "It cannot do such thing"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question180",
                          "title": "What's the degree of interaction level between the person that's receiving the explanation and the model?\n",
                          "choices": [
                              {
                                  "text": "Declarative explanation : Here the systems provides an explanation, and there is no further interaction",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "One-way interaction : For this the explanation is determined based on a query or question input to the system",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -2
                              },
                              {
                                  "text": "Two-way interaction : This models a conversation between people. The person can probe further, and the machine can probe back, ask clarifying questions, or provide new avenues of exploration.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -4
                              }
                          ]
                      },
                      {
                          "type": "checkbox",
                          "name": "question181",
                          "title": "The explanation comes in the following formats :",
                          "choices": [
                              {
                                  "text": "Graphical/ Visual",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -1
                              },
                              {
                                  "text": "Verbal (Written or auditory)",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -1
                              },
                              {
                                  "text": "Visual and auditory alerts (eg siren system )",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -1
                              }
                          ]
                      }
                  ]
              },
              {
                  "type": "panel",
                  "name": "panel23",
                  "title": "Traceability ",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question262",
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
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question257",
                          "title": "Can you trace back which data was used by the AI system to make a certain decision or recommendation? ",
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
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question258",
                          "title": "Can you trace back which AI model, version or rules led to the decision(s) or recommendation(s) of the AI system?  ",
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
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question259",
                          "title": "Did you put adequate logging practices in place to record the decision(s) or recommendation(s) of the AI system? ",
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
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question260",
                          "visibleIf": "{question259} anyof ['Item 2', 'Item 3']",
                          "title": "Describe this practices :"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question261",
                          "title": "Based on your previous answers how would you rate the traceability of your system?",
                          "choices": [
                              {
                                  "text": "Non existent",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 5
                              },
                              {
                                  "text": "Completely Inadequate",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 3
                              },
                              {
                                  "text": "Almost Adequate",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 1
                              },
                              {
                                  "text": "Adequate",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -1
                              },
                              {
                                  "text": "Fully Adequate",
                                  "value": "Item 5",
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
                  "name": "question187",
                  "title": "Robustness and testing the tool ",
                  "elements": [
                      {
                          "type": "checkbox",
                          "name": "question188",
                          "title": "Has your system undergone the following tests ?",
                          "choices": [
                              {
                                  "text": "Regression testing: Regression testing is a type of testing that is used to find bugs in software that have already been fixed. This is done by running the software with different inputs and comparing the output to the expected output. This type of testing is used to verify that a software program continues to function properly after it has been modified or updated. This type of testing is typically performed after a new version of the software has been released, or after a change has been made to the code.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Functional testing: Functional testing is a type of testing that is used to verify that a system or software performs as expected. Load testing is a type of testing that is used to verify that a system or software can handle a heavy load or traffic. This type of testing is typically performed by running the software through a series of tests that exercise the various functions of the software.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Load testing: Load testing is a type of testing that is used to find bugs in software by running it with different inputs and checking if the output is as expected. It is used to verify that a software program is able to handle the load that is expected to be placed on it. This type of testing is typically done by running the software through a series of tests that simulate the load that the software will experience in production.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Stress testing: Stress testing involves subjecting a system to intense or extreme conditions in order to see how well it holds up. This can help to identify potential issues that may only arise under high levels of stress or strain.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Negative testing: Negative testing involves deliberately providing invalid or incorrect inputs to a system in order to see how it responds. This can help to uncover errors in input validation or handling that could lead to security vulnerabilities or data loss.",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Fuzz testing: A fuzz test (also known as a fuzzing test) is a software testing technique, usually automated or semi-automated, that involves providing invalid, unexpected, or random data to the inputs of a computer program. The program is then monitored for exceptions such as crashes, failing built-in code assertions, or potential memory leaks. Fuzz testing is effective in finding coding errors and security vulnerabilities. This involves feeding random or invalid data into a system and seeing how it responds. This can help to find potential vulnerabilities in the system.",
                                  "value": "Item 6",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Use case testing: Use case testing involves testing the system with realistic scenarios to see how it responds. This can help to identify potential usability issues.",
                                  "value": "Item 7",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Security testing: Security Testing involves testing the system for security vulnerabilities. This can help to identify potential security risks.",
                                  "value": "Item 8",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Black-box testing: Black-box testing is a method of software testing that examines the functionality of a software program without knowing the internal code structure. The tester is only aware of what the software is supposed to do but not how it does it. Black-box testing can be used to test the functionality of a software program, the usability of a user interface, and the compliance of a program with external standards.",
                                  "value": "Item 9",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Mutation testing: Mutation testing is a type of software testing that involves modifying a program\u2019s source code or its inputs and then testing to see if the program still behaves as expected. The goal of mutation testing is to find faults in a program\u2019s code or inputs that can cause the program to produce incorrect results.",
                                  "value": "Item 10",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Fault injection testing: Fault injection testing is a method of testing software by Introducing faults into the software program to see if the program can detect and handle the faults. Fault injection can be used to test the robustness of a program\u2019s error-handling capabilities.",
                                  "value": "Item 11",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "checkbox",
                          "name": "question189",
                          "title": "Have you used any of the following testing tools?",
                          "choices": [
                              {
                                  "text": "JUnit: JUnit is a popular open-source unit testing framework for Java. It is widely used in the Java development community and is well-suited for testing robustness. JUnit is easy to use and has a wide range of features, making it a good choice for robustness testing.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "TestNG: TestNG is another popular open-source unit testing framework for Java. Like JUnit, it is easy to use and has a wide range of features. TestNG is also well-suited for testing robustness.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Spock: Spock is a Groovy-based testing framework that can be used for testing Java applications. It has a concise and expressive syntax that makes it easy to write tests. Spock is also well-suited for testing robustness.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "JMeter: JMeter is a popular open-source performance testing tool. It can be used to test the performance of web applications under load. JMeter is easy to use and has a wide range of features, making it a good choice for robustness testing.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "LoadRunner: LoadRunner is a commercial performance testing tool from HP. It can be used to test the performance of web applications under load. LoadRunner is more expensive than JMeter but has more features and is better suited for enterprise applications.",
                                  "value": "Item 5",
                                  "beneficence": 0,
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
                  "name": "panel17",
                  "title": "Ethical Considerations ",
                  "elements": [
                      {
                          "type": "comment",
                          "name": "question190",
                          "title": "What is the best-case scenario that could arise from use of this system?"
                      },
                      {
                          "type": "comment",
                          "name": "question191",
                          "title": "What is the worst-case scenario to arise from use of this system?"
                      },
                      {
                          "type": "comment",
                          "name": "question193",
                          "title": "What kind of socio-environmental and technical requirements are necessary for the success of this system in operation? "
                      },
                      {
                          "type": "comment",
                          "name": "question220",
                          "title": "What are likely challenges/hurdles to achieving the best case scenario?"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question221",
                          "title": "Did you establish an AI ethics review board or a similar mechanism to discuss the overall accountability and ethics practices including potential unclear grey areas?",
                          "choices": [
                              {
                                  "text": "Yes, and it included people from both the humanities fields and people with technical knowledge about AI technologies",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, and it only included people with technical knowledge about AI technologies",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No",
                                  "value": "Item 3",
                                  "beneficence": 3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "matrixdropdown",
                          "name": "question192",
                          "title": "How would you rate the risks to autonomy the system poses \n( Importance \u2013 How consequential is this harm for the well-being of stakeholders? Which are irremediable and serious  \nUrgency \u2013 How immediate is this threat?   \nDifficulty \u2013 How difficult will it be to mitigate this harm? \nDetectability \u2013 How perceivable is this harm given the current design?\nProbability - How possible is this harm to happen ? )\n",
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
                                  "title": "Probability "
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
                                  "value": "Row 5",
                                  "text": "Autonomy/agency loss"
                              },
                              {
                                  "value": "Row 2",
                                  "text": "Impersonation/Identity theft"
                              },
                              {
                                  "value": "Row 3",
                                  "text": "IP/copyright loss"
                              },
                              {
                                  "value": "Row 4",
                                  "text": "Personality rights loss"
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question213",
                          "title": "What measures have you taken to mitigate this risks?"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question203",
                          "title": "Based on how you answer to the above question would you rate this measures as :\n",
                          "choices": [
                              {
                                  "text": "Non - existent",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Completely inadequate",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Almost Adequate",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Adequate",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Fully Adequate",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": -4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "matrixdropdown",
                          "name": "question194",
                          "title": "How would you rate the physical damage risks the system poses \n( Importance \u2013 How consequential is this harm for the well-being of stakeholders? Which are irremediable and serious  \nUrgency \u2013 How immediate is this threat?   \nDifficulty \u2013 How difficult will it be to mitigate this harm? \nDetectability \u2013 How perceivable is this harm given the current design?\nProbability - How possible is this harm to happen ? )\n",
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
                                  "text": "Bodily injury"
                              },
                              {
                                  "value": "Row 2",
                                  "text": "Loss of life"
                              },
                              {
                                  "value": "Row 3",
                                  "text": "Personal health deterioration"
                              },
                              {
                                  "value": "Row 4",
                                  "text": "Property damage"
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question212",
                          "title": "What measures have you taken to mitigate this risks ?  "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question204",
                          "title": "Based on how you answer to the above question would you rate this measures as :\n",
                          "choices": [
                              {
                                  "text": "Non - existent",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Completely inadequate",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Almost Adequate",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Adequate",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Fully Adequate",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": -4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "matrixdropdown",
                          "name": "question195",
                          "title": "How would you rate the psychological risks the system poses \n( Importance \u2013 How consequential is this harm for the well-being of stakeholders? Which are irremediable and serious  \nUrgency \u2013 How immediate is this threat?   \nDifficulty \u2013 How difficult will it be to mitigate this harm? \nDetectability \u2013 How perceivable is this harm given the current design?\nProbability - How possible is this harm to happen ? )\n",
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
                                  "text": "Addiction"
                              },
                              {
                                  "value": "Row 2",
                                  "text": "Alienation/Isolation"
                              },
                              {
                                  "value": "Row 3",
                                  "text": "Anxiety/Distress"
                              },
                              {
                                  "value": "Row 4",
                                  "text": "Coersion/manipulation"
                              },
                              {
                                  "value": "Row 5",
                                  "text": "Dehumanisation/Objectification"
                              },
                              {
                                  "value": "Row 6",
                                  "text": "Harassment/Abuse/Intimidation"
                              },
                              {
                                  "value": "Row 7",
                                  "text": "Over-reliance"
                              },
                              {
                                  "value": "Row 8",
                                  "text": "Radicalisation"
                              },
                              {
                                  "value": "Row 9",
                                  "text": "Self-harm"
                              },
                              {
                                  "value": "Row 10",
                                  "text": "Sexualisation"
                              },
                              {
                                  "value": "Row 11",
                                  "text": "Trauma"
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question214",
                          "title": "What measures have you taken to mitigate this risks?"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question210",
                          "title": "Based on how you answer to the above question would you rate this measures as :\n",
                          "choices": [
                              {
                                  "text": "Non - existent",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Completely inadequate",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Almost Adequate",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Adequate",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Fully Adequate",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": -4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "matrixdropdown",
                          "name": "question196",
                          "title": "How would you rate the reputational risks the system poses \n( Importance \u2013 How consequential is this harm for the well-being of stakeholders? Which are irremediable and serious  \nUrgency \u2013 How immediate is this threat?   \nDifficulty \u2013 How difficult will it be to mitigate this harm? \nDetectability \u2013 How perceivable is this harm given the current design?\nProbability - How possible is this harm to happen ? )\n",
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
                                  "text": "Defamation/libel/slander"
                              },
                              {
                                  "value": "Row 2",
                                  "text": "Loss of confidence/trust"
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question216",
                          "title": "What measures have you taken to mitigate this risks ?  "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question209",
                          "title": "Based on how you answer to the above question would you rate this measures as :\n",
                          "choices": [
                              {
                                  "text": "Non - existent",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Completely inadequate",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Almost Adequate",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Adequate",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Fully Adequate",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": -4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "matrixdropdown",
                          "name": "question197",
                          "title": "How would you rate the financial  risks the system poses \n( Importance \u2013 How consequential is this harm for the well-being of stakeholders? Which are irremediable and serious  \nUrgency \u2013 How immediate is this threat?   \nDifficulty \u2013 How difficult will it be to mitigate this harm? \nDetectability \u2013 How perceivable is this harm given the current design?\nProbability - How possible is this harm to happen ? )\n",
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
                                  "text": "Business operations/infrastructure damage"
                              },
                              {
                                  "value": "Row 2",
                                  "text": "Confidentiality loss"
                              },
                              {
                                  "value": "Row 3",
                                  "text": "Livelihood loss"
                              },
                              {
                                  "value": "Row 4",
                                  "text": "Financial/earnings loss"
                              },
                              {
                                  "value": "Row 5",
                                  "text": "Increased competition"
                              },
                              {
                                  "value": "Row 6",
                                  "text": "Monopolisation"
                              },
                              {
                                  "value": "Row 7",
                                  "text": "Opportunity loss"
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question217",
                          "title": "What measures have you taken to mitigate this risks?"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question207",
                          "title": "Based on how you answer to the above question would you rate this measures as :\n",
                          "choices": [
                              {
                                  "text": "Non - existent",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Completely inadequate",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Almost Adequate",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Adequate",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Fully Adequate",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": -4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "matrixdropdown",
                          "name": "question198",
                          "title": "How would you rate the  risks to human rights and civil liberties the system poses \n( Importance \u2013 How consequential is this harm for the well-being of stakeholders? Which are irremediable and serious  \nUrgency \u2013 How immediate is this threat?   \nDifficulty \u2013 How difficult will it be to mitigate this harm? \nDetectability \u2013 How perceivable is this harm given the current design?\nProbability - How possible is this harm to happen ? )\n",
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
                                  "text": "Benefits/entitlements loss"
                              },
                              {
                                  "value": "Row 2",
                                  "text": "Dignity loss"
                              },
                              {
                                  "value": "Row 3",
                                  "text": "Discrimination"
                              },
                              {
                                  "value": "Row 4",
                                  "text": "Loss of freedom of speech/expression"
                              },
                              {
                                  "value": "Row 5",
                                  "text": "Loss of freedom of assembly/association"
                              },
                              {
                                  "value": "Row 6",
                                  "text": "Loss of social rights and access to public services"
                              },
                              {
                                  "value": "Row 7",
                                  "text": "Loss of right to information"
                              },
                              {
                                  "value": "Row 8",
                                  "text": "Loss of right to free elections"
                              },
                              {
                                  "value": "Row 9",
                                  "text": "Loss of right to liberty and security"
                              },
                              {
                                  "value": "Row 10",
                                  "text": "Loss of right to due process"
                              },
                              {
                                  "value": "Row 11",
                                  "text": "Privacy loss"
                              },
                              {
                                  "value": "Row 12",
                                  "text": "Denial of the right to seek asylum"
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question218",
                          "title": "What measures have you taken to mitigate this risks?"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question211",
                          "title": "Based on how you answer to the above question would you rate this measures as :\n",
                          "choices": [
                              {
                                  "text": "Non - existent",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Completely inadequate",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Almost Adequate",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Adequate",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Fully Adequate",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": -4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "matrixdropdown",
                          "name": "question199",
                          "title": "How would you rate the societal and cultural  risks the system poses \n( Importance \u2013 How consequential is this harm for the well-being of stakeholders? Which are irremediable and serious  \nUrgency \u2013 How immediate is this threat?   \nDifficulty \u2013 How difficult will it be to mitigate this harm? \nDetectability \u2013 How perceivable is this harm given the current design?\nProbability - How possible is this harm to happen ? )\n",
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
                                  "text": "Breach of ethics/values/norms"
                              },
                              {
                                  "value": "Row 2",
                                  "text": "Cheating/plagiarism"
                              },
                              {
                                  "value": "Row 3",
                                  "text": "Chilling effect"
                              },
                              {
                                  "value": "Row 4",
                                  "text": "Cultural dispossession"
                              },
                              {
                                  "value": "Row 5",
                                  "text": "Damage to public health"
                              },
                              {
                                  "value": "Row 6",
                                  "text": "Historical revisionism"
                              },
                              {
                                  "value": "Row 7",
                                  "text": "Information degradation"
                              },
                              {
                                  "value": "Row 8",
                                  "text": "Job loss/losses"
                              },
                              {
                                  "value": "Row 9",
                                  "text": "Labour exploitation"
                              },
                              {
                                  "value": "Row 10",
                                  "text": "Loss of creativity/critical thinking"
                              },
                              {
                                  "value": "Row 11",
                                  "text": "Stereotyping"
                              },
                              {
                                  "value": "Row 12",
                                  "text": "Public service delivery deterioration"
                              },
                              {
                                  "value": "Row 13",
                                  "text": "Societal destabilisation -"
                              },
                              {
                                  "value": "Row 14",
                                  "text": "Societal inequality"
                              },
                              {
                                  "value": "Row 15",
                                  "text": "Violence/armed conflict"
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question219",
                          "title": "What measures have you taken to mitigate this risks ?  "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question206",
                          "title": "Based on how you answer to the above question would you rate this measures as :\n",
                          "choices": [
                              {
                                  "text": "Non - existent",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Completely inadequate",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Almost Adequate",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Adequate",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Fully Adequate",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "matrixdropdown",
                          "name": "question200",
                          "title": "How would you rate the political and economic risks the system poses \n( Importance \u2013 How consequential is this harm for the well-being of stakeholders? Which are irremediable and serious  \nUrgency \u2013 How immediate is this threat?   \nDifficulty \u2013 How difficult will it be to mitigate this harm? \nDetectability \u2013 How perceivable is this harm given the current design?\nProbability - How possible is this harm to happen ? )\n",
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
                                  "text": "Critical infrastructure damage"
                              },
                              {
                                  "value": "Row 2",
                                  "text": "Economic instability"
                              },
                              {
                                  "value": "Row 3",
                                  "text": "Power concentration"
                              },
                              {
                                  "value": "Row 4",
                                  "text": "Electoral interference"
                              },
                              {
                                  "value": "Row 5",
                                  "text": "Institutional trust loss"
                              },
                              {
                                  "value": "Row 6",
                                  "text": "Political instability"
                              },
                              {
                                  "value": "Row 7",
                                  "text": "Political manipulation"
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question202",
                          "title": "What measures have you taken to mitigate this risks ?  "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question205",
                          "title": "Based on how you answer to the above question would you rate this measures as :\n",
                          "choices": [
                              {
                                  "text": "Non - existent",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Completely inadequate",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Almost Adequate",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Adequate",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Fully Adequate",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "matrixdropdown",
                          "name": "question201",
                          "title": "How would you rate the environmental risks the system poses \n( Importance \u2013 How consequential is this harm for the well-being of stakeholders? Which are irremediable and serious  \nUrgency \u2013 How immediate is this threat?   \nDifficulty \u2013 How difficult will it be to mitigate this harm? \nDetectability \u2013 How perceivable is this harm given the current design?\nProbability - How possible is this harm to happen ? )\n",
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
                                  "text": "Biodiversity loss"
                              },
                              {
                                  "value": "Row 2",
                                  "text": "Carbon emissions"
                              },
                              {
                                  "value": "Row 3",
                                  "text": "Electronic waste"
                              },
                              {
                                  "value": "Row 4",
                                  "text": "Excessive energy consumption"
                              },
                              {
                                  "value": "Row 5",
                                  "text": "Excessive landfill"
                              },
                              {
                                  "value": "Row 6",
                                  "text": "Excessive water consumption"
                              },
                              {
                                  "value": "Row 7",
                                  "text": "Natural resource depletion"
                              },
                              {
                                  "value": "Row 8",
                                  "text": "Pollution"
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question215",
                          "title": "What measures have you taken to mitigate this risks ?  "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question208",
                          "title": "Based on how you answer to the above question would you rate this measures as :\n",
                          "choices": [
                              {
                                  "text": "Non - existent",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Completely inadequate",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Almost Adequate",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Adequate",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Fully Adequate",
                                  "value": "Item 5",
                                  "beneficence": 0,
                                  "non_maleficence": -4,
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
          "name": "page6",
          "title": "Evaluation Stage ",
          "elements": [
              {
                  "type": "panel",
                  "name": "panel8",
                  "title": "Testing ",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question70",
                          "title": "Has the strategy for testing the AI model been defined?",
                          "choices": [
                              {
                                  "text": "Yes, the testing strategy is fully documented and includes detailed validation steps.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but the testing strategy is only partially documented.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we do not have a defined testing strategy.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question241",
                          "visibleIf": "{question70} anyof ['Item 1', 'Item 2']",
                          "title": "If yes , describe it. "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question242",
                          "title": "Has the organization documented the AI model's performance in the testing environment?",
                          "choices": [
                              {
                                  "text": "Yes, the performance is fully documented with statistical metrics and analysis.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but the documentation is incomplete or lacks detailed statistical analysis.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we have not documented the model's performance in the testing environment.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question244",
                          "visibleIf": "{question242} anyof ['Item 1', 'Item 2']",
                          "title": "If yes , describe the results. "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question250",
                          "title": " Has the model been tested for performance on extreme values and protected attributes?",
                          "choices": [
                              {
                                  "text": "Yes, the model has been thoroughly tested for extreme values and protected attributes.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but the testing was limited and did not cover all edge cases.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, the model has not been tested for extreme values or protected attributes.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question318",
                          "visibleIf": "{question250} anyof ['Item 1', 'Item 2']",
                          "title": "If yes , describe the results. "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question319",
                          "title": "Have patterns of failure been identified (e.g., error curves, overfitting analysis, incorrect predictions)?",
                          "choices": [
                              {
                                  "text": "Yes, we have identified and documented all major failure patterns.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but only some failure patterns have been identified.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we have not identified any failure patterns.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question322",
                          "visibleIf": "{question319} anyof ['Item 1', 'Item 2']",
                          "title": "If yes , describe the results. "
                      },
                      {
                          "type": "comment",
                          "name": "question329",
                          "visibleIf": "{question319} anyof ['Item 1', 'Item 2']",
                          "title": "If yes , describe the results. "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question321",
                          "title": "Have key failure modes been addressed?",
                          "choices": [
                              {
                                  "text": "Yes, all key failure modes have been resolved or accounted for.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but only some key failure modes have been addressed.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we have not addressed any key failure modes.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question323",
                          "title": "Does the model fulfil the established performance criteria levels?",
                          "choices": [
                              {
                                  "text": "Yes, the model meets all performance criteria levels.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but it only partially meets the performance criteria.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, but we are working to improve the model to meet the criteria.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, the model does not meet the performance criteria.",
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
              },
              {
                  "type": "panel",
                  "name": "panel27",
                  "title": "Deploy",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question324",
                          "title": "Has the deployment strategy been documented?",
                          "choices": [
                              {
                                  "text": "Yes, the deployment strategy is fully documented.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but the documentation is incomplete or lacks detail.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 1
                              },
                              {
                                  "text": "No, we have not documented the deployment strategy.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 3
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question333",
                          "visibleIf": "{question324} anyof ['Item 1', 'Item 2']",
                          "title": "If yes , describe it. "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question325",
                          "title": "Has the serving strategy been documented?",
                          "choices": [
                              {
                                  "text": "Yes, the serving strategy is fully documented.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but the documentation is incomplete or lacks detail.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 1
                              },
                              {
                                  "text": "No, we have not documented the serving strategy.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 2
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question332",
                          "visibleIf": "{question325} anyof ['Item 1', 'Item 2']",
                          "title": "If yes , describe it. "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question326",
                          "title": "Have the risks associated with the serving and deployment strategies been identified?",
                          "choices": [
                              {
                                  "text": "Yes, all risks have been identified and documented.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but only some risks have been identified.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we have not identified any risks.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question320",
                          "visibleIf": "{question326} anyof ['Item 1', 'Item 2']",
                          "title": "If yes , describe the results. "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question327",
                          "title": "Have the risks associated with the serving and deployment strategies been addressed?",
                          "choices": [
                              {
                                  "text": "Yes, all risks have been resolved or accounted for.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but only some risks have been addressed.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we have not addressed any risks.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question331",
                          "visibleIf": "{question327} anyof ['Item 1', 'Item 2']",
                          "title": "If yes , describe the results. "
                      },
                      {
                          "type": "radiogroup",
                          "name": "question328",
                          "title": "Does the model fulfil the established performance criteria levels in the production environment?",
                          "choices": [
                              {
                                  "text": "Yes, the model meets all performance criteria in production.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but it only partially meets the performance criteria in production.",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, but we are working to improve the model to meet the criteria.",
                                  "value": "Item 5",
                                  "beneficence": 2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, the model does not meet the performance criteria in production.",
                                  "value": "Item 4",
                                  "beneficence": 3,
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
                  "name": "panel18",
                  "title": "Compliance checks ",
                  "elements": [
                      {
                          "type": "checkbox",
                          "name": "question222",
                          "title": "Does you system comply with any IEEE standards?",
                          "choices": [
                              {
                                  "text": "IEEE CertifAIEd\u2122 (Certification program for assessing ethics of Autonomous Intelligent Systems (AIS) for their conformity to ethical privacy, transparency, accountability, and algorithmic bias criteria.)",
                                  "value": "Item 2",
                                  "beneficence": -4,
                                  "non_maleficence": -4,
                                  "autonomy": -4,
                                  "justice": -4,
                                  "explicability": -4
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "checkbox",
                          "name": "question223",
                          "title": "Does your AI comply with any ISO standards",
                          "choices": [
                              {
                                  "text": "ISO/IEC TR 24028:2020 (Surveys approaches to establish trust in AI systems through transparency, explainability, controllability, etc., engineering pitfalls and typical associated threats and risks to AI systems and approaches to assess and achieve trustworthiness characteristics of AI systems.)",
                                  "value": "Item 1",
                                  "beneficence": -5,
                                  "non_maleficence": -5,
                                  "autonomy": -5,
                                  "justice": -5,
                                  "explicability": -5
                              },
                              {
                                  "text": "ISO/IEC 42001:2023 (International standard that specifies requirements for establishing, implementing, maintaining, and continually improving an Artificial Intelligence Management System (AIMS) within organizations, ensuring responsible development and use of AI systems.)",
                                  "value": "Item 2",
                                  "beneficence": -3,
                                  "non_maleficence": -3,
                                  "autonomy": -3,
                                  "justice": -3,
                                  "explicability": -3
                              },
                              {
                                  "text": "ISO/IEC DIS 42005 (International standard that provides guidance for organizations performing AI system impact assessments. It includes considerations for how and when to perform such assessments and at what stages of the AI system lifecycle, as well as how this process can be integrated into an organization\u2019s AI risk management system.)",
                                  "value": "Item 3",
                                  "beneficence": -3,
                                  "non_maleficence": -3,
                                  "autonomy": -3,
                                  "justice": -3,
                                  "explicability": -3
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "radiogroup",
                          "name": "question225",
                          "title": "Has a Data Protection Impact Assessment been carried out ?",
                          "choices": [
                              {
                                  "text": "Yes, a DPIA has been fully completed and documented.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but the DPIA is incomplete or lacks detail.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": -3,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, but we are in the process of conducting a DPIA.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we have not conducted a DPIA.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 1,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question227",
                          "title": "Does the AI comply with certain codes of conduct or best practices ?\n",
                          "choices": [
                              {
                                  "text": "OECD AI Principles (Principles that encompass AI systems that uphold human rights and privacy, are equitable, transparent, explainable, resilient, secure, and safe while ensuring accountability among all involved actors.)",
                                  "value": "Item 1",
                                  "beneficence": -2,
                                  "non_maleficence": -2,
                                  "autonomy": -2,
                                  "justice": -2,
                                  "explicability": -2
                              },
                              {
                                  "text": "EU High-Level Expert Group on AI (HLEG AI) Guidelines (Guidelines for ethical and trustworthy AI practices.)",
                                  "value": "Item 2",
                                  "beneficence": -2,
                                  "non_maleficence": -2,
                                  "autonomy": -2,
                                  "justice": -2,
                                  "explicability": -2
                              },
                              {
                                  "text": "NIST AI Risk Management Framework (A risk management framework to better manage risks to individuals, organizations, and society associated with artificial intelligence (AI).)",
                                  "value": "Item 3",
                                  "beneficence": -2,
                                  "non_maleficence": -2,
                                  "autonomy": -2,
                                  "justice": -2,
                                  "explicability": -2
                              }
                          ],
                          "showOtherItem": true
                      },
                      {
                          "type": "radiogroup",
                          "name": "question230",
                          "title": "Has any other tool been used to assess the impact of the AI system?",
                          "choices": [
                              {
                                  "text": "AI Verify Foundation (A framework and software toolkit designed for AI governance testing, validating the performance of AI systems based on a set of principles and aligning with AI governance frameworks such as those established by the European Union, OECD, and Singapore.)",
                                  "value": "Item 1",
                                  "beneficence": -1,
                                  "non_maleficence": -1,
                                  "autonomy": -1,
                                  "justice": -1,
                                  "explicability": -1
                              },
                              {
                                  "text": "IBM AI Fairness 360 (A toolkit to help detect and mitigate bias in AI models.)",
                                  "value": "Item 2",
                                  "beneficence": -1,
                                  "non_maleficence": -1,
                                  "autonomy": -1,
                                  "justice": -1,
                                  "explicability": -1
                              },
                              {
                                  "text": "Microsoft Responsible AI Toolbox (A suite of tools providing a collection of model and data exploration and evaluation of AI systems to help improve their approach.)",
                                  "value": "Item 3",
                                  "beneficence": -1,
                                  "non_maleficence": -1,
                                  "autonomy": -1,
                                  "justice": -1,
                                  "explicability": -1
                              }
                          ]
                      }
                  ]
              },
              {
                  "type": "panel",
                  "name": "panel19",
                  "title": "Certification and Audits ",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question231",
                          "title": "Did you establish thorough mechanisms that facilitate the system\u2019s auditability (eg documentation of the development process, the sourcing of training data and complaints about negative impacts, and the logging of the system\u2019s processes)?\n",
                          "choices": [
                              {
                                  "text": "Yes, we have fully established and documented auditability mechanisms.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but the mechanisms are incomplete or lack detail.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 1
                              },
                              {
                                  "text": "No, but we are in the process of establishing auditability mechanisms.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 2
                              },
                              {
                                  "text": "No, we have not established any auditability mechanisms.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 3
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question232",
                          "visibleIf": "{question231} anyof ['Item 1', 'Item 2']",
                          "title": "If yes, describe them."
                      },
                      {
                          "type": "radiogroup",
                          "name": "question233",
                          "title": "Can your system be audited by 3rd parties ?",
                          "choices": [
                              {
                                  "text": "Yes, a third party can access all the information that an internal review would have.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but an internal audit would provide better insights.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 1
                              },
                              {
                                  "text": "No, but we are working to make the system auditable by third parties.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 2
                              },
                              {
                                  "text": "No, the system cannot be audited by third parties.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 3
                              }
                          ]
                      },
                      {
                          "type": "boolean",
                          "name": "question234",
                          "title": "Did you foresee any kind of external guidance or third party auditing processes to oversee ethical concerns and accountability measures ?",
                          "beneficenceTrue": -1,
                          "non_maleficenceTrue": -1,
                          "autonomyTrue": -1,
                          "justiceTrue": -1,
                          "explicabilityTrue": 0,
                          "beneficenceFalse": 0,
                          "non_maleficenceFalse": 0,
                          "autonomyFalse": 0,
                          "justiceFalse": 0,
                          "explicabilityFalse": 0
                      },
                      {
                          "type": "comment",
                          "name": "question235",
                          "visibleIf": "{question234} = true",
                          "title": "If yes,  which ones what are the results ?"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question236",
                          "title": "Have you researched and informed the stakeholders about the potential legal framework applicable to the AI system ?",
                          "choices": [
                              {
                                  "text": "Yes, we have fully researched and informed stakeholders about the legal framework.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Yes, but the research or communication to stakeholders is incomplete.",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we have not researched or informed stakeholders about the legal framework.",
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
          "name": "page7",
          "title": "Operation Stage ",
          "elements": [
              {
                  "type": "panel",
                  "name": "panel20",
                  "title": "Continuous Monitoring and feedback ",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "name": "question237",
                          "title": "Do you have an arranged strategy for how to update the AI application continuously?",
                          "choices": [
                              {
                                  "text": "Yes, we have a fully documented and automated update strategy with regular intervals and version control.",
                                  "value": "Item 1",
                                  "beneficence": -2,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We have a partial strategy, with updates performed as needed but no formal schedule.",
                                  "value": "Item 2",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Updates are performed ad-hoc, with no formal strategy or documentation.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we do not have a strategy for continuous updates.",
                                  "value": "Item 4",
                                  "beneficence": 3,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question238",
                          "visibleIf": "{question237} anyof ['Item 2', 'Item 3', 'Item 1']",
                          "title": "If yes, describe it  (frequency of updates and documentation of model changes)."
                      },
                      {
                          "type": "radiogroup",
                          "name": "question239",
                          "title": "Do you have an arranged schedule and format of periodic reviews of the AI application with regard to ethical values and potential risks ?",
                          "choices": [
                              {
                                  "text": "Yes, we conduct regular reviews (e.g., quarterly) using structured methodologies and ethical frameworks.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We conduct occasional reviews, but they are not consistently scheduled or documented.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Reviews are performed only when issues arise, with no formal schedule or format.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we do not conduct periodic reviews of ethical values or potential risks.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question240",
                          "visibleIf": "{question239} anyof ['Item 1', 'Item 3', 'Item 2']",
                          "title": "If yes describe it."
                      },
                      {
                          "type": "radiogroup",
                          "name": "question243",
                          "title": "Do you inform end-users and subjects of existing or potential risks from using the system ?\n",
                          "choices": [
                              {
                                  "text": "Yes, we provide comprehensive documentation and clear communication about all risks.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We provide some information about risks, but it may not cover all potential issues.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 1
                              },
                              {
                                  "text": "Risks are mentioned informally, but no structured communication is in place.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 2
                              },
                              {
                                  "text": "No, we do not inform end-users or subjects about risks.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 3
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question245",
                          "title": "Do you inform all end-users and subjects that interact with the system's results that they were generated from an artificial intelligence ? ",
                          "choices": [
                              {
                                  "text": "Yes, we clearly disclose that results are AI-generated in all interactions.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We disclose AI involvement in some contexts, but not consistently across all interactions.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 1,
                                  "justice": 0,
                                  "explicability": 1
                              },
                              {
                                  "text": "Disclosure is minimal or only provided upon request.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 2,
                                  "explicability": 2
                              },
                              {
                                  "text": "No, we do not inform users that results are AI-generated.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 3,
                                  "explicability": 3
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question246",
                          "title": "Did you put in place a series of steps to monitor and document the AI's system's accuracy ",
                          "choices": [
                              {
                                  "text": "Yes, we have a robust monitoring system with regular accuracy checks and detailed documentation.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": -2,
                                  "explicability": -2
                              },
                              {
                                  "text": "We monitor accuracy occasionally, but documentation is incomplete or inconsistent.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Accuracy is checked informally, with no structured monitoring or documentation.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 2,
                                  "explicability": 2
                              },
                              {
                                  "text": "No, we do not monitor or document the AI system's accuracy.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 4,
                                  "explicability": 4
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question247",
                          "title": "Did you put processes in place to ensure that the level of accuracy of the AI system to be expected by end-users and/or subjects is properly communicated? ",
                          "choices": [
                              {
                                  "text": "Yes, we clearly communicate expected accuracy levels and limitations to all users.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We provide some information about accuracy, but it may not be comprehensive or clear.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 1
                              },
                              {
                                  "text": "Accuracy expectations are mentioned informally, but no formal communication process exists.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 2
                              },
                              {
                                  "text": "No, we do not communicate accuracy expectations to users.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 3
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question249",
                          "title": "Did you consider whether the AI system's operation can invalidate the data or assumptions it was trained on, and how this might lead to adversarial effects (e.g. biased estimators, echo chambers etc.)?",
                          "choices": [
                              {
                                  "text": "Yes, we have conducted thorough analysis and implemented safeguards to mitigate such risks.",
                                  "value": "Item 5",
                                  "beneficence": -1,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We have considered these risks but have not fully implemented safeguards.",
                                  "value": "Item 6",
                                  "beneficence": 1,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "These risks are acknowledged, but no formal analysis or mitigation is in place.",
                                  "value": "Item 7",
                                  "beneficence": 2,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we have not considered these risks.",
                                  "value": "Item 8",
                                  "beneficence": 3,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question248",
                          "title": "Based on your answers to the previous questions, how would you rate the risk that the AI system's accuracy drops below intended level?",
                          "choices": [
                              {
                                  "text": "Low risk: We have robust monitoring, communication, and mitigation strategies in place.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderate risk: Some safeguards exist, but there are gaps in monitoring or communication.",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 1,
                                  "explicability": 0
                              },
                              {
                                  "text": "High risk: Limited safeguards and monitoring, with significant potential for accuracy drops.",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 2,
                                  "explicability": 0
                              },
                              {
                                  "text": "Very high risk: No safeguards or monitoring in place, accuracy drops are likely.",
                                  "value": "Item 4",
                                  "beneficence": 3,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 3,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question251",
                          "title": "Did you establish a processes for third parties (e.g. suppliers, end-users, subjects, distributors/vendors or workers) or workers to report potential vulnerabilities, risks or biases in the AI system? ",
                          "choices": [
                              {
                                  "text": "Yes, we have formal channels and processes for third parties to report issues.",
                                  "value": "Item 1",
                                  "beneficence": -1,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We have informal channels for reporting, but no formal process.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Reporting is possible, but it is unclear how issues are addressed.",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we do not have processes for third parties to report issues.",
                                  "value": "Item 4",
                                  "beneficence": 3,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question256",
                          "title": "Do you continuously survey the persons concerned to determine whether they understand the decisions of the system?",
                          "choices": [
                              {
                                  "text": "Yes, we conduct regular surveys and feedback sessions to ensure understanding.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We occasionally survey users, but not consistently or comprehensively.",
                                  "value": "Item 2",
                                  "beneficence": 1,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Surveys are conducted informally, with no structured approach.",
                                  "value": "Item 3",
                                  "beneficence": 2,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, we do not survey users about their understanding of the system's decisions.",
                                  "value": "Item 4",
                                  "beneficence": 3,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question252",
                          "title": "Does this process foster revision of the risk management process?",
                          "choices": [
                              {
                                  "text": "Yes, feedback is actively used to revise and improve risk management processes.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Feedback is considered, but revisions to risk management are infrequent or limited.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Feedback is collected, but it rarely leads to revisions in risk management.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, feedback does not influence the risk management process.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question253",
                          "visibleIf": "{question252} anyof ['Item 1', 'Item 2', 'Item 3']",
                          "title": "Describe this feedback process :"
                      },
                      {
                          "type": "radiogroup",
                          "name": "question254",
                          "title": "Is there a process established for end users that wish to challenge the decision/result the system generates? ",
                          "choices": [
                              {
                                  "text": "Yes, we have a formal appeals process with clear steps for challenging decisions.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "We have an informal process for challenging decisions, but it is not well-documented.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Users can challenge decisions, but the process is unclear or inconsistent.",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No, there is no process for users to challenge decisions.",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "comment",
                          "name": "question255",
                          "visibleIf": "{question254} anyof ['Item 1', 'Item 2', 'Item 3']",
                          "title": "If yes, describe it."
                      }
                  ]
              },
              {
                  "type": "panel",
                  "name": "panel22",
                  "title": "Attacks and Security ",
                  "elements": [
                      {
                          "type": "boolean",
                          "name": "question264",
                          "title": "Does the organisation have a specific person responsible for cyber security (CISO or equivalent role)?",
                          "beneficenceTrue": 0,
                          "non_maleficenceTrue": -2,
                          "autonomyTrue": 0,
                          "justiceTrue": 0,
                          "explicabilityTrue": 0,
                          "beneficenceFalse": 0,
                          "non_maleficenceFalse": 2,
                          "autonomyFalse": 0,
                          "justiceFalse": 0,
                          "explicabilityFalse": 0
                      },
                      {
                          "type": "radiogroup",
                          "name": "question265",
                          "title": "What's the complexity of the system's deployment environment \n",
                          "choices": [
                              {
                                  "text": "Simple environment, such as when the deployment environment is static, possible input options are limited, and there are few unexpected situations that the system must deal with gracefully. For example, a natural language processing system used in a controlled research environment.",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Moderately complex environment, such as when the deployment environment varies,unexpected situations the system must deal with gracefully may occur, but when they do, there is little risk to people, and it is clear how to effectively mitigate issues. For example, a natural language processing system used in a corporate workplace where language is professional and communication norms change slowly.",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Complex environment, such as when the deployment environment is dynamic, the system will be deployed in an open and unpredictable environment or may be subject to drifts in input distributions over time. There are many possible types of inputs, and inputs may significantly vary in quality. Time and attention may be at a premium in making decisions and it can be difficult to mitigate issues. For example, a natural language processing system used on a social media platform where language and communication norms change rapidly",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question266",
                          "title": "Is there a dedicated team responsible for monitoring and mitigating AI-specific cybersecurity risks (e.g., adversarial attacks, model theft, data poisoning)?",
                          "choices": [
                              {
                                  "text": "Fully established, with documented processes and dedicated staff",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Partially established, some monitoring but lacks formal processes",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "AI risks are handled by general cybersecurity teams, no specialized focus",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No formal responsibility assigned for AI security",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question267",
                          "title": "How often is a risk assessment conducted for AI model threats (e.g., adversarial attacks, model inversion, membership inference)?\n",
                          "choices": [
                              {
                                  "text": "Regularly (quarterly or before major updates) using structured methodologies",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Occasionally (once per year or only when issues arise)",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Informal assessments without structured methodology",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No AI-specific risk assessment is conducted",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question268",
                          "title": " What fallback mechanisms are in place if the AI system fails or behaves unpredictably?",
                          "choices": [
                              {
                                  "text": "Fully redundant fallback system, manual override, and alerting mechanisms",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Limited redundancy, with some fallback measures and manual intervention",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Manual intervention only, no automated fallback in place",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No fallback mechanisms, system fails without mitigation",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question269",
                          "title": "How is model degradation or drift handled over time?",
                          "choices": [
                              {
                                  "text": "Continuous monitoring with automated retraining and human oversight",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Periodic evaluation, retraining when needed",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Retraining only if major issues are detected",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No process in place to detect or mitigate model drift",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question270",
                          "title": "What measures are in place to detect and mitigate adversarial attacks on the AI system?",
                          "choices": [
                              {
                                  "text": "Robust adversarial defence techniques, continuous testing, and AI threat intelligence",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Some defences applied (e.g., input sanitization, noise filtering) but no adversarial testing",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic security measures (e.g., authentication) but no AI-specific defences",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No measures in place to address adversarial attacks",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question271",
                          "title": "How is the AI system protected from model inversion or membership inference attacks?",
                          "choices": [
                              {
                                  "text": "Differential privacy, federated learning, and advanced protection measures",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic privacy measures (e.g., limiting query access, access control)",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No dedicated protection, but logs are monitored for anomalies",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No protections against model inversion or membership inference",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question272",
                          "title": " How is the AI system protected from data poisoning attacks?",
                          "choices": [
                              {
                                  "text": "Robust validation pipelines, anomaly detection, and data provenance tracking",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Some validation, but no automated anomaly detection",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic checks, relies on data source integrity without verification",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No data validation or checks against poisoning",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question273",
                          "title": " How are training datasets secured against unauthorized modifications?",
                          "choices": [
                              {
                                  "text": "Version-controlled, cryptographically signed datasets with strict access controls",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Some version control, but limited access controls",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic security, but no cryptographic integrity verification",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No access control or integrity checks on training data",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question274",
                          "title": "How is user behaviour monitored for potential misuse of the AI system?",
                          "choices": [
                              {
                                  "text": "Automated behaviour analysis, anomaly detection, and alerting systems",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Manual reviews of logs, no automated anomaly detection",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Logging in place, but no active review of user behavior",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No monitoring for user misuse",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question275",
                          "title": "What safeguards exist to prevent users from exploiting AI-generated outputs maliciously (e.g., prompt injection, biased outputs, data leakage)?",
                          "choices": [
                              {
                                  "text": "Strict filtering, context-aware moderation, and human review where necessary",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Some filtering, but gaps in detecting emerging abuse patterns",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic safeguards, relies on end-user agreements for responsible use",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No safeguards beyond standard input validation",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question276",
                          "title": " How are logs from AI interactions stored and analysed?",
                          "choices": [
                              {
                                  "text": "Encrypted, tamper-proof logs with automated anomaly detection",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": -2
                              },
                              {
                                  "text": "Logs stored securely, but analysis is manual and infrequent",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Logs exist but are not regularly reviewed or analyzed",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 2
                              },
                              {
                                  "text": "No structured logging or analysis in place",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 3
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question277",
                          "title": "What is the response plan for AI-related security incidents?",
                          "choices": [
                              {
                                  "text": "Predefined, tested incident response with AI-specific considerations",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "General cybersecurity response plan, but no AI-specific elements",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Informal or ad-hoc response approach",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No incident response plan for AI-related threats",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question278",
                          "title": " How frequently is red teaming or penetration testing conducted for AI security?",
                          "choices": [
                              {
                                  "text": "Regularly (quarterly or after major changes) with AI-specific attack simulations",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Occasionally (yearly or irregularly) with some AI-specific testing",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Only generic cybersecurity tests, no AI-specific red teaming",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No red teaming or penetration testing for AI security",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question279",
                          "title": "Who conducts security testing on the AI system?",
                          "choices": [
                              {
                                  "text": "Dedicated internal and external experts specialized in AI security",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Internal security team with limited AI expertise",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "General IT security personnel with no AI-specific focus",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No formal security testing on the AI system",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question280",
                          "title": "How is the AI system designed to handle external outages or disruptions (e.g., cloud failures, power loss)?",
                          "choices": [
                              {
                                  "text": "Multi-region redundancy, automated failover, and contingency planning",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Some redundancy, but with potential downtime risks",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": 1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Manual recovery required in case of failure",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 2,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No failover or redundancy measures",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 4,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question281",
                          "title": "How is AI model performance affected by changing operational conditions (e.g., system load, new data patterns)?",
                          "choices": [
                              {
                                  "text": "Continuous monitoring with adaptive resource scaling and retraining",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Some monitoring, but manual intervention is required for adjustments",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Reactive approach, performance issues fixed after they occur",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No active monitoring for performance degradation",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              }
                          ]
                      },
                      {
                          "type": "radiogroup",
                          "name": "question282",
                          "title": " How is the AI system designed to ensure reproducibility of results across different runs and environments?",
                          "choices": [
                              {
                                  "text": "Full version control of data, model, and training code with environment replication and deterministic execution",
                                  "value": "Item 1",
                                  "beneficence": 0,
                                  "non_maleficence": -3,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Versioning is applied to models and data, but execution may have minor variations due to system dependencies",
                                  "value": "Item 2",
                                  "beneficence": 0,
                                  "non_maleficence": -1,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "Basic versioning exists, but no guarantees on reproducibility across different environments",
                                  "value": "Item 3",
                                  "beneficence": 0,
                                  "non_maleficence": 0,
                                  "autonomy": 0,
                                  "justice": 0,
                                  "explicability": 0
                              },
                              {
                                  "text": "No formal measures to ensure reproducibility thus results may vary significantly between runs",
                                  "value": "Item 4",
                                  "beneficence": 0,
                                  "non_maleficence": 3,
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
          "title": "Retirement Stage ",
          "elements": [
              {
                  "type": "radiogroup",
                  "name": "question283",
                  "title": "Has the organization conducted a thorough risk assessment prior to decommissioning the AI system?",
                  "choices": [
                      {
                          "text": "Comprehensive risk assessment completed, covering ethical, technical, and operational impacts",
                          "value": "Item 1",
                          "beneficence": 0,
                          "non_maleficence": 0,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Partial risk assessment covering key risks but with gaps in ethical considerations",
                          "value": "Item 2",
                          "beneficence": 1,
                          "non_maleficence": 1,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Basic assessment focusing only on operational risks, with minimal ethical or technical analysis",
                          "value": "Item 3",
                          "beneficence": 2,
                          "non_maleficence": 2,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "No formal risk assessment conducted",
                          "value": "Item 4",
                          "beneficence": 4,
                          "non_maleficence": 4,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      }
                  ]
              },
              {
                  "type": "radiogroup",
                  "name": "question284",
                  "title": "To what extent are stakeholders (e.g., end users, customers, affected communities) involved in the AI decommissioning process?\n",
                  "choices": [
                      {
                          "text": "Stakeholders are fully engaged through consultations and feedback loops at all stages",
                          "value": "Item 1",
                          "beneficence": 0,
                          "non_maleficence": 0,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Stakeholders are partially involved, with limited consultations on specific aspects",
                          "value": "Item 2",
                          "beneficence": 1,
                          "non_maleficence": 0,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Stakeholders are minimally involved, with sporadic feedback gathering",
                          "value": "Item 3",
                          "beneficence": 2,
                          "non_maleficence": 0,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Stakeholders are not consulted or informed",
                          "value": "Item 4",
                          "beneficence": 3,
                          "non_maleficence": 0,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      }
                  ]
              },
              {
                  "type": "radiogroup",
                  "name": "question285",
                  "title": " How are personal data and other sensitive information handled during the decommissioning process?",
                  "choices": [
                      {
                          "text": "Personal data is securely deleted following international best practices (e.g., GDPR-compliant deletion protocols)",
                          "value": "Item 1",
                          "beneficence": 0,
                          "non_maleficence": 0,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Personal data is deleted, but no verification or audit process is in place",
                          "value": "Item 2",
                          "beneficence": 0,
                          "non_maleficence": 1,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Personal data is archived indefinitely with no specific deletion plan",
                          "value": "Item 3",
                          "beneficence": 0,
                          "non_maleficence": 2,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "No action is taken to ensure proper handling or deletion of personal data",
                          "value": "Item 4",
                          "beneficence": 0,
                          "non_maleficence": 3,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      }
                  ]
              },
              {
                  "type": "radiogroup",
                  "name": "question286",
                  "title": " How does the organization manage AI models and training data after decommissioning?",
                  "choices": [
                      {
                          "text": "Models and data are securely archived for auditing, reproducibility, and compliance purposes",
                          "value": "Item 1",
                          "beneficence": 0,
                          "non_maleficence": 0,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Models and data are archived, but security controls (e.g., encryption) are minimal",
                          "value": "Item 2",
                          "beneficence": 0,
                          "non_maleficence": 1,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Models and data are retained with no formal archiving or security plan",
                          "value": "Item 3",
                          "beneficence": 0,
                          "non_maleficence": 2,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Models and data are deleted without considering auditing or compliance needs",
                          "value": "Item 4",
                          "beneficence": 0,
                          "non_maleficence": 3,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      }
                  ]
              },
              {
                  "type": "radiogroup",
                  "name": "question287",
                  "title": "What steps are taken to mitigate potential negative ethical impacts caused by the decommissioning of the AI system?",
                  "choices": [
                      {
                          "text": "Ethical impacts are fully assessed and mitigation plans are developed, including for marginalized groups",
                          "value": "Item 1",
                          "beneficence": 0,
                          "non_maleficence": -3,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Ethical impacts are partially assessed, with focus on high-risk areas but limited breadth",
                          "value": "Item 2",
                          "beneficence": 0,
                          "non_maleficence": -1,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Ethical risks are acknowledged but no concrete mitigation strategies are in place",
                          "value": "Item 3",
                          "beneficence": 0,
                          "non_maleficence": 2,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Ethical risks are not considered",
                          "value": "Item 4",
                          "beneficence": 0,
                          "non_maleficence": 3,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      }
                  ]
              },
              {
                  "type": "radiogroup",
                  "name": "question288",
                  "title": "How does the organization ensure continuity or provide alternatives for users dependent on the AI system?",
                  "choices": [
                      {
                          "text": "Comprehensive transition plan includes equivalent services or manual processes, with user support",
                          "value": "Item 1",
                          "beneficence": 0,
                          "non_maleficence": -3,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Partial transition plan with some gaps in continuity for dependent users",
                          "value": "Item 2",
                          "beneficence": -1,
                          "non_maleficence": -1,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Users are notified, but no specific alternative or support is provided",
                          "value": "Item 3",
                          "beneficence": 2,
                          "non_maleficence": 2,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "No continuity or alternative services are provided",
                          "value": "Item 4",
                          "beneficence": 3,
                          "non_maleficence": 3,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      }
                  ]
              },
              {
                  "type": "radiogroup",
                  "name": "question289",
                  "title": "How are environmental considerations (e.g., energy consumption of servers) addressed during decommissioning?",
                  "choices": [
                      {
                          "text": "Hardware is responsibly recycled, and energy use is minimized in accordance with sustainability goals",
                          "value": "Item 1",
                          "beneficence": 0,
                          "non_maleficence": 0,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Some recycling or energy minimization efforts are made, but no formal strategy exists",
                          "value": "Item 2",
                          "beneficence": 1,
                          "non_maleficence": 1,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Minimal effort to address environmental impact, with no formal measures taken",
                          "value": "Item 3",
                          "beneficence": 2,
                          "non_maleficence": 2,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Environmental impact is not considered",
                          "value": "Item 4",
                          "beneficence": 3,
                          "non_maleficence": 3,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      }
                  ]
              },
              {
                  "type": "radiogroup",
                  "name": "question290",
                  "title": "To what extent is the decommissioning process documented and made transparent?",
                  "choices": [
                      {
                          "text": "The entire process is thoroughly documented and shared with internal and external stakeholders",
                          "value": "Item 1",
                          "beneficence": 0,
                          "non_maleficence": 0,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Partial documentation exists, but some steps are unclear or unavailable to stakeholders",
                          "value": "Item 2",
                          "beneficence": 0,
                          "non_maleficence": 1,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 1
                      },
                      {
                          "text": "Minimal documentation is available, and it is not shared externally",
                          "value": "Item 3",
                          "beneficence": 0,
                          "non_maleficence": 2,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 2
                      },
                      {
                          "text": "No documentation of the decommissioning process exists",
                          "value": "Item 4",
                          "beneficence": 0,
                          "non_maleficence": 3,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 3
                      }
                  ]
              },
              {
                  "type": "radiogroup",
                  "name": "question291",
                  "title": " How are risks from third-party dependencies (e.g., APIs, external data sources) managed during decommissioning?",
                  "choices": [
                      {
                          "text": "All third-party contracts and dependencies are reviewed and terminated in alignment with decommissioning",
                          "value": "Item 1",
                          "beneficence": 0,
                          "non_maleficence": 0,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Some third-party dependencies are reviewed, but gaps in termination plans exist",
                          "value": "Item 2",
                          "beneficence": 0,
                          "non_maleficence": 1,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "No formal review of third-party dependencies, but termination is informally managed",
                          "value": "Item 3",
                          "beneficence": 0,
                          "non_maleficence": 2,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Third-party dependencies are ignored during decommissioning",
                          "value": "Item 4",
                          "beneficence": 0,
                          "non_maleficence": 3,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      }
                  ]
              },
              {
                  "type": "radiogroup",
                  "name": "question292",
                  "title": "Is there a post-decommission review or audit to ensure all risks have been mitigated and lessons learned?",
                  "choices": [
                      {
                          "text": "Comprehensive post-decommission review and audit conducted, with lessons learned applied to future projects",
                          "value": "Item 1",
                          "beneficence": 0,
                          "non_maleficence": -3,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "A basic review is conducted, but no formal audit or feedback loop exists",
                          "value": "Item 2",
                          "beneficence": 0,
                          "non_maleficence": -1,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "Informal review conducted with no structured learning process",
                          "value": "Item 3",
                          "beneficence": 0,
                          "non_maleficence": 1,
                          "autonomy": 0,
                          "justice": 0,
                          "explicability": 0
                      },
                      {
                          "text": "No review or audit is conducted after decommissioning",
                          "value": "Item 4",
                          "beneficence": 0,
                          "non_maleficence": 3,
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