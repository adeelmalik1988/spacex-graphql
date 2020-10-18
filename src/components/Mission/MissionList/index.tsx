import React from 'react'
import { MissionsInfoQuery } from '../../../generated/graphql'
import './styles.css'

export interface OwnProps {
    handleIdChange:(newId: number) => void;
}

interface Props extends OwnProps{
    data: MissionsInfoQuery
    
}

const className = 'LaunchList';

const MissionList: React.FC<Props> = ({ data, handleIdChange }) => {

    return (
        <div className={className} >
            <h3>
                Launches
            </h3>
            <ol className={`${className}_list`} >
                {
                    data.launches?.map((launchObj, ind) => {
                        return(
                        <li key={ind} className={`${className}_item`} onClick={()=>{handleIdChange(launchObj?.flight_number!)}} >
                                <h3>{launchObj?.mission_name}</h3>
                                
                        </li>)

                    })
                }
            </ol>
        </div>
    )
}

export default MissionList