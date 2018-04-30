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
		txt:"In 2018, I completed my D.Phil in VGG & IBME,",
	},
	{
	    txt:"under the supervision of Professor Alison Noble and Professor Andrew Zisserman."
	},
	{
	    txt:" "
	},
	{
		txt:"I am a recipient of Magdalen Award from China Oxford Scholarship Fund (COSF),",
	},
	{
		txt:"I am a recipient of Oxford-Google DeepMind Graduate Scholarships from Google Deepmind.",
	},
	{
	    txt:" "
	},
	{
		txt:"Currently, I'm a postdoctoral researcher in Visual Geometry Group (VGG), Oxford.",
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
		company:"University of Oxford",
		details:"I'm involved in the Seebibyte Project.",
		position:"Postdoc Researcher in VGG",
		time :"Nov,2017 - Present"
	},
	{
		company:"University College London",
		details:"I was responsible for developing a cell tracking system based on level-set.",
		position:"Research Assistant in MRC Laboratory for Molecular Cell Biology ",
		time :"Sep,2013 - Feb,2014"
	}
];

var skillsLeft =[
	{
		txt:"Python",
		percentage :"90"
	},
	{
		txt:"Matlab",
		percentage :"80"
	},
	{
		txt:"C++",
		percentage :"70"
	}
];

var skillsRight=[
	{
		txt:"",
		percentage :""
	}
];

var portfolioMenu =[
	{
		txt :"Biomedical Image Analysis"
	},
	{
		txt :"Computer Vision"
	}
];

var portfolios = [
	[
		{
			name:"Microscopy Cell Counting",
			creator:"Weidi Xie",
			desc:"Microscopy Image Analysis",
			link:"https://www.tandfonline.com/doi/abs/10.1080/21681163.2016.1149104",
			imgSrc : "images/cell_count.png",
			type : "Biomedical Image Analysis",
			btntxt : "Link"
		},

		{
			name:"3D Brain Structure Localization",
			creator:"Weidi Xie",
			desc:"3D Ultrasound Neurosonography",
			link:"https://www.sciencedirect.com/science/article/pii/S1361841518301920",
			imgSrc : "images/3d brain structure.png",
			type : "Biomedical Image Analysis",
			btntxt : "Link"
		},
		{
			name:"3D Fetal Brain Alignment",
			creator:"Weidi Xie",
			desc:"3D Ultrasound Neurosonography",
			link:"https://www.sciencedirect.com/science/article/pii/S1361841518300306",
			imgSrc : "images/3d brain alignment.png",
			type : "Biomedical Image Analysis",
			btntxt : "Link"
		},
		{
			name:"Cardiac MR Segmentation",
			creator:" Weidi Xie",
			desc:"CMR Segmentation",
			link:"https://arxiv.org/abs/1711.01094",
			imgSrc : "images/cmr segmentation.png",
			type : "Biomedical Image Analysis",
			btntxt : "Link"
		}
	],
	[
	    {
			name:"Layer Recurrent Neural Networks",
			creator:"Weidi Xie",
			desc:"Segmentation",
			link:"https://openreview.net/pdf?id=rJJRDvcex",
			imgSrc : "images/lrnn.png",
			type : "Computer Vision",
			btntxt : "Link"
		},
		{
			name:"Comparator Networks",
			creator:"Weidi Xie",
			desc:"Face Recognition",
			link:"",
			imgSrc : "images/comparator networks.png",
			type : "Computer Vision",
			btntxt : "Coming Soon"
		},
        {
			name:"VGGFace2",
			creator:"Weidi Xie",
			desc:"Face Recognition Dataset",
			link:"http://www.robots.ox.ac.uk/~vgg/data/vgg_face2/",
			imgSrc : "images/vggface2.png",
			type : "Computer Vision",
			btntxt : "Link"
		},
		{
			name:"Multicolumn Networks",
			creator:"Weidi Xie",
			desc:"Face Recognition",
			link:"",
			imgSrc : "images/multicolumn networks.png",
			type : "Computer Vision",
			btntxt : "Coming Soon"
		},
	],

];
