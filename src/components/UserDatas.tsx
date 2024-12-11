import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../assets/slices/User.ts";
import { Link } from "react-router-dom";
import EmptyList from "./EmptyList.tsx";
type UserDatasProps = {
  desireUI: number;
  setdesireUI: React.Dispatch<React.SetStateAction<number>>;
};
const UserDatas:React.FC<UserDatasProps> = ({desireUI,setdesireUI}) => {

  const dispatch = useDispatch();
  const currentState = useSelector((state: any) => state.setData.value);

  const [editableRow, setEditableRow] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<{ [key: string]: any }>({});
  const deleteItem = (id: string) => {
    const updatedData = currentState.map((element: any) =>
      element.id === id ? { ...element, deleted: true } : element
    );
    dispatch(updateData(updatedData));
    setdesireUI((prev:number)=>prev-1)
  };

  const makeEditable = (id: string, name: string, email: string) => {
    setEditableRow(id);
    setEditValues({ name, email });
  };

  const saveEdit = (id: string) => {
    const updatedData = currentState.map((element: any) =>
      element.id === id ? { ...element, ...editValues } : element
    );
    dispatch(updateData(updatedData));
    setEditableRow(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const { value } = e.target;
    setEditValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    
    <>
     {desireUI==0 &&( <EmptyList/>)}
     {desireUI!=0 && (
    <>
    <table className="border w-3/4 text-center">
      <thead className="text-gray-500">
        <tr>
          <th className="border">Name</th>
          <th className="border">Email</th>
          <th className="border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {currentState
          .filter((elem: any) => !elem.deleted)
          .map((item: any) => (
            <tr className="text-purple-600" key={item.id}>
              <td className="border">
                <input
                  type="text"
                  value={editableRow === item.id ? editValues.name : item.name}
                  readOnly={editableRow !== item.id}
                  onChange={(e) => handleChange(e, "name")}
                  className="border rounded px-2 w-full bg-gray-300"
                />
              </td>
              <td className="border">
                <input
                  type="email"
                  value={editableRow === item.id ? editValues.email : item.email}
                  readOnly={editableRow !== item.id}
                  onChange={(e) => handleChange(e, "email")}
                  className="border rounded px-2 w-full  bg-gray-300"
                />
              </td>
              <td className="border">
                {editableRow === item.id ? (
                  <>
                    <button
                      onClick={() => saveEdit(item.id)}
                      className="text-green-500 mx-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditableRow(null)}
                      className="text-gray-500"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <div className="flex justify-evenly">
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="text-red-500 mx-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => makeEditable(item.id, item.name, item.email)}
                      className="text-blue-500"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
    <Link to='/' className="border rounded-xl bg-red-600 w-1/6 self-center mt-20"><button>Add user</button></Link>
    </>)}
    </>
   
  );
};

export default UserDatas;
