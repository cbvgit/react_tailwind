import React from 'react'
import { Link } from "react-router-dom";
function Model_login() {
  return (
    <div>
     
<dialog id="my_modal_3" className="modal">
  
  <div className="modal-box">
    <form onSubmit={(e) => {validateErrors();handleSubmit(onSubmit)(e);}}  method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <h1 className="ml-2"> Login Page</h1>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
    
    <label className="input input-bordered flex items-center my-3 gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Username" />
</label>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" placeholder="Password" />
</label>
<button className="btn btn-neutralmx-4">Login</button>
<button className="btn btn-neutral mx-4">Cancel</button>
<p>
                Not registered?{" "}
                <Link
                  to="/register_model"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
              
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Model_login
