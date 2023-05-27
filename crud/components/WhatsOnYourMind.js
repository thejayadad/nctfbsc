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
  return (
    <div>


    </div>
  )
}

export default WhatsOnYourMind