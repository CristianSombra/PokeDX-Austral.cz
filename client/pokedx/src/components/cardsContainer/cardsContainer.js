import React,{useState, useEffect} from "react";
import { IonGrid, IonRow, IonCol, IonButton, IonLabel, IonIcon, IonRefresher, IonRefresherContent } from '@ionic/react';
import { arrowBack, arrowForward} from 'ionicons/icons';
import Card from "../card/card.js";
import {useSelector, useDispatch} from "react-redux";
import {getPokemons} from "../redux/actions.js";


const CardsContainer = ({ currentPage, setCurrentPage }) => {
    const pokemons = useSelector((state) => state.pokemons)
    const dispatch = useDispatch();
    // const [currentPage, setCurrentPage] = useState(1);
    const [currentCards, setCurrentCards] = useState([]);
    const cardsPerPage = 12;

useEffect(() => {
    dispatch(getPokemons());
}, [dispatch]);


//Calculo los índices de las cards a mostrar en la página
const indexOfLastCard = currentPage * cardsPerPage;
const indexOfFirstCard = indexOfLastCard - cardsPerPage;
const newCurrentCards = pokemons.slice(indexOfFirstCard, indexOfLastCard);

// Actualiza las cards solo si hay cambios
if (JSON.stringify(newCurrentCards) !== JSON.stringify(currentCards)) {
setCurrentCards(newCurrentCards);
}

   // Página anterior
const goToPreviousPage = (e) => {
    e.preventDefault();
    setCurrentPage((prevPage) => prevPage - 1);
};

// Página anterior siguiente
const goToNextPage = (e) => {
    e.preventDefault();
    setCurrentPage((prevPage) => prevPage + 1);
};

const totalPages = Math.ceil(pokemons.length / cardsPerPage);

//Función refrescar al deslizar la pantalla
const handleRefresh = async (event) => {
    await dispatch(getPokemons());
    setCurrentPage(1);
    event.detail.complete();
};

return (
    <div>
        <IonRefresher slot="fixed" onIonRefresh={(e) => handleRefresh(e)}>
            <IonRefresherContent
                
                pullingText="Desliza para actualizar"
                refreshingSpinner="crescent"
                refreshingText="Actualizando..."
            />
        </IonRefresher>
        <IonGrid>
            <IonRow>
                {currentCards.map((pokemon, index) => (
                    <IonCol size="12" size-md="6" size-lg="4" key={index}>
                        <Card pokemon={pokemon} />
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
        <IonRow className="ion-justify-content-center ion-align-items-center ion-padding" size="12">
                <IonCol size="auto">
                    <IonButton color="primary" onClick={goToPreviousPage} disabled={currentPage === 1}>
                        <IonIcon icon={arrowBack} />
                    </IonButton>
                </IonCol>
                <IonCol size="auto">
                    <IonRow className="ion-text-center ion-padding-vertical">
                        <IonLabel color="primary">{currentPage} de {totalPages}</IonLabel>
                    </IonRow>
                </IonCol>
                <IonCol size="auto">
                    <IonButton color="primary" onClick={goToNextPage} disabled={currentPage === totalPages}>
                        <IonIcon icon={arrowForward} />
                    </IonButton>
                </IonCol>
        </IonRow>
    </div>
    );
}
export default CardsContainer;
