import React from "react";
import Container from "../../components/Shared/Container";
import Books from "../../components/Home/Books";

const AllBooks = () => {
  return (
    <Container>
      <div className="mb-10">
        <p className="font-bold text-center text-3xl">All Books</p>
        <Books></Books>
        </div>
    </Container>
  );
};

export default AllBooks;
