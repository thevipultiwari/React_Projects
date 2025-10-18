import Navbar from "./components/Section1/Navbar";
import Section1 from "./components/Section1/Section1";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1976",
      intro:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, perspiciatis.",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGhhbmRzb21lJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      intro:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, perspiciatis.",
      tag: "Undeserved",
    },
    {
      img: "https://images.unsplash.com/photo-1745434159123-5b99b94206ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, perspiciatis",
      tag: "Underbanked",
    },
  ];
  return (
    <div>
      <Navbar />
      <Section1 user={users} />
    </div>
  );
};

export default App;
