import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { registerUser } from "./../services/apiServices"; // Import the API function

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Register = () => {
  const [agreed, setAgreed] = useState(false);
  const history = useHistory();

  const handleRegisterClick = async () => {
    try {
      const userData = {
      };
      await registerUser(userData);
      if (response.success) {
        history.push("/signin");
      } else {
        console.error("Registration failed:", response.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="isolate bg-dark px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
      </div>
      <div className="flex-grow max-h-[85vh] overflow-y-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
            Register Now
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Please submit the Mandatory Details
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label
                htmlFor="restaurant-name"
                className="block text-sm font-semibold leading-6 text-indigo-600"
              >
                Restaurant name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="restaurant-name"
                  id="restaurant-name"
                  autoComplete="off"
                  maxLength="45"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="restaurant-location"
                className="block text-sm font-semibold leading-6 text-indigo-600"
              >
                Restaurant location
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="restaurant-location"
                  id="restaurant-location"
                  autoComplete="off"
                  maxLength="45"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="restaurant-type"
                className="block text-sm font-semibold leading-6 text-indigo-600"
              >
                Restaurant type
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="restaurant-type"
                  id="restaurant-type"
                  autoComplete="off"
                  maxLength="45"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="coupon-limit"
                className="block text-sm font-semibold leading-6 text-indigo-600"
              >
                Coupon limit
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="coupon-limit"
                  id="coupon-limit"
                  autoComplete="off"
                  max="45"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="admin-name"
                className="block text-sm font-semibold leading-6 text-indigo-600"
              >
                Admin name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="admin-name"
                  id="admin-name"
                  autoComplete="off"
                  maxLength="45"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="admin-phone"
                className="block text-sm font-semibold leading-6 text-indigo-600"
              >
                Admin phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="admin-phone"
                  id="admin-phone"
                  autoComplete="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="staff-name"
                className="block text-sm font-semibold leading-6 text-indigo-600"
              >
                Staff name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="staff-name"
                  id="staff-name"
                  autoComplete="off"
                  maxLength="45"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="staff-phone"
                className="block text-sm font-semibold leading-6 text-indigo-600"
              >
                Staff phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="staff-phone"
                  id="staff-phone"
                  autoComplete="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="mt-6 sm:mt-10">
            <Switch.Group as="div" className="flex items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 h-6 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
              <Switch.Label className="ml-3 text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{" "}
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:underline"
                >
                  privacy policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-6 sm:mt-10">
            <button
              type="button"
              onClick={handleRegisterClick}
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
