import React from 'react';
import { IonPage, IonGrid, IonRow, IonCol, IonImg, IonContent, IonButton } from '@ionic/react';
import imgpoke from "../../assets/pokedex.png"
import imgpika from "../../assets/pikachu.jpg";
import { Link } from 'react-router-dom';
import "../index.css";

const Landing = () => {

    return (
        <IonPage>
            <IonContent>
                <IonGrid className='ion-no-padding'>
                    <IonRow className='ion-align-items-center ion-justify-content-center' style={{ height: '100vh' }}>
                        <IonCol size="12" md="6" lg="4" className="ion-text-center">
                            <IonImg
                                className='ion-margin landing-image-poke'
                                alt="Pokedx"
                                src={imgpoke}
                            ></IonImg>
                            <IonImg
                                className='ion-margin landing-image-pika'
                                alt="Pikachu"
                                src={imgpika}
                            ></IonImg>

                            <Link to="/home">
                                <IonButton>
                                    Ingresar
                                </IonButton>
                            </Link>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Landing;

