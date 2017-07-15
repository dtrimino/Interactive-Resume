var bio = {
  name: "Danny Trimino",
  role: "Web Developer",
  contacts: {
    mobile: "305-458-2556",
    email: "dannytrimino@gmail.com",
    github: "dtrimino",
    twitter: "@dannytdannyt",
    location: "Miami, FL",
  },
  welcomeMessage: "Hiya!",
  skills: ["awesomeness", "learning", "sleep", "coding"],
  biopic: "images/fry.jpg",
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic, bio.welcomeMessage);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
  }
};
bio.display();

var education = {
  schools: [{
    name: "ITT Technical Institute",
    location: "Miami, FL",
    degree: "BA",
    majors: ["Information Technology & Computer Network Systems"],
    dates: "2005"
  }],
  onlineCourses: [{
    title: "Front End Web Developer Nanodegree",
    school: "Udacity",
    dates: "2016-2017",
    url: "https://classroom.udacity.com/nanodegrees/nd001"
  }],
  display: function() {
    for (var i = 0; i < education.schools.length; i++) {
      var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedEducationTitle = formattedName + formattedDegree;
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedEducationTitle);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedMajor);
      $("#education").append(HTMLonlineClasses);

      for (var online = 0; online < education.onlineCourses.length; online++) {

        var formattedonTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedonSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var formattedonDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        var formattedonUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedonTitle + formattedonSchool);
        $(".education-entry:last").append(formattedonDates);
        $(".education-entry:last").append(formattedonUrl);
      }
    }
  }
};
education.display();

var work = {
  jobs: [{
      employer: "dkWeb2 Design & Development",
      title: "Web Developer",
      location: "Chivay, Peru",
      dates: "2015-Present",
      description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    },
    {
      employer: "Happy Holidays Travel",
      title: "VP of Graphic Design",
      location: "Miami, FL",
      dates: "2011-2015",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna.."
    }
  ],
  display: function() {
    for (var i = 0; i < work.jobs.length; i++) {

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};
work.display();

var projects = {
  projects: [{
      title: "Sample Project 1",
      dates: "2017-2018",
      description: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      images: [
        "http://placehold.it/250x250", "http://placehold.it/250x250"
      ]
    },
    {
      title: "Sample Project 2",
      dates: "2016-2017",
      description: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      images: [
        "http://placehold.it/250x250", "http://placehold.it/250x250"
      ]
    }
  ],
  display: function() {
    if (projects.projects.length > 0) {
      for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
          for (var img = 0; img < projects.projects[project].images.length; img++) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
            $(".project-entry:last").append(formattedProjectImage);
          }
        }
      }
    }
  }
};

projects.display();



$(document).click(function(loc) {
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
$("#mapDiv").append(googleMap);
