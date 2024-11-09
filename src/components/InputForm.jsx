import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdError } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const InputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();

  const steps = [
    "start",
    "Manifest Details",
    "Travel Plans",
    "Programming",
    "Orientation",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [stepsublevel2, setstepsublevel2] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate()

  const guilds = [
    { value: "Oceans", label: "Oceans" },
    { value: "Governance", label: "Governance" },
    { value: "Intelligence", label: "Intelligence" },
    { value: "Bioculture", label: "Bioculture" },
    { value: "resiliance", label: "resiliance" },
    { value: "New Economics", label: "GNew Economics" },
  ];

  const [selectedGuilds, setSelectedGuilds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGuilds, setFilteredGuilds] = useState(guilds);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    setFilteredGuilds(
      guilds.filter((guild) => guild.label.toLowerCase().includes(query))
    );
  };

  // Handle selecting a guild
  const handleSelect = (guild) => {
    if (selectedGuilds.length < 3 && !selectedGuilds.includes(guild)) {
      setSelectedGuilds((prev) => [...prev, guild]);
      setSearchTerm("");
      setFilteredGuilds([]);
    }
  };

  // Handle removing a guild from selected list
  const handleRemove = (guild) => {
    const updatedSelectedGuilds = selectedGuilds.filter((g) => g !== guild);
    setSelectedGuilds(updatedSelectedGuilds);
  };

  const handleNextClick = () => {
    if (currentStep === steps.length) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const onNext_1 = (data) => {
    const dataToSave = {
      fullName: data.fullName,
      email: data.email,
      Whatsapp: data.Whatsapp,
      gender: data.gender,
      Nationality: data.Nationality,
    };

    localStorage.setItem("position-2", JSON.stringify(dataToSave));
    localStorage.setItem("currentstep", JSON.stringify(currentStep));
    setstepsublevel2(true);
  };

  const onNext_2 = (data) => {
    const dataToSave = {
      Instagram: data.Instagram,
      X: data.X,
      Linkedin: data.Linkedin,
      contact_me: data.contact_me,
      feature_me: data.feature_me,
      hide_me: data.hide_me,
    };

    localStorage.setItem("position-22", JSON.stringify(dataToSave));
    localStorage.setItem("currentstep", JSON.stringify(currentStep));
    setstepsublevel2(false);
    setCurrentStep(currentStep + 1);
  };

  const onNext_3 = (data) => {
    setCurrentStep(currentStep + 1);
    localStorage.setItem("position-3", JSON.stringify(selectedGuilds));
    localStorage.setItem("currentstep", JSON.stringify(currentStep));
  };

  const onNext_4 = (data) => {
    const dataToStore = {
      Atlantic: data.Atlantic || null,
      Experience: data.Experience || null,
      Feeling: data.Feeling || null,
      conditions: data.conditions || null,
    };

    Object.keys(dataToStore).forEach(
      (key) => dataToStore[key] === null && delete dataToStore[key]
    );

    setCurrentStep(currentStep + 1);
    localStorage.setItem("position-4", JSON.stringify(dataToStore));
    localStorage.setItem("currentstep", JSON.stringify(currentStep));
  };

  const onNext_5 = (data) => {
    navigate("/");
  };

  useEffect(() => {
    const pos2 = localStorage.getItem("position-2");
    const pos22 = localStorage.getItem("position-22");
    const pos3 = localStorage.getItem("position-3");
    const pos4 = localStorage.getItem("position-4");

    if (pos2 || pos22 || pos3 || pos4) {
      setIsPopupVisible(true);
    }
  }, []);

  const handlePopupYes = () => {
    const pos2 = localStorage.getItem("position-2");
    const pos22 = localStorage.getItem("position-22");
    const pos3 = localStorage.getItem("position-3");
    const pos4 = localStorage.getItem("position-4");
    const currentstep = parseInt(localStorage.getItem("currentstep"), 10);

    setCurrentStep(currentstep);

    // Parse the items if they exist
    if (pos2) {
      const parsedPos2 = JSON.parse(pos2);
      Object.keys(parsedPos2).forEach((key) => {
        setValue(key, parsedPos2[key]);
      });
    }

    if (pos22) {
      const parsedPos22 = JSON.parse(pos22);
      Object.keys(parsedPos22).forEach((key) => {
        setValue(key, parsedPos22[key]);
      });
    }

    if (pos3) {
      const parsedPos3 = JSON.parse(pos3);
      Object.keys(parsedPos3).forEach((key) => {
        setValue(key, parsedPos3[key]);
      });
    }

    if (pos4) {
      const parsedPos4 = JSON.parse(pos4);
      Object.keys(parsedPos4).forEach((key) => {
        setValue(key, parsedPos4[key]);
      });
    }

    setIsPopupVisible(false);
  };

  const handlePopupNo = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="flex font-Cormorant flex-col justify-center items-center bg-[#252A30]">
      <div className="flex items-center w-full justify-between px-4 py-4 border-b-[0.2px] border-gray-500">
        {currentStep > 1 && (
          <IoMdArrowRoundBack
            onClick={() => setCurrentStep(currentStep - 1)}
            className="text-3xl text-gray-100 cursor-pointer"
          />
        )}
        <div className="flex justify-center items-center w-full">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 px-2 "
            >
              <span
                className={`w-8 h-8 rounded-full ${
                  i + 1 <= currentStep
                    ? "border-[#6D6049] border-2 text-white"
                    : "border-2 border-gray-500"
                } flex items-center justify-center`}
              >
                {i + 1 == currentStep && (
                  <div className="flex items-center justify-center bg-[#6D6049] rounded-full w-3 h-3"></div>
                )}
                {i + 1 < currentStep && (
                  <div className="flex items-center justify-center bg-[#6D6049] rounded-full w-full h-full">
                    <TiTick className="text-white" />
                  </div>
                )}
              </span>

              <p
                className={`text-md ${
                  i + 1 <= currentStep ? "text-[#6D6049]" : "text-[#4d5663]"
                }`}
              >
                {steps[i]}
              </p>

              {i < steps.length - 1 && (
                <span
                  className={`h-[0.6px] w-8 ${
                    i + 1 < currentStep ? "bg-[#6D6049]" : "bg-gray-500"
                  }`}
                ></span>
              )}
            </div>
          ))}
        </div>

        <div></div>
      </div>

      {currentStep === 1 && (
        <div className="flex flex-col w-1/2 min-h-[91vh]  items-start  gap-8 ">
          <div className="flex w-full items-center justify-center py-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="99"
              fill="none"
            >
              <g fill="#6D6049" clip-path="url(#a)">
                <path d="M44.41 20.785c13-8.26 25-11.01 35.69-10.5-.97-.74-1.96-1.43-2.98-2.1-11.21.11-22.5 3.74-33.79 10.91-23.61 15.01-35.49 17.8-41.25 17.57-.18.65-.34 1.32-.5 1.98.38.03.77.04 1.18.04 6.95 0 19.41-3.76 41.65-17.9zm19.41-18.7c-1.24-.36-2.49-.68-3.77-.94-5.65 1.92-11.26 4.72-16.82 8.43-19.92 13.16-31.43 17.55-37.98 18.62-.34.71-.67 1.43-.98 2.16 7.13-.8 19.3-5.4 40.07-19.12 6.43-4.29 12.94-7.34 19.48-9.15zm-19.26 37.8c.87-.5 2.15-1.21 3.76-2v-2.3c-1.57.79-3.15 1.64-4.77 2.57C17.4 53.315 5.48 54.015.39 52.725c.04.69.09 1.39.16 2.07 1.09.23 2.34.37 3.8.37 7.32 0 19.62-3.36 40.21-15.29v.01zm-.08-9.55c1.29-.79 2.57-1.51 3.84-2.19v-2.27a87.34 87.34 0 0 0-4.88 2.75C17.57 44.345 5.71 45.645.57 44.635c-.07.66-.12 1.33-.16 2 .91.17 1.93.27 3.11.27 7.15 0 19.55-3.56 40.96-16.57zm6.84 3.81v2.34c10.14-4.44 28.36-9.76 46.12-1.54-.23-.75-.48-1.49-.75-2.22-11.46-5.14-26.69-7.02-45.37 1.42zm0 9.78v2.17c16.95-7.61 32.36-7.71 45.86-.24.86.47 1.67.97 2.47 1.48-.04-.83-.1-1.64-.18-2.46-.43-.26-.86-.52-1.31-.77-16.44-9.1-33.53-5.92-46.83-.18h-.01zm0-19.54v2.22c15.54-7.52 29.08-7.46 40.2-4.1-.59-.9-1.21-1.78-1.86-2.64-10.82-2.73-23.71-2.35-38.34 4.52zm-6.69 25.05c1.24-.68 2.47-1.33 3.69-1.93v-2.21c-1.62.78-3.18 1.58-4.66 2.39-11.18 6.17-30.85 15.72-42.05 13.51.17.71.35 1.41.54 2.1.92.13 1.94.2 3.06.2 7.46 0 19.64-3.16 39.41-14.07l.01.01zM46.4.275c-1.46.11-2.91.27-4.34.5-13.8 9.47-23.45 14.55-30.16 17.16-.8.95-1.55 1.93-2.28 2.94 7.38-2.38 18.34-7.91 34.63-19.17.71-.49 1.43-.96 2.15-1.42v-.01zm4.92 63.12v2.16c14.49-5.95 27.07-6.78 37.47-2.45 2.99 1.24 5.52 2.81 7.65 4.47.26-.67.49-1.34.72-2.03-8.61-6.51-23.1-11.27-45.84-2.16v.01zm0 9.75v2.14c14.97-5.87 27.38-6.49 36.96-1.83 1.51.73 2.84 1.57 4.05 2.44.36-.58.7-1.16 1.03-1.76-7.73-5.54-20.8-9.11-42.05-.99h.01zm-3-15.96v-2.21c-1.49.68-3 1.42-4.54 2.23-20.34 10.66-32.29 13.13-39.28 12.63.3.68.61 1.36.94 2.03 7.53.19 19.69-2.63 39.26-12.88 1.22-.64 2.42-1.23 3.61-1.79l.01-.01zm-4.2 28.6c-7.41 3.27-13.72 5.52-19.1 7.01.81.47 1.64.92 2.48 1.35 5.05-1.5 10.82-3.62 17.43-6.53 18.05-7.96 32.1-9.38 41.78-4.26.47-.51.92-1.04 1.37-1.57-7.97-4.42-21.45-5.92-43.96 4z" />
                <path d="M51.32 53.655v2.17c13.87-5.96 26.42-7.05 37.36-3.22 4.05 1.42 7.47 3.38 10.34 5.5.12-.71.22-1.43.31-2.15-9.74-6.83-25.35-11.74-48-2.3h-.01zm-3 13.2v-2.19c-1.45.64-2.92 1.32-4.43 2.07-16.37 8.12-27.33 11.07-34.66 11.52.44.63.89 1.25 1.36 1.86 7.63-.72 18.55-3.83 34.19-11.59 1.19-.59 2.37-1.14 3.54-1.67zm-4.09 28.46c-2.36.98-4.61 1.85-6.76 2.63 1.18.31 2.38.56 3.59.78 1.28-.49 2.58-1.01 3.93-1.56 13.66-5.64 24.92-7.78 33.16-6.36.74-.51 1.47-1.05 2.18-1.6-8.79-2.21-20.88-.18-36.1 6.11zm4.09-18.8v-2.17c-1.41.59-2.84 1.22-4.32 1.91-12.02 5.63-21.14 8.53-28.06 9.77.6.57 1.22 1.12 1.84 1.65 6.93-1.4 15.77-4.32 27.06-9.61 1.17-.55 2.33-1.06 3.47-1.55h.01z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.39.275h99.26v98.45H.39z" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <p className="text-2xl text-gray-100 font-medium ">
            Atlantic Crossing Traveler Intake Form
          </p>

          <p className="text-md text-gray-100 font-medium ">
            We are honored to have you join us for The Atlantic Crossing. This
            registration form is the place to edit your profile details that
            will be shared with other attendees, and helps us ensure your
            experience is smooth.
          </p>

          <button
            onClick={handleNextClick}
            className="rounded-3xl text-gray-100 px-4 py-2 bg-[#6D6049] hover:border-2 hover:border-white"
          >
            Begin
          </button>
        </div>
      )}

      {currentStep === 2 && stepsublevel2 == false && (
        <form
          onSubmit={handleSubmit(onNext_1)}
          className="flex font-Cormorant flex-col w-1/2 items-start justify-center gap-8 py-12 px-6 "
        >
          {/* First Name Input Feild */}
          <div className="flex flex-col items-start w-full gap-2 text-gray-200">
            <p>Full Name</p>
            <input
              type="text"
              {...register("fullName", {
                required: "Full name is required!",
              })}
              className="w-full bg-[#373d45] py-2 px-2 rounded-lg border-[1px] border-gray-500"
            />

            {errors.fullName && (
              <div className="flex items-center gap-1">
                <MdError className="text-red-700 text-sm" />
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              </div>
            )}
          </div>

          {/* Email * Input Feild */}
          <div className="flex flex-col items-start w-full gap-2 text-gray-200">
            <p>Email *</p>
            <input
              type="email"
              {...register("email", {
                required: "Email is required!",
              })}
              className="w-full px-2 bg-[#373d45] py-2 rounded-lg border-[1px] border-gray-500"
            />

            {errors.email && (
              <div className="flex items-center gap-1">
                <MdError className="text-red-700 text-sm" />
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              </div>
            )}
          </div>

          {/* whatsapp Input Feild */}
          <div className="flex flex-col items-start w-full gap-2 text-gray-200">
            <p>Whatsapp Phone Number</p>
            <input
              type="number"
              {...register("Whatsapp", {
                required: "Whatsapp Number is required!",
              })}
              className="w-full px-2 bg-[#373d45] py-2 rounded-lg border-[1px] border-gray-500"
            />

            {errors.Whatsapp && (
              <div className="flex items-center gap-1 ">
                <MdError className="text-red-700 text-sm" />
                <p className="text-red-500 text-sm">
                  {errors.Whatsapp.message}
                </p>
              </div>
            )}
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2 text-gray-200 w-full">
            <label>Gender</label>

            <div className="flex flex-col items-start gap-4">
              <label className="flex items-center w-40 px-4 py-2  rounded-xl border-[1px] border-gray-700 bg-[#373d45]">
                <input
                  type="radio"
                  value="Male"
                  {...register("gender", { required: "Gender is required" })}
                  className="mr-2 "
                />
                Male
              </label>

              <label className="flex items-center w-40 px-4 py-2  rounded-xl border-[1px] border-gray-700 bg-[#373d45]">
                <input
                  type="radio"
                  value="Female"
                  {...register("gender", { required: "Gender is required" })}
                  className="mr-2"
                />
                Female
              </label>

              <label className="flex items-center w-40 px-4 py-2  rounded-xl border-[1px] border-gray-700 bg-[#373d45]">
                <input
                  type="radio"
                  value="Non-binary"
                  {...register("gender", { required: "Gender is required" })}
                  className="mr-2"
                />
                Non-binary
              </label>
            </div>

            {errors.gender && (
              <div className="flex items-center gap-2 mt-2">
                <MdError className="text-red-700 text-sm" />
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              </div>
            )}
          </div>

          {/* Natinality input Feild */}
          <div className="flex flex-col items-start w-full gap-2 text-gray-200">
            <div>
              <p>Nationality</p>
              <p className="text-sm text-gray-500">
                Which passport(s) do you hold? We must give this information to
                the Ritz-Carlton.{" "}
              </p>
            </div>
            <input
              type="text"
              {...register("Nationality", {
                required: "Nationality Number is required!",
              })}
              className="w-full px-2 bg-[#373d45] py-2 rounded-lg border-[1px] border-gray-500"
            />

            {errors.Nationality && (
              <div className="flex items-center gap-1 ">
                <MdError className="text-red-700 text-sm" />
                <p className="text-red-500 text-sm">
                  {errors.Nationality.message}
                </p>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="rounded-3xl text-gray-100 px-4 py-2 bg-[#6D6049] hover:border-2 hover:border-white"
          >
            Start
          </button>
        </form>
      )}

      {stepsublevel2 && (
        <form
          onSubmit={handleSubmit(onNext_2)}
          className="py-16 bg-[#252A30] w-1/2 flex flex-col items-start justify-center gap-8"
        >
          <p className="text-2xl text-gray-200">Build Your Profile</p>
          <p className="text-2xl text-gray-200">Lets Connect</p>
          <p className="text-sm text-gray-200">
            For each social media profile you'd like to share with others,
            please copy & paste your profile URL below:
          </p>

          {/* Instagram Input Feild */}
          <div className="flex flex-col items-start w-full gap-2 text-gray-200">
            <p>Instagram Profile URL</p>
            <input
              type="text"
              placeholder="https://www.instagram.com/lost.in.mountains_/"
              {...register("Instagram")}
              className="w-full bg-[#373d45] py-2 px-2 rounded-lg border-[1px] border-gray-500"
            />
          </div>

          {/* X Input Feild */}
          <div className="flex flex-col items-start w-full gap-2 text-gray-200">
            <p>X Profile URL</p>
            <input
              type="text"
              placeholder="https://www.X.com/lost.in.mountains_/"
              {...register("X")}
              className="w-full bg-[#373d45] py-2 px-2 rounded-lg border-[1px] border-gray-500"
            />
          </div>

          {/* Linkedin Input Feild */}
          <div className="flex flex-col items-start w-full gap-2 text-gray-200">
            <p>Linkedin Profile URL</p>
            <input
              type="text"
              placeholder="https://www.Linkedin.com/lost.in.mountains_/"
              {...register("Linkedin")}
              className="w-full bg-[#373d45] py-2 px-2 rounded-lg border-[1px] border-gray-500"
            />
          </div>

          <span className="h-[1px] w-full bg-gray-600"></span>
          <span className="h-[1px] w-full bg-gray-600"></span>

          <div className="flex gap-2">
            <input
              type="checkbox"
              {...register("contact_me")}
              className="mr-2"
            />
            <div className="flex flex-col  ">
              <p className="text-md text-gray-200">Contact me</p>
              <p className="text-sm text-gray-400 ">
                I’m open to having other participants contact me. If checked,
                we’ll share your email and WhatsApp number with confirmed
                participants.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              {...register("feature_me")}
              className="mr-2"
            />
            <div className="flex flex-col  ">
              <p className="text-md text-gray-200">Feature Me</p>
              <p className="text-sm text-gray-400 ">
                Are you okay with being featured on the Earth One website and/or
                newsletter? We love to celebrate the remarkable individuals in
                our ecosystem.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <input type="checkbox" {...register("hide_me")} className="mr-2" />
            <div className="flex flex-col  ">
              <p className="text-md text-gray-200">Hide Me</p>
              <p className="text-sm text-gray-400 ">
                Check this box if you do NOT want to be displayed on the
                internal Alliance Directory for Atlantic Crossing passengers
                (https://earthone.world/alliance). Note that changes to this
                field will not
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="rounded-3xl text-gray-100 px-4 py-2 bg-[#6D6049] hover:border-2 hover:border-white"
          >
            Next
          </button>
        </form>
      )}

      {currentStep === 3 && (
        <form
          onSubmit={handleSubmit(onNext_3)}
          className="flex font-Cormorant min-h-[91vh] flex-col w-1/2 items-start justify-center py-12 px-6"
        >
          <p className="text-2xl text-gray-200">Programming</p>
          <p className="text-md text-gray-200 pt-6">
            Which Guild are you most interested in participating in?
          </p>
          <p className="text-sm text-gray-500">
            Select 1-3 Guilds in the order of your preference. (Select your
            first choice first)
          </p>

          <div className="relative w-full">
            {/* Selected Guilds (Tags) */}
            <div className="flex flex-wrap items-center space-x-2 z-10">
              {selectedGuilds.map((guild) => (
                <span
                  key={guild.value}
                  className="flex items-center bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full space-x-1 m-1"
                >
                  <span>{guild.label}</span>
                  <button
                    className="text-md font-semibold cursor-pointer hover:text-indigo-500"
                    onClick={() => handleRemove(guild)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search Guilds..."
              value={searchTerm}
              onChange={handleSearch}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm mt-6"
            />

            {/* Dropdown list, positioned directly below the input */}
            {searchTerm && filteredGuilds.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto z-10">
                <ul className="divide-y divide-gray-200">
                  {filteredGuilds.map((guild) => (
                    <li
                      key={guild.value}
                      className="px-4 py-2 cursor-pointer hover:bg-indigo-100"
                      onClick={() => handleSelect(guild)}
                    >
                      {guild.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="rounded-3xl text-gray-100 px-4 py-2 bg-[#6D6049] hover:border-2 hover:border-white"
            >
              Next
            </button>
          </div>
        </form>
      )}

      {currentStep === 4 && (
        <form
          onSubmit={handleSubmit(onNext_4)}
          className="py-16 bg-[#252A30] w-1/2 flex flex-col items-start justify-center gap-8"
        >
          <p className="text-2xl text-gray-200">Your Input</p>
          <p className="text-md text-gray-200">
            These final questions help us design the Atlantic Crossing with you
            in mind. This section is optional, but encouraged!
          </p>

          {/* Atlatic Input Feild */}
          <div className="flex flex-col items-start w-full gap-2 text-gray-200">
            <p>Why are you joining the Atlantic Crossing?</p>
            <textarea
              type="text"
              rows={3}
              {...register("Atlantic")}
              className="w-full bg-[#373d45] py-2 px-2 rounded-lg border-[1px] border-gray-500"
            />
          </div>

          {/* experience Input Feild */}
          <div className="flex flex-col items-start w-full gap-2 text-gray-200">
            <p>
              What are you hoping to receive from or experience at this
              gathering?
            </p>
            <textarea
              type="text"
              rows={3}
              {...register("Experience")}
              className="w-full bg-[#373d45] py-2 px-2 rounded-lg border-[1px] border-gray-500"
            />
          </div>

          {/* Linkedin Input Feild */}
          <div className="flex flex-col items-start w-full gap-2 text-gray-200">
            <p>
              Is there anything you’re feeling concerned or apprehensive about
              as you enter this experience?
            </p>
            <textarea
              type="text"
              rows={3}
              {...register("Feeling")}
              className="w-full bg-[#373d45] py-2 px-2 rounded-lg border-[1px] border-gray-500"
            />
          </div>

          <div className="flex flex-col items-start w-full gap-2 text-gray-200">
            <p>What conditions allow you to be your best self?</p>
            <textarea
              type="text"
              rows={3}
              {...register("conditions")}
              className="w-full bg-[#373d45] py-2 px-2 rounded-lg border-[1px] border-gray-500"
            />
          </div>

          <p className="text-md text-gray-500">
            If you have any additional questions please email
            aine@earthoneworld.com
          </p>

          <button
            type="submit"
            className="rounded-3xl text-gray-100 px-4 py-2 bg-[#6D6049] hover:border-2 hover:border-white"
          >
            Next
          </button>
        </form>
      )}

      {currentStep === 5 && (
        <form
          onSubmit={handleSubmit(onNext_5)}
          className="py-16 bg-[#252A30] w-1/2 flex flex-col items-start justify-center gap-8"
        >
          <p className="text-2xl text-gray-200">Guidelines and Values</p>
          <p className="text-md text-gray-200">
            These are ways of operating that we are in agreement of. We model
            the world we want to create together. A core principle of Earth One
            is regenerosity — the recognition that generosity begets generosity.
            Our central purpose here is initiating cycles of regenerosity that
            ripple through our communities, cultures and beyond. We believe in
            the practice of devoting one's gifts in service of the whole. Our
            gatherings make space for co-creation and co-development, constantly
            learning from one another's mastery while we combine our gifts
            through collective action. We are dedicated to creating a safe,
            respectful, and enriching environment for all participants. By
            signing this consent form, you agree to uphold the following
            guidelines and values: Open-Mindedness, Curiosity & Learning:
            Embrace diversity in perspectives, experiences, and expressions. Be
            willing to engage with ideas, world views, and practices that may be
            new or different to you. Approach interactions and activities with
            an inquisitive and eager mindset. Seek to learn and understand more
            about yourself and others. Encourage continuous learning and
            development. Inclusivity & Collaboration: Ensure that everyone feels
            welcome and represented. Strive to include all voices and
            perspectives. Foster teamwork and cooperative efforts. Work together
            to create a positive and inclusive atmosphere. Set the intention to
            meet new collaborators and form unlikely partnerships. Integrity, &
            Consent: Value all participants and their contributions. Treat
            everyone with dignity and honor. Earth One has a zero tolerance
            policy for any form of sexual harassment. The way we treat ourselves
            and others in intimate spaces is a reflection of how we show up in
            the world. Act with honesty and sincerity. Uphold your personal and
            professional commitments and be accountable for your actions.
            Respect & Consideration: This includes punctuality. Respect the time
            and schedules of others. Everything is opt-in, but please honor the
            commitments you make and show up with full attention and presence to
            the moments you choose. Respect the privacy and confidentiality of
            all participants. Do not share personal or proprietary information
            without consent. Contribution & Generosity: Share your time,
            attention, and resources freely and with kindness. Offer support and
            encouragement to fellow participants. Uplift each other in our
            shared mission for Earth and humanity with the mindset that we are
            all on the same team and we know we need to break down silos as well
            as systems of competition. Environmental Stewardship: Leave all
            spaces better than you found them. Be mindful of cleanliness, order,
            and the impact of your actions on the environment. Promote
            environmentally friendly practices. Community Spirit & Fun: Foster a
            sense of belonging and togetherness. Encourage a community-oriented
            mindset among all participants. Create an enjoyable and engaging
            atmosphere. Ensure that all activities are designed to foster
            enjoyment and engagement.
          </p>

          {/* Community Guidelines Checkbox */}
          <div className="flex flex-col">
            <div className="flex gap-2">
              <input
                type="checkbox"
                {...register("guideline1", {
                  required: "Check the box to proceed",
                })}
                className="mr-2"
              />
              <div className="flex flex-col gap-1">
                <p className="text-md text-gray-200">Community Guidelines </p>
                <p className="text-sm text-gray-400">
                  I, the undersigned, agree to: • Abide by the guidelines and
                  values outlined above. • Engage in all activities with a
                  respectful and open-minded attitude. • Communicate openly and
                  honestly with event organizers and fellow participants. •
                  Respect the boundaries and comfort levels of others. • Refrain
                  from any behavior that could cause harm or discomfort to
                  others. • Be punctual and respect the event schedule. • Leave
                  all spaces used during the event in better condition than I
                  found them. • Maintain confidentiality of any personal
                  information shared during the event.
                </p>
              </div>
            </div>
            {errors.guideline1 && (
              <div className="flex items-center gap-1">
                <MdError className="text-red-700 text-sm" />
                <p className="text-red-500 text-sm">
                  {errors.guideline1.message}
                </p>
              </div>
            )}
          </div>

          <p className="text-md text-gray-300">
            Thank you for your commitment to creating a positive and respectful
            event experience for all. We look forward to sharing this time with
            you.
          </p>

          <span className="h-[1px] w-full bg-gray-600"></span>

          {/* Photo & Video Consent Radio Buttons */}
          <div className="flex flex-col gap-y-1">
            <p className="text-lg text-gray-200">Photo & Video Consent *</p>
            <p className="text-sm text-gray-500">
              We'll have a filmmaker & photographer capturing this experience.
              Content captured may be used to create a recap video...
            </p>
            <label className="flex mt-2 items-center w-32 px-4 py-2 rounded-xl border-[1px] border-gray-700 bg-[#373d45]">
              <input
                type="radio"
                value="yes"
                {...register("Photo", {
                  required: "Photo consent selection is required",
                })}
                className="mr-2"
              />
              Yes
            </label>

            <label className="flex mt-2 items-center w-32 px-4 py-2 rounded-xl border-[1px] border-gray-700 bg-[#373d45]">
              <input
                type="radio"
                value="no"
                {...register("Photo", {
                  required: "Photo consent selection is required",
                })}
                className="mr-2"
              />
              No
            </label>

            {errors.Photo && (
              <div className="flex items-center gap-2 mt-2">
                <MdError className="text-red-700 text-sm" />
                <p className="text-red-500 text-sm">{errors.Photo.message}</p>
              </div>
            )}
          </div>

          <p className="text-2xl text-gray-200 font-semibold">Thank you.</p>
          <p className="text-md text-gray-300">
            Thank you for your commitment to creating a positive and respectful
            event experience for all. We look forward to sharing this time with
            you.
          </p>

          <button
            type="submit"
            className="rounded-3xl text-gray-100 px-4 py-2 bg-[#6D6049] hover:border-2 hover:border-white"
          >
            Submit
          </button>
        </form>
      )}

      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Your data already exists. Do you want to fill the form with your
              stored data?
            </p>
            <div className="flex justify-around">
              <button
                onClick={handlePopupYes}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
              >
                Yes
              </button>
              <button
                onClick={handlePopupNo}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputForm;
