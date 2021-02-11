import React, { useState, useEffect } from 'react'
    
const useFetch = (url) => {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)

    useEffect(async () => {
        const response = await fetch(url)
        const data = await response.json();
        setData(data)
        setLoading(false)
    }, [])
    return {data, loading};
}
 const Main = () => {
    
const {data, loading} = useFetch('https://run.mocky.io/v3/afbf311a-0630-4431-92f3-57245b7a897b')

    return (
        <div>
            <h1>Mock API data</h1>
           {loading ? <div className="container">Loading..</div>: 
           
                <div className="container">
                    
                    <div className="box1">
                        <h2>{data.members[0].real_name}</h2>
                        <h6>{data.members[0].tz}</h6>
                        <div className="flex">
                            <p>{data.members[0].activity_periods[0].start_time}</p>
                            <p>{data.members[0].activity_periods[0].end_time}</p>

                        </div>
                    </div>
                    <div className="box1">
                    <h2>{data.members[1].real_name}</h2>
                        <h6>{data.members[1].tz}</h6>
                        <div className="flex">
                            <p>{data.members[1].activity_periods[1].start_time}</p>
                            <p>{data.members[1].activity_periods[1].end_time}</p>

                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default Main;