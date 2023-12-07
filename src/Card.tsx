import styles from './Card.module.css'

type LanguageOption = {
    name: string,
    color: string
}

type CardProps = {
    title: string,
    technologies: LanguageOption[]
}

export function Card({ title, technologies }: CardProps) {
    return (
        <div className={styles.card}>
            <h1>{title}</h1>
            <div className={styles.card_info}>
                {
                    technologies.map(element => {
                        return <p><span style={{ backgroundColor: element.color, borderRadius: 99999, width: 1, height: 1, color: element.color }}>0</span>  {element.name}</p>
                    })
                }
            </div>
        </div>
    )

}
