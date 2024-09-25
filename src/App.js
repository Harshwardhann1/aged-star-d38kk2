import Form from "./Form";
import "./styles.css";
import Counter from "./Counter";
import CounterFix from "./CounterFix";
import MovingDot from "./MovingDot";
import Formv2 from "./Formv2";
import { AddingArray } from "./List";

// export const Button = () => {
//   function handleClick() {
//     alert("You Clicked me!");
//   }

//   return <button onClick={handleClick}>Click me</button>;
// };

// export const Button = () => {
//   return (
//     // <button onClick={alert("You clicked me!")}>Button 1</button>
//     <button onClick={() => alert("You clicked me!")}>Button 2</button>
//   );
// };

// function AlertButton({ message, children }) {
//   return <button onClick={() => alert(message)}>{children}</button>;
// }

// export function Toolbar() {
//   return (
//     <div>
//       <AlertButton message="Playing">Play Movie</AlertButton>
//       <AlertButton message="Uploading">Upload Image</AlertButton>
//     </div>
//   );
// }

// function Button({ onSmash, children }) {
//   return <button onClick={onSmash}>{children}</button>;
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//   }

//   return <Button onClick={handlePlayClick}>Play "movieName"</Button>;
// }

// function UploadButton() {
//   return <Button onClick={() => alert("Uploading")}>Upload Image</Button>;
// }

// function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="App">
//       {/* <Button /> */}
//       <Toolbar />
//     </div>
//   );
// }

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}

export function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }

  return <button onClick={handleClick}>Toggle the lights</button>;
}

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1> */}
      {/* <Form /> */}
      {/* <Counter /> */}
      <Formv2 />
      <AddingArray />
      {/* <MovingDot /> */}
      {/* <CounterFix /> */}
      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
