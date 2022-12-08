"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "../../components/error-boundary";
import { TodosWithButton } from "../../components/todos-with-button";

export default function ClientSide() {
  return (
    <>
      <p>Have rendered here CLIENT SIDE WITH ACTIONS</p>
      <ErrorBoundary>
        <Suspense fallback={<h1>Loading todos...</h1>}>
          <TodosWithButton />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
