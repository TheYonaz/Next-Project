/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";
/* Instruments */
import styles from "../app/styles/layout.module.css";
import "./styles/globals.css";
import PhotoGrid, { Photo } from "./components/Gallery/PhotoGrid";
interface RootLayoutProps {
  photos: Photo[];
  children: React.ReactNode;
}

export default function RootLayout({ photos, children }: RootLayoutProps) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />

            <header className={styles.header}>
              <PhotoGrid photos={photos} />{" "}
            </header>

            <main className={styles.main}>{children}</main>
          </section>
        </body>
      </html>
    </Providers>
  );
}
