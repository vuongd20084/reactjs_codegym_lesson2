import React from "react";
import ReactDOM from "react-dom";
// Import file index.css vào file index.js
import "./index.css";

import "bootstrap/dist/css/bootstrap.css";

const name = "Your name";

//______LESSON 2, TOPIC 4
// ReactDOM.render(
//   React.createElement("h1", { style: { textAlign: "center" } }, name),
//   document.getElementById("root")
// );

//______LESSON 2, TOPIC 5
// ReactDOM.render(
//   <h1 style={{ textAlign: "center" }}>{name}</h1>,
//   document.getElementById("root")
// );

//______LESSON 2, TOPIC 6
// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Apricot",
//   "Black rowan",
//   "Cranberry",
// ];

// ReactDOM.render(
//   <div>
//     <h1>List of fruits</h1>
//     <ul>
//       {fruits.map((item) => (
//         <li>{item}</li>
//       ))}
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

//_______LESSON 2, TOPIC 7

// const tick = () => {
//   ReactDOM.render(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>,
//     document.getElementById("root")
//   );
// };

// setInterval(tick, 1000);

//_______LESSON 2, [Bài tập] Tạo Element thể hiện thông tin của Trình duyệt bạn đang sử dụng
// ReactDOM.render(
//   <h4>Browser's details: {navigator.userAgent}</h4>,
//   document.getElementById("root")
// );

//_______LESSON 2,[Bài tập] Tạo Element thể hiện bảng thông tin các sinh viên trong lớp học
// const students = [
//   {
//     company: "Alfreds Futterkiste",
//     contact: "Maria Anders",
//     country: "Germany",
//   },
//   {
//     company: "Centro comercial Moctezuma",
//     contact: "Francisco Chang",
//     country: "Mexico",
//   },
//   {
//     company: "Ernst Handel",
//     contact: "Roland Mendel",
//     country: "Austria",
//   },
//   {
//     company: "Island Trading",
//     contact: "Helen Bennett",
//     country: "UK",
//   },
//   {
//     company: "Laughing Bacchus Winecellars",
//     contact: "Yoshi Tannamuri",
//     country: "Canada",
//   },
//   {
//     company: "Magazzini Alimentari Riuniti",
//     contact: "Giovanni Rovelli",
//     country: "Italy",
//   },
// ];

// ReactDOM.render(
//   <div>
//     <h2>Students</h2>
//     <table>
//       <thead>
//         <tr>
//           <th>Company</th>
//           <th>Contact</th>
//           <th>Country</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students.map((student) => (
//           <tr>
//             <td>{student.company}</td>
//             <td>{student.contact}</td>
//             <td>{student.country}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>,
//   document.getElementById("root")
// );

//_______LESSON 2, [Bài tập] Tạo Element thể hiện Profile Card (như hình minh hoạ)
// ReactDOM.render(
//   <div className="container">
//     <div className="card">
//       <div className="card--header" />
//       <img
//         className="avatar"
//         src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         alt="avatar"
//       />
//       <div className="card--body">
//         <div>
//           <p className="text-header">Lê Hồng Quốc Vương</p>
//           <p className="text-sub">Xin chào!</p>
//           <button className="btn">FOLLOW</button>
//         </div>
//       </div>
//     </div>
//   </div>,
//   document.getElementById("root")
// );

//_______LESSON 2, [Bài tập] Tạo Element thể hiện Sign in Form sử dụng Bootstrap

ReactDOM.render(
  <div className="container d-flex align-items-center text-center">
    <div className="form-signin">
      <form>
        <img
          className="mb-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control email"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control password"
            id="floatingPassword"
            placeholder="Password"
          />
          <label>Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">© 2022</p>
      </form>
    </div>
  </div>,
  document.getElementById("root")
);
