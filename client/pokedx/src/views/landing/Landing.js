import React from 'react';
import { IonPage, IonGrid, IonRow, IonCol, IonImg, IonTitle, IonContent, IonButton } from '@ionic/react';
import img from "../../assets/pikachu.jpg";
import { Link } from 'react-router-dom';
import "../index.css";

const Landing = () => {
    return (
        <IonPage>
            <IonContent>
                <IonGrid className='ion-no-padding'>
                    <IonRow className='ion-align-items-center ion-justify-content-center' style={{ height: '100vh' }}>
                        <IonCol size="12" className="ion-text-center">
                            <IonTitle><h1>¡ PokeDX !</h1></IonTitle>
                            <IonImg
                                className='landing-image'
                                alt="Pikachu"
                                src={img}
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

