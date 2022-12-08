"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "../../components/error-boundary";
import { Todos } from "../../components/todos";

export default function ClientSide() {
  return (
    <>
      <p>Have rendered here CLIENT SIDE</p>
      <ErrorBoundary>
        <Suspense fallback={<h1>Loading todos...</h1>}>
          <Todos />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
