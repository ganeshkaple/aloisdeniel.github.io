/* View model*/

var context = {
email: "alois.deniel@outlook.com",
experiences: {
      jobs: [
            {
                  date: { since: true, start: 2012},
                  company: "ORANGE BUSINESS SERVICES",
                  logo: "logo_orange.png",
                  service: "Orange Applications for Business",
                  projects: [
                        {
                              date: { duration: 4, year: 2014 },
                              name: "Online Services for Cars",
                              role: { en: "Project lead developer", fr: "Architecte et développeur" },
                              description: "A set of five Android companion applications for managing a company vehicle",
                              tools: ["Xamarin.Android", "C#", "GIT"]
                        },
                        {
                              date: { duration: 16, year: 2012 },
                              name: "Polyexpert",
                              role: { en: "Developer", fr: "Développeur" },
                              description: { en: "TBD", fr: "Développement d'une application tablette iPad à destination des experts d'assurance. Participations aux phases de conceptions." },
                              tools: ["iOS", "Objective-C", "XCode", "Jenkins", "SVN"]
                        },
                        {
                              date: { duration: 6, year: 2012 },
                              name: "Augmented Reality solution for iOS",
                              role: { en: "Internship", fr: "Stagiaire" },
                              description: { en: "Built a 3D engine for real time rendering augmented reality layer on top of camera stream.", fr: "Réalisation d'un moteur 3D temps réel pour ajouter une couche de réalité augmenté au dessus du flux vidéo de la caméra." },
                              tools: ["OpenGL ES 2", "iOS", "XCode", "C", "Objective-C"]
                        }
                  ]
            },
            {
                  date: { start: 2011},
                  company: "CAPGEMINI",
                  logo: "logo_capgemini.png",
                  service: "TELECOM",
                  projects: [
                        {
                              date: { duration: 6, year: 2011 },
                              name: "NoSQL databases",
                              role: { en: "Internship", fr: "Stagiaire" },
                              description: { en: "My role was to evaluate the different relational database alternatives", fr: "Evaluation des différentes alternatives aux base de données relationnelles." },
                              tools: ["MongoDB","CouchDB", "Neo4J"]
                        }
                  ]
            }
      ]
},
hobbies: [
      {
            title: "Sport",
            activities: [ "Badminton", "Tennis"]
      },
      {
            title: "Art",
            activities: [ 
                  { en: "Guitar", fr:"Guitare" }, 
                  "Digital design", 
                  { en: "Drawing", fr: "Dessin" },
                  "Pixelart"
            ]
      },
      {
            title: { en: "Travels", fr: "Voyages" },
            activities: [
                  { en: "Turkey", fr: "Turquie" }, 
                  { en: "Corsica", fr: "Corse" }, 
                  { en: "Crete", fr: "Crète" },
                  { en: "Swiss", fr: "Suisse"}, 
                  { en: "Italy", fr: "Italie" }
           ]
      }
],
opensource:[
  {
        title: "Global",
        projects: [
            {
                  title: "cheatsheets",
                  link: "https://github.com/aloisdeniel/cheatsheets"
            }
        ]
 },
  {
        title: "node.js",
        projects: [
            {
                  title: "Mobile Localization",
                  link: "https://github.com/aloisdeniel/mobile-localization"
            },
            {
                  title: "t-rest",
                  link: "https://github.com/aloisdeniel/t-rest"
            },
            {
                  title: "code-cards",
                  link: "https://github.com/aloisdeniel/code-cards"
            }
        ]
 },
 {
        title: "C#",
        projects: [
            {
                  title: "CommonExtensions",
                  link: "https://github.com/aloisdeniel/CommonExtensions"
            },
            {
                  title: "Xamarin.Animations",
                  link: "https://github.com/aloisdeniel/Xamarin.Animations"
            }
        ]
 },
 {
        title: "Lua",
        projects: [
            {
                  title: "pixel-map",
                  link: "https://github.com/aloisdeniel/love-pixelmap"
            },
            {
                  title: "pixel-atlas",
                  link: "https://github.com/aloisdeniel/love-pixelatlas"
            },
            {
                  title: "chain",
                  link: "https://github.com/aloisdeniel/chain.lua"
            },
            {
                  title: "delay",
                  link: "https://github.com/aloisdeniel/delay.lua"
            },
            {
                  title: "ldoc-styles",
                  link: "https://github.com/aloisdeniel/ldoc-styles"
            }
        ]
 }
],
competences: [
      [
            {
                  title: "xamarin",
                  description: "Initiator of the use of the technology into the company which led to a  major partnership, company technical leader",
                  type: "primary",
                  logo: "logo_xamarin.png",
                  tools: ["Visual Studio","Xamarin Studio", "TFS", "C#", "UITests"],
                  circles: [1,1,1,1]
            },
            {
                  title: "windows platform",
                  description: "Company technical leader, in charge of mobile continuous integration tools, and project technical supervision",
                  type: "primary",
                  logo: "logo_windows.png",
                  tools: ["Visual Studio", "TFS", "WinRT", "C#", "XAML"],
                  circles: [1,1,1,1]
            },
            {
                  title: "ios",
                  description: "Lead developer on native and Xamarin applications",
                  type: "primary",
                  logo: "logo_apple.png",
                  tools: [ "Objective-C", "Swift 2", "XCode","CocoaPods"],
                  circles: [1,1,1,0]
            }
      ],
      [
            {
                  title: "node.js",
                  description: "Several professionnal projects for internal enterprise tools, opensource projects",
                  type: "secondary",
                  logo: "logo_nodejs.png",
                  tools: ["js", "npm", "express.js", "koa.js"],
                  circles: [1,1,0,0]
            },
            {
                  title: "design",
                  description: "Designer for several mobile applications and websites",
                  type: "secondary",
                  logo: "logo_ps.png",
                  tools: ["Photoshop"],
                  circles: [1,1,0,0]
            },
            {
                  title: "android",
                  description: "Professional training, one production application made Xamarin.Android",
                  type: "secondary",
                  logo: "logo_android.png",
                  tools: ["Android Studio","Gradle"],
                  circles: [1,1,0,0]
            }
      ]
      ]
};