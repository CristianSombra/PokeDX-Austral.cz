import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonContent, IonImg, IonIcon, IonGrid, IonRow } from '@ionic/react';
import { exitOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import CardsContainer from "../../components/cardsContainer/cardsContainer.js"
import logo from "../../assets/logo.png";

const Home = () => {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar color="warning">
                <IonButtons slot="start">
                    <IonButton>
                    <Link to="/home">
                        <IonImg src={logo} style={{ width: '55px', height: '55px' }} />
                    </Link>
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
                        <CardsContainer/>
                    </IonRow>
                </IonGrid>
            </IonContent>
    </IonPage>
    );
};

export default Home;