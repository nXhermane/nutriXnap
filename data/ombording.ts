import Welcome from "./../assets/images/nutriPro.webp";
import Consultation from "./../assets/images/nutriPro.webp";
import FoodPlan from "./../assets/images/nutriPlan.webp";
import Suivi from "./../assets/images/nutriAnaiz.webp";
import Begin from "./../assets/images/nutriPro.webp";
export type OmbordingDataType = {
    title: string;
    body: string;
    imgPath: string;
};
const data: OmbordingDataType[] = [
    {
        title: "Bienvenue",
        body: "NutriPro, l'application qui vous simplifie la vie de diététicien.",
        imgPath: Welcome
    },
    {
        title: "Consultations",
        body: "Enregistrez et analysez les données de vos patients sans connexion Internet.",
        imgPath: Consultation
    },
    {
        title: "Plans alimentaires",
        body: "Créez des plans alimentaires personnalisés et adaptés aux besoins de vos patients.",
        imgPath: FoodPlan
    },
    {
        title: "Suivi",
        body: "Restez en contact avec vos patients et envoyez-leur des conseils et des listes de courses.",
        imgPath: Suivi
    },
    {
        title: "Commencer",
        body: "Prêt à commencer ? Inscrivez-vous ou connectez-vous pour profiter de NutriPro.",
        imgPath: Begin
    }
];
export default data;
