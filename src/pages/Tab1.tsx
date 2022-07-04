import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import axios from "axios";
import { message } from "antd";

interface Account {
  userID: string;
  password: string;
}

const Tab1: React.FC = () => {
  // jika ingin mencoba login gunakan user
  // userID : arsyrangga@gmail.com
  // password : "rangga105"
  const [account, setAccount] = useState<Account>({
    userID: "",
    password: "",
  });
  const handleLogin = async (e: any) => {
    e.preventDefault();

    const response = await axios(
      "https://rangga.suka.click/koperasi/users/login",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
          clientID: "koperasi",
        },
        data: account,
      }
    );

    if (response.data.status) {
      message.success("Login Berhasil");
    } else {
      message.error("Username / Password Salah");
    }

    console.log(response.data);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100%",
          }}
        >
          <form className="form" onSubmit={handleLogin}>
            <h5>Login</h5>
            <input
              type="text"
              placeholder="Email"
              className="input"
              onChange={(e: any) =>
                setAccount({ ...account, userID: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              onChange={(e: any) =>
                setAccount({ ...account, password: e.target.value })
              }
            />
            <button
              style={{
                border: "none",
                height: "45px",
                borderRadius: "10px",
                backgroundColor: "#246ac7",
                color: "white",
                marginTop: "10px",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
