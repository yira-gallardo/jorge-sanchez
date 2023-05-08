"use client";
import Image from "next/image";
import styles from "./home.module.sass";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={styles.navDesktop}>
        <div className={styles.link} onClick={() => goToSection("home")}>
          HOME
        </div>
        <div className={styles.link} onClick={() => goToSection("historia")}>
          HISTORIA
        </div>
        <div className={styles.link} onClick={() => goToSection("prensa")}>
          PRENSA
        </div>
        <div className={styles.link} onClick={() => goToSection("contacto")}>
          CONTACTO
        </div>
      </nav>
      <div className={styles.header}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className={styles.img}>
            <Image
              src="/img/jorge-sanchez.png"
              width={1532}
              height={712}
              alt="Jorge Sanchez"
              className={styles.image}
            />
          </div>
        </motion.div>
      </div>
      <main className={styles.pageHome} id="home">
        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <section className={styles.mainPhoto}>
            <Image
              src="/img/photo-1.jpg"
              width={1280}
              height={1600}
              alt="Jorge Sanchez"
            />
          </section>
        </motion.div>
        <section className={styles.historia} id="historia">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <h2>HISTORIA</h2>
            <p>
              Do laborum esse est ipsum velit sunt proident pariatur culpa
              exercitation excepteur dolor irure. Duis exercitation amet tempor
              exercitation anim ullamco nisi adipisicing.
            </p>
            <p>
              Deserunt ipsum nulla aute dolor et nulla aute sit labore occaecat
              esse. Tempor elit in culpa adipisicing reprehenderit dolore aliqua
              excepteur dolor ex tempor fugiat amet. Officia do quis ipsum est
              et tempor.
            </p>
            <p>
              Incididunt minim qui non nulla reprehenderit Lorem sint culpa
              aute. Culpa amet veniam pariatur cillum nisi laborum eu consequat.
            </p>
          </motion.div>
        </section>
        <section className={styles.prensa} id="prensa">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <h2>PRENSA</h2>
            <p>
              Deserunt magna Lorem minim sunt amet aliqua consectetur
              consectetur culpa sit eiusmod.
            </p>
          </motion.div>
          <div className={styles.gallery}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              <div className={styles.principal}>
                <Image
                  src="/img/gallery-1.jpg"
                  width={2048}
                  height={1365}
                  alt="Jorge Sanchez - Galeria"
                />
              </div>
            </motion.div>
            <div className={styles.divider} />
            <div className={styles.photos}>
              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/img/gallery-2.jpg"
                    width={1066}
                    height={1600}
                    alt="Jorge Sanchez - Galeria"
                  />
                </motion.div>
              </div>
              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/img/gallery-3.jpg"
                    width={1066}
                    height={1600}
                    alt="Jorge Sanchez - Galeria"
                  />
                </motion.div>
              </div>
              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/img/gallery-4.jpg"
                    width={1066}
                    height={1600}
                    alt="Jorge Sanchez"
                  />
                </motion.div>
              </div>
              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/img/gallery-5.jpg"
                    width={1066}
                    height={1600}
                    alt="Jorge Sanchez"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.contacto} id="contacto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <h2>CONTACTO</h2>
            <p>Cupidatat sint nisi minim occaecat.</p>
            <Link href="mailto:christiancastellanosmx@gmail.com">
              <button>jorge.mgmt@boldtalent.mx</button>
            </Link>
          </motion.div>
        </section>
        <footer>Jorge Sanchez 2013 @ Todos los derechos reservados.</footer>
      </main>
    </>
  );
}
