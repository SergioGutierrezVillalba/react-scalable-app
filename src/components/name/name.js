import React from "react";

import Card from "@material-ui/core/Card";
import CardTitle from "@material-ui/core/CardTitle";
import CardHeader from "@material-ui/core/CardHeader";
import CardText from "@material-ui/core/CardText";
import FlatButton from "@material-ui/core/FlatButton";

import useName from "./hooks/useName";

const Name = () => {
  const { name, getName, id } = useName();

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Id: {id}. The name is: {name}
        </CardTitle>
      </CardHeader>
      <CardText>
        Want new name?
        <FlatButton onClick={() => getName()}>Request it</FlatButton>
      </CardText>
    </Card>
  );
};

export default Name;
