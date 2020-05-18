const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const aList = [...document.querySelectorAll('nav a')];
const divBurger = document.querySelector('.burger');
const main = document.querySelector('main');
const header = document.querySelector('header');
const myWorks = document.querySelector('.myWorks');
const showWorks = document.querySelector('.showWorks');
const projectList = document.querySelectorAll('.project');
const exitBtn = document.querySelector('.exit');
const imgImac = document.querySelector('.imac');
const imgIpad = document.querySelector('.ipad');
const imgIphone = document.querySelector('.iphone');
const clientName = document.querySelector('.text span');
const websiteLink = document.querySelector('.text a');
const projectDescription = document.querySelector('.text .description');
const skills = document.querySelector('.skills');
const experience = document.querySelector('.experience');
const socials = document.querySelector('.socials');
const windowLenght = document.body.offsetHeight;
const navLenght = nav.offsetHeight;
const mainLenght = main.offsetHeight;
const headerLenght = header.offsetHeight;
const myWorksPosition = myWorks.offsetTop;
const skillsHeight = skills.offsetTop;
const experienceHeight = experience.offsetTop;
const socialsHeight = socials.offsetTop;
const startBtn = document.getElementById('start');
const myWorksBtn = document.getElementById('myWorks');
const skillsBtn = document.getElementById('skills');
const experienceBtn = document.getElementById('experience');
const socialsBtn = document.getElementById('socials');
const spanText = document.querySelector('.text');
const txt = [`Hello!`, `I'm Bartek `, `Welcome to my website :)`];



const moveToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
logo.addEventListener('click', moveToTop);


let i = 0; // indeks tablicy
let j = -15; // indeks pojedynczego znaku w stringu (indeksu tablicy)
const addLetter = () => {

    if (j >= 0) {
        spanText.textContent += txt[i][j];
    }
    j++;

    if (j === txt[i].length) {
        i++;
        j = 0;
        if (i === txt.length) {
            return;
        }

        return setTimeout(() => {
            j = -15;
            spanText.textContent = "";
            addLetter()
        }, 1000)
    }
    setTimeout(addLetter, 100);
}
addLetter();

const addActive = () => {
    nav.classList.toggle('active');
}
divBurger.addEventListener('click', addActive);


const removeHover = () => {
    aList.forEach((e) => {
        e.classList.remove('activeHover');
    })
}
const setHover = () => {

    const scrollPosition = window.scrollY;

    if (scrollPosition > 1) {
        removeHover();
        aList[0].classList.add('activeHover');
    } else {
        removeHover();
    }

    if (scrollPosition >= headerLenght - navLenght) {
        removeHover();
        aList[1].classList.add('activeHover');

    }

    if (scrollPosition >= headerLenght + skillsHeight - navLenght) {
        removeHover();
        aList[2].classList.add('activeHover');

    }
    if (scrollPosition >= headerLenght + experienceHeight - navLenght) {
        removeHover();
        aList[3].classList.add('activeHover');

    }
    if (scrollPosition >= headerLenght / 5 + socialsHeight) {
        removeHover();
        aList[4].classList.add('activeHover');
    }
}
window.addEventListener('scroll', setHover);


function moveToSection() {
    nav.classList.remove('active');
    removeHover();
    const clickBtn = this;

    if (clickBtn.id === 'start') {
        moveToTop();
    } else if (clickBtn.id === 'myWorks') {
        window.scrollTo({
            top: headerLenght - navLenght,
            behavior: 'smooth'
        })
    } else if (clickBtn.id === 'skills') {
        window.scrollTo({
            top: headerLenght + skillsHeight - navLenght,
            behavior: 'smooth'
        })
    } else if (clickBtn.id === 'experience') {
        window.scrollTo({
            top: headerLenght + experienceHeight - navLenght,
            behavior: 'smooth'
        })
    } else if (clickBtn.id === 'socials') {
        window.scrollTo({
            top: headerLenght / 2 + socialsHeight,
            behavior: 'smooth'
        })
    }
}
aList.forEach((e) => {
    e.addEventListener('click', moveToSection);
})

const showProjectContent = [{
        imacSrc: "/project/img/atkdesign_imac.jpg",
        ipadSrc: "/project/img/atkdesign_ipad.png",
        iphoneSrc: "/project/img/atkdesign_iphone.png",
        clientName: 'ATK Design Tomasz Kowal',
        websiteSource: "https://atkdesign.pl/",
        websiteName: 'www.atkdesign.pl',
        description: 'The database and domain transfer to another web host. Creating a new responsive website based on easily manageable Wordpress  CMS.  SEO implementation and administration.',


    },
    {
        imacSrc: "/project/img/bajkowyduet_imac.jpg",
        ipadSrc: "/project/img/bajkowyduet_ipad.png",
        iphoneSrc: "/project/img/bajkowyduet_iphone.png",
        clientName: 'Bajkowy Duet',
        websiteSource: "https://bajkowyduet.pl/",
        websiteName: 'www.bajkowyduet.pl',
        description: 'An easily manageable website for a photography duo. SEO implementation.  Customising homepage design. Conducting a Wordpress CMS training.',

    },
    {

        imacSrc: "../project/img/bartekbrychcy_imac.jpg",
        ipadSrc: "../project/img/bartekbrychcy_ipad.png",
        iphoneSrc: "../project/img/bartekbrychcy_iphone.png",
        clientName: 'Bartłomiej Brychcy',
        websiteSource: "https://bartekbrychcy.pl/",
        websiteName: 'www.bartekbrychcy.pl',
        description: 'A fully personalised project with the use of some skills aforementioned in the “Project” section. The project is constantly developing and available on GitHub.',
    }
]


function activeShowWorks() {
    showWorks.classList.toggle('active');
    const clickProject = this;

    if (clickProject.id === 'atk') {
        imgImac.src = showProjectContent[0].imacSrc;
        imgIpad.src = showProjectContent[0].ipadSrc;
        imgIphone.src = showProjectContent[0].iphoneSrc;
        clientName.textContent = `${showProjectContent[0].clientName}`;
        websiteLink.href = showProjectContent[0].websiteSource;
        websiteLink.textContent = `${showProjectContent[0].websiteName}`;
        projectDescription.textContent = `${showProjectContent[0].description}`;

    } else if (clickProject.id === 'bajkowy') {
        imgImac.src = showProjectContent[1].imacSrc;
        imgIpad.src = showProjectContent[1].ipadSrc;
        imgIphone.src = showProjectContent[1].iphoneSrc;
        clientName.textContent = `${showProjectContent[1].clientName}`;
        websiteLink.href = showProjectContent[1].websiteSource;
        websiteLink.textContent = `${showProjectContent[1].websiteName}`;
        projectDescription.textContent = `${showProjectContent[1].description}`;

    } else if (clickProject.id === 'bartek') {
        imgImac.src = showProjectContent[2].imacSrc;
        imgIpad.src = showProjectContent[2].ipadSrc;
        imgIphone.src = showProjectContent[2].iphoneSrc;
        clientName.textContent = `${showProjectContent[2].clientName}`;
        websiteLink.href = showProjectContent[2].websiteSource;
        websiteLink.textContent = `${showProjectContent[2].websiteName}`;
        projectDescription.textContent = `${showProjectContent[2].description}`;
    }

}

projectList.forEach((e) => {
    e.addEventListener('click', activeShowWorks);
})

const removeShowWorks = () => {
    showWorks.classList.toggle('active');
}

exitBtn.addEventListener('click', removeShowWorks);