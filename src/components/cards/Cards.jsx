import React from 'react'
import CountUp from 'react-countup';
const cards = ({data}) => {
    // console.log("Inside");
    console.log(data);
    if(!data.confirmed){
        return(
            <div>
               Loading....
            </div>
        )
    }
        return (
            <div>
            <div className="row">
                <div className="col s10 offset-s1 m4 l4">
                    <div className="card ">
                        <div className="card-content">
                            <strong>INFECTED :</strong><br/>
                            <h4 className='blue-text'><CountUp start={0} end={data.confirmed.value} duration={2.5} separator=','/><br/></h4>
                            <div className='grey-text text-darken-3'>{new Date(data.lastUpdate).toDateString()}</div>
                        </div>
                        <div className="card-action blue">
                        </div>
                    </div>
                </div>
                <div className="col s10 offset-s1 m4 l4">
                    <div className="card">
                        <div className="card-content">
                            <strong>RECOVERED :</strong><br/>
                            <h4 className='green-text'><CountUp start={0} end={data.confirmed.value-data.deaths.value} duration={2.5} separator=','/><br/></h4>
                            <div className='grey-text text-darken-3'>{new Date(data.lastUpdate).toDateString()}</div>
                        </div>
                        <div className="card-action green">
                        </div>
                    </div>
                </div>
                <div className="col s10 offset-s1 m4 l4">
                    <div className="card">
                        <div className="card-content">
                            <strong>DEATHS :</strong><br/>
                            <h4 className='red-text'><CountUp start={0} end={data.deaths.value} duration={2.5} separator=','/><br/></h4>
                            <div className='grey-text text-darken-3'>{new Date(data.lastUpdate).toDateString()}</div>
                        </div>
                        <div className="card-action red">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cards
