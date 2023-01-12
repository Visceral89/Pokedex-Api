import React from 'react'
import Image from 'next/image'
import styles from './Pokemon.module.css'
import Link from 'next/link'

const Pokemon = ({pokemon,index}) => {

    const pokeIndex = ('000' + (index + 1)).slice(-3)

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div className={styles.card}>
        <span className={styles.number}>#{pokeIndex}</span>
          <Image
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`} 
            width={150}
            height={150}
            alt={pokemon.name}
            placeholder='blur'
            blurDataURL='/public/blur.jpg'
          />
          
          <p className={styles.name}>{pokemon.name}</p>
      </div>
    </Link>

  )
}

export default Pokemon