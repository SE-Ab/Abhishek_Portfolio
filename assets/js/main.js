/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// Resume data object
var resumeData = {
    name: "Abhishek Kumar Singh",
    phone: "+91 9504983374",
    location: "Patna, Bihar, India",
    email: "abhishek22021@gmail.com",
    linkedin: "https://www.linkedin.com/in/se-avi/",
    github: "https://github.com/se-ab",
    objective: "Dynamic Full Stack Developer skilled in crafting web and Android apps from scratch to deployment. Skilled in Java, Spring Boot, Angular, and Ionic with a flair for cutting-edge tech. Committed to delivering high-impact solutions for a seamless user experience.",
    education: [
        {
            degree: "PGP in Full Stack Software Engineering",
            institution: "National Institute of Information Technology",
            duration: "2022 - 2023"
        },
        {
            degree: "Bachelor of Computer Application",
            institution: "Patliputra University",
            duration: "2019 - 2022"
        }
    ],
    skills: {
        clientSide: ["Html", "CSS", "JavaScript", "Typescript", "Angular", "Ionic", "Angular Material", "Bootstrap"],
        serverSide: ["Java", "JDBC", "Spring boot", "MySQL", "MongoDB"],
        devOps: ["Postman", "Ubuntu", "Nginx", "Agile", "Git"]
    },
    experience: [
        {
            position: "Full Stack Developer",
            company: "Chapterfeed Learning Space Private Limited",
            location: "Patna, Bihar, India",
            duration: "April 2023 - Present",
            description: "Proficient in Java, Spring Boot, and Angular demonstrated comprehensive full-stack development expertise. Recently expanded expertise to include Android app development using Ionic, successfully deploying apps on the Play Store. Streamlined operations and successfully led 2 concurrent projects to completion, meeting all deadlines while demonstrating the capability to efficiently manage and maintain multiple projects simultaneously. Spearheaded the implementation of internal web and mobile applications, resulting in a 40 percent decrease in manual data entry, saving the team 20+ hours per week and improving data accuracy. Efficiently managed entire project lifecycles, from initial design through to deployment, ensuring consistency and high-quality standards in finished products."
        }
    ],
    projects: [
        {
            name: "Foodie Capstone Project",
            githubLink: "https://github.com/SE-Ab/Foodie_WebApp",
            description: "Led a team of three in developing a Full Stack 'Foodie' Application using Angular, Spring Boot, MongoDB, and MySQL. Implemented essential platform functionalities, allowing restaurant owners to register and users to easily order cuisines based on location. Created a responsive design for a user-friendly interface, optimizing the application's visual appeal. Collaborated with team members to deliver a fully functional application within the project timeline."
        }
    ],
    languages: ["English", "Hindi", "Bengali"]
};

// Function to generate HTML for resume preview
function generateResumePreview(data) {
    var previewHTML = `
        <div class="resume-preview__header">
            <h3>${data.name}</h3>
            <p>${data.location}</p>
            <p>${data.email}</p>
            <p>${data.phone}</p>
            <a href="${data.linkedin}" target="_blank">Linkedin</a>
            <a href="${data.github}" target="_blank">Github</a>
        </div>
        <div class="resume-preview__objective">
            <h4>Objective</h4>
            <p>${data.objective}</p>
        </div>
        <div class="resume-preview__education">
            <h4>Education</h4>
    `;
    data.education.forEach(edu => {
        previewHTML += `
            <div>
                <p>${edu.degree} - ${edu.institution}</p>
                <p>${edu.duration}</p>
            </div>
        `;
    });
    previewHTML += `
        </div>
        <div class="resume-preview__skills">
            <h4>Skills</h4>
            <div>
                <p><strong>Client-Side:</strong> ${data.skills.clientSide.join(', ')}</p>
                <p><strong>Server-Side:</strong> ${data.skills.serverSide.join(', ')}</p>
                <p><strong>DevOps:</strong> ${data.skills.devOps.join(', ')}</p>
            </div>
        </div>
        <div class="resume-preview__experience">
            <h4>Experience</h4>
    `;
    data.experience.forEach(exp => {
        previewHTML += `
        <div>
        <h5>${exp.position} - ${exp.company}</h5>
        <p>${exp.location} | ${exp.duration}</p>
        <br>
        <ul>
            <li>Proficient in Java, Spring Boot, and Angular.</li>
            <li>Expanded expertise to include Android app development using Ionic, successfully deploying apps on the Play Store.</li>
            <li>Streamlined operations and led 2 concurrent projects to completion, meeting all deadlines.</li>
            <li>Spearheaded the implementation of internal web and mobile applications, resulting in a 40 percent decrease in manual data entry and improving data accuracy.</li>
            <li>Managed entire project lifecycles, from initial design through to deployment, ensuring consistency and high-quality standards in finished products.</li>
        </ul>
    </div>
        `;
    });
    previewHTML += `
        </div>
        <div class="resume-preview__projects">
            <h4>Projects</h4>
    `;
    data.projects.forEach(proj => {
        previewHTML += `
        <div>
        <h5>${proj.name}</h5>
        <p><a href="${proj.githubLink}" target="_blank">Github</a></p>
        <br>
        <ul>
            <li>Led a team of three in developing a Full Stack 'Foodie' Application using Angular, Spring Boot, MongoDB, and MySQL.</li>
            <li>Implemented essential platform functionalities, allowing restaurant owners to register and users to easily order cuisines based on location.</li>
            <li>Created a responsive design for a user-friendly interface, optimizing the application's visual appeal.</li>
            <li>Collaborated with team members to deliver a fully functional application within the project timeline.</li>
        </ul>
    </div>
        `;
    });
    previewHTML += `
        </div>
        <div class="resume-preview__languages">
            <h4>Languages</h4>
            <p>${data.languages.join(', ')}</p>
        </div>
    `;
    return previewHTML;
}

// Display resume preview
document.getElementById('resumePreviewContainer').innerHTML = generateResumePreview(resumeData);

