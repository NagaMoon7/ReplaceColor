export default function Main() {
    return (
        <div id="main">
            <Block0 />
            <Block1 />

            <ProjectBlock
                title={"Replace Color"}
                customId={"replaceColor"}
                text={"A simple app that replace colors based on the HSV color model."}
                list={["Color picker", "Custom slide to change colors", "Range system",
                    "Mask - Simple drawing tool, Reverse effect, Import",
                "Settings to choose witch HSV properties to affect", "For PC only", "WIP - Functional"]}
                image={"/images/replaceColor.jpg"}
                link={"https://replace-color.vercel.app/"}
            />

            <ProjectBlock
                title={"Restaurant Website"}
                customId={"restaurant"}
                text={"Fake website that I did to practice React."}
                list={["Custom Menu", "Simple cart", "Image slide",
                    "Mini Reservation form with calendar"]}
                image={"/images/restaurant.jpg"}
                link={"https://naga-restaurant.vercel.app/"}
            />
        </div>
    );
}

function Block0() {
    return (
        <div id="block0" className="flex">
            <div id="iconWrap" className="flex">
                <div id="icon" className="flex">?</div>
                <span id="iconText" className="bigText">Hello <br></br> I'm Naga</span>
            </div>  

            <span className="mediumText">Novice web developer with focus on front end. I use React / Next JS. Check some of my projects and <a href="https://codepen.io/NagaMoon">codepen</a> for random stuff!</span>      
        </div>
    );
}

function Block1() {
    return (
        <div id="block1" className="flex">
            <div id="b1TitleWrap" className="flex">
                <span className="bigText">Projects</span>
            </div>

            <ul id="b1List" className="flex">
                <li><a href="#replaceColor">Replace Color</a></li>
                <li><a href="#restaurant">Restaurant Website</a></li>
            </ul>
        </div> 
    );
}

function ProjectBlock({title, text, list, image, customId, link}) {
    return (
        <div className="projectBlock flex" id={customId}>
            <div className="pTextWrap flex">
                <a className="bigText textBlack" href={link}>{title}</a>
                <span >{text}</span>

                <ul>
                    {list.map((each, i) => <li key={i}>{each}</li>)}
                </ul>                
            </div>

            <div className="pImageWrap flex">
                <img src={image}></img>
            </div>        
        </div>
    );
}