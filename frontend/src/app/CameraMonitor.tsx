
"use client";

import { useEffect, useRef, useState } from "react";

export default function CameraMonitor() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [message, setMessage] = useState("Camera বন্ধ আছে");

  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setMessage("Camera চালু আছে");
    } catch {
      setMessage("Camera চালু হয়নি। Permission check করো।");
    }
  }

  function stopCamera() {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setMessage("Camera বন্ধ আছে");
  }

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <section className="mt-10 rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-2 text-xl font-bold text-white">
        Parking Camera Monitor
      </h2>

      <p className="mb-4 text-sm text-slate-300">{message}</p>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="mb-4 w-full rounded-xl bg-black"
      />

      <div className="flex gap-3">
        <button
          onClick={startCamera}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-white"
        >
          Start Camera
        </button>

        <button
          onClick={stopCamera}
          className="rounded-lg bg-rose-600 px-4 py-2 text-white"
        >
          Stop Camera
        </button>
      </div>
    </section>
  );
}
