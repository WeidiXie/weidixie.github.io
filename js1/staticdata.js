var myself ={
	name:"WEIDI XIE",
	profession:"Postdoctoral Researcher in Visual Geometry Group (VGG)",
	address:"Parks Road, Oxford, OX1 3PJ",
	email:"removethisweidi.xie@eng.ox.ac.uk"
}

var starter ={
	init :"Hi",
	intro:"I'm "+myself.name,
	status:myself.profession,
	address:myself.address,
	email:myself.email,
}

var header =[
	{
		title:"E-MAIL:",
		text:starter.email,
		link:"mailto:"+starter.email
	},
	{
		title:"ADDRESS:",
		text:starter.address,
		link:""
	}
];

var aboutME = [
	{
		txt:"I completed my D.Phil in 2018, in VGG & IBME, Oxford,",
	},
	{
	    txt:"under the supervision of Professor Alison Noble and Professor Andrew Zisserman."
	},
	{
		txt:"Now, I'm a postdoctoral researcher in Visual Geometry Group (VGG), Oxford.",
	},
	{
		txt:"My research interests are in computer vision, biomedical image analysis, and deep learning.",
	},
	{
		txt:"Please see my publications for some academic work.",
	}
];

var aboutAwards = [
	{
		txt:"Award 1",
	},
	{
		txt:"Award 2",
	},
	{
		txt:"Award 3",
	},
	{
		txt:"Award 4",
	}
];

var education =[
   {
      xm:"D.Phil in Engineering Science in 2018",
      result:"Examined by: Professor Andrea Vedaldi and Professor Daniel Rueckert",
      institution :"University of Oxford"
   },
   {
      xm:"M.Sc. in Computer Graphics, Vision and Imaging in 2014",
      result:"Distinction on MSC Thesis",
      institution :"University College London"
   },
   {
      xm:"B.Sc. in Telecommunication Engineering in 2012 (Exchange Student)",
      result:"First-class Honour",
      institution :"Queen Mary, University of London"
   },
   {
      xm:"B.Sc. in Telecommunication Engineering in 2012",
      result:"First-class Honour",
      institution :"Beijing University of Posts and Telecommunications"
   }
];

var workExperience =[
	{
		company:"Company A",
		details:"I can write a short description here",
		position:"My post",
		time :"2016 - Present"
	},
	{
		company:"Company B",
		details:"I can write a short description here",
		position:"My post",
		time :"2015 - 2016"
	},
	{
		company:"Company C",
		details:"I can write a short description here",
		position:"My post",
		time :"2012 - 2015"
	}
];

var skillsLeft =[
	{
		txt:"C , C++",
		percentage :"80"
	},
	{
		txt:"JAVA",
		percentage :"90"
	},
	{
		txt:"XML & JSON",
		percentage :"80"
	},
	{
		txt:"Customization of Views",
		percentage :"75"
	}
];

var skillsRight=[
	{
		txt:"Services and Receivers",
		percentage :"90"
	},
	{
		txt:"MVC, MVP",
		percentage :"60"
	},
	{
		txt:"UX DEVELOPER",
		percentage :"70"
	},
	{
		txt:"Third party libraries and API",
		percentage :"80"
	}
];

var portfolioMenu =[
	{
		txt :"Catagory A"
	},
	{
		txt :"Catagory B"
	},
	{
		txt :"Catagory C"
	}
];

var portfolios = [
	[
		{
			name:"Project A 1",
			creator:" creator",
			desc:"a short description",
			link:"images/icon1.jpg",
			imgSrc : "images/icon1.jpg",
			type : "Catagory A",
			btntxt : "Visit Account"
		},
		{
			name:"Project A 2",
			creator:" creator",
			desc:"a short description",
			link:"http://google.com",
			imgSrc : "images/icon2.jpg",
			type : "Catagory A",
			btntxt : "Visit Account"
		},
		{
			name:"Project A 3",
			creator:" creator",
			desc:"a short description",
			link:"images/icon3.jpg",
			imgSrc : "images/icon3.jpg",
			type : "Catagory A",
			btntxt : "Visit Account"
		},
		{
			name:"Project A 4",
			creator:" creator",
			desc:"a short description",
			link:"images/icon4.jpg",
			imgSrc : "images/icon4.jpg",
			type : "Catagory A",
			btntxt : "Visit Account"
		}
	],
	[
		{
			name:"Project B 1",
			creator:" creator",
			desc:"a short description",
			link:"images/icon5.jpg",
			imgSrc : "images/icon5.jpg",
			type : "Catagory A",
			btntxt : "Visit Account"
		},
		{
			name:"Project B 3",
			creator:" creator",
			desc:"a short description",
			link:"http://google.com",
			imgSrc : "images/icon6.jpg",
			type : "Catagory A",
			btntxt : "Visit Account"
		},
		{
			name:"Project B 2",
			creator:" creator",
			desc:"a short description",
			link:"http://google.com",
			imgSrc : "images/icon7.jpg",
			type : "Catagory 7",
			btntxt : "Visit Account"
		},

	],
	[
		{
			name:"Project C 1",
			creator:" creator",
			desc:"a short description",
			link:"images/icon8.jpg",
			imgSrc : "images/icon8.jpg",
			type : "Catagory A",
			btntxt : "Visit Account"
		},
		{
			name:"Project C 2",
			creator:" creator",
			desc:"a short description",
			link:"images/icon9.jpg",
			imgSrc : "images/icon9.jpg",
			type : "Catagory A",
			btntxt : "Visit Account"
		}
	]
];
