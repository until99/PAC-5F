import React, { useState } from "react";

interface Section {
  title: string;
  content: string;
  [key: string]: string; // Permitir indexação por string
}

const EventForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [reward, setReward] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [startedDate, setStartedDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [sections, setSections] = useState<Section[]>([
    { title: "", content: "" },
  ]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const payload = {
      title,
      subtitle,
      reward: reward === "0" ? "comunidade" : reward,
      cover_image: coverImage,
      started_date: startedDate,
      finish_date: finishDate,
      sections_title: sections.map((section) => section.title),
      sections_content: sections.map((section) => section.content),
    };

    try {
      const response = await fetch("http://localhost:8080/api/v1/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
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

  const handleSectionChange = (
    index: number,
    field: keyof Section,
    value: string
  ) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const addSection = () => {
    setSections([...sections, { title: "", content: "" }]);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl p-4">
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="title"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="subtitle"
        >
          Subtitle
        </label>
        <input
          id="subtitle"
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="reward"
        >
          Reward
        </label>
        <input
          id="reward"
          type="number"
          value={reward}
          onChange={(e) => setReward(e.target.value)}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="cover_image"
        >
          Cover Image
        </label>
        <input
          id="cover_image"
          type="text"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="started_date"
        >
          Started Date
        </label>
        <input
          id="started_date"
          type="date"
          value={startedDate}
          onChange={(e) => setStartedDate(e.target.value)}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="finish_date"
        >
          Finish Date
        </label>
        <input
          id="finish_date"
          type="date"
          value={finishDate}
          onChange={(e) => setFinishDate(e.target.value)}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor={`section_title_${index}`}
          >
            Section Title {index + 1}
          </label>
          <input
            id={`section_title_${index}`}
            type="text"
            value={section.title}
            onChange={(e) =>
              handleSectionChange(index, "title", e.target.value)
            }
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            required
          />
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor={`section_content_${index}`}
          >
            Section Content {index + 1}
          </label>
          <textarea
            id={`section_content_${index}`}
            value={section.content}
            onChange={(e) =>
              handleSectionChange(index, "content", e.target.value)
            }
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            required
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addSection}
        className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
      >
        Add Section
      </button>
      <div className="mt-4">
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EventForm;
