import { RiPlantFill } from "react-icons/ri";
import { FaGamepad } from "react-icons/fa6";
import { GiThreeFriends } from "react-icons/gi";
import { BsBrowserEdge } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export const ProjectData = [
    {
        id: 1, 
        title: "Plan-T",
        description: "Eine Fullstack Webapp mit QR-Code-System für die Pflanzenpflege.",
        icon: RiPlantFill,
        gradient: "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(124deg, rgba(151, 130, 117, 0.82) 0.79%, rgba(152, 199, 160, 0.82) 46.43%, rgba(89, 153, 107, 0.82) 71.23%);",
        color: "white",
        fullDescription: (
            <span><br></br>
                Plan-T ist eine Fullstack-Webapp zur digitalen Pflanzenverwaltung, entwickelt mit Next.js, Styled Components, AWS und MongoDB. Nutzer können Pflanzen mit Bildern anlegen, Pflegeaktivitäten wie Gießen oder Umtopfen dokumentieren und eine übersichtliche Sammlung verwalten. <br /><br />
                Bilder werden im Frontend direkt komprimiert, um die Performance zu optimieren. Die Anmeldung erfolgt über Google Auth, eine eigene Credential-basierte Authentifizierung ist in Planung. Künftige Features wie Benachrichtigungen & Alarme erweitern die Funktionalität.<br /><br />
                Ideal für Pflanzenliebhaber, die eine smarte Lösung zur Pflanzenpflege suchen! 🌱
            </span>
        ),
        
        
        techStack: [
            { name: "Styled Components", icon: "/images/styled-components-icon.svg" },
            { name: "MongoDB", icon: "/images/mongo-db-icon.svg" },
            { name: "AWS", icon: "/images/aws-icon.svg" },
        ],
        image: "/images/plan-t-smartphone.png",
        vercellink: "https://plan-t-one.vercel.app/",
     }, 
    {
        id: 2, 
        title: "DreamGame", 
        description: "Eine Webapp, um die neusten und angesagtesten Computerspiele anzuzeigen und ein Tinder-ähnliches Match-System.",
        icon: FaGamepad,
        gradient: "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(124deg, rgba(203, 212, 194, 0.82) 31.55%, rgba(249, 87, 56, 0.82) 100%);",
        color: "#000",
        fullDescription: (
            <span>
                Dreamgame ist eine Webapp, die die neuesten und angesagtesten Computerspiele anzeigt. Mit einem Tinder-ähnlichen Match-System können Nutzer Spiele entdecken, die ihren Interessen entsprechen. Aktuell gibt es nur das Frontend die App soll aber als Fullstack-Lösung weiterentwickelt werden.<br /><br />
                Ein technisches Highlight wird ein Cron-Job sein, der regelmäßig Steam-Daten abruft und Informationen wie Beliebtheit, Genre, Spielerzahl und Konsolenverfügbarkeit automatisch aktualisiert.<br /><br />
                Dreamgame bietet eine spannende Möglichkeit, sich mit der Welt der Videospiele zu verbinden und immer auf dem Laufenden zu bleiben.
            </span>
        ),
        
        techStack: [
            { name: "Styled Components", icon: "/images/styled-components-icon.svg" },
            { name: "Python", icon: "/images/python.svg" },

        ],
        image: "/images/dreamgame-smartphone.png",
        vercellink: "https://dream-game-neon.vercel.app/",
    },
    {
        id: 3, 
        title: "Friends", 
        description: "Eine Webapp, um mit Freunden abzustimmen und Treffen zu organisieren.",
        icon: GiThreeFriends,
         gradient: "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(124deg, rgba(72, 70, 248, 0.82) 0.79%, rgba(255, 187, 81, 0.82) 46.43%, rgba(255, 77, 77, 0.82) 71.23%);",
         fullDescription: (
            <span>
                Friends ist eine Webapp, um mit Freunden abzustimmen und Treffen zu organisieren. Nutzer können Gruppen erstellen, einen zeitlich begrenzten Link zum Beitritt teilen und Aktivitäten anlegen. Über ein Abstimmungssystem, das auf dem Startbildschirm erscheint, können Gruppenmitglieder ihre Meinung zu geplanten Events äußern. <br /><br />
                Nach der Abstimmung wird die Aktivität als nächstes Event angezeigt, und eine Mitbringselliste kann erstellt werden, um festzuhalten, wer was zur Veranstaltung mitbringt. Eine einfache und effiziente Lösung, um Gruppenaktivitäten zu koordinieren!
            </span>
        ),
        
        techStack: [
            { name: "Styled Components", icon: "/images/styled-components-icon.svg" },
            { name: "MongoDB", icon: "/images/mongo-db-icon.svg" },
            { name: "Cloudinary", icon: "/images/cloudinary.svg" },
        ],
        image: "/images/friends-smartphone.svg",
        vercellink: "https://friends-project.vercel.app/",
    },
    {
        id: 4, 
        title: "Jumpa", 
        description: "Eine Webapp für den Gastronomiebereich, um schnell Personal oder Jobs zu finden.",
        icon: BsBrowserEdge ,
        gradient: "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(124deg, rgba(255, 255, 255, 0.82) 0.79%, rgba(48, 149, 222, 0.82) 71.73%);",
        color: "#000",
        fullDescription: (
            <span>
                Jumpa ist eine Webapp für den Gastronomiebereich, die es Unternehmen ermöglicht, schnell Personal zu finden und Jobsuchenden eine einfache Möglichkeit bietet, sich auf Stellen zu bewerben. Unternehmen können Jobs anlegen und entscheiden, welche Bewerber sie einstellen möchten. <br /><br />
                Die App beinhaltet ein Sternebewertungssystem für beide Seiten sowie Treuepunkte, um die Nutzung zu fördern. Eine ortsabhängige Jobsuche mit Radius-Eingabe ermöglicht es, schnell passende Stellen in der Nähe zu finden. Zur Performance-Optimierung wird **Redis Caching** verwendet. <br /><br />
                Aktuell in der Entwicklung, bietet Jumpa bereits einige Programmierteile im Prozess und ist auf dem besten Weg, eine effiziente Lösung für den Gastronomiebereich zu werden.
            </span>
        ),
        
        techStack: [
            { name: "Styled Components", icon: "/images/styled-components-icon.svg" },
            { name: "mysql", icon: "/images/mysql-icon.svg" },
            { name: "Redis", icon: "/images/redis.svg" },
            { name: "AWS", icon: "/images/aws-icon.svg" },
            { name: "Docker", icon: "/images/docker.svg" },
        ],
        image: "/images/jumpa-smartphone.svg",
        githublink: "https://github.com/jonas8900/Jumpa",
    }, 
    {
        id: 5, 
        title: "Camerashop",
        description: "Ein Shop indem es möglich sein soll, Videotechnik für einen Zeitraum auszuleihen.",
        icon: FaCamera,   
         gradient: "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(124deg, rgba(183, 92, 92, 0.82) 0.79%, rgba(255, 255, 255, 0.82) 82.14%);",
         color: "white",
         fullDescription: (
            <span>
                Der Camerashop ist eine Plattform, die es Nutzern ermöglicht, Videotechnik für einen bestimmten Zeitraum auszuleihen. Aktuell ist nur das Frontend entwickelt, welches ein individuell gestaltetes Design zeigt und dessen Umsetzung demonstriert. Eine einfache Suchfunktion wurde integriert, um die Benutzererfahrung zu verbessern.<br /><br />
                Der Shop soll zukünftig eine vollständige Lösung bieten, bei der Nutzer verschiedene Produkte auswählen und für ihre Projekte ausleihen können.
            </span>
        ),
        
        techStack: [
            { name: "Styled Components", icon: "/images/styled-components-icon.svg" },
        ],
        image: "/images/camerashop-smartphone.png",
        vercellink: "https://camera-shop-six.vercel.app/",
    },
    {
        id: 6, 
        title: "Portfolio", 
        description: "Meine eigene Portfolio-Website, um meine Projekte zu präsentieren.",
        icon: CgWebsite,
         gradient: "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(124deg, rgba(0, 0, 0, 0.82) 0.79%, rgba(18, 215, 0, 0.82) 100%);",
         color: "white",
         fullDescription: (
            <span>
                Meine Portfolio-Website präsentiert eine Sammlung meiner bisherigen Projekte und bietet Besuchern die Möglichkeit, mehr über meine Arbeit zu erfahren. Ein besonderes Highlight ist der integrierte AI-Chatbot, der als persönlicher Assistent fungiert und Fragen zu mir sowie meinen Projekten beantwortet. Der Chatbot hilft dabei, eine interaktive und benutzerfreundliche Erfahrung zu bieten.<br /><br />
                Die Website dient als Showcase meiner Fähigkeiten.
            </span>
        ),
        
        techStack: [
            { name: "Styled Components", icon: "/images/styled-components-icon.svg" },
        ],
        image: "/images/portfolio-smartphone.svg",
        githublink: "https://github.com/jonas8900/personal-website-reworked",
    }
]