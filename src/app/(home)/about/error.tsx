"use client"; // Error components must be Client Components

// import { useEffect } from "react";
import { Container } from "@mantine/core";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
//   useEffect(() => {
//     // Log the error to an error reporting service
//     console.error(error);
//   }, [error]);

  return (
    <Container>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </Container>
  );
}
