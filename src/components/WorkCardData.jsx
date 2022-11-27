import Pro1 from "../assets/Pro1.jpg"
import Pro2 from "../assets/Pro2.jpg"
import intern from "../assets/intern.jpg"
import liabrary from "../assets/liabrary.jpg"
import url from "../assets/url.jpg"
import portfolio from "../assets/portfolio.jpg"


const ProjectsCardData = [
    {
        imgsrc: Pro1,
        title: "E-Cart Management",
        text: " Created the Backend for a complete Shopping app which included various API’s for user, cart, order & products. Used JWT for authentication of protected API’s & AWS S3 for uploading Images. Passwords are stored in encrypted manner using Bcrypt package. Sensitive API's are backed by authorization check.",

        GitHub : "https://github.com/sujeetpandit1/Projects.git"
    },
    {
        imgsrc: Pro2,
        title: "Blogging",
        text: " Developed the Backend for a blog management website like BlogSpot. A user can login and create, read, update or delete his blog. Can read other user’s blogs too. Used JWT for authentication at protected API. Used reference and populate to link two models and include author information inside the book details while fetching the details.",

        GitHub : "https://github.com/sujeetpandit1/Projects.git"
    },
    {
        imgsrc: intern,
        title: "Open To Intern",
        text: " A minimal website backend framework that enable candidates to apply at colleges for internship",

        GitHub : "https://github.com/sujeetpandit1/Projects.git"
    },
    {
        imgsrc: liabrary,
        title: "Book Management - A Liabrary",
        text: " Developed the backend for a book management website. Included various API's to create and login an author. Author can create, update & delete his book also included published status in book details that can be updated from the backend. Displays the book details like price, language, and preface.",

        GitHub : "https://github.com/sujeetpandit1/Projects.git"
    },
    {
        imgsrc: url,
        title: "URL Shortner",
        text: " Developed an application like Bitly & tinyUrl that shortens a long URL quickly and efficiently. Applied Caching through Redis to get quicker responses.",

        GitHub : "https://github.com/sujeetpandit1/Projects.git"
    },
    {
        imgsrc: portfolio,
        title: "My Portfolio",
        text: " Created the Backend for a complete Shopping app which included various API’s for user, cart, order & products. Used JWT for authentication of protected API’s & AWS S3 for uploading Images. Passwords are stored in encrypted manner using Bcrypt package. Sensitive API's are backed by authorization check.",

        GitHub : "https://github.com/sujeetpandit1/Projects.git"
    }
]

export default ProjectsCardData