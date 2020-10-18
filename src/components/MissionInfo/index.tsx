import React, { useEffect } from 'react'
import { useLaunchMissionInfoQuery } from '../../generated/graphql';
import { MissionInfoDetails } from './MissionInfoDetails';

interface OwnProps{
    id: number;
}

const MissionInfoContainer = ({id}: OwnProps) =>{

    const { data, loading, error, refetch } = useLaunchMissionInfoQuery({
        variables: {
           id: String(id)
        },
     });

     useEffect(()=>{
         refetch()
        },[id]
     )

     if(loading){
         return(
             <h3>Loading...</h3>
         )
     }
     if (error || !data){
         return(
             <h3>Error</h3>
         )
     }





    return(
        <div>
            
            <MissionInfoDetails data = {data}/>
        </div>
    )
}

export default MissionInfoContainer