// import React from "react"
// const myName = "moosa"
// function App() {

// return  <>    {/* react fragments   and <React.Fragment></React.Fragment> ya <></> dono ek hi kamm krta ha */}
//   <Name />

//   <p>from cheraate </p>
// </>

// }
// function Name() {
//   return <h3>my name is {myName} </h3>     // {} defined javascript use kar sakta ha using html
// }

// export default App

import React from "react";
// import Navbar from "./components/navbar";
// import Slidebar from "./components/slidebar";
// import Content from "./components/Content";
// import Footer from "./components/footer";

// import Greeting from "./components/Greeting";
// import Greeting ,  { Greeting1 , Greeting2 } from "./components/Greeting";

// import Profile from "./components/profile_props";
// let age = 24
// let hobby = ["cricket " , "football"]
// function App() {
//   return (
//     <>
//       {/* <Navbar />
//       <Slidebar />
//       <Content />
//       <Footer />
//       <Greeting />
//       <Greeting1 />
//       <Greeting2 /> */}
//       <Profile
//         name="Andrio"
//         age={age}
//         Gender="male"
//         url="https://www.shutterstock.com/shutterstock/photos/2480850611/display_1500/stock-photo-portrait-of-handsome-male-doctor-with-stethoscope-over-neck-working-while-looking-at-camera-in-the-2480850611.jpg "
//         hobbies = {hobby}
//       />
//       <Profile
//         name="Ahmed"
//         age="22"
//         Gender="male"
//         url=" https://s3.eu-central-1.amazonaws.com/uploads.mangoweb.org/shared-prod/visegradfund.org/uploads/2021/08/placeholder-male.jpg"
//         // hobbies = {["sleeping , eating"]}
//       />
//       <Profile
//         name="Muneba"
//         age="21"
//         Gender="female"
//         url="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Beautiful-Chinese-Girl-1.jpg.avif"
//         hobbies = {["pubg , party , function"]}
//       />
//     </>
//   );
// }

// export default App;

import Profile from "./components/profile_props";

async function fetchData() {
  let response = await fetch("https://randomuser.me/api?results=10");
  // console.log(response)
  let data = await response.json();
  console.log(data);
  let result = await data.results;
  console.log(result);
  // console.log(result)
  return result;
}

let userData = await fetchData();
console.log(userData);

export default function App() {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
    }}>
      {userData.map((data) => (
        <Profile user={data} />
      ))}
    </div>
  );
}
