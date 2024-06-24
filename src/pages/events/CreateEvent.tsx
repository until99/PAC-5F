import { IEvent } from "@/interfaces/Event";
import { pb } from "@/lib/pocketbase";
import { assignUserToEvent } from "@/services/Events";
import { useState } from "react";

export default function CreateEvent() {
  const organizer = pb.authStore.model?.id;

  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [reward, setReward] = useState<number>(0);
  const [eventFlags, setEventFlags] = useState<string>('');
  const [startedDate, setStartedDate] = useState<string>('');
  const [finishDate, setFinishDate] = useState<string>('');
  const [sections, setSections] = useState<string>('');
  const [participants, setParticipants] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !title || !subtitle || !startedDate || !finishDate) {
      setMessage('All fields are required');
      return;
    }

    setUploading(true);
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('organizer', organizer);
    formData.append('cover_image', selectedFile);
    formData.append('reward', reward.toString());
    formData.append('event_flags', eventFlags);
    formData.append('start_date', startedDate);
    formData.append('finish_date', finishDate);
    formData.append('sections', sections);
    formData.append('participants', participants.toString());
    
    try {
      const record = await pb.collection('TB_EVENTS').create<IEvent>(formData);
      
      if (record) {
        setMessage('Event uploaded successfully');
        
        console.log(record);
        assignUserToEvent(record.id, pb.authStore.model?.id, true);

        setTitle('');
        setSubtitle('');
        setReward(0);
        setEventFlags('');
        setStartedDate('');
        setFinishDate('');
        setSections('');
        setParticipants(0);
        setSelectedFile(null);

      } else {
        setMessage('Event upload failed');
      }
    } catch (error) {
      setMessage('Error uploading event');
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex px-12">
      <div className="bg-white p-6 rounded shadow-md flex flex-col">
        <h1 className="text-2xl mb-4">Upload an Event</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="mb-4 p-2 border rounded"
        />
        <input
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          placeholder="Subtitle"
          className="mb-4 p-2 border rounded"
        />
        <input
          type="number"
          value={reward}
          onChange={(e) => setReward(parseFloat(e.target.value))}
          placeholder="Reward"
          className="mb-4 p-2 border rounded"
        />
        <input
          type="text"
          value={eventFlags}
          onChange={(e) => setEventFlags(e.target.value)}
          placeholder="Event Flags"
          className="mb-4 p-2 border rounded"
        />
        <input
          type="date"
          value={startedDate}
          onChange={(e) => setStartedDate(e.target.value)}
          placeholder="Start Date"
          className="mb-4 p-2 border rounded"
        />
        <input
          type="date"
          value={finishDate}
          onChange={(e) => setFinishDate(e.target.value)}
          placeholder="Finish Date"
          className="mb-4 p-2 border rounded"
        />
        <textarea
          value={sections}
          onChange={(e) => setSections(e.target.value)}
          placeholder="Sections"
          className="mb-4 p-2 border rounded"
        />
        <input
          type="number"
          value={participants}
          onChange={(e) => setParticipants(parseInt(e.target.value))}
          placeholder="Participants"
          className="mb-4 p-2 border rounded"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4"
        />
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
};
