import "react-toastify/dist/ReactToastify.css";
import { ZentraLayout } from "@/components/sidebar";


export default function RootLayout({ children }) {
  return <ZentraLayout>{children}</ZentraLayout>;
}
