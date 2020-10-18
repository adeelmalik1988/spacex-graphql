import React from 'react'
import {useMissionsInfoQuery} from '../../generated/graphql'
import MissionList, { OwnProps } from './MissionList'



const MissionContainer: React.FC<OwnProps>  = ({handleIdChange}) =>{

    const {data, error, loading } = useMissionsInfoQuery()

    if (loading){
        return<h2>Loading...</h2>
    }

    if (error || !data){
        return<h2>Error</h2>

    }

    console.log(data)

    return(
        <div>
            
            <MissionList data = {data} handleIdChange={handleIdChange} />
        </div>
    )
}

export default MissionContainer