import React, { Component } from "react";

import Flexi from "../../../Flexi/index";

class Registration extends Component {
  flexConfigForRegistration = {
    items: [
      {
        type: "Header",
        props: {
          label: "Registration",
          horozintalAlign: "center",
          verticalAlign: "center"
        }
      },
      {
        type: "Card",
        props: {
          color: "grey",
          horozintalAlign: "left"
        },
        children: {
          items: [
            {
              type: "TexField",
              props: {
                inputType: "text",
                label: "Name",
                name: "name"
              }
            },
            {
              type: "TexField",
              props: {
                inputType: "email",
                label: "Email",
                name: "email"
              }
            },
            {
              type: "TexField",
              props: {
                inputType: "number",
                label: "Mobile",
                name: "Message"
              }
            },
            {
              type: "RadioGruop",
              props: {
                label: "Gender",
                name: "gender",
                options: [
                  {
                    label: "Male"
                  },
                  {
                    label: "Female"
                  }
                ]
              }
            },
            {
              type: "TexField",
              props: {
                inputType: "password",
                label: "Password",
                name: "password"
              }
            },
            {
              type: "TexField",
              props: {
                inputType: "password",
                label: "Confirm Password",
                name: "confirmPassword"
              }
            },
            {
              type: "Button",
              props: {
                label: "Register"
              }
            }
          ]
        }
      }
    ]
  };

  render() {
    const { flexConfigForRegistration } = this;
    return (
      <div>
        Registration
        <Flexi config={flexConfigForRegistration} />
      </div>
    );
  }
}

export default Registration;
