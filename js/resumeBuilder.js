// TODO: make Google Maps better, open only one infowindow at a time!  ??? abandonded
// TODO: sharper and more responsive images
// TODO: a better favicon, mobile-ready
// TODO: project part: shows an image, and on focus, the details 
// and link shows on the page
// TODO: do something with d3.js
// TODO: interactive menu bar
// TODO: stylings, with new skills
// TODO: return to original on second click of internationalize


var bio = {
	"name": "Yay Wang",
	"role": "Javascript Ninja",
	"contacts": {
		"mobile": "1 (619)-9406106",
		"email": "wangyegp@gmail.com",
		"twitter": "@wangyegp",
		"github": "yexwang",
		"location": "Ho Chi Minh City"
	}, // you must add a coma
	"bioPic": "images/images_src/fixed/me.jpg",
	"welcomeMsg": "Hey, welcome. I'm working to be the best Javascript developer in the world!!!",
	"skills": ["Javascript", "HTML", "CSS", "Swift", "Python", "Data Analysis", "Driving", "Scuba Diving", 
		"Fencing", "Copywriting","Filmmaking", "Awesomeness", "Coolness"] // no coma here
};

bio.display = function() {
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
	$("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, 
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
}

var education = {
	"schools":
[{
	"name": "UC Berkeley",
	"degree": "BA not yet completed",
	"dates": 2014,
	"location": "Berkeley, CA",
	"url": "http://www.berkeley.edu",
// !!! you got to add http:// here for the link to work
	"majors": ["Undeclared","Rocket Science"]
}],
	"onlineCourses":
[{
	"title": "Front-End Developer Nanodgree",
	"school": "Udacity",
	"dates": 2015,
	"url": "https://www.udacity.com/course/\
front-end-web-developer-nanodegree--nd001"
},{
	"title": "Full-stack Developer Nanodegree",
	"school": "Udacity",
	"dates": 2015,
	"url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
}]
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", 
			education.schools[school].name).replace("#",
			education.schools[school].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",
			education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",
			education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",
			education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree,
			formattedSchoolDates, formattedSchoolLocation);

		for (major in education.schools[school].majors) {
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",
				education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}

	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",
			education.onlineCourses[course].title).replace("#",
			education.onlineCourses[course].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",
			education.onlineCourses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%",
			education.onlineCourses[course].dates);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%",
			education.onlineCourses[course].url).replace("#",
			education.onlineCourses[course].url);;

		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool,
			formattedOnlineDates, formattedOnlineUrl);
	}
}

// ??? why on earth we want the jobs array inside another object. 
// ??? why not simply a display method
// now I know, you want to have a d
var work = {
	jobs:
[{
	"employer": "Big Bang Rocket Institue",
	"title": "Aerospace Engineer",
	"location": "Beijing",
	"dates": "Nov 2014 - Sept 2015",
	"description":"This was my very first engineering job. I successfully helped\
 my company launch our new space shuttle to the Mars!",
//	"images": ["images/workingBeijing1.jpg",
//			    "images/workingBeijing2.jpg"]
},{
	"employer": "Self-employed",
	"title": "Programmer",
	"location": "Bangkok",
	"dates": "Nov 2015 - Jan 2016",
	"description": "I independently worked on various challenging JS projects.",
//	"images": ["images/workingBangkok1.png", "images/workingBangkok2.png"]
},{
	"employer": "Self-employed",
	"title": "Programmer",
	"location": "Istanbul",
	"dates": "Feb 2016 - Mar 2016",
	"description": "I worked on harder and more complex web development projects"
}]};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,
			formattedLocation, formattedDates, formattedDescription);
	}
}


var projects = {
	"projects":
[{
	"title" : "Resume Project",
	"dates" : "Sept 15 2015 - Sept 17 2015",
	"description": "My first student project on Udacity platform",
	"images": ["images/udacityProject1.png", "images/udacityProject2.png"]
}, {
	"title": "Imagined Project 1",
	"dates": "Sept 17 2015 - Sept 18 2015",
	"description": "This will happen in near future",
	"images": ["images/imaginedProject1.jpg"]
},{
	"title": "Imagined Project 2",
	"dates": "Sept 19 2015 - Sept 21 2015",
	"description": "This will happen next. This will!",
	"images": ["images/imaginedProject2.jpg"]
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

		$(".project-entry:last").append(formattedTitle, formattedDates,
			formattedDescription);
		
		for (image in projects.projects[project].images) {
			var formattedImages = HTMLprojectImage.replace("%data%",
			projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImages);
		}
	}
}


bio.display();
education.display();
work.display();
projects.display();


$("#mapDiv").append(googleMap);


// Style manipulation code:
//$(".#projects").css("background", "black");
$(".project-entry img").css("border-radius", "2px");
$(".project-entry img").css("border", "3px solid #5E6B71");
$(".project-entry img").css("margin", "5px");

/*
var inName = function(name) {
	var nameArray = name.trim().split(" ");
	var inName = nameArray[0][0].toUpperCase() + nameArray[0].slice(1).toLowerCase() 
				+ " " + nameArray[1].toUpperCase();
	return inName;
};
$("#main").append(internationalizeButton);
*/


