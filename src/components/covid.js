import React, { useEffect, useState } from 'react'
import './covid.css';


const Covid = () => {

    const [data, setData] = useState([]);
    const [cgdata, cgsetData] = useState([]);

    const getCovidData = async () => {
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualdata = await res.json();
            console.log(actualdata.statewise[0]);
            setData(actualdata.statewise[0]);
            cgsetData(actualdata.statewise[7]);
        } catch (err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getCovidData();
    }, []);

  return (
    <>
    <body className="body">
    <center>
    <section>
    
        <h1 className="live hello" aria-hidden="true">🔴 LIVE</h1>
        <h2 className="live">COVID-19 CRONAVIRUS UPDATE TRACKER - INDIA</h2>

        <ul>
            <li className="box mainbody">
                <div className="box_main">
                    <div className="box_inner">
                        <p className="box_name"><span> OUR</span> COUNTRY</p>
                        <p className="box_total box_small">INDIA</p>
                    </div>

                </div>
            </li>

            <li className="box mainbody">
                <div className="box_main2">
                    <div className="box_inner">
                        <p className="box_name"><span> TOTAL</span> RECOVERED</p>
                        <p className="box_total box_small">{data.recovered}</p>
                    </div>

                </div>
            </li>


            <li className="box mainbody">
                <div className="box_main1">
                    <div className="box_inner">
                        <p className="box_name"><span> TOTAL</span> CONFIRMED CASES</p>
                        <p className="box_total box_small">{data.confirmed}</p>
                    </div>

                </div>
            </li>


            <li className="box mainbody">
                <div className="box_main3">
                    <div className="box_inner">
                        <p className="box_name"><span> TOTAL</span> DEATHS</p>
                        <p className="box_total box_small">{data.deaths}</p>
                    </div>

                </div>
            </li>

            <li className="box mainbody">
                <div className="box_main">
                    <div className="box_inner">
                        <p className="box_name"><span> TOTAL</span> ACTIVE</p>
                        <p className="box_total box_small">{data.active}</p>
                    </div>

                </div>
            </li>

            <li className="box mainbody">
                <div className="box_main1">
                    <div className="box_inner">
                        <p className="box_name"><span> LAST</span> UPDATE</p>
                        <p className="box_total box_small">{data.lastupdatedtime}</p>
                    </div>

                </div>
            </li>
        </ul>
        </section>
        </center>
    <br></br>

    <center>
    <section>
    
        <h1 className="live hello">🔴 LIVE</h1>
        <h2 className="live">COVID-19 CRONAVIRUS UPDATE TRACKER - CHHATTISGARH</h2>

        <ul>
            <li className="box mainbody">
                <div className="box_main">
                    <div className="box_inner">
                        <p className="box_name"><span> OUR</span> STATE</p>
                        <p className="box_total box_small"> CHHATTISGARH</p>
                    </div>

                </div>
            </li>

            <li className="box mainbody">
                <div className="box_main2">
                    <div className="box_inner">
                        <p className="box_name"><span> TOTAL</span> RECOVERED</p>
                        <p className="box_total box_small">{cgdata.recovered}</p>
                    </div>

                </div>
            </li>

            <li className="box mainbody">
                <div className="box_main1">
                    <div className="box_inner">
                        <p className="box_name"><span> TOTAL</span> CONFIRMED CASES</p>
                        <p className="box_total box_small">{cgdata.confirmed}</p>
                    </div>

                </div>
            </li>

            <li className="box mainbody">
                <div className="box_main3">
                    <div className="box_inner">
                        <p className="box_name"><span> TOTAL</span> DEATHS</p>
                        <p className="box_total box_small">{cgdata.deaths}</p>
                    </div>

                </div>
            </li>

            <li className="box mainbody">
                <div className="box_main">
                    <div className="box_inner">
                        <p className="box_name"><span> TOTAL</span> ACTIVE</p>
                        <p className="box_total box_small">{cgdata.active}</p>
                    </div>

                </div>
            </li>

            <li className="box mainbody">
                <div className="box_main1">
                    <div className="box_inner">
                        <p className="box_name"><span> LAST</span> UPDATE</p>
                        <p className="box_total box_small">{cgdata.lastupdatedtime}</p>
                    </div>

                </div>
            </li>
        </ul>
        </section>
        </center>
        </body>
    </>
  )
}

export default Covid