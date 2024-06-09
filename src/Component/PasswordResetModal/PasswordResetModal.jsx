import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const PasswordResetModal = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState();
  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(email);
    resetPassword(email).then((res) => console.log(res));
  };
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        open modal
      </button> */}
      <label className="label">
        <a
          href="#"
          className="label-text-alt link link-hover text-center text-xl"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Forget Password
        </a>
      </label>
      <dialog id="my_modal_2" className="modal">
        <div action="" method="get" className="modal-box">
          <input
            type="email"
            name="email"
            id=""
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{" "}
          <br />
          <button type="submit" value="Submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default PasswordResetModal;
