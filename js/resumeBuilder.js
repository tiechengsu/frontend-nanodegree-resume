/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name" : "Tiecheng Su",
    "role" : "Software Engineer",
    "image" : "images/fry.jpg",
    "contacts":{
        "mobile":"585-210-6095",
        "email":"tsu5@ur.rochester.edu",
        "github":"tiechengsu",
        "location":"Rochester"
    },
    "welcomeMessage":"welcome!",
    "skills":["Languages: Java, C++, Python, JavaScript, SQL, PHP, Shell Script, Matlab",
    "Tools: Git, XML, HTML, CSS",
    "Experienced with Algorithms and Data Structures",
    "Familiar with Operating systems and Database Systems"]
};

function displayBio(){
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedImage = HTMLbioPic.replace("%data%",bio.image);
    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage);
    $("#header").append(HTMLskillsStart);
    for(var i=0; i<bio.skills.length; ++i){
        var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);

}

displayBio();


var work = {
    "jobs":[
        {
            "employer" : "Gofind.ai",
            "title" : "Software Engineering intern",
            "dates" : "05/2016 - 08/2016",
            "description" : "Builded a visual search engine using deep convolutional neural networks."+
            "<br> implemented and trained multi-object recognition algorithm."+
            "<br> Researched on deep learning algorithms for image classification."
        }
    ]
};



function displayWork(){
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer+formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%",location);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

var education = {
    "schools" : [{
            "name" : "University of Rochester",
            "location" : "Rochester, NY",
            "degree" : "Masters",
            "major" : ["Electrical and Computer Engineering"],
            "dates" : "2015-2017"
        },
        {
            "name" : "Huazhong University of Science and Technology",
            "location" : "Wuhan, China",
            "degree" : "BA",
            "major" : ["Optoelectronic Materials and Devices"],
            "dates" : "2011-2015"
        }
    ]

};

function displayEduction(){

    for(var i=0; i<education.schools.length; ++i){
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].major);
        $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree,formattedSchoolDates,
            formattedSchoolLocation,formattedSchoolMajor);
    }
}
displayEduction();

var project = {
    "projects" : [{
            "title":"Popular Movies App",
            "dates":"03/2017",
            "description":"Builded an android app to allow users to discover popular and high rated movies."+
            "<br>Fetched updated data from TMDb database to allow users read movie details and watch trailers."+
            "<br>Designed local SQLite database to enable offline features."
        },
        {
            "title":"Reddit comments big data analysis",
            "dates":"03/2017",
            "description":"Deployed Hadoop on Amazon EC2."+
            "<br>Implemented Hadoop Streaming program in Python for MapReduce."
        },
        {
            "title":"Face Recognition in the Wild",
            "dates":"03/2016-05/2016",
            "description":"Used fish vector to aggregate dense SIFT features into GMM."+
            "<br>Compressed fish vector by linear projection function and implemented SVM."
        },
        {
            "title":"Predicting Yelp Ratings Based on Social Network",
            "dates":"03/2016-05/2016",
            "description":"Implemented collaborative filtering algorithm."+
            "<br>Revised the algorithm by rounding and introducing friends’ influence."
        },
        {
            "title":"Image Registration for High Dynamic Range Image",
            "dates":"11/2015-12/2015",
            "description":"Used histogram mapping to remove ghosting."+
            "<br>Implemented global registration algorithm base on median threshold bitmap."
        }
    ]
};

function displayProject(){
    for(var i=0; i<project.projects.length; ++i){
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%",project.projects[i].title);
        var formattedProjectDate = HTMLprojectDates.replace("%data%",project.projects[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%",project.projects[i].description);
        $(".project-entry:last").append(formattedProjectTitle,formattedProjectDate,formattedProjectDescription);
    }
}

displayProject();


