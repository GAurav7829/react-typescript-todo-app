import React from "react";

export const TodoRowItem: React.FC<{
  rowNumber: number;
  rowDescription: string;
  rowAssigned: string;
  deleteTodo: Function;
}> = (props) => {
  const rowNumber = props.rowNumber;
  const rowDescription = props.rowDescription;
  const rowAssigned = props.rowAssigned;
  return (
    <>
      <tr>
        <th scope="row">{rowNumber}</th>
        <td>{rowDescription}</td>
        <td>{rowAssigned}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => props.deleteTodo(props.rowNumber)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    </>
  );
};
