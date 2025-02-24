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
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod  fermentum lorem non dapibus. Sed feugiat vel nibh a pulvinar. 
                Aliquam  leo est, dapibus sit amet sapien eget, fermentum suscipit tortor.  Quisque eget eros at ante pellentesque ornare.<br/><br/>
                Mauris porttitor, ante  vel hendrerit viverra, dui sapien fermentum mauris, in egestas nulla  massa vitae dolor. <br/><br/>
                Ut quis enim pretium, lacinia purus id, vulputate  ligula. Vestibulum non quam venenatis, mollis lorem in, fringilla  tellus. 
            </span>
        ),
        techStack: [
            { name: "Styled Components", icon: "/images/styled-components-icon.svg" },
            { name: "MongoDB", icon: "/images/mongo-db-icon.svg" },
            { name: "AWS", icon: "/images/aws-icon.svg" },
        ],
        image: "/images/plan-t-smartphone.svg",
     }, 
    {
        id: 2, 
        title: "DreamGame", 
        description: "Eine Webapp, um die neusten und angesagtesten Computerspiele anzuzeigen und ein Tinder-ähnliches Match-System.",
        icon: FaGamepad,
        gradient: "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(124deg, rgba(203, 212, 194, 0.82) 31.55%, rgba(249, 87, 56, 0.82) 100%);",
        color: "#50514F",
        fullDescription: (
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod  fermentum lorem non dapibus. Sed feugiat vel nibh a pulvinar. 
                Aliquam  leo est, dapibus sit amet sapien eget, fermentum suscipit tortor.  Quisque eget eros at ante pellentesque ornare.<br/><br/>
                Mauris porttitor, ante  vel hendrerit viverra, dui sapien fermentum mauris, in egestas nulla  massa vitae dolor. <br/><br/>
                Ut quis enim pretium, lacinia purus id, vulputate  ligula. Vestibulum non quam venenatis, mollis lorem in, fringilla  tellus. 
            </span>
        ),
        techStack: [
            { name: "Styled Components", icon: "/images/styled-components-icon.svg" },
            { name: "Python", icon: "/images/python.svg" },

        ],
        image: "/images/dreamgame-smartphone.svg",
    },
    {
        id: 3, 
        title: "Friends", 
        description: "Eine Webapp, um mit Freunden abzustimmen und Treffen zu organisieren.",
        icon: GiThreeFriends,
         gradient: "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(124deg, rgba(72, 70, 248, 0.82) 0.79%, rgba(255, 187, 81, 0.82) 46.43%, rgba(255, 77, 77, 0.82) 71.23%);",
         fullDescription: (
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod  fermentum lorem non dapibus. Sed feugiat vel nibh a pulvinar. 
                Aliquam  leo est, dapibus sit amet sapien eget, fermentum suscipit tortor.  Quisque eget eros at ante pellentesque ornare.<br/><br/>
                Mauris porttitor, ante  vel hendrerit viverra, dui sapien fermentum mauris, in egestas nulla  massa vitae dolor. <br/><br/>
                Ut quis enim pretium, lacinia purus id, vulputate  ligula. Vestibulum non quam venenatis, mollis lorem in, fringilla  tellus. 
            </span>
        ),
        techStack: [
            { name: "Styled Components", icon: "/images/styled-components-icon.svg" },
            { name: "MongoDB", icon: "/images/mongo-db-icon.svg" },
            { name: "Cloudinary", icon: "/images/cloudinary.svg" },
        ],
        image: "/images/friends-smartphone.svg",
    },
    {
        id: 4, 
        title: "Jumpa", 
        description: "Eine Webapp für den Gastronomiebereich, um schnell Personal oder Jobs zu finden.",
        icon: BsBrowserEdge ,
        gradient: "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(124deg, rgba(255, 255, 255, 0.82) 0.79%, rgba(48, 149, 222, 0.82) 71.73%);",
        color: "#50514F",
        fullDescription: (
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod  fermentum lorem non dapibus. Sed feugiat vel nibh a pulvinar. 
                Aliquam  leo est, dapibus sit amet sapien eget, fermentum suscipit tortor.  Quisque eget eros at ante pellentesque ornare.<br/><br/>
                Mauris porttitor, ante  vel hendrerit viverra, dui sapien fermentum mauris, in egestas nulla  massa vitae dolor. <br/><br/>
                Ut quis enim pretium, lacinia purus id, vulputate  ligula. Vestibulum non quam venenatis, mollis lorem in, fringilla  tellus. 
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod  fermentum lorem non dapibus. Sed feugiat vel nibh a pulvinar. 
                Aliquam  leo est, dapibus sit amet sapien eget, fermentum suscipit tortor.  Quisque eget eros at ante pellentesque ornare.<br/><br/>
                Mauris porttitor, ante  vel hendrerit viverra, dui sapien fermentum mauris, in egestas nulla  massa vitae dolor. <br/><br/>
                Ut quis enim pretium, lacinia purus id, vulputate  ligula. Vestibulum non quam venenatis, mollis lorem in, fringilla  tellus. 
            </span>
        ),
        techStack: [
            { name: "Styled Components", icon: "/images/styled-components-icon.svg" },
        ],
        image: "/images/camerashop-smartphone.svg",
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod  fermentum lorem non dapibus. Sed feugiat vel nibh a pulvinar. 
                Aliquam  leo est, dapibus sit amet sapien eget, fermentum suscipit tortor.  Quisque eget eros at ante pellentesque ornare.<br/><br/>
                Mauris porttitor, ante  vel hendrerit viverra, dui sapien fermentum mauris, in egestas nulla  massa vitae dolor. <br/><br/>
                Ut quis enim pretium, lacinia purus id, vulputate  ligula. Vestibulum non quam venenatis, mollis lorem in, fringilla  tellus. 
            </span>
        ),
        techStack: [
            { name: "Styled Components", icon: "/images/styled-components-icon.svg" },
        ],
        image: "/images/portfolio-smartphone.svg",
    }
]