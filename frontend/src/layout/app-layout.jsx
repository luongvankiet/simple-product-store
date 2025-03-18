import Navbar from "@/components/navbar";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AppLayout;
