import rings from "../images/pattern-rings.svg";

const tools =[
    {name: "HTML", experience: "4 Years experience"},
    {name: "CSS", experience: "4 Years experience"},
    {name: "JavaScript", experience: "4 Years experience"},
    {name: "Accessibility", experience: "4 Years experience"},
    {name: "React", experience: "3 Years experience"},
    {name: "Sass", experience: "3 Years experience"},
]

export default function Tools(){
    return (
        <section className="tools ">
            <div className="wrapper__tools--text container">
                {tools.map((tool, index) => (
                    <div className="tool__description" key={index}>
                        <h2 className="tools__title">{tool.name}</h2>
                        <p className="tools__text">{tool.experience}</p>
                    </div>
                ))}
            </div>
            <img src ={rings} alt="rings pattern" className="pattern rings" />
        </section>
    );
}
