import React, { useCallback, useState } from "react";

import { axiosPost } from "../axios";
import Lobby from "./Lobby";
import Room from "./Room";

const VideoChat = () => {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [token, setToken] = useState(null);

  const handleUserNameChange = useCallback(e => {
    setUsername(e.target.value);
  }, []);

  const handleRoomNameChange = useCallback(e => {
    setRoomName(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      const body = JSON.stringify({ identity: username, room: roomName });
      const { data } = await axiosPost("/video/token", body, false);
      setToken(data.token);
    },
    [roomName, username]
  );

  const leaveRoom = useCallback(e => {
    setToken(null);
  }, []);

  if (token) {
    return <Room roomName={roomName} token={token} leaveRoom={leaveRoom} />;
  }
  return (
    <Lobby
      username={username}
      roomName={roomName}
      handleUserNameChange={handleUserNameChange}
      handleRoomNameChange={handleRoomNameChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default VideoChat;
