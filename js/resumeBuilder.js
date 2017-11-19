
var bio = {
    "name": "Naman Nanavati",
    "role": "Front End Developer",
    "welcomeMessage": "Seeking an advanced career in Multimedia and Web with consistent growth, by implementing my experience, skills and qualification. Gain management skills and emerge as a leader with management position in Media domain on a global platform.",
    "biopic": "images/self.jpg",
    "contacts": {
        "email": "naman.nanavati@gmail.com",
        "mobile": "+61 433 433 173",
        "github": "innovativeGem",
    },
    "skills": [
    {
        "Software": [
            {
                "name": "Adobe Software Package",
                "level": "6"
            },
            {
                "name": "Visual Studio",
                "level": "7"
            },
            {
                "name": "Visual Studio Code",
                "level": "8"
            }
        ]},
        {
        "Programming": [
            {
                "name": "HTML, CSS/SCSS",
                "level": "8"
            },
            {
                "name": "Javascript/jQuery",
                "level": "7"
            },
            {
                "name": "Angular",
                "level": "6"
            }
        ]},
        {
        "Other": [
            {
                "name": "GIT versioning & documentation",
                "level": "7"
            },
            {
                "name": "Analytics & reporting",
                "level": "6"
            },
            {
                "name": "Time management & prioritising",
                "level": "8"
            }
        ]}
    ]
};

var work = {
    "jobs": [{
        "title": "Front-End Developer",
        "employer": "BMW Group Australia",
        "link": "http://www.bmw.com.au",
        "dates": "2012-current",
        "location": "783 Springvale Road, Mulgrave, Melbourne, Australia",
        "description": "<p>At BMW, I am mainly involved in<ul><li>developing and maintaining BMW Motorrad National and Dealer websites using WCMS platform</li><li>developing and maintaining BMW National and Dealer websites using AEM and Open CMS platform</li><li>we also develop and maintain all our local applications like CRM forms, dealer locator, model compare and price tool, microsites etc. starting from mock-up designs to final product using various programming languages and frameworks like HTML, CSS, SCSS, Javascript, jQuery, AngularJS.</li><li>project versioning and documentation on Atlassian portal.</li><li>cross browser and platform testing.</li><li>create analytical performance reports using Google Analytics in sync with GTM and DTM.</li></ul></p>"
    }, {
        "title": "Media Developer Project Coordinator",
        "employer": "Cengage Learning Australia",
        "link": "https://cengage.com.au",
        "dates": "2009-2012",
        "location": "80 Dorcas Street, South Melbourne, Victoria 3205",
        "description": "My main responsibilities at Cengage was<ul><li>to design and build e-learning products, interactive learning objects, animations, video editing etc.</li><li>develop various web applications using HTML/CSS, Javascript, Flash, XML, Verdi CMS.</li><li>I was also involved in managing external vendors and communicating ongoing feedback to stakeholders.</li></ul>"
    }, {
        "title": "Front End Developer",
        "employer": "Webcruzer Australia",
        "link": "http://www.webcruzer.com/gbsol/index.action",
        "dates": "2007-2008",
        "location": "Melbourne, Australia",
        "description": "Build dynamic web templates for various business types. Design mock-ups and HTML/CSS custom interfaces, Image editing, animations, coding, video editing."
    }]
};

var projects = {
    "projects": [{
        "title": "BMW Motorrad Australia",
        "link": "http://www.bmwmotorrad.com.au",
        "description": "I am part of a team that develops and maintain BMW Motorrad Australia national and dealer websites and microsites. My responsibilies are to maintain the web content on our national and dealer websites, develop local web applications, track performance and report status back to motorrad team.",
        "images": ["images/motorrad-0.jpg", "images/motorrad-1.jpg", "images/motorrad-2.jpg"]
    }, {
        "title": "BMW Cars Australia",
        "link": "http://www.bmw.com.au",
        "description": "As a part of the web team that develops and maintain BMW Australia national and dealer websites and microsites my responsibilies are to maintain the web content on our national and dealer websites, develop local web applications, track performance and report status back to various teams.",
        "images": ["images/bmw-0.jpg", "images/bmw-1.jpg", "images/bmw-2.jpg"]
    }, {
        "title": "Estate Plastering",
        "link": "http://estateplastering.com.au",
        "description": "This is my freelance project where my client required a simple website to show their new projects, services and have an online presense. I have used wordpress for this project.",
        "images": ["images/estate-0.jpg", "images/estate-1.jpg"]
    }]
};

var education = {
    "schools": [{
        "name": "Swinburne University",
        "degree": "Master of Multimedia Technology",
        "dates": "2004-2006",
        "location": "Melbourne, Australia",
        "link": "http://www.swinburne.edu.au/study/course/Master-of-Multimedia-MA-MM1/international"
    }, {
        "name": "Keyframes Institute of Technology",
        "degree": "Diploma in Multimedia",
        "dates": "2001-2003",
        "location": "Ahmedabad, India"
    }],
    "onlineCourses": [{
        "name": "Up and Running with AngularJS",
        "school": "Lynda.com",
        "dates": "Jun 2015",
        "link": "https://www.lynda.com/AngularJS-tutorials/Up-Running-AngularJS/154414-2.html"
    }, {
        "name": "Front-End Web Developer Nanodegree",
        "school": "Udacity.com",
        "dates": "Mar 2016 - Oct 2016",
        "link": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
//$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

bio.display = function() {
    if (bio.skills !== null) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            $.each( skill, function( key, val ) {
                $.each( val, function( key1, val1 ) {
                    $("#skills").append(HTMLskills.replace("%data%", val1.name).replace("%data2%", val1.level+"0%"));
                    // $("#skills .skillItem").append(HTMLskillsBar.replace("%data%", val1.level+"0%"));
                })
              });

            // $("#skills").append(HTMLskills.replace("%data%", skill));
        });
    } else {
        console.log("No skills added");
    }
};

work.display = function() {

    work.jobs.forEach(function(job) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.link);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
    });
};

// display projects from projects object
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    //    for (project in projects.project){
    projects.projects.forEach(function(project) {
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title).replace("#", project.link));
        //$(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
        //        for (img in project.images){
        project.images.forEach(function(img) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", img));
        });
    });
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    //    for (school in education.schools){
    education.schools.forEach(function(school) {
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name).replace("#", school.link));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", school.degree));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
    });

    $(".education-entry:last").append(HTMLonlineClasses);
    //    for (course in education.onlineCourses){
    education.onlineCourses.forEach(function(course) {
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.school).replace("#", course.link));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
        $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", course.name).replace("#", course.link));
        // $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
    });
    //$(".education-entry:last").append();
    //$("#education").append()
};

bio.display();
work.display();
projects.display();
education.display();
//inName(bio.name);

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});