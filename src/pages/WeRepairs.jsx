import React from "react";
import WeRepairesData from "../Layout/WeRepairesData";
import WeReapirsUi from "../Layout/WeReapirsUi";

const WeRepairs = () => {
  return (
    <>
      <section>
        <div className="werepairs">
          <div className="container py-5">
            <h3 className="text-center">WE REPAIR</h3>
            <div className="row  my-5">
              {WeRepairesData.map((ele, index) => {
                return(
                <div class="col-md-4 WeRepairsUi my-3">

                    <WeReapirsUi brand={ele.brand} icon={ele.icon} details = {ele.details} />
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeRepairs;
