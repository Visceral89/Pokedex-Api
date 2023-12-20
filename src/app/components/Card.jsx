import styles from "../styles/components/picker.module.scss";
import Image from "next/image";

export default function Card({ name, image }) {
	return (
		<div className={styles.card}>
			<Image
				src={"/placeholder_small.png"}
				width={113}
				height={124}
				alt={name + "thumbnail"}
			/>
		</div>
	);
}
