import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const Modal = ({ originQuery }) => {
  console.log("🚀 ~ file: Modal.js ~ line 5 ~ Modal ~ data", originQuery);
  // const { data, isSuccess } = originQuery.data && originQuery.data;
  //console.log("🚀 ~ file: Modal.js ~ line 7 ~ Modal ~ isSuccess", isSuccess);

  if (originQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (originQuery.isError) {
    return <p>Error</p>;
  }

  if (originQuery.data.error) {
    return <p>Error</p>;
  }

  return (
    <div>
      {originQuery.isSuccess ? (
        <>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{originQuery.data.name}</h3>
              <p className="py-4">Dimension: {originQuery.data.dimension}</p>
              <p className="py-4">Type: {originQuery.data.type}</p>
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
