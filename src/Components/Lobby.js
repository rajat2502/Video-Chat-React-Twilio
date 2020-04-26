import React from "react";

const Lobby = ({
  username,
  handleUserNameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Create/Enter a Room</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="field"
          value={username}
          onChange={handleUserNameChange}
          autoFocus
          required
        />
      </div>

      <div>
        <label htmlFor="room">Room name:</label>
        <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          required
        />
      </div>
      <button type="submit">Submit Details</button>
    </form>
  );
};

export default Lobby;
