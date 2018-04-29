var myself ={
	name:"Weidi Xie",
	profession:"Postdoctoral Researcher in Visual Geometry Group",
	address:"Parks Road, Oxford OX1 3PJ",
	phone:"+",
	email:"weidi.xie@eng.ox.ac.uk"
	google_scholar:"Google Scholar"
}
var starter ={
	init :"Hi",
	intro:"I'm "+myself.name,
	status:myself.profession,
	profession:myself.profession
	address:myself.address,
	phone:myself.phone,
	email:myself.email,
	google_scholar:myself.google_scholar
	contactMapEmbadded :"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d58382.32149806097!2d90.4132185696959!3d23.85785867958766!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1472724148659" ,
	
}
var header =[
	{
		title:"PROFESSION",
		text:starter.profession,
		link:"#header"
	},
	{
		title:"ADDRESS",
		text:starter.address,
		link:""
	},
	{
		title:"E-MAIL",
		text:starter.email,
		link:"mailto:"+starter.email
	},
	{
		title:"GOOGLE SCHOLAR",
		text:starter.google_scholar,
		link:"https://scholar.google.co.uk/citations?user=Vtrqj4gAAAAJ&hl=en"
	},
];

var aboutME = [
	{
		txt:"I'm currently a post-doctoral researcher in Visual Geometry Group, University of Oxford.",
	},
	{
		txt:"Previously I completed my Phd under the supervision of Prof. Alison Noble and Prof. Andrew Zisserman.",
	},
	{
		txt:"My research interests are in computer vision, biomedical image analsis, and deep learning.",
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
	},
	{
		txt:"Award 5",
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
var education =[
	{
		xm:"M.Sc. in CSE in 2012",
		result:"4.00 out of 4.00",
		institution :"My University Name"
	},
	{
		xm:"B.Sc.  in CSE in 2010",
		result:"4.00 out of 4.00",
		institution :"My University Name"
	},
	{
		xm:"Higher Secondary Certificate 2006",
		result:"5.00 out of 5.00 ",
		institution :"My School Name"
	},
	{
		xm:"Secondary School Certificate 2004",
		result:"5.00 out of 5.00 ",
		institution :"My School Name"
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
