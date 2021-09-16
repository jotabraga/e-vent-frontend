import React, { useContext } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  document: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "5px solid #000",
    
    height: "98%",
    width: "99%",
    padding: "10px"
  },
  logoSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(255, 140, 170)",
    width: "100%",
    height: "110px"
  },
  logoTitle: {
    fontSize: "30px",
    color: "#fff",
    backgroundColor: "rgb(255, 87, 148)",
    padding: "10px",
    border: "2px solid #000",
    outline: "2px solid #000",
    margin: "5px",
    textTransform: "uppercase"
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
    padding: 10,
    flexGrow: "1",
    color: "#444",
    fontWeight: "500"
  },
  name: {
    fontWeight: "bold",
    fontSize: "32px",
    marginTop: "8px",
    color: "#111"
  },
  subTitle: {
    fontSize: "14px",
    marginTop: "3px"
  },
  signature: {
    border: "2px dashed rgb(242, 182, 172)",
    padding: "3px",
    marginBottom: "10px"
  },
  credential: {
    opacity: "0.6"
  },
  credentialNumber: {
    opacity: "1",
    backgroundColor: "rgb(242, 182, 172)",
    padding: "2px",
    color: "#fff"
  },
});

export default function CertificateFile({ eventInfo, username }) {
  return(
    <Document style={styles.document}>
      <Page size="A4" style={styles.page}>
        <View style={styles.logoSection}>
          <Text style={styles.logoTitle}>{eventInfo.eventTitle}</Text>
        </View>
        <View style={styles.section}>
          <Text>Certificamos que</Text>
          <Text style={styles.name}>{username}</Text>
        </View>
        <View style={styles.section}>
          <Text>Participou das atividades</Text>
          <Text style={styles.subTitle}>Palestra 1, Palestra 2 e Palestra 3</Text>
        </View>
        <View style={styles.section}>
          <Text>Durante os dias 21/09/2021 e 25/09/2021</Text>
          <Text style={styles.subTitle}>Totalizando uma carga horário estimada em 10 horas</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.signature}>Assinado digitalmente por Bill Gates</Text>
          <Text style={styles.credential}>Nº da credencial: <span style={styles.credentialNumber}>06584751254-4xa548b-4as4x-4e554b2874aa214</span></Text>
        </View>
      </Page>
    </Document>
  );
};

