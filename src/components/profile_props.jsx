// function Profile({ name, age, Gender, hobbies  = "no Data Found",url}) {
//   return (
//     <>
//       <div
//         style={{
//           backgroundColor: "purple",
//           width: "400px",
//           padding: "20px",
//           margin: "10px",
//           borderRadius: "20px",
//           color: "white",
//         }}
//       >
//         <img
//           src={url}
//           width={200}
//           height={200}
//           style={{ borderRadius: "50%" }}
//           alt=""
//         />

//         <h2>My name is {name} </h2>
//         <p>Age is {age} </p>
//         <p>Gender is {Gender}</p>
//         <p>hooby is {hobbies}</p>
//       </div>
//     </>
//   );
// }
// export default Profile;

function Profile({ user }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          width: "300px",
          padding: "20px",
          margin: "10px",
          borderRadius: "20px",
          color: "white",
        }}
      >
        <img
          src={user.picture.large}
          width={200}
          height={200}
          style={{
            borderRadius: "50%",
          }}
          alt=""
        />
        <h2>Name : {user.name.first + " " + user.name.last} </h2>
        <h2>Age :{user.dob.age} </h2>
        <h2>Gender : {user.gender} </h2>
        <h2>Email : {user.email}</h2>
        <h2>City : {user.location.city}</h2>
        <h2>Country : {user.location.country}</h2>
      </div>
    </>
  );
}
export default Profile;
