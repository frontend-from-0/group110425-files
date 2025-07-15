// script.js
document.addEventListener('DOMContentLoaded', () => {
    // This example directly uses the JSON data provided.
    // In a real application, you might fetch it from a file:
    // fetch('data.json')
    // .then(response => response.json())
    // .then(data => populateCV(data))
    // .catch(error => console.error('Error loading data.json:', error));

    const cvData = {
        "personalInformation": {
            "name": "John Doe",
            "title": "Junior Software Developer",
            "email": "john.doe@example.com",
            "phone": "123-456-7890",
            "linkedin": "linkedin.com/in/johndoe",
            "github": "github.com/johndoe",
            "location": "Anytown, USA"
        },
        "workExperience": [
            {
                "company": "Tech Startup Inc.",
                "title": "Software Developer Intern",
                "startDate": "June 2022",
                "endDate": "December 2022",
                "description": "Assisted senior developers in building web applications. Implemented new features and resolved bugs. Participated in code reviews and agile development processes."
            },
            {
                "company": "Web Solutions Ltd.",
                "title": "Front-End Developer Assistant",
                "startDate": "January 2023",
                "endDate": "Present",
                "description": "Developing and maintaining responsive websites using HTML, CSS, and JavaScript. Collaborating with designers to implement UI/UX designs. Optimizing website performance."
            }
        ],
        "education": [
            {
                "institution": "University of Anytown",
                "degree": "Bachelor of Science in Computer Science",
                "startDate": "September 2018",
                "endDate": "May 2022",
                "description": "Relevant coursework included data structures, algorithms, and software engineering."
            }
        ],
        "techSkills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Git",
            "SQL"
        ],
        "softSkills": [
            "Problem-solving",
            "Teamwork",
            "Communication",
            "Time management",
            "Adaptability"
        ],
        "projects": [
            {
                "name": "Personal Portfolio Website",
                "description": "Developed a personal portfolio website to showcase projects and skills using React.",
                "technologies": ["React", "HTML", "CSS", "JavaScript"],
                "link": "github.com/johndoe/portfolio"
            },
            {
                "name": "Task Management App",
                "description": "Created a task management application using Node.js and SQL for backend data storage.",
                "technologies": ["Node.js", "SQL", "JavaScript"],
                "link": "github.com/johndoe/task-app"
            }
        ]
    };

    populateCV(cvData);

    function populateCV(data) {
        // Personal Information
        document.getElementById('userName').textContent = data.personalInformation.name;
        document.getElementById('userTitle').textContent = data.personalInformation.title;
        document.getElementById('userEmail').textContent = data.personalInformation.email;
        document.getElementById('userPhone').textContent = data.personalInformation.phone;
        document.getElementById('userLocation').textContent = data.personalInformation.location;
        document.getElementById('userLinkedin').href = `https://${data.personalInformation.linkedin}`;
        document.getElementById('userGithub').href = `https://${data.personalInformation.github}`;

        // Work Experience
        const workExperienceContainer = document.getElementById('workExperienceContainer');
        data.workExperience.forEach(job => {
            const jobDiv = document.createElement('div');
            jobDiv.className = 'mb-4';
            jobDiv.innerHTML = `
                <h4 class="text-xl font-semibold text-gray-700">${job.title} at ${job.company}</h4>
                <p class="text-gray-600 mb-1">${job.startDate} - ${job.endDate}</p>
                <p class="text-gray-700">${job.description}</p>
            `;
            workExperienceContainer.appendChild(jobDiv);
        });

        // Education
        const educationContainer = document.getElementById('educationContainer');
        data.education.forEach(edu => {
            const eduDiv = document.createElement('div');
            eduDiv.className = 'mb-4';
            eduDiv.innerHTML = `
                <h4 class="text-xl font-semibold text-gray-700">${edu.degree} from ${edu.institution}</h4>
                <p class="text-gray-600 mb-1">${edu.startDate} - ${edu.endDate}</p>
                <p class="text-gray-700">${edu.description}</p>
            `;
            educationContainer.appendChild(eduDiv);
        });

        // Technical Skills
        const techSkillsList = document.getElementById('techSkillsList');
        data.techSkills.forEach(skill => {
            const listItem = document.createElement('li');
            listItem.textContent = skill;
            techSkillsList.appendChild(listItem);
        });

        // Soft Skills
        const softSkillsList = document.getElementById('softSkillsList');
        data.softSkills.forEach(skill => {
            const listItem = document.createElement('li');
            listItem.textContent = skill;
            softSkillsList.appendChild(listItem);
        });

        // Projects
        const projectsContainer = document.getElementById('projectsContainer');
        data.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'mb-4';
            projectDiv.innerHTML = `
                <h4 class="text-xl font-semibold text-gray-700">${project.name}</h4>
                <p class="text-gray-600 mb-1">Technologies: ${project.technologies.join(', ')}</p>
                <p class="text-gray-700">${project.description}</p>
                <a href="https://${project.link}" target="_blank" class="text-blue-600 hover:underline">View Project</a>
            `;
            projectsContainer.appendChild(projectDiv);
        });
    }
});