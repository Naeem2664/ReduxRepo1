import React ,{useState,useEffect} from "react";
import DeleteAlluser from "./DeleteAlluser";
import { fakeUserData } from "../api";
import {useDispatch} from 'react-redux'
import { addUser } from "../store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";
const UserDetails = () => {

  const dispatch=useDispatch()
   const addNewUser=(payload)=>{
    dispatch(addUser(payload))
    console.log(payload)

   }

  return (
    <>
      <div className="container users">
        <div className="add-user">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={()=>addNewUser(fakeUserData())}
          >
            Add User
          </button>
        </div>
        <DisplayUsers/>
        <DeleteAlluser />
      </div>
    </>
  );
};

export default UserDetails;
