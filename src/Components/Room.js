import React, { useState, useEffect } from "react";

import Video from "twilio-video";
import Participant from "./Participant";

const Room = ({ roomName, token, leaveRoom }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(
    () => {
      const participantConnected = participant => {
        setParticipants(prevParticipants => [...prevParticipants, participant]);
      };
      const participantDisconnected = participant => {
        setParticipants(prevParticipants =>
          prevParticipants.filter(p => p !== participant)
        );
      };
      Video.connect(token, {
        name: roomName
      }).then(room => {
        setRoom(room);
        room.on("participantConnected", participantConnected);
        room.on("participantDisconnected", participantDisconnected);
        room.participants.forEach(participantConnected);
      });

      return () => {
        setRoom(currentRoom => {
          if (
            currentRoom &&
            currentRoom.localParticipant.state === "connected"
          ) {
            currentRoom.localParticipant.tracks.forEach(function(
              trackPublication
            ) {
              trackPublication.track.stop();
            });
            currentRoom.disconnect();
            return null;
          } else {
            return currentRoom;
          }
        });
      };
    },
    [roomName, token]
  );

  useEffect(() => {
    document.title = `${roomName} | Video Chat`;
    return () => {
      document.title = "Video Chat React";
    };
  });

  return (
    <div className="room">
      <h2>
        Room: {roomName}
      </h2>
      <button onClick={leaveRoom} style={{ margin: "0 2em 2em" }}>
        Leave Room
      </button>
      <div className="room-box">
        {participants.length &&
          <div className="selected-participant">
            <Participant participant={participants[0]} />
          </div>}
        <div className="participants">
          {participants.map(participant =>
            <Participant key={participant.sid} participant={participant} />
          )}
          {room &&
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
              localParticipant={true}
            />}
        </div>
      </div>
    </div>
  );
};

export default Room;
