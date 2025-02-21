import React, { useEffect, useState } from 'react'
import { UserType } from '../utils/Types'
import { useAppSelector } from '../app/hooks'
import { getDocs, query, where } from 'firebase/firestore';
import { userRef } from '../utils/firebaseConfig';

function useFetchUsers() {
  const [users,setUsers]=useState<Array<UserType>>([])
  const uid=useAppSelector((zoomApp)=>zoomApp.auth.userInfo?.uid);

  useEffect(()=>{
    if(uid){
        const getUser=async()=>{
            const firestoreQuery=query(userRef,where("uid",'!=',uid));
            const data=await getDocs(firestoreQuery)
            const firebaseUsers:Array<UserType> = []

            data.forEach((user)=>{
                const userData:UserType=user.data() as UserType;
                firebaseUsers.push({
                    ...userData,
                    label:userData.name,
                });
            });
            setUsers(firebaseUsers)
        };
        getUser();
    }
  },[uid]);
  return [users]
}


export default useFetchUsers