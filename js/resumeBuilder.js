var bio = {
    "name": "Danny Trimino",
    "role": "Web Developer",
    "contacts": {
        "mobile": "305-458-2556",
        "email": "dannytrimino@gmail.com",
        "gitHub": "dtrimino",
        "twitter": "@dannytdannyt",
        "location": "Miami, Fl"
    },

    "welcomeMessage": "Hiya!",
    "skills": [
        "awesomeness", "delivering things", "sleep", "loving"
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
            "description": "Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue."
        },
        {
            "employer": "dkWeb2 Design & Development",
            "title": "Web Developer",
            "dates": "2015-Present",
            "description": "Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue."
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
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
