'use client';
import styles from './form.module.css'
const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label}>E-mail</label>
        <input className={styles.input} />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Senha</label>
        <input className={styles.input} />
      </div>

      <button className={styles.button}>Entrar</button>
    </form>
  )
}

export default Form
