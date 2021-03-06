import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";

import { TrainingControls as TrainingControlsType, StateTypes } from "../../../types";


const setStateQuery = gql`
  mutation($state: string) {
    setState(state: $state) @client
  }
`;

const setNextActivityQuery = gql`
  mutation {
    setNextActivity @client
  }
`;
const resetToPlannedQuery = gql`
  mutation {
    resetToPlanned @client
  }
`;

const pauseTimeQuery = gql`
  mutation {
    pauseTime @client
  }
`;

export const TrainingControls = ({ state }: TrainingControlsType) => {
  // TYPESCRIPT FORMAT NEEDED ?
  const [setState] = useMutation(setStateQuery);
  const [setNextActivity] = useMutation(setNextActivityQuery);
  const [resetToPlanned] = useMutation(resetToPlannedQuery);
  const [pauseTime] = useMutation(pauseTimeQuery);
  const IconButton = ({ icon, color, newState }) => (
    <div
      style={{
        padding: 5
      }}
    >
      <button
        style={{
          width: 30,
          height: 0.75 * 30,
          borderRadius: 5
        }}
        onClick={() => {
          setState({ variables: { state: newState } })
          if (newState === StateTypes.executing) {
            setNextActivity()
          }
          else if (newState === StateTypes.edit) {
            resetToPlanned()
          }
          else {
            pauseTime()
          }
        }}
      >
        <FontAwesomeIcon icon={icon} color={color} />
      </button>
    </div>
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row"
      }}
    >
      {(state === StateTypes.edit || state === StateTypes.paused) && (
        <IconButton icon={faPlay} color="green" newState={StateTypes.executing} />
      )}
      {state === StateTypes.executing && <IconButton icon={faPause} color="gray" newState={StateTypes.paused} />}
      {(state === StateTypes.executing || state === StateTypes.paused) && (
        <IconButton icon={faStop} color="red" newState={StateTypes.edit} />
      )}
    </div>
  );
};
