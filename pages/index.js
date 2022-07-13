import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Facebook</title>
			</Head>
			<h1>Let's Build Facebook</h1>
		</div>
	);
}
