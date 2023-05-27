import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
  } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";


const WhatsOnYourMind = () => {
 const { data: session } = useSession();
 const [input, setInput] = useState("");
 const [loading, setLoading] = useState(false);

 const [selectedFile, setSelectedFile] = useState(null);


  return (
    <div>
        <input
          className="outline-none border-none w-[100%] text-[18px] placeholder:text-gray-600"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's on your mind?"
        />
             {selectedFile && (
        <div className="relative">
          <img src={selectedFile} alt="pic" />
          <div
            className="bg-gray-300 text-gray-500 absolute top-0 right-0 m-[10px] text-[18px] h-[30px] w-[30px] rounded-full cursor-pointer grid place-items-center"
            onClick={() => {
              setSelectedFile(null);
              fPicker.current.value = "";
            }}
          >
            <MdOutlineClose />
          </div>
        </div>
      )}
    </div>
  )
}

export default WhatsOnYourMind