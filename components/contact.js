import React, {useState} from "react";

export default function Contact() {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrg] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {service, name, email, phone, organization, message};
    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <div className="col-span-2 relative z-0 mb-3">
        <select
          id="service"
          value={service}
          data-value={service}
          onChange={(e) => setService(e.target.value)}
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
      </div>
      <div className="relative z-0 mb-3">
        <input
          type="text"
          id="name"
          className="block py-1 px-0 w-full bg-transparent appearance-none border-b-2 border-zinc-300 dark:border-gray-600 focus:border-red-600 focus:outline-none focus:ring-0 peer"
          onChange={(e) => setName(e.target.value)}
          placeholder=" "
        />
        <label
          forHtml="name"
          className="absolute text-lg duration-300 transform -translate-y-5 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
        >
          Name
        </label>
      </div>
      <div className="relative z-0 mb-3">
        <input
          type="text"
          id="email"
          className="block py-1 px-0 w-full bg-transparent appearance-none border-b-2 border-zinc-300 dark:border-gray-600 focus:border-red-600 focus:outline-none focus:ring-0 peer"
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" "
        />
        <label
          forHtml="email"
          className="absolute text-lg duration-300 transform -translate-y-5 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
        >
          Email
        </label>
      </div>
      <div className="relative z-0 mb-3">
        <input
          type="tel"
          id="phone"
          className="block py-1 px-0 w-full bg-transparent appearance-none border-b-2 border-zinc-300 dark:border-gray-600 focus:border-red-600 focus:outline-none focus:ring-0 peer"
          onChange={(e) => setPhone(e.target.value)}
          placeholder=" "
        />
        <label
          forHtml="phone"
          className="absolute text-lg duration-300 transform -translate-y-5 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
        >
          Phone
        </label>
      </div>
      <div className="relative z-0 mb-3">
        <input
          type="text"
          id="organization"
          className="block py-1 px-0 w-full bg-transparent appearance-none border-b-2 border-zinc-300 dark:border-gray-600 focus:border-red-600 focus:outline-none focus:ring-0 peer"
          onChange={(e) => setOrg(e.target.value)}
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
          onChange={(e) => setMessage(e.target.value)}
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
