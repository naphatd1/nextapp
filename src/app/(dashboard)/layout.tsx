import Providers from "@/components/Providers";
import DLayout from "./components/DLayout";

export const metadata = {
  title: "Dashboard Page",
  description: "By Next.js",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <DLayout>{children}</DLayout>
        </Providers>
      </body>
    </html>
  );
}
