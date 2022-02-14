import React from "react";
import ReactDOM from "react-dom";
// Import file index.css vào file index.js
import "./index.css";

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
const students = [
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
  },
  {
    company: "Centro comercial Moctezuma",
    contact: "Francisco Chang",
    country: "Mexico",
  },
  {
    company: "Ernst Handel",
    contact: "Roland Mendel",
    country: "Austria",
  },
  {
    company: "Island Trading",
    contact: "Helen Bennett",
    country: "UK",
  },
  {
    company: "Laughing Bacchus Winecellars",
    contact: "Yoshi Tannamuri",
    country: "Canada",
  },
  {
    company: "Magazzini Alimentari Riuniti",
    contact: "Giovanni Rovelli",
    country: "Italy",
  },
];

ReactDOM.render(
  <div>
    <h2>Students</h2>
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr>
            <td>{student.company}</td>
            <td>{student.contact}</td>
            <td>{student.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>,
  document.getElementById("root")
);

//_______LESSON 2,

//_______LESSON 2,

//_______LESSON 2,
