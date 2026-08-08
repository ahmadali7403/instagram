import { useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [caption, setCaption] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
      alert("Please select an image or video.");
      return;
    }

    setSelectedFile(file);

    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
  };

  const handleSelectDevice = () => {
    fileInputRef.current.click();
  };

  const handleRemove = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setSelectedFile(null);
    setPreview("");
    setCaption("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  const handleShare = () => {
    if (!selectedFile) {
      alert("Please select a photo or video first.");
      return;
    }

    console.log("Selected file:", selectedFile);
    console.log("Caption:", caption);

    alert("Post created successfully!");

    handleRemove();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-gray-200 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="relative flex items-center justify-center border-b border-gray-200 py-4">
          <h1 className="text-[16px] font-semibold">Create new post</h1>

          <button
            onClick={handleClose}
            className="absolute right-4 cursor-pointer"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* No file selected */}
        {!preview && (
          <div className="min-h-[400px] flex flex-col items-center justify-center px-6">
            <button
              onClick={handleSelectDevice}
              className="w-14 h-14 rounded-full bg-[#F2F2F2] flex items-center justify-center mb-5 cursor-pointer hover:bg-[#E5E5E5]"
            >
              <FiPlus size={34} className="text-[#262626]" />
            </button>

            <h2 className="text-xl font-normal text-[#262626]">
              Create a new post
            </h2>

            <p className="text-sm text-[#737373] mt-2 text-center">
              Share photos and videos with your followers.
            </p>

            <button
              onClick={handleSelectDevice}
              className="mt-6 bg-[#0095F6] text-white px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer hover:bg-[#1877F2] transition"
            >
              Select from Device
            </button>
          </div>
        )}

        {/* Preview */}
        {preview && (
          <div className="pb-11">
            <div className="relative bg-black">
              {selectedFile?.type.startsWith("video/") ? (
                <video
                  src={preview}
                  controls
                  className="w-full max-h-[500px] object-contain"
                />
              ) : (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full max-h-[500px] object-contain"
                />
              )}

              <button
                onClick={handleRemove}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <IoClose size={21} />
              </button>
            </div>

            {/* Caption */}
            <div className="p-4">
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write a caption..."
                rows={3}
                className="w-full resize-none outline-none text-sm border-b border-gray-200 pb-3"
              />

              <div className="flex gap-2 mt-4">
                <button
                  onClick={handleSelectDevice}
                  className="flex-1 bg-[#EFEFEF] text-[#262626] py-2 rounded-lg text-sm font-semibold cursor-pointer"
                >
                  Change
                </button>

                <button
                  onClick={handleShare}
                  className="flex-1 bg-[#0095F6] text-white py-2 rounded-lg text-sm font-semibold cursor-pointer hover:bg-[#1877F2]"
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default Create;
