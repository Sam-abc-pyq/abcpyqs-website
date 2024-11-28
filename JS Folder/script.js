// Questions Data by Year and Subject
const data = {
    "First Year": { // This website has been made by HY & team
        2020: [
            { subject: 'Mathematics 1', pdf: 'PDF Folder/2020/1/Maths1.pdf' },
            { subject: 'PPS', pdf: 'PDF Folder/2020/1/PPS.pdf' },
            { subject: 'Physics', pdf: 'PDF Folder/2020/1/Phy.pdf'},
            { subject: 'Chemistry', pdf: 'PDF Folder/2020/1/Che.pdf' },
            { subject: 'Electronics', pdf: 'PDF Folder/2020/1/EC.pdf' },
            { subject: 'Electrical', pdf: 'PDF Folder/2020/1/EE.pdf' },
            { subject: 'Mathematics 2', pdf: 'PDF Folder/2020/1/Maths2.pdf' },
            { subject: 'Mechanics', pdf: 'PDF Folder/2020/1/ME.pdf' },
            { subject: 'Soft Skills', pdf: 'PDF Folder/2020/1/SS.pdf' },
            { subject: 'EVS', pdf: 'PDF Folder/2020/1/EVS.pdf' }
        ],
        2021: [
            { subject: 'Mathematics 1', pdf: 'PDF Folder/2021/1/Maths1.pdf' },
            { subject: 'PPS', pdf: 'PDF Folder/2021/1/PPS.pdf' },
            { subject: 'Physics', pdf: 'PDF Folder/2021/Phy.pdf' },
            { subject: 'Chemistry', pdf: 'PDF Folder/2021/1/Che.pdf' },
            { subject: 'Electronics', pdf: 'PDF Folder/2021/1/EC.pdf' },
            { subject: 'Electrical', pdf: 'PDF Folder/2021/1/EE.pdf' },
            { subject: 'Mathematics 2', pdf: 'PDF Folder/2021/1/Maths2.pdf' },
            { subject: 'Mechanics', pdf: 'PDF Folder/2021/1/ME.pdf' },
            { subject: 'Soft Skills', pdf: 'PDF Folder/2021/1/SS.pdf' },
            { subject: 'EVS', pdf: 'PDF Folder/2021/1/EVS.pdf' }
        ],
        2022: [
            { subject: 'Mathematics 1', pdf: 'PDF Folder/2022/1/Maths1.pdf' },
            { subject: 'PPS', pdf: 'PDF Folder/2022/1/PPS.pdf' },
            { subject: 'Physics', pdf: 'PDF Folder/2022/1/Phy.pdf' },
            { subject: 'Chemistry', pdf: 'PDF Folder/2022/1/Che.pdf' },
            { subject: 'Electronics', pdf: 'PDF Folder/2022/1/EC.pdf' },
            { subject: 'Electrical', pdf: 'PDF Folder/2022/1/EE.pdf' },
            { subject: 'Mathematics 2', pdf: 'PDF Folder/2022/1/Maths2.pdf' },
            { subject: 'Mechanics', pdf: 'PDF Folder/2022/1/ME.pdf' },
            { subject: 'Soft Skills', pdf: 'PDF Folder/2022/1/SS.pdf' },
            { subject: 'EVS', pdf: 'PDF Folder/2022/1/EVS.pdf' }
        ],
        2023: [
            { subject: 'Mathematics 1', pdf: 'PDF Folder/2023/1/Maths1.pdf' },
            { subject: 'PPS', pdf: 'PDF Folder/2023/1/PPS.pdf' },
            { subject: 'Physics', pdf: 'PDF Folder/2023/1/Phy.pdf' },
            { subject: 'Chemistry', pdf: 'PDF Folder/2023/1/Che.pdf' },
            { subject: 'Electronics', pdf: 'PDF Folder/2023/1/EC.pdf' },
            { subject: 'Electrical', pdf: 'PDF Folder/2023/1/EE.pdf' },
            { subject: 'Mathematics 2', pdf: 'PDF Folder/2023/1/Maths2.pdf' },
            { subject: 'Mechanics', pdf: 'PDF Folder/2023/1/ME.pdf' },
            { subject: 'Soft Skills', pdf: 'PDF Folder/2023/1/SS.pdf' },
            { subject: 'EVS', pdf: 'PDF Folder/2023/1/EVS.pdf' }
        ],
        2024: [
            { subject: 'Mathematics 1', pdf: 'PDF Folder/2024/1/Maths1.pdf' },
            { subject: 'PPS', pdf: 'PDF Folder/2024/1/PPS.pdf' },
            { subject: 'Physics', pdf: 'PDF Folder/2024/1/Phy.pdf' },
            { subject: 'Chemistry', pdf: 'PDF Folder/2024/1/Che.pdf' },
            { subject: 'Electronics', pdf: 'PDF Folder/2024/1/EC.pdf' },
            { subject: 'Electrical', pdf: 'PDF Folder/2024/1/EE.pdf' },
            { subject: 'Mathematics 2', pdf: 'PDF Folder/2024/1/Maths2.pdf' },
            { subject: 'Mechanics', pdf: 'PDF Folder/2024/1/ME.pdf' },
            { subject: 'Soft Skils', pdf: 'PDF Folder/2024/1/SS.pdf' },
            { subject: 'EVS', pdf: 'PDF Folder/2024/1/EVS.pdf' }
        ],
    },
    "Second Year": {
        2020: [
            { subject: 'Mathematics 4', pdf: 'PDF Folder/2020/2/Maths4.pdf' },
            { subject: 'Data Structure', pdf: 'PDF Folder/2020/2/DS.pdf' },
            { subject: 'DSTL', pdf: 'PDF Folder/2020/2/DSTL.pdf' },
            { subject: 'COA', pdf: 'PDF Folder/2020/2/COA.pdf' },
            { subject: 'Technical Communication', pdf: 'PDF Folder/2020/2/TC.pdf' },
            { subject: 'Cyber Security', pdf: 'PDF Folder/2020/2/CS.pdf' },
            { subject: 'Operating System', pdf: 'PDF Folder/2020/2/OS.pdf' },
            { subject: 'OOP with Java', pdf: 'PDF Folder/2020/2/OOPJ.pdf' },
            { subject: 'TAFL', pdf: 'PDF Folder/2020/2/TAFL.pdf' },
            { subject: 'Python', pdf: 'PDF Folder/2020/2/PP.pdf' },
            { subject: 'Human Values', pdf: 'PDF Folder/2020/2/HV.pdf' }
        ],
        2021: [
            { subject: 'Mathematics 4', pdf: 'PDF Folder/2021/2/Maths4.pdf' },
            { subject: 'Data Structure', pdf: 'PDF Folder/2021/2/DS.pdf' },
            { subject: 'DSTL', pdf: 'PDF Folder/2021/2/DSTL.pdf' },
            { subject: 'COA', pdf: 'PDF Folder/2021/2/COA.pdf' },
            { subject: 'Technical Communication', pdf: 'PDF Folder/2021/2/TC.pdf' },
            { subject: 'Cyber Security', pdf: 'PDF Folder/2021/2/CS.pdf' },
            { subject: 'Operating System', pdf: 'PDF Folder/2021/2/OS.pdf' },
            { subject: 'OOP with Java', pdf: 'PDF Folder/2021/2/OOPJ.pdf' },
            { subject: 'TAFL', pdf: 'PDF Folder/2021/2/TAFL.pdf' },
            { subject: 'Python', pdf: 'PDF Folder/2021/2/PP.pdf' },
            { subject: 'Human Values', pdf: 'PDF Folder/2021/2/HV.pdf' }
        ],
        2022: [
            { subject: 'Mathematics 4', pdf: 'PDF Folder/2022/2/Maths4.pdf' },
            { subject: 'Data Structure', pdf: 'PDF Folder/2022/2/DS.pdf' },
            { subject: 'DSTL', pdf: 'PDF Folder/2022/2/DSTL.pdf' },
            { subject: 'COA', pdf: 'PDF Folder/2022/2/COA.pdf' },
            { subject: 'Technical Communication', pdf: 'PDF Folder/2022/2/TC.pdf' },
            { subject: 'Cyber Security', pdf: 'PDF Folder/2022/2/CS.pdf' },
            { subject: 'Operating System', pdf: 'PDF Folder/2022/2/OS.pdf' },
            { subject: 'OOP with Java', pdf: 'PDF Folder/2022/2/OOPJ.pdf' },
            { subject: 'TAFL', pdf: 'PDF Folder/2022/2/TAFL.pdf' },
            { subject: 'Python', pdf: 'PDF Folder/2022/2/PP.pdf' },
            { subject: 'Human Values', pdf: 'PDF Folder/2022/2/HV.pdf' }
        ],
        2023: [
            { subject: 'Mathematics 4', pdf: 'PDF Folder/2023/2/Maths4.pdf' },
            { subject: 'Data Structure', pdf: 'PDF Folder/202/2/DS.pdf' },
            { subject: 'DSTL', pdf: 'PDF Folder/2023/2/DSTL.pdf' },
            { subject: 'COA', pdf: 'PDF Folder/2023/2/COA.pdf' },
            { subject: 'Technical Communication', pdf: 'PDF Folder/2023/2/TC.pdf' },
            { subject: 'Cyber Security', pdf: 'PDF Folder/2023/2/CS.pdf' },
            { subject: 'Operating System', pdf: 'PDF Folder/2023/2/OS.pdf' },
            { subject: 'OOP with Java', pdf: 'PDF Folder/2023/2/OOPJ.pdf' },
            { subject: 'TAFL', pdf: 'PDF Folder/2023/2/TAFL.pdf' },
            { subject: 'Python', pdf: 'PDF Folder/2023/2/PP.pdf' },
            { subject: 'Human Values', pdf: 'PDF Folder/2023/2/HV.pdf' }
        ],
        2024: [
            { subject: 'Mathematics 4', pdf: 'PDF Folder/2024/2/Maths4.pdf' },
            { subject: 'Data Structure', pdf: 'PDF Folder/2024/2/DS.pdf' },
            { subject: 'DSTL', pdf: 'PDF Folder/2024/2/DSTL.pdf' },
            { subject: 'COA', pdf: 'PDF Folder/2024/2/COA.pdf' },
            { subject: 'Technical Communication', pdf: 'PDF Folder/2024/2/TC.pdf' },
            { subject: 'Cyber Security', pdf: 'PDF Folder/2024/2/CS.pdf' },
            { subject: 'Operating System', pdf: 'PDF Folder/2024/2/OS.pdf' },
            { subject: 'OOP with Java', pdf: 'PDF Folder/2024/2/OOPJ.pdf' },
            { subject: 'TAFL', pdf: 'PDF Folder/2024/2/TAFL.pdf' },
            { subject: 'Python', pdf: 'PDF Folder/2024/2/PP.pdf' },
            { subject: 'Human Values', pdf: 'PDF Folder/2024/2/HV.pdf' }
        ]
    },
    "Third Year": {
        2020: [
            { subject: 'DBMS', pdf: 'PDF Folder/2020/3/DBMS.pdf' },
            { subject: 'DAA', pdf: 'PDF Folder/2020/3/DAA.pdf' },
            { subject: 'Web Tech', pdf: 'PDF Folder/2020/3/WT.pdf' }
        ],
        2021: [
            { subject: 'DBMS', pdf: 'PDF Folder/2021/3/DBMS.pdf' },
            { subject: 'Compiler Design', pdf: 'PDF Folder/2021/3/CD.pdf' },
            { subject: 'DAA', pdf: 'PDF Folder/2021/3/DAA.pdf' },
            { subject: 'Data Analytics', pdf: 'PDF Folder/2021/3/DA.pdf' },
            { subject: 'Application of SC', pdf: 'PDF Folder/2021/3/ASC.pdf' },
            { subject: 'Web Tech', pdf: 'PDF Folder/2021/3/WT.pdf' },
            { subject: 'Web Designing', pdf: 'PDF Folder/2021/3/WD.pdf' },
            { subject: 'OOSD', pdf: 'PDF Folder/2021/3/OOSD.pdf' },
            { subject: 'Human Comp. Int.', pdf: 'PDF Folder/2021/3/HCI.pdf' },
            { subject: 'Machine LT', pdf: 'PDF Folder/2021/3/MLT.pdf' }
        ],
        2022: [
            { subject: 'DBMS', pdf: 'PDF Folder/2022/3/DBMS.pdf' },
            { subject: 'Compiler Design', pdf: 'PDF Folder/2022/3/CD.pdf' },
            { subject: 'DAA', pdf: 'PDF Folder/2022/3/DAA.pdf'},
            { subject: 'Computer Networks', pdf: 'PDF Folder/2022/3/CN.pdf' },
            { subject: 'Computer Graphics', pdf: 'PDF Folder/2022/3/CG.pdf' },
            { subject: 'Web Tech', pdf: 'PDF Folder/2022/3/WT.pdf' },
            { subject: 'Web Designing', pdf: 'PDF Folder/2022/3/WB.pdf' },
            { subject: 'Data Aalytics', pdf: 'PDF Folder/2022/3/DA.pdf' },
            { subject: 'Application of SC', pdf: 'PDF Folder/2022/3/ASC.pdf' },
            { subject: 'Human Comp. Int.', pdf: 'PDF Folder/2022/3/HCI.pdf' },
            { subject: 'Machine LT', pdf: 'PDF Folder/2022/3/MLT.pdf' },
            { subject: 'OOSD', pdf: 'PDF Folder/2022/3/OOSD.pdf' },
            { subject: 'Real Time Sys', pdf: 'PDF Folder/2022/3/RTS.pdf' },
        ],
        2023: [
            { subject: 'DBMS', pdf: 'PDF Folder/2023/3/DBMS.pdf' },
            { subject: 'Compiler Design', pdf: 'PDF Folder/2023/3/CD.pdf' },
            { subject: 'DAA', pdf: 'PDF Folder/2023/3/DAA.pdf' },
            { subject: 'CILE', pdf: 'PDF Folder/2023/3/CILE.pdf' },
            { subject: 'Software Engg', pdf: 'PDF Folder/2023/3/SE.pdf' },
            { subject: 'Web Tech', pdf: 'PDF Folder/2023/3/WT.pdf' },
            { subject: 'Computer Networks', pdf: 'PDF Folder/2023/3/CN.pdf' },
            { subject: 'ITCS', pdf: 'PDF Folder/2023/3/ITCS.pdf' },
            { subject: 'Data Analysis', pdf: 'PDF Folder/2023/3/DA.pdf' },
            { subject: 'Web Designing', pdf: 'PDF Folder/2023/3/WD.pdf' },
            { subject: 'Computer Graphics', pdf: 'PDF Folder/2023/3/CG.pdf' },
            { subject: 'OOSD', pdf: 'PDF Folder/2023/3/OOSD.pdf' },
            { subject: 'Machine LT', pdf: 'PDF Folder/2023/3/MLT.pdf' },
            { subject: 'Application of SC', pdf: 'PDF Folder/2023/3/ASC.pdf' },
            { subject: 'AVR', pdf: 'PDF Folder/2023/3/AVR.pdf' },
            { subject: 'Human Comp. Int.', pdf: 'PDF Folder/2023/3/HCI.pdf' },
            { subject: 'Big Data', pdf: 'PDF Folder/2023/3/BD.pdf' },
            { subject: 'Image Processing', pdf: 'PDF Folder/2023/3/IP.pdf' },
            { subject: 'Real Time Sys', pdf: 'PDF Folder/2023/3/RTS.pdf' },
            { subject: 'Data Compression', pdf: 'PDF Folder/2023/3/DC.pdf' }
        ],
        2024: [
            { subject: 'DAA', pdf: 'PDF Folder/2024/3/DAA.pdf' },
            { subject: 'CILE', pdf: 'PDF Folder/2024/3/CILE.pdf' },
            { subject: 'Web Designing', pdf: 'PDF Folder/2024/3/WD.pdf' },
            { subject: 'Machine Learning Tecniques', pdf: 'PDF Folder/2024/3/MLT.pdf' },
            { subject: 'ITCS', pdf: 'PDF Folder/2024/3/ITCS.pdf' }
        ]
    },
    "Fourth Year": {
        2020: [
            { subject: 'Artificial Interface', pdf: 'PDF Folder/2020/4/AI.pdf' },
            { subject: 'Cloud Computing', pdf: 'PDF Folder/2020/4/CC.pdf' },
            { subject: 'Distributed Systems', pdf: 'PDF Folder/2020/4/DS.pdf' },
            { subject: 'Software Testing', pdf: 'PDF Folder/2020/4/ST.pdf' }
        ],
        2021: [
            { subject: 'Artificial Intelligence', pdf: 'PDF Folder/2021/4/AI.pdf' },
            { subject: 'Blockchain Artitechture Design', pdf: 'PDF Folder/2021/4/BAD.pdf' },
            { subject: 'Cloud Computing', pdf: 'PDF Folder/2021/4/CC.pdf' },
            { subject: 'Distributed Systems', pdf: 'PDF Folder/2021/4/DS.pdf' }
        ],
        2022: [
            { subject: 'Artificial Intelligence', pdf: 'PDF Folder/2022/4/AI.pdf' },
            { subject: 'Cloud Computing', pdf: 'PDF Folder/2022/4/CC.pdf' },
            { subject: 'High Performance Computing', pdf: 'PDF Folder/2022/4/HPC.pdf' },
            { subject: 'Cryptography & Network Security', pdf: 'PDF Folder/2022/4/CNS.pdf' },
            { subject: 'DDA', pdf: 'PDF Folder/2022/4/DDA.pdf' },
            { subject: 'Natural Language Processing', pdf: 'PDF Folder/2022/4/NLP.pdf' },
            { subject: 'Distributed Sys', pdf: 'PDF Folder/2022/4/DS.pdf' },
            { subject: 'Machine Computing', pdf: 'PDF Folder/2022/4/MC.pdf' }
        ],
        2023: [
            { subject: 'AI', pdf: 'PDF Folder/2023/4/AI.pdf' },
            { subject: 'NLP', pdf: 'PDF Folder/2023/4/NLP.pdf' },
            { subject: 'HPC', pdf: 'PDF Folder/2023/4/HPC.pdf' },
            { subject: 'CNS', pdf: 'PDF Folder/2023/4/CNS.pdf' },
            { subject: 'DDA', pdf: 'PDF Folder/2023/4/DDA.pdf' },
            { subject: 'Software Testing', pdf: 'PDF Folder/2023/4/ST.pdf' },
            { subject: 'Distributed Sys', pdf: 'PDF Folder/2023/4/DS.pdf' },
            { subject: 'DL', pdf: 'PDF Folder/2023/4/DL.pdf' },
            { subject: 'SOA', pdf: 'PDF Folder/2023/4/SOA.pdf' },
            { subject: 'QC', pdf: 'PDF Folder/2023/4/QC.pdf' },
            { subject: 'MC', pdf: 'PDF Folder/2023/4/MC.pdf' },
            { subject: 'IOT', pdf: 'PDF Folder/2023/4/IOT.pdf' },
            { subject: 'CC', pdf: 'PDF Folder/2023/4/CC.pdf' },
            { subject: 'BAD', pdf: 'PDF Folder/2023/4/BAD.pdf' },
            { subject: 'RDAP', pdf: 'PDF Folder/2023/4/RDAP.pdf' },
            { subject: 'PME', pdf: 'PDF Folder/2023/4/PME.pdf' },
        ],
        2024: [
            { subject: 'Artificial Intelligence', pdf: 'PDF Folder/2024/4/AI.pdf' },
            { subject: 'Cloud Computing', pdf: 'PDF Folder/2024/4/CC.pdf' },
            { subject: 'Project Management & Entrepreneurship', pdf: 'PDF Folder/2024/4/PME.pdf' },
            { subject: 'Rural Development Administration & Planning', pdf: 'PDF Folder/2024/4/RDAP.pdf' }
        ]
    }
    // Add more categories,years amd subjects as needed

};

// script.js

// Function for the Typewriter Effect
function typewriterEffect(text, elementId, speed = 100) {
    const element = document.getElementById(elementId);

    if (!element) {
        console.error(`Element with ID "${elementId}" not found.`);
        return;
    }

    element.textContent = ''; // Clear previous content
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index]; // Add one character at a time
            index++;
        } else {
            clearInterval(typingInterval); // Stop when complete
        }
    }, speed);
}

// Load Categories on Page Load
window.onload = function () {
    loadCategories();
};

// Load Category Buttons (e.g., First Year, Second Year, etc.)
function loadCategories() {
    typewriterEffect("Select Course Year", "category-heading");
    document.getElementById("category-heading").style.display = "block";
    document.getElementById("year-heading").style.display = "none";
    document.getElementById("subject-heading").style.display = "none";

    const categoryListDiv = document.getElementById('category-list');
    categoryListDiv.innerHTML = ''; // Clear existing buttons

    for (const category in data) {
        const categoryButton = document.createElement('button');
        categoryButton.textContent = category;
        categoryButton.classList.add('year-button');
        categoryButton.onclick = function () {
            loadYears(category);
            highlightSelectedButton(categoryButton, categoryListDiv);
        };
        categoryListDiv.appendChild(categoryButton);
    }
}

// Load Years for Selected Category
function loadYears(category) {
    typewriterEffect("Select Year", "year-heading");
    document.getElementById("category-heading").style.display = "none";
    document.getElementById("year-heading").style.display = "block";
    document.getElementById("subject-heading").style.display = "none";

    const yearListDiv = document.getElementById('year-list');
    yearListDiv.innerHTML = ''; // Clear existing buttons

    const years = Object.keys(data[category]);
    years.forEach(year => {
        const yearButton = document.createElement('button');
        yearButton.textContent = year;
        yearButton.classList.add('year-button');
        yearButton.onclick = function () {
            loadSubjects(category, year);
            highlightSelectedButton(yearButton, yearListDiv);
        };
        yearListDiv.appendChild(yearButton);
    });
}

// Load Subjects for Selected Year
function loadSubjects(category, year) {
    typewriterEffect("Select Subject", "subject-heading");
    document.getElementById("category-heading").style.display = "none";
    document.getElementById("year-heading").style.display = "none";
    document.getElementById("subject-heading").style.display = "block";

    const questionListDiv = document.getElementById('question-list');
    questionListDiv.innerHTML = ''; // Clear existing subjects

    const subjects = data[category][year];
    subjects.forEach(subject => {
        const subjectButton = document.createElement('button');
        subjectButton.textContent = subject.subject;
        subjectButton.classList.add('subject-button');
        subjectButton.onclick = function () {
            window.open(subject.pdf, '_blank'); // Open PDF in a new tab
            highlightSelectedButton(subjectButton, questionListDiv);
        };
        questionListDiv.appendChild(subjectButton);
    });
}

// Highlight Selected Button and Dim Unselected Buttons
function highlightSelectedButton(selectedButton, parentDiv) {
    Array.from(parentDiv.children).forEach(button => {
        if (button === selectedButton) {
            button.classList.add('selected');
            button.classList.remove('dimmed');
        } else {
            button.classList.add('dimmed');
            button.classList.remove('selected');
        }
    });
}
