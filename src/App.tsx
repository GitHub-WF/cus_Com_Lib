import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <div className="button">
        <Button disabled> Hello </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">
          Baidu Link
        </Button>
        <Button
          size={ButtonSize.Small}
          className="custom"
          onClick={() => console.log(123)}
        >
          Hello
        </Button>
        <Button> Hello </Button>
        <Button size={ButtonSize.Large}> Hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
          Hello
        </Button>
        <Button btnType={ButtonType.Primary}> Hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Hello
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Hello
        </Button>
        <Button btnType={ButtonType.Danger}> Hello </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
          Hello
        </Button>
      </div>
      <div className="menu">
        <Menu>
          <MenuItem>link1</MenuItem>
          <MenuItem>link2</MenuItem>
          <MenuItem>link3</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default App;
