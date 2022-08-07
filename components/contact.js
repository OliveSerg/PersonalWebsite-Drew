import React, {useState} from "react";
import {useForm} from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onHandleSubmit = (data) => {
    console.log(data);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onHandleSubmit)}
      className="grid grid-cols-2 gap-4"
    >
      <div className="col-span-2 relative z-0 mb-3">
        <select
          id="service"
          {...register("service", {required: "Required"})}
          className="block py-1 px-0 w-full bg-transparent appearance-none border-b-2 border-zinc-300 dark:border-gray-600 focus:border-red-600 focus:outline-none focus:ring-0 peer"
        >
          <option value="" selected disabled hidden></option>
          <option value={1}>Option 1</option>
          <option value={2}>Option 2</option>
        </select>
        <label
          htmlFor="service"
          className="absolute text-lg duration-300 top-0 origin-[0] -z-1"
        >
          How Can We Help You?
        </label>
        <span className="text-red-400 text-sm py-2">
          {errors.service?.message}
        </span>
      </div>
      <div className="relative z-0 mb-3">
        <input
          type="text"
          id="name"
          className="block py-1 px-0 w-full bg-transparent appearance-none border-b-2 border-zinc-300 dark:border-gray-600 focus:border-red-600 focus:outline-none focus:ring-0 peer"
          {...register("name", {required: "Required"})}
          placeholder=" "
        />
        <label
          forHtml="name"
          className="absolute text-lg duration-300 transform -translate-y-5 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
        >
          Name
        </label>
        <span className="text-red-400 text-sm py-2">
          {errors.name?.message}
        </span>
      </div>
      <div className="relative z-0 mb-3">
        <input
          type="text"
          id="email"
          className="block py-1 px-0 w-full bg-transparent appearance-none border-b-2 border-zinc-300 dark:border-gray-600 focus:border-red-600 focus:outline-none focus:ring-0 peer"
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder=" "
        />
        <label
          forHtml="email"
          className="absolute text-lg duration-300 transform -translate-y-5 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
        >
          Email
        </label>
        <span className="text-red-400 text-sm py-2">
          {errors.email?.message}
        </span>
      </div>
      <div className="relative z-0 mb-3">
        <input
          type="tel"
          id="phone"
          className="block py-1 px-0 w-full bg-transparent appearance-none border-b-2 border-zinc-300 dark:border-gray-600 focus:border-red-600 focus:outline-none focus:ring-0 peer"
          {...register("phone", {
            required: "Required",
            pattern: {
              value:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              message: "Invalid phone number",
            },
          })}
          placeholder=" "
        />
        <label
          forHtml="phone"
          className="absolute text-lg duration-300 transform -translate-y-5 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
        >
          Phone
        </label>
        <span className="text-red-400 text-sm py-2">
          {errors.phone?.message}
        </span>
      </div>
      <div className="relative z-0 mb-3">
        <input
          type="text"
          id="organization"
          className="block py-1 px-0 w-full bg-transparent appearance-none border-b-2 border-zinc-300 dark:border-gray-600 focus:border-red-600 focus:outline-none focus:ring-0 peer"
          {...register("organization")}
          placeholder=" "
        />
        <label
          forHtml="organization"
          className="absolute text-lg duration-300 transform -translate-y-5 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
        >
          Organization
        </label>
      </div>
      <div className="col-span-2 relative z-0 mb-3">
        <textarea
          type="text"
          id="message"
          className="block min-h-[100px] py-1 px-0 w-full bg-transparent appearance-none border-b-2 border-zinc-300 dark:border-gray-600 focus:border-red-600 focus:outline-none focus:ring-0 peer"
          {...register("message")}
          placeholder=" "
        />
        <label
          forHtml="message"
          className="absolute text-lg duration-300 transform -translate-y-5 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
        >
          Message
        </label>
      </div>
      <div className="col-span-2">
        <button
          className="block mx-auto w-1/3 py-5 text-2xl font-bold uppercase rounded bg-red-600 hover:text-red-600 hover:outline hover:bg-transparent transition-all"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
}
