var myself = {
    name: "WEIDI XIE",
    profession: "Postdoctoral Researcher in Visual Geometry Group (VGG)",
    address: "Parks Road, Oxford, OX1 3PJ",
    email: "removethisweidi.xie@eng.ox.ac.uk"
}

var starter = {
    init: "Hi",
    intro: "I'm " + myself.name,
    status: myself.profession,
    address: myself.address,
    email: myself.email,
}

var header = [
    {
        title: "E-MAIL:",
        text: starter.email,
        link: "mailto:" + starter.email
    },
    {
        title: "ADDRESS:",
        text: starter.address,
        link: ""
    }
];

var aboutME = [
    {
        txt: "In 2018, I completed my D.Phil in VGG & IBME,",
    },
    {
        txt: "under the supervision of Professor Alison Noble and Professor Andrew Zisserman."
    },
    {
        txt: " "
    },
    {
        txt: "I am a recipient of Magdalen Award from China Oxford Scholarship Fund (COSF),",
    },
    {
        txt: "I am a recipient of Oxford-Google DeepMind Graduate Scholarships from Google Deepmind.",
    },
    {
        txt: " "
    },
    {
        txt: "Currently, I'm a postdoctoral researcher in Visual Geometry Group (VGG), Oxford.",
    },
    {
        txt: "My research interests are in computer vision, biomedical image analysis, and deep learning.",
    },
    {
        txt: "Please see my publications for some academic work.",
    }
];

var aboutAwards = [
    {
        txt: "Award 1",
    },
    {
        txt: "Award 2",
    },
    {
        txt: "Award 3",
    },
    {
        txt: "Award 4",
    }
];

var publication = [
    {
        author: "Weidi Xie and Andrew Zisserman",
        title: "Multicolumn Networks on Face Recognition.",
        conf: "Submitted to British Machine Vision Conference (BMVC), 2018",
        pdf: "pdf/",
        website: ""
    },
    {
        author: "Weidi Xie, Li Shen, and Andrew Zisserman",
        title: "Comparator Networks.",
        conf: "Submitted to European Conference on Computer Vision (ECCV), 2018",
        pdf: "pdf/comparator_nets.pdf",
        website: ""
    },
    {
        author: "Qiong Cao, Li Shen, Weidi Xie, Omkar M. Parkhi, and Andrew Zisserman",
        title: "VGGFace2: A Dataset for Recognising Faces Across Pose and Age.",
        conf: "In: IEEE International Conference on Automatic Face and Gesture Recognition (F&G), 2018.",
        pdf: "pdf/vggface2.pdf",
        website: "http://www.robots.ox.ac.uk/~vgg/data/vgg_face2/"
    },

    {
        author: "Weidi Xie*, Davis M. Vigneault*, Carolyn Y. Ho, David A. Bluemke and J. Alison Noble",
        title: "Omega-Net: Fully Automatic, Multi-View Cardiac MR Detection, Orientation, and Segmentation with Deep Neural Networks",
        conf: "Submitted to Medical Image Analysis. (Under Second Review) (* refers to equal contribution)",
        pdf: "pdf/omega_nets.pdf",
        website: "https://arxiv.org/abs/1711.01094"
    },
    {
        author: "Ruobing Huang, Weidi Xie, J. Alison Noble",
        title: "VP-Nets : Efficient Automatic Localization of Key Brain Structures in 3D Fetal Neurosonography",
        conf: "In: Medical Image Analysis, Volume 47, July 2018, Pages 127–139",
        pdf: "pdf/np_nets.pdf",
        website: "https://www.sciencedirect.com/science/article/pii/S1361841518301920"
    },
    {
        author: "Weidi Xie*, Ana I.L. Namburete*, Mohammad Yaqub, Andrew Zisserman, and J. Alison Noble",
        title: "Fully-Automated Alignment of 3D Fetal Brain Ultrasound to A Canonical Reference Space Using Multi-task Learning",
        conf: "In: Medical Image Analysis, Volume 46, May 2018, Pages 1-14 (* refers to equal contribution)",
        pdf: "pdf/3d_brain_alignment.pdf",
        website: "https://www.sciencedirect.com/science/article/pii/S1361841518300306"
    },
    {
        author: "Davis M. Vigneaulta, Weidi Xie, David A. Bluemke, and J. Alison Noble",
        title: "Feature Tracking Cardiac Magnetic Resonance via Deep Learning and Spline Optimization",
        conf: "In: Functional Imaging and Modelling of the Heart (FIMH), 2017 (Best Poster Award)",
        pdf: "pdf/cmr_segmentation.pdf",
        website: "https://arxiv.org/abs/1704.03660"
    },
    {
        author: "Ana I.L. Namburete, Weidi Xie and J. Alison Noble",
        title: "Robust Regression of Brain Maturation from 3D Fetal Neurosonography using CRNs",
        conf: "In: MICCAI Workshop on Fetal and InFant Image analysis (FIFI), 2017 (Best Paper Award)",
        pdf: "pdf/3d_brain_age.pdf",
        website: "https://link.springer.com/chapter/10.1007%2F978-3-319-67561-9_8"
    },
    {
        author: "Weidi Xie, J. Alison Noble and Andrew Zisserman",
        title: "Microscopy Cell Counting and Detection with Fully Convolutional Regression Networks",
        conf: "Computer Methods in Biomechanics and Biomedical Engineering: Imaging & Visualization",
        pdf: "pdf/cell_counting.pdf",
        website: "https://www.tandfonline.com/doi/abs/10.1080/21681163.2016.1149104"
    },
];

var education = [
    {
        xm: "D.Phil in Engineering Science in 2018",
        result: "Examined by: Professor Andrea Vedaldi and Professor Daniel Rueckert",
        institution: "University of Oxford"
    },
    {
        xm: "M.Sc. in Computer Graphics, Vision and Imaging in 2014",
        result: "Distinction on MSC Thesis",
        institution: "University College London"
    },
    {
        xm: "B.Sc. in Telecommunication Engineering in 2012 (Exchange Student)",
        result: "First-class Honour",
        institution: "Queen Mary, University of London"
    },
    {
        xm: "B.Sc. in Telecommunication Engineering in 2012",
        result: "First-class Honour",
        institution: "Beijing University of Posts and Telecommunications"
    }
];

var workExperience = [
    {
        company: "University of Oxford",
        details: "I'm involved in the Seebibyte Project.",
        position: "Postdoc Researcher in VGG",
        time: "Nov,2017 - Present"
    },
    {
        company: "University College London",
        details: "I was responsible for developing a cell tracking system based on level-set.",
        position: "Research Assistant in MRC Laboratory for Molecular Cell Biology ",
        time: "Sep,2013 - Feb,2014"
    }
];

var skillsLeft = [
    {
        txt: "Python",
        percentage: "90"
    },
    {
        txt: "Matlab",
        percentage: "80"
    },
    {
        txt: "C++",
        percentage: "70"
    }
];

var skillsRight = [
    {
        txt: "",
        percentage: ""
    }
];

var portfolioMenu = [
    {
        txt: "Biomedical Image Analysis"
    },
    {
        txt: "Computer Vision"
    }
];

var portfolios = [
    [
        {
            name: "Microscopy Cell Counting",
            creator: "Weidi Xie",
            desc: "Microscopy Image Analysis",
            link: "https://www.tandfonline.com/doi/abs/10.1080/21681163.2016.1149104",
            imgSrc: "images/cell_count.png",
            type: "Biomedical Image Analysis",
            btntxt: "Link"
        },

        {
            name: "3D Brain Structure Localization",
            creator: "Weidi Xie",
            desc: "3D Ultrasound Neurosonography",
            link: "https://www.sciencedirect.com/science/article/pii/S1361841518301920",
            imgSrc: "images/3d brain structure.png",
            type: "Biomedical Image Analysis",
            btntxt: "Link"
        },
        {
            name: "3D Fetal Brain Alignment",
            creator: "Weidi Xie",
            desc: "3D Ultrasound Neurosonography",
            link: "https://www.sciencedirect.com/science/article/pii/S1361841518300306",
            imgSrc: "images/3d brain alignment.png",
            type: "Biomedical Image Analysis",
            btntxt: "Link"
        },
        {
            name: "Cardiac MR Segmentation",
            creator: " Weidi Xie",
            desc: "CMR Segmentation",
            link: "https://arxiv.org/abs/1711.01094",
            imgSrc: "images/cmr segmentation.png",
            type: "Biomedical Image Analysis",
            btntxt: "Link"
        }
    ],
    [
        {
            name: "Layer Recurrent Neural Networks",
            creator: "Weidi Xie",
            desc: "Segmentation",
            link: "https://openreview.net/pdf?id=rJJRDvcex",
            imgSrc: "images/lrnn.png",
            type: "Computer Vision",
            btntxt: "Link"
        },
        {
            name: "Comparator Networks",
            creator: "Weidi Xie",
            desc: "Face Recognition",
            link: "",
            imgSrc: "images/comparator networks.png",
            type: "Computer Vision",
            btntxt: "Coming Soon"
        },
        {
            name: "VGGFace2",
            creator: "Weidi Xie",
            desc: "Face Recognition Dataset",
            link: "http://www.robots.ox.ac.uk/~vgg/data/vgg_face2/",
            imgSrc: "images/vggface2.png",
            type: "Computer Vision",
            btntxt: "Link"
        },
        {
            name: "Multicolumn Networks",
            creator: "Weidi Xie",
            desc: "Face Recognition",
            link: "",
            imgSrc: "images/multicolumn networks.png",
            type: "Computer Vision",
            btntxt: "Coming Soon"
        },
    ],

];
