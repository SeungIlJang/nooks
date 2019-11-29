import React from 'react';
import './App.css';
import useInput from "./hooks/hooks1/useInput";
import useTabs from "./hooks/hooks1/useTabs";
import useTitle from "./hooks/hooks1/useTitle";
import useClick from "./hooks/hooks1/useClick";
import useHover from "./hooks/hooks1/useHover";
import useConfirm from "./hooks/hooks1/useConfirm";
import usePreventLeave from "./hooks/hooks1/usePreventLeave";
import useBeforeLeave from "./hooks/hooks1/useBeforeLeave";
import useFadeIn from "./hooks/hooks1/useFadeIn";
import useNetwork from "./hooks/hooks1/useNetwork";
import useScroll from "./hooks/hooks1/useScroll";
import useFullScreen from "./hooks/hooks1/useFullScreen";
import useNotification from "./hooks/hooks1/useNotification";
import useAxios from "./hooks/hooks1/useAxios";

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the section 2"
    }
];

function App() {
    //1.useInput
    const validator = value => !value.includes("@");
    const name = useInput("Mr.",validator);
    //2.useTabs
    const { currentItem,changeItem } = useTabs(0, content);
    //3.useTitle
    const {title, setTitle} = useTitle("Loading...");
    setTimeout(() => setTitle("Home"), 1000);
    //4.useClick
    const sayHello = () => console.log("say Hello");
    const titleClick = useClick(sayHello);
    //5.useHover
    const onHover = () => console.log("Somebody hovered!");
    const markedRef = useHover(onHover);
    //6.useConfirm
    const deleteWorld = () => console.log("Deleting thw word....");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure?",deleteWorld,abort);
    //7.usePreventLeave
    const { enablePrevent, disablePrevent } = usePreventLeave();
    //8.useBeforeLeave
    const beforeLeave =() => console.log("User is leaving...");
    useBeforeLeave(beforeLeave);
    //9.useFadeIn
    const fadeInH1 = useFadeIn();
    const fadeInH2 = useFadeIn(5,2);
    //10.useNetwork
    const handleNetworkChange = (online) => {
        console.log(online?"We just went online":"We art offline");
    };
    const onLine = useNetwork(handleNetworkChange);
    //11.useScroll
    const {y} = useScroll();
    //12.useFullScreen
    const onChange = isFull =>
        console.log(isFull ? "We are in Fullscreen" : "We are not in Fullscreen");
    const { element, triggerFull, exitFull } = useFullScreen(onChange);
    //13.useNotification
    const tirggerNotif = useNotification("Can I steal your crypto currency?", {
        body: "I love bitcoin"
    });
    //14.useAxios
    const { loading, data,  refetch } = useAxios({
        url: "https://api.coinpaprika.com/v1/coins/eth-ethereum"
    });
  return (
      <>
      <div className="App">
          <h2>1.useInput : useState</h2>
          <div>
        <input placeholder="Name" {...name.props} />
          </div>
      </div>

      <div className="App">
          <h2>2.useTabs : useState</h2>
          {content.map((section,index) => (
              <button onClick={() =>changeItem(index)}>{section.tab}</button>
          ))}
          <div>{currentItem.content}</div>
      </div>

      <div className="App">
          <h2>3.useTitle : useEffect</h2>
          <p>useEffect = componentDidMount componentWillUpdate</p>
          {title}
      </div>

      <div className="App">
          <h2>4.useClick : useEffect,useRef</h2>
          <p>useEffect = componentDidMount componentWillUpdate componentWillUnMount</p>
          <h3 ref={titleClick}>Hi</h3>
      </div>

      <div className="App">
          <h2>5.useHover : useEffect,useRef</h2>
          <p>useEffect = componentDidMount componentWillUpdate componentWillUnMount</p>
          <h3 ref={markedRef}>Hello Nooks</h3>
      </div>

      <div className="App">
          <h2>6.useConfirm </h2>
          <button onClick={confirmDelete}>Delete the word</button>

      </div>

      <div className="App">
          <h2>7.usePreventLeave </h2>
          <button onClick={enablePrevent}>Protect</button>
          <button onClick={disablePrevent}>Unprotect</button>
      </div>
      <div className="App">
          <h2>8.useBeforeLeave: useEffect</h2>
          <h1>Hello Nooks</h1>
      </div>
      <div className="App">
          <h2>9.useFadeIn: useEffect,useRef</h2>
          <h1 {...fadeInH1}>Hello </h1>
          <p {...fadeInH2}>Nooks</p>
      </div>
      <div className="App">
          <h2>10.useNetwork: useState,useEffect</h2>
          <h1>{onLine ? "Online":"Offline"}</h1>
      </div>
      <div className="App" style={{height:"10vh" }}>
          <h2>11.useScroll: useState,useEffect</h2>
          <h1 style={{position:"relative", color: y > 200 ? "red":"blue"}}>useScroll</h1>
      </div>
      <div className="App" ref={element}>
          <h2>12.useFullScreen</h2>
          <h1>Hello</h1>
          <button onClick={triggerFull}>Make this Fullscreen</button>
          <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <div className="App" >
          <h2>13.useNotification</h2>
         <button onClick={tirggerNotif}>Hello</button>
      </div>
      <div className="App" >
        <h2>14.useAxios</h2>
        <h1>{data && `${data.status} / ${data.data.name} `}</h1>
        <h2>{loading && "Loading..."}</h2>
        <button onClick={refetch}>Refetch</button>
      </div>

      </>
  );
}

export default App;
