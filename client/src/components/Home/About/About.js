import React from "react";
import classes from "./About.module.css";
import EdgesPicture from "../../../assets/Home/edges.jpg";
import EdgesPicture2 from "../../../assets/Home/edges2.jpg";
import Logo from "../../Logo/Logo";
import logoStyle from "../../Logo/LogoSmall.module.css";

const about = props => (
  <>
    <div className={classes.Picture}>
      <img src={EdgesPicture} alt={"edges"} className={classes.Picture} />
    </div>
    <Logo logoStyle={logoStyle} />
    <div className={classes.Text}>
      Op deze website kunt u rechtstreeks uw hoogwaardige ABS kanten, fineer
      kanten en aanverwante producten bestellen Kanten zijn bijpassend voor vele
      platenleveranciers zoals Egger, Kronospan en Pfleiderer. De levering
      gebeurd rechtstreeks vanaf ons Nederlands magazijn en zal, indien voor
      15.00 uur besteld, de volgende dag bij uw magazijn aangeleverd worden. U
      kunt de kant per meter bestellen (afrolkosten) of een complete rol. Tevens
      bieden wij een snijservice (snijkosten) aan, zodat u ook de door u
      gewenste breedte kunt ontvangen. Bij een groter verbruik raden wij u PVC
      kanten aan, PVC kanten zijn iets harder, echter de invloeden van UV zijn
      miniem. PVC kan ook veel zwaardere lijmen aan.
    </div>
    <div className={classes.Picture}>
      <img src={EdgesPicture2} alt={"edges"} className={classes.Picture} />
    </div>
    <Logo logoStyle={logoStyle} />
    <div className={classes.Text}>
      Wij zijn het service centrum van verschillende dealers, uw besteld via
      onze website en de levering gebeurd rechtstreeks. De facturatie gebeurd
      via onze dealers. Een login verkrijgt u via een van onze dealers, indien u
      een login via onze website aanvraagt, zullen wij automatisch een dealer
      aan u toewijzen. Alle condities bespreekt u met uw dealer.
    </div>
  </>
);

export default about;
