export default function Session(props){
    return(
        <div className="session">
            <div>
            <p>{props.text}</p>
            </div>
            <div className="session-card">
             {props.children}
            </div>
        </div>
    )
}