var bio = {
    "name": "Danny Trimino",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(305) 458-2556",
        "email": "dannytrimino@gmail.com",
        "gitHub": "dtrimino",
        "twitter": "@dannytdannyt",
        "location": "Miami, FL"
    },

    "welcomeMessage": "Hello there!",
    "skills": [
        "HTML5", "CSS3", "JavaScript", "jQuery", "Photoshop", "Bootstrap",
    ],

    "bioPic": "images/fry.jpg"
}

var education = {
    "schools": [
        {
            "name": "ITT Technical Institute",
            "city": "Miami, Fl",
            "degree": "BA",
            "major": ["Information Technology & Computer Network Systems"],
            "dates": "2005"
        }
    ],

    "onlineCourses": [
        {
            "title": "Front End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016-2017",
            "url": "https://classroom.udacity.com/nanodegrees/nd001"
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer": "dkWeb2 Design & Development",
            "title": "Web Developer",
            "dates": "2015-Present",
            "description": "Conceptualized, planned and executed original designs for a wide range of website properties. Designed print and marketing initiatives for all website properties. Identified and eliminated website bugs to improve user experience. Used and contributed to style guides and other design documentation to maintain coherent information and interaction design patterns."

        },
        {
            "employer": "Happy Holidays Travel",
            "title": "Director of Design",
            "dates": "2011-2015",
            "description": "Targeted both offline and online consumers by designing a multi-pronged and comprehensive marketing strategy.  Created effective messaging using language, graphics and marketing collateral.  Directed a successful search engine marketing campaign that utilized solid linking, technical and keyword research tactics. Updated and maintained graphics library records. Delivered production ready graphics in HTML and CSS for all marketing assets. Maintained consistent use of graphic imagery in materials and other marketing outreach. Formatted text and graphics for blog posts, newsletters and other materials."

        },
        {
            "employer": "Merchant Advantage",
            "title": "Customer Service Rep",
            "dates": "2007-2011",
            "description": "Managed wide variety of customer service and administrative tasks to resolve customer issues quickly and efficiently.  Ensured superior customer experience by addressing customer concerns, demonstrating empathy and resolving problems on the spot. Provided an elevated customer experience to generate a loyal clientele. Routinely answered customer questions regarding merchandise and pricing. Met or exceeded service and quality standards every review period. Acted professionally and patiently when addressing negative customer feedback. Effectively managed a high-volume of inbound and outbound customer calls."

        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Classic Arcade Game",
            "dates": "2016-2017",
            "description": "Recreated the classic arcade game, Frogger, which can be found here: https://github.com/dtrimino/Classic-Arcade-Clone",
            "images": [

            ]
        },
        {
            "title": "Sample Project 2",
            "dates": "2016-2017",
            "description": "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
            "images": [

            ]
        }
    ]
}

function displayBio() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
    $("#topContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
    $("#footerContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#footerContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedLocation);





    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);

    }
}

displayBio();

function displayWork() {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }

}

displayWork();

function displayProjects() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }

    }
};

displayProjects();

function displayClassEducation() {

    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

        var formattedEducationTitle = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedEducationTitle);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
    }
};

displayClassEducation();

function displayOnlineEducation() {
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedonTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedonSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedonTitle + formattedonSchool);
        var formattedonDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedonDates);
        var formattedonUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedonUrl);
    }
};

displayOnlineEducation();



$(document).click(function (loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
