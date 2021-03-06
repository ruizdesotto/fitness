import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import { Circuit } from "../";

export default {
  title: "Circuit"
};

const Window = styled.div`
  width: ${window.outerWidth}px;
  height: ${window.outerHeight}px;
`;
const id = "coiansdoisanodinasid";
const type = "circuit";

export const NoActivity = () => (
  <DragDropContext onDragEnd={() => { }}>
    <Window>
      <Circuit
        edit={true}
        circuitIndex={0}
        plan={[]}
        {...{ id, type }}
        removeCircuit={() => { }}
        addActivity={() => { }}
        duplicateActivity={() => { }}
        removeActivity={() => { }}
        editActivity={() => { }}
      />
    </Window>
  </DragDropContext>
);

export const WithActivities = () => (
  <DragDropContext onDragEnd={() => { }}>
    <Window>
      <Circuit
        edit={false}
        circuitIndex={0}
        removeCircuit={() => { }}
        addActivity={() => { }}
        duplicateActivity={() => { }}
        removeActivity={() => { }}
        editActivity={() => { }}
        plan={[
          {
            id: "ca",
            type: "activity",
            exercise: { name: "Squat" },
            time: 30,
            status: "finished"
          },
          {
            id: "ca",
            type: "activity",
            exercise: { name: "Push ups" },
            time: 45,
            status: "executing"
          },
          {
            id: "ca",
            type: "activity",
            exercise: { name: "Crunch" },
            time: 60,
            status: "planned"
          },
          {
            id: "ca",
            type: "activity",
            exercise: { name: "Pull ups" },
            time: 15,
            status: "planned"
          }
        ]}
        {...{ id, type }}
      />
    </Window>
  </DragDropContext>
);
