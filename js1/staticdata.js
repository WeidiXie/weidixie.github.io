var myself ={
	name:"Weidi Xie",
	profession:"Post-doctoral Researcher in VGG",
	address:"Engineering Science Department, Oxford",
	email:"weidi.xie@eng.ox.ac.uk"
}
var starter ={
	init :"Hello",
	intro:"I'm "+myself.name,
	profession:myself.profession
	status:myself.profession,
	address:myself.address,
	phone:myself.phone,
	email:myself.email,
	contactMapEmbadded :
	"https://www.google.com/maps/place/Department+of+Engineering+Science/@51.7602176,-1.264092,17z/data=!3m1!4b1!4m5!3m4!1s0x4876c6a7ef02ec61:0xb3c3c75952940c70!8m2!3d51.7602176!4d-1.2597146",
}
var header =[
    {
		title:"Profession",
		text:starter.profession,
		link:""
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
	}
];

var aboutME = [
	{
		txt:"about myself 1",
	},
	{
		txt:"about myself 2",
	},
	{
		txt:"about myself 3",
	},
	{
		txt:"about myself 4",
	},
	{
		txt:"about myself 5",
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
