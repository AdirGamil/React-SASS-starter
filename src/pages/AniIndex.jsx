//TODO: Delete this all contact to start

export function AniIndex() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      textAlign: 'center',
    },
    content: {
      maxWidth: '600px',
      padding: '20px',
      backgroundColor: '#2f3543',
      borderRadius: '10px',
      boxShadow: '0 1px 8px rgba(255, 255, 255, 1.1)',
    },
    logo: {
      width: '150px',
      marginBottom: '20px',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '10px',
      color: '#fff',
    },
    text: {
      fontSize: '1.2rem',
      color: '#666',
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img
          src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1725204307/b2fa1aa0-9a51-4bf3-ae08-dd842dad80b6_p7lwbj.png"
          alt="ACode Logo"
          style={styles.logo}
        />
        <h1 style={styles.heading}>React & Vite Starter by Adir</h1>
        <p style={styles.text}>
          Start building your React project with this beautiful template!
        </p>
      </div>
    </div>
  )
}
