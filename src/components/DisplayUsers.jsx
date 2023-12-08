import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { removeUser } from "../store/slices/UserSlice";
const DisplayUsers = () => {
    const dispatch=useDispatch();
    const deleteUser=(id)=>{
        dispatch(removeUser(id))
    }

  const data = useSelector((state) => {
    return state.users;
  });
  console.log(data);
  return (
    <div className="display-user">
      {data.map((user, id) => {
        return (
          <div key={id}>
            <span>
              <h6><strong>{user}</strong></h6>
              <button className="btn btn-success" onClick={()=>deleteUser(id)}>Remove</button>
            </span>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayUsers;
