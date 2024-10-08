import "../styles/values.css";
import ValueCards from "../MinorComponents/ValueCards";
import {valuesdata} from "../../Data/valuesdata";

const Values = () => {
    return (
        <div className="values">
            <div className="woman_image">
                {/* <img src={Woman} alt="A woman's image" className={"outlined"} /> */}
            </div>
            <div className="right_section">
                <div className="title_section header ">
                    <h1>Our Value System</h1>
                </div>
                <div className="cards_section">
                    <div className="grouped">
                        <ValueCards
                            index={1}
                            title={"Mission"}
                            inline_content={"Building brands, empowering teams"}
                        />
                        <ValueCards
                            index={2}
                            title={"Vision"}
                            inline_content={"To be corporate retail solutions provider"}
                        />
                    </div>
                    <div className="single">
                        <ValueCards
                            index={3}
                            title={"Values"}
                            contentType={"list"}
                            list_content={valuesdata}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Values;
