
function Home() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
        }

        .content {
          background-image: url('/background.jpg'); /* Utilisez le chemin relatif de l'image dans le dossier public */
          background-size: cover; /* Assurez-vous que l'image de fond couvre toute la page */
          background-position: cover; /* Centrez l'image de fond */
          background-repeat: no-repeat; /* Empêchez l'image de fond de se répéter */
          color: black; /* Couleur du texte en noir */
          height: calc(100vh - 100px); /* Ajustez la hauteur de l'image de fond à 100% de la hauteur de la vue moins la hauteur de la barre de navigation */
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .container {
          text-align: center;
        }

        .greeting {
          font-size: 3em;
          color: black; /* Couleur du texte en noir */
          animation: bounce 2s ease infinite; /* Animation de rebond */
        }

        .instruction {
          margin-top: 20px;
          font-size: 1.2em;
          color: black; /* Couleur du texte en noir */
          animation: fadeIn 2s ease infinite; /* Animation de fondu */
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeIn {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
      <div className={"content"}>
        <div className={"container"}>
          <h1 className={"greeting"}><span>Bonjour!</span><br/>
          <span>Cette platform gère les véhicules au sein</span><br/>
          <span>d'Académie Régionale d'èducation et de formation de</span><br/>
          <span>Rabat-salé-kénitra.</span><br/>
          </h1>
          <h3 className={"instruction"}>Cliquer sur Se Connecter</h3>
        </div>
      </div>
    </>
  );
}

export default Home;
