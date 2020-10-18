import React from 'react'
import { LaunchMissionInfoQuery } from '../../../generated/graphql';
import './styles.css'

interface Props{
    data: LaunchMissionInfoQuery
}

const className = 'LaunchProfile';  

export const MissionInfoDetails: React.FC<Props> = ({data})=>{
    console.log(data)


return(
    <div className={className} >
      <div className={`${className}_status`}  >
        <span>Flight {data.launch?.mission_name}: </span>
        {
            data.launch?.launch_success ? (
                <span className={`${className}_success`} >
                    Success
                </span>)
                : 
                (<span className={`${className}_failed`} >
                    Failed
                    </span>)
            
        }
        </div>
        <h1 className={`${className}_title`}  >
            {data.launch?.mission_name}
            {data.launch?.rocket && `(${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type} )` 
            }
        </h1>
        <p>
            {data.launch?.details}
        </p>
        { data.launch?.links && data.launch.links.flickr_images && (
            <div className={`${className}_image-list`}  > 
                {
                    data.launch.links.flickr_images.map(
                        image =>
                            image ? <img src={image} key={image} className={`${className}_image`} /> : null
                        
                    )
                }
                </div>
        )

        }




    </div>
)

}