import React, { useContext } from "react";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ThemeContext } from "../../../App";
import Sidebar from "./Sidebar";

function SignIn() {
  const navigate = useNavigate();
  const [theme, ,] = useContext(ThemeContext);
  const { background, foreground } = theme;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const { response } = await Axios.post(
          "http://127.0.0.1:4000/api/login",
          values
        );
        navigate("/");
        console.log(response, "response");
      } catch (error) {
        console.log(error);
        console.log("cant login");
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is Required").email("Invalid Email"),
      password: Yup.string().required("Password is required"),
    }),
  });
  console.log(background, foreground);
  return (
    <div>
      <section
        style={{ backgroundColor: foreground }}
        className="rounded-md bg-black/70 p-2"
      >
        <div
          style={{ backgroundColor: background }}
          className="flex h-[97vh] items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8"
        >
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2"></div>
            <h2
              style={{ color: foreground }}
              className="text-2xl font-bold leading-tight"
            >
              Sign in to your account
            </h2>
            <p className="mt-2text-sm text-gray-600 ">
              Don&apos;t have an account?{" "}
              <NavLink
                to={"/signup"}
                style={{ color: foreground }}
                href="#"
                title=""
                className="font-semibold transition-all duration-200 hover:underline"
              >
                Create a free account
              </NavLink>
            </p>
            <form
              action="http://localhost:4000/"
              method="POST"
              className="mt-8"
              onSubmit={formik.handleSubmit}
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      style={{ color: foreground }}
                      id="email"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                    ></input>
                  </div>
                  <div className="text-red-800">
                    {formik.errors.email &&
                      formik.touched.email &&
                      formik.errors.email}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <NavLink
                      style={{ color: foreground }}
                      href="#"
                      title=""
                      className="font-semibol text-sm hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </NavLink>
                  </div>
                  <div className="mt-2">
                    <input
                      style={{ color: foreground }}
                      id="password"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                    ></input>
                    <div className="text-red-800">
                      {formik.errors.password &&
                        formik.touched.password &&
                        formik.errors.password}
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      !formik.errors.email &&
                        !formik.errors.password &&
                        formik.touched.email &&
                        formik.touched.password &&
                        !formik.errors.email &&
                        !formik.errors.email &&
                        formik.handleSubmit() &&
                        navigate("/");
                    }}
                    style={{ color: background, backgroundColor: foreground }}
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7 text-white hover:hover:opacity-75"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              {/* <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign in with Google
            </button> */}
              {/* <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-[#2563EB]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </span>
              Sign in with Facebook
            </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const SignInPage = () => {
  return (
    <div className="relative mx-auto flex h-[150vh] w-[100%] flex-col gap-10 text-center text-gray-200">
      <Sidebar />
      <SignIn />
    </div>
  );
};
export default SignInPage;
