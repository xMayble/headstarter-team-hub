import React, { useState, useEffect } from "react";

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

  const endCall = () => {
    peerConnection.close();
    setPeerConnection(null);
  };

  return (
    <div className="video-call">
      <video src={remoteStream ? URL.createObjectURL(remoteStream) : ""} />
      <video src={localStream ? URL.createObjectURL(localStream) : ""} />
      <button onClick={startCall}>Start Call</button>
      <button onClick={endCall}>End Call</button>
    </div>
  );
};

export default VideoCall;