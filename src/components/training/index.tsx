import React from "react";
import styled from "@emotion/styled";
import { map, get } from "lodash/fp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Circuit } from "../circuit";
import { neutralColor } from "../../style/colors";
import {
  defaultBorderRadius,
  defaultBoxShadow,
  headerHeight
} from "../../style/layout";

const mapUncapped = map.convert({ cap: false });

const TrainingHeader = ({ addCircuit }) => (
  <div
    style={{
      height: headerHeight,
      backgroundColor: neutralColor,
      borderRadius: defaultBorderRadius,
      boxShadow: defaultBoxShadow,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    <div style={{ margin: 5 }}></div>
    <div style={{ margin: 5 }}>
      <button
        style={{ width: 40, height: 30, borderRadius: 5 }}
        onClick={addCircuit}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  </div>
);

const TrainingContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  height: "100%"
});

const getContentFromTraining = training => {
  const content = mapUncapped((circuit, circuitIndex) => {
    return <Circuit circuitIndex={circuitIndex} plan={circuit.plan}></Circuit>;
  }, get("plan", training));
  return content;
};

export const Training = props => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <TrainingHeader />
      <TrainingContainer>
        {getContentFromTraining(props.training)}
      </TrainingContainer>
    </div>
  );
};
