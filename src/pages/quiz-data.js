export const quizData = [
  {
    _id: "670b68430d5b50b31837bf9e",
    sections: [
      {
        name: "Demographics",
        questions: [
          {
            question_id: 1,
            question: "First Name",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[A-Za-zÀ-Üà-ü \\-']{1,150}$",
              error_message: "Please enter a valid first name",
            },
          },
          {
            question_id: 2,
            question: "Last Name",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[A-Za-zÀ-Üà-ü \\-']{1,150}$",
              error_message: "Please enter a valid last name",
            },
          },
          {
            question_id: 3,
            question: "Date of Birth",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "date",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[0-9]{4}-[0-9]{2}-[0-9]{2}$",
              error_message: "Please enter a valid date of birth (yyyy-mm-dd)",
            },
          },
          {
            question_id: 4,
            question: "Sex at Birth",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "male",
                label: "Male",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "female",
                label: "Female",
              },
            ],
          },
          {
            question_id: 5,
            question: "Email Address",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "email",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[\\w\\.\\-\\+]+@[A-Za-z0-9\\.\\-]+\\.[A-Za-z]{2,4}$",
              error_message: "Please enter a valid email address",
            },
          },
          {
            question_id: 6,
            question: "Phone Number",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "phone",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[0-9]{10}$",
              error_message: "Please enter a valid US phone number",
            },
          },
          {
            question_id: 7,
            question: "Address",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[A-Za-z0-9'\\.\\-, ]{1,46}$",
              error_message:
                "Please enter a valid address, no special characters",
            },
          },
          {
            question_id: 8,
            question: "City",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[A-Za-z\\.\\- ]{1,28}$",
              error_message: "Please enter a valid city name",
            },
          },
          {
            question_id: 9,
            question: "State",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[0-9]{1,3}$",
              error_message: "Please select a valid state id",
            },
          },
          {
            question_id: 10,
            question: "Zip Code",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[0-9]{5}$",
              error_message: "Please enter a valid US zip code",
            },
          },
          {
            question_id: 11,
            question: "Timezone",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[0-9]{1,2}$",
              error_message: "Please select a valid timezone id",
            },
          },
          {
            question_id: 12,
            question: "Height",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[0-9]{1,2}$",
              error_message: "Please enter a valid height",
            },
          },
          {
            question_id: 13,
            question: "Weight",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[0-9]{1,4}$",
              error_message: "Please enter a valid weight",
            },
          },
          {
            question_id: 14,
            question: "Current State",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[0-9]{1,3}$",
              error_message: "Please select a valid state id",
            },
          },
        ],
      },
      {
        name: "Health History",
        questions: [
          {
            question_id: 15,
            question: "What is your goal weight?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[0-9]{1,3}$",
              error_message: "Please enter a goal weight",
            },
          },
          {
            question_id: 16,
            question: "When was the last time you were that weight?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "1-2 years",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "3-5 years",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "string",
                value: "6-10 years",
              },
              {
                answer_id: 4,
                required: true,
                value_type: "string",
                value: "More than 10 years",
              },
              {
                answer_id: 5,
                required: true,
                value_type: "string",
                value: "Never",
              },
            ],
          },
          {
            question_id: 17,
            question: "Drug Allergies",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "confirm",
                value: "reviewed",
                label: "I have reviewed and confirmed drug allergies",
              },
            ],
          },
          {
            question_id: 18,
            question: "Current Medications",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "confirm",
                value: "reviewed",
                label: "I have reviewed and confirmed current medications",
              },
            ],
          },
          {
            question_id: 19,
            question:
              "Have you had an annual physical exam in the past 12 months?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 20,
            question: "Have you had any lab tests done in the past 6 months?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 21,
            question:
              "Can we send you a text message with a secure link to upload your past results?",
            show_if: {
              section_id: 2,
              question_id: 6,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 22,
            question:
              "Do you have a history of Polycystic ovary syndrome - PCOS?",
            show_if: {
              section_id: 1,
              question_id: 4,
              answer_ids: [2],
            },
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 23,
            question: "Do you have a history of fibroids?",
            show_if: {
              section_id: 1,
              question_id: 4,
              answer_ids: [2],
            },
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 24,
            question: "Do you have a history of endometriosis?",
            show_if: {
              section_id: 1,
              question_id: 4,
              answer_ids: [2],
            },
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 25,
            question: "Do you have a history of tumors?",
            show_if: {
              section_id: 1,
              question_id: 4,
              answer_ids: [2],
            },
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 26,
            question: "Are you currently pregnant or breast feeding?",
            show_if: {
              section_id: 1,
              question_id: 4,
              answer_ids: [2],
            },
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 27,
            question: "Date of last menstrual period - LMP",
            show_if: {
              section_id: 1,
              question_id: 4,
              answer_ids: [2],
            },
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "date",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[0-9]{4}-[0-9]{2}-[0-9]{2}$",
              error_message:
                "Please enter a valid date of last menstrual period (yyyy-mm-dd)",
            },
          },
          {
            question_id: 28,
            question: "Do you use any contraceptives?",
            show_if: {
              section_id: 1,
              question_id: 4,
              answer_ids: [2],
            },
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 29,
            question: "Are you currently taking relevant medications?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 30,
            question: "Current Relevant Medications",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "confirm",
                value: "reviewed",
                label:
                  "I have reviewed and confirmed current relevant medications",
              },
            ],
          },
          {
            question_id: 31,
            question:
              "Can we send you a text message with a secure link to upload your relevant prescriptions?",
            show_if: {
              section_id: 2,
              question_id: 15,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 32,
            question: "Too Expensive",
            show_if: {
              section_id: 2,
              question_id: 15,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "yes",
              },
            ],
          },
          {
            question_id: 33,
            question: "Strength of medication not working",
            show_if: {
              section_id: 2,
              question_id: 15,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "yes",
              },
            ],
          },
          {
            question_id: 34,
            question: "Did not like side effects",
            show_if: {
              section_id: 2,
              question_id: 15,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "yes",
              },
            ],
          },
          {
            question_id: 35,
            question: "Please describe",
            show_if: {
              section_id: 2,
              question_id: 20,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
              },
            ],
          },
          {
            question_id: 36,
            question: "Other",
            show_if: {
              section_id: 2,
              question_id: 15,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "yes",
              },
            ],
          },
          {
            question_id: 37,
            question: "Comments",
            show_if: {
              section_id: 2,
              question_id: 22,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
              },
            ],
          },
        ],
      },
      {
        name: "Behavioral Health",
        questions: [
          {
            question_id: 38,
            question: "Little interest or pleasure in doing things",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
                value: 0,
                label: "Not at all",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "numeric",
                value: 1,
                label: "Several days",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "numeric",
                value: 2,
                label: "More than half the days",
              },
              {
                answer_id: 4,
                required: true,
                value_type: "numeric",
                value: 3,
                label: "Nearly every day",
              },
            ],
          },
          {
            question_id: 39,
            question: "Feeling down, depressed, or hopeless",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
                value: 0,
                label: "Not at all",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "numeric",
                value: 1,
                label: "Several days",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "numeric",
                value: 2,
                label: "More than half the days",
              },
              {
                answer_id: 4,
                required: true,
                value_type: "numeric",
                value: 3,
                label: "Nearly every day",
              },
            ],
          },
          {
            question_id: 40,
            question: "Trouble falling or staying asleep, or sleeping too much",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
                value: 0,
                label: "Not at all",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "numeric",
                value: 1,
                label: "Several days",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "numeric",
                value: 2,
                label: "More than half the days",
              },
              {
                answer_id: 4,
                required: true,
                value_type: "numeric",
                value: 3,
                label: "Nearly every day",
              },
            ],
          },
          {
            question_id: 41,
            question: "Feeling tired or having little energy",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
                value: 0,
                label: "Not at all",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "numeric",
                value: 1,
                label: "Several days",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "numeric",
                value: 2,
                label: "More than half the days",
              },
              {
                answer_id: 4,
                required: true,
                value_type: "numeric",
                value: 3,
                label: "Nearly every day",
              },
            ],
          },
          {
            question_id: 42,
            question: "Poor appetite or overeating",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
                value: 0,
                label: "Not at all",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "numeric",
                value: 1,
                label: "Several days",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "numeric",
                value: 2,
                label: "More than half the days",
              },
              {
                answer_id: 4,
                required: true,
                value_type: "numeric",
                value: 3,
                label: "Nearly every day",
              },
            ],
          },
          {
            question_id: 43,
            question:
              "Feeling bad about yourself — or that you are a failure, or you have let yourself or your family down",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
                value: 0,
                label: "Not at all",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "numeric",
                value: 1,
                label: "Several days",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "numeric",
                value: 2,
                label: "More than half the days",
              },
              {
                answer_id: 4,
                required: true,
                value_type: "numeric",
                value: 3,
                label: "Nearly every day",
              },
            ],
          },
          {
            question_id: 44,
            question:
              "Trouble concentrating on things, such as reading the newspaper or watching television",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
                value: 0,
                label: "Not at all",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "numeric",
                value: 1,
                label: "Several days",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "numeric",
                value: 2,
                label: "More than half the days",
              },
              {
                answer_id: 4,
                required: true,
                value_type: "numeric",
                value: 3,
                label: "Nearly every day",
              },
            ],
          },
          {
            question_id: 45,
            question:
              "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual.",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
                value: 0,
                label: "Not at all",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "numeric",
                value: 1,
                label: "Several days",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "numeric",
                value: 2,
                label: "More than half the days",
              },
              {
                answer_id: 4,
                required: true,
                value_type: "numeric",
                value: 3,
                label: "Nearly every day",
              },
            ],
          },
          {
            question_id: 46,
            question:
              "Thoughts that you would be better off dead or of hurting yourself in some way",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "numeric",
                value: 0,
                label: "Not at all",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "numeric",
                value: 1,
                label: "Several days",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "numeric",
                value: 2,
                label: "More than half the days",
              },
              {
                answer_id: 4,
                required: true,
                value_type: "numeric",
                value: 3,
                label: "Nearly every day",
              },
            ],
          },
        ],
      },
      {
        name: "Medical History",
        questions: [
          {
            question_id: 47,
            question: "Do you have a history of cardiac disorders or events?",
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value:
                  "Myocardial Infarction, commonly known as a Heart Attack, or Blockage with Stent Placement",
                label:
                  "Myocardial Infarction, commonly known as a Heart Attack, or Blockage with Stent Placement",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value:
                  "Cerebrovascular Accident including Stroke, Mini-Stroke TIA, or Hemorrhage",
                label:
                  "Cerebrovascular Accident including Stroke, Mini-Stroke TIA, or Hemorrhage",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Thrombosis or Embolism due to Blood Clot",
                label: "Thrombosis or Embolism due to Blood Clot",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "Coronary Artery Bypass Graft Surgery - CABG",
                label: "Coronary Artery Bypass Graft Surgery - CABG",
              },
              {
                answer_id: 5,
                required: false,
                value_type: "string",
                value: "Aortic or Mitral Valve Disorder or Replacement",
                label: "Aortic or Mitral Valve Disorder or Replacement",
              },
              {
                answer_id: 6,
                required: false,
                value_type: "string",
                value:
                  "Endocarditis, Pericarditis, or Cardiomyopathy - Enlarged Heart",
                label:
                  "Endocarditis, Pericarditis, or Cardiomyopathy - Enlarged Heart",
              },
              {
                answer_id: 7,
                required: false,
                value_type: "string",
                value:
                  "Cardiac Conduction Disorder such as AV Block or Bundle Branch Block",
                label:
                  "Cardiac Conduction Disorder such as AV Block or Bundle Branch Block",
              },
              {
                answer_id: 8,
                required: false,
                value_type: "string",
                value:
                  "Cardiac Arrhythmia including Atrial Fibrillation, Atrial Flutter, or Tachycardia",
                label:
                  "Cardiac Arrhythmia including Atrial Fibrillation, Atrial Flutter, or Tachycardia",
              },
              {
                answer_id: 9,
                required: false,
                value_type: "string",
                value:
                  "Heart Failure, also known as Congestive Heart Failure or CHF",
                label:
                  "Heart Failure, also known as Congestive Heart Failure or CHF",
              },
              {
                answer_id: 10,
                required: false,
                value_type: "string",
                value: "Pacemaker or Defibrillator Placement",
                label: "Pacemaker or Defibrillator Placement",
              },
            ],
          },
          {
            question_id: 48,
            question:
              "Have you previously been diagnosed with any medical conditions?",
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "Sleep Apnea",
                label: "Sleep Apnea",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value: "CPAP in Use",
                label: "CPAP in Use",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Snoring",
                label: "Snoring",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "Chronic Kidney Disease",
                label: "Chronic Kidney Disease",
              },
              {
                answer_id: 5,
                required: false,
                value_type: "string",
                value: "Abnormal Liver Function",
                label: "Abnormal Liver Function",
              },
              {
                answer_id: 6,
                required: false,
                value_type: "string",
                value: "COPD or Emphysema",
                label: "COPD or Emphysema",
              },
              {
                answer_id: 7,
                required: false,
                value_type: "string",
                value: "High Blood Pressure",
                label: "High Blood Pressure",
              },
              {
                answer_id: 8,
                required: false,
                value_type: "string",
                value: "Low Blood Pressure",
                label: "Low Blood Pressure",
              },
              {
                answer_id: 9,
                required: false,
                value_type: "string",
                value: "High Cholesterol",
                label: "High Cholesterol",
              },
              {
                answer_id: 10,
                required: false,
                value_type: "string",
                value: "Peripheral Artery Disease",
                label: "Peripheral Artery Disease",
              },
              {
                answer_id: 11,
                required: false,
                value_type: "string",
                value: "Chronic Lymph Node Enlargement",
                label: "Chronic Lymph Node Enlargement",
              },
              {
                answer_id: 12,
                required: false,
                value_type: "string",
                value: "Hypogonadism",
                label: "Hypogonadism",
              },
              {
                answer_id: 13,
                required: false,
                value_type: "string",
                value:
                  "Inability to get pregnant despite unprotected sex for more than one year",
                label:
                  "Inability to get pregnant despite unprotected sex for more than one year",
              },
              {
                answer_id: 14,
                required: false,
                value_type: "string",
                value: "Diabetes Type I Diabetes Type II",
                label: "Diabetes Type I Diabetes Type II",
              },
              {
                answer_id: 15,
                required: false,
                value_type: "string",
                value: "Hypothyroidism",
                label: "Hypothyroidism",
              },
              {
                answer_id: 16,
                required: false,
                value_type: "string",
                value: "Hyperthyroidism",
                label: "Hyperthyroidism",
              },
              {
                answer_id: 17,
                required: false,
                value_type: "string",
                value: "Enlarged Thyroid",
                label: "Enlarged Thyroid",
              },
              {
                answer_id: 18,
                required: false,
                value_type: "string",
                value: "Depression",
                label: "Depression",
              },
              {
                answer_id: 19,
                required: false,
                value_type: "string",
                value: "Anxiety",
                label: "Anxiety",
              },
              {
                answer_id: 20,
                required: false,
                value_type: "string",
                value: "ADD or ADHD",
                label: "ADD or ADHD",
              },
              {
                answer_id: 21,
                required: false,
                value_type: "string",
                value: "HIV",
                label: "HIV",
              },
              {
                answer_id: 22,
                required: false,
                value_type: "string",
                value: "Hepatitis",
                label: "Hepatitis",
              },
              {
                answer_id: 23,
                required: false,
                value_type: "string",
                value:
                  "Insomnia or Sleep Disorder, including Shift Work Sleep Disorder",
                label:
                  "Insomnia or Sleep Disorder, including Shift Work Sleep Disorder",
              },
              {
                answer_id: 24,
                required: false,
                value_type: "string",
                value: "Seizures",
                label: "Seizures",
              },
              {
                answer_id: 25,
                required: false,
                value_type: "string",
                value: "Frequent Headaches",
                label: "Frequent Headaches",
              },
              {
                answer_id: 26,
                required: false,
                value_type: "string",
                value: "Anemia",
                label: "Anemia",
              },
              {
                answer_id: 27,
                required: false,
                value_type: "string",
                value: "Arthritis or Joint Pain",
                label: "Arthritis or Joint Pain",
              },
              {
                answer_id: 28,
                required: false,
                value_type: "string",
                value: "Osteoporosis",
                label: "Osteoporosis",
              },
              {
                answer_id: 29,
                required: false,
                value_type: "string",
                value: "Gout",
                label: "Gout",
              },
              {
                answer_id: 30,
                required: false,
                value_type: "string",
                value: "Autoimmune Disorder",
                label: "Autoimmune Disorder",
              },
              {
                answer_id: 31,
                required: false,
                value_type: "string",
                value: "Cancer",
                label: "Cancer",
              },
              {
                answer_id: 32,
                required: false,
                value_type: "string",
                value: "Cardiovascular Disease",
                label: "Cardiovascular Disease",
              },
              {
                answer_id: 33,
                required: false,
                value_type: "string",
                value: "Blood Clot such as DVT or Pulmonary Embolism",
                label: "Blood Clot such as DVT or Pulmonary Embolism",
              },
              {
                answer_id: 34,
                required: false,
                value_type: "string",
                value: "Heart Attack or Blockage",
                label: "Heart Attack or Blockage",
              },
              {
                answer_id: 35,
                required: false,
                value_type: "string",
                value: "Congestive Heart Failure - CHF, Stroke or TIA",
                label: "Congestive Heart Failure - CHF, Stroke or TIA",
              },
              {
                answer_id: 36,
                required: false,
                value_type: "string",
                value: "Acid Reflux",
                label: "Acid Reflux",
              },
              {
                answer_id: 37,
                required: false,
                value_type: "string",
                value: "Obesity",
                label: "Obesity",
              },
              {
                answer_id: 38,
                required: false,
                value_type: "string",
                value: "Neuropathy in Extremities",
                label: "Neuropathy in Extremities",
              },
              {
                answer_id: 39,
                required: false,
                value_type: "string",
                value: "Excessive Sweating",
                label: "Excessive Sweating",
              },
              {
                answer_id: 40,
                required: false,
                value_type: "string",
                value: "Blurry Vision",
                label: "Blurry Vision",
              },
              {
                answer_id: 41,
                required: false,
                value_type: "string",
                value: "Irritable Bowel Syndrome",
                label: "Irritable Bowel Syndrome",
              },
              {
                answer_id: 42,
                required: false,
                value_type: "string",
                value: "Frequent Urination",
                label: "Frequent Urination",
              },
              {
                answer_id: 43,
                required: false,
                value_type: "string",
                value: "Dizziness with Standing",
                label: "Dizziness with Standing",
              },
              {
                answer_id: 44,
                required: false,
                value_type: "string",
                value: "Blueish Fingers or Toes when Cold",
                label: "Blueish Fingers or Toes when Cold",
              },
              {
                answer_id: 45,
                required: false,
                value_type: "string",
                value:
                  "Neuro-degenerative Disease such as Parkinson's, Alzheimer's, or ALS",
                label:
                  "Neuro-degenerative Disease such as Parkinson's, Alzheimer's, or ALS",
              },
              {
                answer_id: 46,
                required: false,
                value_type: "string",
                value: "Gallbladder Disease",
                label: "Gallbladder Disease",
              },
              {
                answer_id: 47,
                required: false,
                value_type: "string",
                value: "Kidney Injury",
                label: "Kidney Injury",
              },
              {
                answer_id: 48,
                required: false,
                value_type: "string",
                value: "Drug Hypersensitivity",
                label: "Drug Hypersensitivity",
              },
              {
                answer_id: 49,
                required: false,
                value_type: "string",
                value: "Diabetic Retinopathy",
                label: "Diabetic Retinopathy",
              },
            ],
          },
          {
            question_id: 49,
            question: "Have you ever been diagnosed with kidney disease?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 50,
            question:
              "Have you ever been diagnosed with or have a family history of thyroid cancer?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 51,
            question: "Have you ever been diagnosed with pancreatitis?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 52,
            question: "Have you ever been diagnosed with MEN2?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 53,
            question: "Surgical History",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "confirm",
                value: "reviewed",
                label: "I have reviewed and confirmed surgical history",
              },
            ],
          },
          {
            question_id: 54,
            question: "Do you have any future surgeries scheduled?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
        ],
      },
      {
        name: "Family Medical History",
        questions: [
          {
            question_id: 55,
            question: "Cardiovascular Disease",
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "yes",
              },
            ],
          },
          {
            question_id: 56,
            question: "Relation",
            show_if: {
              section_id: 5,
              question_id: 1,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "Mother or Father",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value: "Brother or Sister",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Paternal Grandparents",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "Maternal Grandparents",
              },
              {
                answer_id: 5,
                required: false,
                value_type: "string",
                value: "Other",
              },
            ],
          },
          {
            question_id: 57,
            question: "Heart Attack",
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "yes",
              },
            ],
          },
          {
            question_id: 58,
            question: "Relation",
            show_if: {
              section_id: 5,
              question_id: 3,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "Mother or Father",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value: "Brother or Sister",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Paternal Grandparents",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "Maternal Grandparents",
              },
              {
                answer_id: 5,
                required: false,
                value_type: "string",
                value: "Other",
              },
            ],
          },
          {
            question_id: 59,
            question: "Stroke",
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "yes",
              },
            ],
          },
          {
            question_id: 60,
            question: "Relation",
            show_if: {
              section_id: 5,
              question_id: 5,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "Mother or Father",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value: "Brother or Sister",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Paternal Grandparents",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "Maternal Grandparents",
              },
              {
                answer_id: 5,
                required: false,
                value_type: "string",
                value: "Other",
              },
            ],
          },
          {
            question_id: 61,
            question: "Endocrine Disease",
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "yes",
              },
            ],
          },
          {
            question_id: 62,
            question: "Relation",
            show_if: {
              section_id: 5,
              question_id: 7,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "Mother or Father",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value: "Brother or Sister",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Paternal Grandparents",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "Maternal Grandparents",
              },
              {
                answer_id: 5,
                required: false,
                value_type: "string",
                value: "Other",
              },
            ],
          },
          {
            question_id: 63,
            question: "Diabetes",
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "yes",
              },
            ],
          },
          {
            question_id: 64,
            question: "Relation",
            show_if: {
              section_id: 5,
              question_id: 9,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "Mother or Father",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value: "Brother or Sister",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Paternal Grandparents",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "Maternal Grandparents",
              },
              {
                answer_id: 5,
                required: false,
                value_type: "string",
                value: "Other",
              },
            ],
          },
          {
            question_id: 65,
            question: "Hypothyroidism",
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "yes",
              },
            ],
          },
          {
            question_id: 66,
            question: "Relation",
            show_if: {
              section_id: 5,
              question_id: 11,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "Mother or Father",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value: "Brother or Sister",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Paternal Grandparents",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "Maternal Grandparents",
              },
              {
                answer_id: 5,
                required: false,
                value_type: "string",
                value: "Other",
              },
            ],
          },
          {
            question_id: 67,
            question: "Delayed Puberty",
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "yes",
              },
            ],
          },
          {
            question_id: 68,
            question: "Relation",
            show_if: {
              section_id: 5,
              question_id: 13,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "Mother or Father",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value: "Brother or Sister",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Paternal Grandparents",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "Maternal Grandparents",
              },
              {
                answer_id: 5,
                required: false,
                value_type: "string",
                value: "Other",
              },
            ],
          },
          {
            question_id: 69,
            question: "Reproductive Disorder",
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "yes",
              },
            ],
          },
          {
            question_id: 70,
            question: "Relation",
            show_if: {
              section_id: 5,
              question_id: 15,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "Mother or Father",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value: "Brother or Sister",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Paternal Grandparents",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "Maternal Grandparents",
              },
              {
                answer_id: 5,
                required: false,
                value_type: "string",
                value: "Other",
              },
            ],
          },
          {
            question_id: 71,
            question: "Breast Cancer",
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "yes",
              },
            ],
          },
          {
            question_id: 72,
            question: "Relation",
            show_if: {
              section_id: 5,
              question_id: 17,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "Mother or Father",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value: "Brother or Sister",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Paternal Grandparents",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "Maternal Grandparents",
              },
              {
                answer_id: 5,
                required: false,
                value_type: "string",
                value: "Other",
              },
            ],
          },
          {
            question_id: 73,
            question: "Ovarian, Uterine, Cervical Cancer",
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "yes",
              },
            ],
          },
          {
            question_id: 74,
            question: "Relation",
            show_if: {
              section_id: 5,
              question_id: 19,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "Mother or Father",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value: "Brother or Sister",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Paternal Grandparents",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "Maternal Grandparents",
              },
              {
                answer_id: 5,
                required: false,
                value_type: "string",
                value: "Other",
              },
            ],
          },
        ],
      },
      {
        name: "Social History",
        questions: [
          {
            question_id: 75,
            question: "How often do you exercise?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "None",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "Rarely",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "string",
                value: "Once a month",
              },
              {
                answer_id: 4,
                required: true,
                value_type: "string",
                value: "Twice a month",
              },
              {
                answer_id: 5,
                required: true,
                value_type: "string",
                value: "Once a week",
              },
              {
                answer_id: 6,
                required: true,
                value_type: "string",
                value: "Twice a week",
              },
              {
                answer_id: 7,
                required: true,
                value_type: "string",
                value: "Three times a week",
              },
              {
                answer_id: 8,
                required: true,
                value_type: "string",
                value: "Daily",
              },
            ],
          },
          {
            question_id: 76,
            question: "If so, what type of exercise?",
            show_if: {
              section_id: 6,
              question_id: 1,
              answer_ids: [2, 3, 4, 5, 6, 7, 8],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "Cardio",
                label: "Cardio",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value: "Yoga",
                label: "Yoga",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Weight Lifting",
                label: "Weight Lifting",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "HIIT",
                label: "HIIT",
              },
              {
                answer_id: 5,
                required: false,
                value_type: "string",
                value: "Other",
                label: "Other",
              },
            ],
          },
          {
            question_id: 77,
            question: "What is your daily caffeine intake?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "None",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "Low",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "string",
                value: "Medium",
              },
              {
                answer_id: 4,
                required: true,
                value_type: "string",
                value: "High",
              },
            ],
          },
          {
            question_id: 78,
            question: "If so, what type of caffeine intake?",
            show_if: {
              section_id: 6,
              question_id: 3,
              answer_ids: [2, 3, 4],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "Tea",
                label: "Tea",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value: "Coffee",
                label: "Coffee",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Soda",
                label: "Soda",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "Energy Drinks",
                label: "Energy Drinks",
              },
            ],
          },
          {
            question_id: 79,
            question: "Do you smoke cigarettes?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "yes",
                label: "Yes",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "no",
                label: "No",
              },
            ],
          },
          {
            question_id: 80,
            question: "If yes, how many per day?",
            show_if: {
              section_id: 6,
              question_id: 5,
              answer_ids: [1],
            },
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "numeric",
              },
            ],
            validation: {
              type: "regex_pattern",
              value: "^[0-9]{0,2}$",
              error_message: "Please enter a valid number of cigarettes",
            },
          },
          {
            question_id: 81,
            question: "How often do you use marijuana products?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "None",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "Daily",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "string",
                value: "Weekly",
              },
              {
                answer_id: 4,
                required: true,
                value_type: "string",
                value: "Monthly",
              },
            ],
          },
          {
            question_id: 82,
            question: "What is your alcohol intake?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "0-2 drinks per week",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "3-4 drinks per week",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "string",
                value: "5 or more drinks per week",
              },
            ],
          },
        ],
      },
      {
        name: "Dietary Habits",
        questions: [
          {
            question_id: 83,
            question: "Check all that apply",
            answers: [
              {
                answer_id: 1,
                required: false,
                value_type: "string",
                value: "Do you eat when you are depressed?",
                label: "Do you eat when you are depressed?",
              },
              {
                answer_id: 2,
                required: false,
                value_type: "string",
                value: "Do you eat when you are anxious?",
                label: "Do you eat when you are anxious?",
              },
              {
                answer_id: 3,
                required: false,
                value_type: "string",
                value: "Do you eat when you are alone?",
                label: "Do you eat when you are alone?",
              },
              {
                answer_id: 4,
                required: false,
                value_type: "string",
                value: "Do you eat when you are in front of the TV?",
                label: "Do you eat when you are in front of the TV?",
              },
            ],
          },
          {
            question_id: 84,
            question: "What is your salt intake?",
            answers: [
              {
                answer_id: 1,
                required: true,
                value_type: "string",
                value: "low",
                label: "Low",
              },
              {
                answer_id: 2,
                required: true,
                value_type: "string",
                value: "medium",
                label: "Medium",
              },
              {
                answer_id: 3,
                required: true,
                value_type: "string",
                value: "high",
                label: "High",
              },
            ],
          },
        ],
      },
    ],
  },
];
