import Card from '../ui/Card';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react';
import QRCode from "react-qr-code";

const styles = `
  .feed-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem; /* Add some padding for spacing */
  }

  .qr-box {
    padding: 2rem;
    background: white;
    border-radius: 16px;
    overflow: hidden;
  }

  .qr-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    z-index: -1;
    background: white;
    padding: 5%;
  }

  .scan-text {
    margin-top: 1rem;
    text-align: center;
    font-size: 1rem;
    color: white;
    padding: 5%;
  }
`;

const Feed = () => {

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Hi There...</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Card className="ion-feed-class mx-auto">
          <style>{styles}</style>
          <div style={{ height: "auto", margin: "0 auto", maxWidth: 350, width: "100%" }}>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value="hey"
              viewBox={`0 0 256 256`}
            />
          </div>
          <h4 className="text-s text-grey items-center scan-text">Show this Code to the Restaurant to Receive a Coupon</h4>
        </Card>

      </IonContent>
    </IonPage>
  );
};

export default Feed;
