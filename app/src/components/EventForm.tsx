import React, { useState } from "react";
import axios from "axios";

const EventForm: React.FC = () => {
  const [eventData, setEventData] = useState({
    title: "",
    subtitle: "",
    reward: 0,
    cover_image: "",
    started_date: "",
    finish_date: "",
    sections_title: "",
    sections_content: "",
    registered_amount: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/events",
        eventData
      );

      if (response.status === 200) {
        alert("Event created successfully");
      } else {
        alert("Failed to create event");
      }
    } catch (error) {
      if (error instanceof Error) {
        alert("Error: " + error.message);
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl p-4">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-bold text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          className="rounded-3xl border-2 border-solid border-gray-200  px-4 py-2  text-base outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="subtitle"
          className="block text-sm font-bold text-gray-700"
        >
          Subtitle
        </label>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          value={eventData.subtitle}
          onChange={handleChange}
          className="rounded-3xl border-2 border-solid border-gray-200  px-4 py-2  text-base outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="reward"
          className="block text-sm font-bold text-gray-700"
        >
          Reward
        </label>
        <input
          type="text"
          id="reward"
          name="reward"
          value={eventData.reward}
          onChange={handleChange}
          className="rounded-3xl border-2 border-solid border-gray-200  px-4 py-2  text-base outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="cover_image"
          className="block text-sm font-bold text-gray-700"
        >
          Cover Image
        </label>
        <input
          type="text"
          id="cover_image"
          name="cover_image"
          value={eventData.cover_image}
          onChange={handleChange}
          className="rounded-3xl border-2 border-solid border-gray-200  px-4 py-2  text-base outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="started_date"
          className="block text-sm font-bold text-gray-700"
        >
          Started Date
        </label>
        <input
          type="date"
          id="started_date"
          name="started_date"
          value={eventData.started_date}
          onChange={handleChange}
          className="rounded-3xl border-2 border-solid border-gray-200  px-4 py-2  text-base outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="finish_date"
          className="block text-sm font-bold text-gray-700"
        >
          Finish Date
        </label>
        <input
          type="date"
          id="finish_date"
          name="finish_date"
          value={eventData.finish_date}
          onChange={handleChange}
          className="rounded-3xl border-2 border-solid border-gray-200  px-4 py-2  text-base outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="sections_title"
          className="block text-sm font-bold text-gray-700"
        >
          Sections Title
        </label>
        <input
          type="text"
          id="sections_title"
          name="sections_title"
          value={eventData.sections_title}
          onChange={handleChange}
          className="rounded-3xl border-2 border-solid border-gray-200  px-4 py-2  text-base outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="sections_content"
          className="block text-sm font-bold text-gray-700"
        >
          Sections Content
        </label>
        <textarea
          id="sections_content"
          name="sections_content"
          value={eventData.sections_content}
          onChange={handleChange}
          className="rounded-3xl border-2 border-solid border-gray-200  px-4 py-2  text-base outline-none"
          required
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="rounded-full bg-black px-8 py-3 font-bold text-white hover:shadow-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EventForm;
