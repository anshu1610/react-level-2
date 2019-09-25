import React from "react";

import Button from "./components/Button/index";
import Card from "./components/Card/index";
import Header from "./components/Header/index";
import RadioGroup from "./components/RadioGroup/index";
import TextField from "./components/TextField/index";

class Flexi extends React.Component {
  config = this.props.config;

  // buttonConfig = { label: "Button" };
  // cardConfig = { label: "Card" };
  // headerConfig = {
  //   label: "Header"
  // };
  // radioConfig = {
  //   label: "Radio",
  //   options: [
  //     {
  //       label: "Male"
  //     },
  //     {
  //       label: "Female"
  //     }
  //   ]
  // };
  // textConfig = { label: "Text", inputType: "password" };

  render() {
    const { config = {} } = this.props;
    const { items = [] } = config;

    return (
      <div>
        {items.map(el => {
          switch (el.type) {
            case "Card":
              //if(el.)
              return <Card label={this.cardConfig.label} />;

            case "Header":
              return <Header label={this.headerConfig.label} />;
            case "Button":
              return <Button label={this.buttonConfig.label} />;
            case "TextField":
              return (
                <TextField
                  label={this.textConfig.label}
                  inputType={this.textConfig.inputType}
                />
              );
            case "RadioGroup":
              return (
                <RadioGroup
                  label={this.radioConfig.label}
                  options={this.radioConfig.options}
                />
              );
            default:
              return null;
          }
        })}

        {/* <Button label={this.buttonConfig.label} />
        <Card label={this.cardConfig.label} />
        <Header label={this.headerConfig.label} />
        <RadioGroup
          label={this.radioConfig.label}
          options={this.radioConfig.options}
        />
        <TextField
          label={this.textConfig.label}
          inputType={this.textConfig.inputType}
        /> */}
      </div>
    );
  }
}

export default Flexi;
