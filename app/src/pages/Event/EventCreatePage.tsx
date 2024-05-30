import Navbar from "@/layout/Navbar";
import { useState } from "react";
import axios from "axios";

// interface Event {
//   title: string;
//   subtitle: string;
//   description: string;
//   start_date: string;
//   duration: number;
//   cover_picture: string;
//   submit_list: string;
//   id_tags: number[];
//   reward_amount: string;
// }

export default function EventCreatePage() {
  // const [formData, setFormData] = useState<Event>({
  //   title: "",
  //   subtitle: "",
  //   description: "",
  //   start_date: "",
  //   duration: 0,
  //   cover_picture: "",
  //   submit_list: "",
  //   id_tags: [],
  //   reward_amount: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (
  //   e: React.FormEvent<HTMLFormElement>
  // ): Promise<void> => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8080/event",
  //       formData,
  //       {
  //         timeout: 5000,
  //       }
  //     );
  //     console.log("Resposta do servidor:", response.data);
  //   } catch (error) {
  //     console.error("Erro ao enviar requisição:", error);
  //   }
  // };

  return (
    <div>
      <Navbar />

      {/* <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="required">
            Título:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="ml-4 rounded-lg border border-gray-300 p-2"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subtitle" className="required">
            Subtítulo:
          </label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            className="ml-4 rounded-lg border border-gray-300 p-2"
            value={formData.subtitle}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="required">
            Descrição:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="ml-4 rounded-lg border border-gray-300 p-2"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="start_date" className="required">
            Data de início:
          </label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            className="ml-4 rounded-lg border border-gray-300 p-2"
            value={formData.start_date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="duration" className="required">
            Duração:
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            className="ml-4 rounded-lg border border-gray-300 p-2"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cover_picture" className="required">
            URL da capa:
          </label>
          <input
            type="text"
            id="cover_picture"
            name="cover_picture"
            className="ml-4 rounded-lg border border-gray-300 p-2"
            value={formData.cover_picture}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="submit_list" className="required">
            URL da lista de submissões:
          </label>
          <input
            type="text"
            id="submit_list"
            name="submit_list"
            className="ml-4 rounded-lg border border-gray-300 p-2"
            value={formData.submit_list}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="id_tags" className="required">
            IDs das tags:
          </label>
          <input
            type="text"
            id="id_tags"
            name="id_tags"
            className="ml-4 rounded-lg border border-gray-300 p-2"
            value={formData.id_tags.join(", ")}
            onChange={(e) => {
              setFormData({
                ...formData,
                id_tags: e.target.value
                  .split(",")
                  .map((tag) => parseInt(tag.trim(), 10)),
              });
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="reward_amount" className="required">
            Valor do prêmio:
          </label>
          <input
            type="text"
            id="reward_amount"
            name="reward_amount"
            className="ml-4 rounded-lg border border-gray-300 p-2"
            value={formData.reward_amount}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-lg border border-gray-300 bg-gray-300 p-2"
        >
          Enviar
        </button>
      </form> */}
    </div>
  );
}
