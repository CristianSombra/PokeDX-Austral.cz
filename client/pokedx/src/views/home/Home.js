import React,{ useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonContent, IonImg, IonIcon, IonGrid, IonRow } from '@ionic/react';
import { exitOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom'
import CardsContainer from "../../components/cardsContainer/cardsContainer.js"
import logo from "../../assets/logo.png";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleLogoClick = () => {
        setCurrentPage(1);
    }

    return (
    <IonPage>
        <IonHeader>
            <IonToolbar color="warning">
                <IonButtons slot="start">
                    <IonButton onClick={handleLogoClick}> 
                        <IonImg src={logo} style={{ width: '55px', height: '55px' }} />
                    </IonButton>
                </IonButtons>
                <IonButtons slot="end">
                    <IonButton>
                        <Link to="/">
                        <IonIcon icon={exitOutline} style={{ fontSize: '35px', color: 'blue' }} />
                        </Link>
                    </IonButton>
                </IonButtons>
            </IonToolbar>

            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <CardsContainer currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                    </IonRow>
                </IonGrid>
            </IonContent>
    </IonPage>
    );
};

export default Home;