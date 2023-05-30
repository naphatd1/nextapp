import Providers from "@/components/Providers";

export const metadata = {
  title: "ระบบล็อกอิน",
  description: "By Next.js",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
