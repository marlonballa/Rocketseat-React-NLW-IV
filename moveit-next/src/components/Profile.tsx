import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="../../assets/marlon.jpeg" alt="Imagem de perfil do usuário"/>
            <div>
                <strong>Marlon Balla</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}