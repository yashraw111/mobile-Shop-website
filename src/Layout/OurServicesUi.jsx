function OurServicesCard(props){
    return(
        <>
        <div className="OurServicesCard">
          <div className="card mt-4">
            <div className="img-sec">
            <img src={props.image}/>
            </div>
            <div className="card-body text-center">
                <p>{props.title}</p>
                </div>

        </div>
        </div>
        </>
    )
}

export default OurServicesCard