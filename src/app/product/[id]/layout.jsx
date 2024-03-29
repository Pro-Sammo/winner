import { Suspense } from "react";
import Loading from "./loading";
export default function RootLayout({ children }) {
  return (
    <>
      <div>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </>
  );
}
