import Background from './components/Background/Background';
import Form from './components/Form/Form';
import styles from './page.module.css'
const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Form />
      </div>
      <Background />
    </div>
  )
}
export default Login;
