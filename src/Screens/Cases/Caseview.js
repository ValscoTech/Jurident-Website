// Caseview.js

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Caseview.css";
import { useLocation } from "react-router-dom";
import { setFormData, getFormData } from "../Cases/Case5data.js";
import Layout from "../Layout.jsx";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ align: [] }],
    ["clean"],
    ["link", "image", "video"],
  ],
};

const Caseview = () => {
  const location = useLocation();
  const [formData, setFormDataState] = useState(
    location.state.formData || getFormData()
  );
  const [noteContent, setNoteContent] = useState("");

  const handleSave = () => {
    // Function to extract text from HTML
    const getTextFromHtml = (html) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      return tempDiv.textContent || tempDiv.innerText || "";
    };

    // Extract plain text from noteContent
    const plainText = getTextFromHtml(noteContent);

    // Update formData with plain text
    const updatedFormData = { ...formData, casenotes: plainText };
    setFormData(updatedFormData);
    setFormDataState(updatedFormData);

    console.log("Saved data:", updatedFormData);
  };

  return (
    <Layout>
      <div className="app-container">
        <div className="editor-container">
          <div className="editor-header">
            <h1>Add Notes</h1>
          </div>
          <ReactQuill
            value={noteContent}
            onChange={setNoteContent}
            modules={modules}
          />
          <button className="save-button" onClick={handleSave}>
            SAVE
          </button>
          {/* <DisplayCaseNotes content={formData.casenotes} /> */}
        </div>
        <div className="details-container">
          <div className="details-header">
            <h1>Case Details</h1>
          </div>
          <div className="details-content">
            <h2>Case Details</h2>
            <aside>
              {/* Map through formData to display details */}
              {Object.entries(formData).map(([key, value]) => (
                <p key={key}>
                  <strong>{key.replace(/[0-9]/g, "")}:</strong> {value}
                </p>
              ))}
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Caseview;
