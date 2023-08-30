import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
} from '@ionic/react';
import Restaurants from './restaurants';

const Lists = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Restaurants</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Restaurants</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
      <Restaurants />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Lists;
