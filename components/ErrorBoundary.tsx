import React, { useEffect, useState } from "react";
import AccountLayout from "./layout/AccountLayout";

export default function ErrorBoundary(props: any) {
  const [hasError, setHasError] = useState<boolean>(false);
  function getDerivedStateFromError(error?: any) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  useEffect(() => {
    getDerivedStateFromError();
  }, []);

  // Check if the error is thrown
  if (hasError) {
    // You can render any custom fallback UI
    return (
      <AccountLayout>
        <h2>Oops, there is an error!</h2>
        <button type="button" onClick={() => setHasError(false)}>
          Try again?
        </button>
      </AccountLayout>
    );
  }

  // Return children components in case of no error

  return props.children;
}
