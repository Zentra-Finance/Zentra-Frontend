import { ZentraLayout } from "@/components/sidebar";
import "react-toastify/dist/ReactToastify.css";


export default function RootLayout({ children }) {
  return <ZentraLayout>{children}</ZentraLayout>;
}
