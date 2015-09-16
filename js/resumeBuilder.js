var bio = {
	"name": "Yay Wang",
	"role": "Javascript Ninja",
	"contacts": {
		"mobile": "1 (619)-9406106",
		"email": "wangyegp@gmail.com",
		"twitter": "@wangyegp",
		"github": "yexwang",
		"location": "Bangkok"
	}, // you must add a coma
	"bioPic": "images/me.jpg",
	"welcomeMsg": "Hey, welcome. All the information on this place is really true.",
	"skills": ["Javascript", "HTML", "CSS", "Python", "PyData", "Driving", "Scuba Diving", 
		"Fencing", "Copywriting","Filmmaking", "Awesomeness", "Coolness"] // no coma here
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName, formattedRole);
 
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedMobile, formattedEmail, formattedTwitter, 
						formattedGithub, formattedLocation);

var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedBiopic, formattedWelcomeMsg);

// ??? this doesn't actually work. if 
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (i = 0; i < bio.skills.length; i++) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	}
}

var projects = {
	"projects":
[{
	"title" : "Resume Project",
	"dates" : "Sept 14 2015",
	"description": "My first student project on Udacity platform",
	"images": "images/udacityProject.jpg"
}, {
	"title": "Imagined Project 1",
	"dates": "Sept 15 2015",
	"description": "This will happen in near future",
	"images": "images/imaginedProject1.jpg"
}, {
	"title": "Imagined Project 2",
	"dates": "Sept 16 2015",
	"description": "This will happen next. This will!",
	"images": "images/imaginedProject2.jpg"
}]};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",
			projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", 
			projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",
			projects.projects[project].description);
		var formattedImages = HTMLprojectImage.replace("%data%", 
			projects.projects[project].images);

		$(".project-entry:last").append(formattedTitle, formattedDates,
			formattedDescription, formattedImages);
	}
}

projects.display();

var education = {
	"schools":
[{
	"name": "UC Berkeley",
	"degree": "None",
	"dates": "Sept 2012 to Jun 2014",
	"majors": ["undeclared"],
	"location": "Berkeley, CA",
	"url": "www.berkeley.edu"
}],
	"onlineCourses":
[{
	"title": "Frontend Developer Nanodgree",
	"school": "Udacity",
	"dates": "Sept 2015 to Nov 2015",
	"url": "https://www.udacity.com/course/\
front-end-web-developer-nanodegree--nd001"
}]
};


// all the work images were temporary. I'll add more once I literally have
// more jobs
var work = [{
	"employer": "Self-employed",
	"title": "Programmer",
	"location": "Beijing",
	"dates": "Jun 2014 to Sept 2015",
	"description":"I was trying my way to be a brilliant programmer \
and person, and build a startup.",
	"images": ["images/workingBeijing1.jpg",
			    "images/workingBeijing2.jpg"]
},{
	"employer": "Self-employed",
	"title": "Programmer",
	"location": "Bangkok",
	"dates": "Sept 2015 to Jan 2016",
	"description": "I worked on various javascript projects \
as a digital nomad.",
	"images": ["images/workingBangkok1.png", "images/workingBangkok2.png"]
}];

for (job in work) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work[job].title);
	var formattedLocation = HTMLworkLocation.replace("%data%", work[job].location);
	var formattedDates = HTMLworkDates.replace("%data%", work[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work[job].description);

	$(".work-entry:last").append(formattedEmployer + formattedTitle,
		formattedLocation, formattedDates, formattedDescription);
}


$("#mapDiv").append("googleMap");

$("#main").append(internationalizeButton);
var inName = function(name) {
	var nameArray = name.trim().split(" ");
	var inName = nameArray[0][0].toLowerCase() + nameArray[0].slice(1) 
				+ " " + nameArray[1].toUpperCase();
	return inName;
};



