import ListFounder from "../components/MinorComponents/ListFounder.jsx";
import samuel from "../assets/images/Samuel.jpeg";
import lady from "../assets/images/JaneDoe.jpeg";
import useFetchServices from "../hooks/useFetchServices.jsx";
import './styles/about.css'

const About = () => {
    const { services } = useFetchServices();

    return (
        <div className={"about-page"}>
            <div className={"about-backdrop"}/>
            <div className={"about-content"}>
                <h1>Our story</h1>
                <div className={"about-text"}>
                    <p>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a
                        galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum</p>
                    <p>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a
                        galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum</p>
                    <p>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a
                        galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum</p>
                    <p>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a
                        galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum</p>
                </div>
                <h1 style={{color: "var(--primary-color )"}}>The team</h1>
                <div className={"founders"}>
                    <ListFounder
                        index={0}
                        name={"Mr. Samuel Rakara"}
                        title={"Founder"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                        image={samuel}
                    />
                    <ListFounder
                        index={1}
                        name={"Mrs. Frida Gatavi"}
                        title={"Head of Marketing"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                        image={lady}
                    />
                </div>
                <h1 style={{color: "var(--primary-color )"}}>Our values</h1>
                <div className={"value-list"}>
                    <div className={"value"}>
                        <h3>Mission</h3>
                        <p>Building brands, empowering teams</p>
                    </div>
                    <div style={{textAlign: "center"}} className={"value"}>
                        <h3>Values</h3>
                        <p>Building brands, empowering teams</p>
                    </div>
                    <div style={{textAlign: 'right'}} className={"value"}>
                        <h3>Vision</h3>
                        <p>Building brands, empowering teams</p>
                    </div>
                </div>
            </div>
            <div className={"service-list-section"}>
                <h1>Our services</h1>
                <div className={"service-list"}>
                    {services.map((data, index) =>
                        <div className={"service-item"} key={index}>{data.title}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default About
