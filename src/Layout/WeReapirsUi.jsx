function WeReapirsUi(props){
    return(
        <>
        <div className="icon-container">
        <i className={props.icon}></i>
          <div>
            <h5 className="title">{props.brand}</h5>
            <p>{props.details}</p>
          </div>
        </div>
        </>
    )
}

export default WeReapirsUi

