import React, { useState, useEffect } from "react";
import "./VideoCall.css"; // Import CSS file for styling

const VideoCall = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [peerConnection, setPeerConnection] = useState(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setLocalStream(stream);
      });
  }, []);

  const startCall = () => {
    const peerConnection = new RTCPeerConnection();
    setPeerConnection(peerConnection);

    peerConnection.addStream(localStream);

    peerConnection.createOffer().then((description) => {
      peerConnection.setLocalDescription(description);

      // send the offer to a server to be forwarded to the other peer
    });

    peerConnection.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
    };
  };
  
  useEffect(() => {
    if (localStream && peerConnection) {
      peerConnection.addStream(localStream);
    }
  }, [localStream, peerConnection]);


  const endCall = () => {
    peerConnection.close();
    setPeerConnection(null);
  };

  return (
    <div className="video-call">
      <h1>Video Call</h1>
      <div className="video-container">
        <video src={remoteStream ? URL.createObjectURL(remoteStream) : ""} />
        <video src={localStream ? URL.createObjectURL(localStream) : ""} />
      </div>
      <div className="button-container">
        <button className="start-call" onClick={startCall}>Start Call</button>
        <button className="end-call" onClick={endCall}>End Call</button>
      </div>
    </div>
  );
};

export default VideoCall;
