import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CardsContainer from "../../components/cardsContainer/cardsContainer";


function Home() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
        <IonContent className="ion-padding">
                <p>Prueba de Home</p>
                <CardsContainer />
        </IonContent>
        </IonPage>
    );
}

export default Home;