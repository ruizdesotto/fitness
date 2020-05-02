import React from "react";
import styled from "@emotion/styled";
import { Text } from "../text";
import { PopList } from "../popover";
import { ActivityProps } from "../../../types";

const executingShadow = "0px 0px 3px 1px #555555AA";

export const DisplayActivity = ({
  exercise,
  time,
  style,
  status = "planned"
}: ActivityProps) => {
  const ActivityContainer = styled.div(props => ({
    width: 300,
    height: 100,
    borderRadius: 5,
    boxShadow:
      status === "executing" ? executingShadow : "0px 0px 1px #555555AA",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    ...style
  }));

  return (
    <ActivityContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          margin: 10
        }}
      >
        <Text
          style={{
            fontSize: 20
          }}
          bold
        >
          {exercise.name}
        </Text>
        <PopList
          anchorOrigin={{ vertical: "center", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          options={["Edit", "Remove", "Duplicate"]}
        />
      </div>
      <Text
        style={{
          padding: 10,
          fontSize: 15,
          color: "#AAAAAA"
        }}
      >
        {`${time} s`}
      </Text>
    </ActivityContainer>
  );
};
