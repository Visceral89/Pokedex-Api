import styles from "../styles/components/type.module.scss";

export default function Type({ types }) {
	const getTypeColor = (typeName) => {
		const typeColors = {
			normal: "#a8a878",
			fire: "#f08030",
			fighting: "#c03028",
			water: "#6890f0",
			flying: "#a890f0",
			grass: "#78c850",
			poison: "#a040a0",
			electric: "#f8d030",
			ground: "#e0c068",
			psychic: "#f85888",
			rock: "#b8a038",
			ice: "#98d8d8",
			bug: "#a8b820",
			dragon: "#7038f8",
			ghost: "#705898",
			dark: "#705848",
			steel: "#b8b8d0",
			fairy: "#ee99ac",
		};
		return typeColors[typeName] || "gray";
	};

	return (
		<div className={styles.typeContainer}>
			{types.map((typeInfo) => (
				<span
					key={typeInfo.type.name}
					className={styles.type}
					style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
				>
					{typeInfo.type.name.charAt(0).toUpperCase() +
						typeInfo.type.name.slice(1)}
				</span>
			))}
		</div>
	);
}
