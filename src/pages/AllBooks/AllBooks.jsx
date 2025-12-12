import React from "react";
import Container from "../../components/Shared/Container";
import Plants from "../../components/Home/Plants";

const AllBooks = () => {
  return (
    <Container>
      <div>
        <p className="font-bold text-center text-3xl">All Books</p>
        <Plants></Plants>
        </div>
    </Container>
  );
};

export default AllBooks;
