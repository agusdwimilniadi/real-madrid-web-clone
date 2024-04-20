export const NAV_ITEM = [
  {
    url: '#',
    name: 'Madridistas',
  },
  {
    url: '#',
    name: 'Tickets',
  },
  {
    url: '#',
    name: 'Hospitality',
  },
  {
    url: '#',
    name: 'Tour',
  },
  {
    url: '#',
    name: 'Shop',
  },
  {
    url: '#',
    name: 'RM Play',
  },
];

export const ITEM_NEWS = [
  {
    img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--de1abd91-f3f3-405e-b4ea-fb25eca58419/ND_MALLORCA_RM_ALEGRIA_TCHOUAMENI_GettyImages_2148529950.app.png?preferwebp=true&width=1440',
    title: '0-1: The league leaders secure an important win in Mallorca',
  },
  {
    img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--3ce91746-5f8c-40de-a50f-aa0aabb0d92c/ND_ENTRENAMIENTO_02_AV19131.app.png?preferwebp=true&width=350',
    title: 'Real Madrid prepare for Manchester City clash',
  },
  {
    img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--2a85f24c-e523-4682-97bd-e0a5ef7aa6ff/ND_LIGA_ENDESA_J03_RM_BARCELONA_ALEGRIA_GRUPO_2AM8249.app.png?preferwebp=true&width=350',
    title: ' Real Madrid-Joventut: gunning for their second win of the week ',
  },
  {
    img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--045b9878-b679-47ca-8bd0-2674ebcbbd12/ND_MALLORCA_RM_ANCELOTTI_RP_HE16308.app.png?preferwebp=true&width=350',
    title: ' Ancelotti: "This win brings us closer to winning the title" ',
  },
  {
    img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--faaedddc-3db8-47bb-9d91-62287ad00900/ND_MALLORCA_RM_ALEGRIA_TCHOUAMENI_GettyImages_2148530040.app.png?preferwebp=true&width=350',
    title:
      ' Tchouameni: "We have a squad with a lot of quality and we know that anyone of us can get on the scoresheet." ',
  },
  {
    img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--0d1eb509-20b2-4099-a9fa-2f6532e70e07/ND_MALLORCA_RM_LUCAS_VAZQUEZ__HE16630.app.png?preferwebp=true&width=350',
    title: ` Lucas Vázquez: "Our solidity is what keeps us at the top of the table" `,
  },
  {
    img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--77961cd5-c0b0-4e27-ac25-4a4564b5a142/ND_MALLORCA_RM_ANCELOTTI_SUPERA_A_ZIDANE_GettyImages_2148529284.app.png?preferwebp=true&width=350',
    title:
      ' Ancelotti catches up to Zidane as the coach with the second most LaLiga games at Real Madrid ',
  },
  {
    img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--59344424-8040-4767-a625-28f179233af3/ND_LIGA_F_FEMENINO_VALENCIA_ALEGRIA_GRUPO_19_MJ20402.app.png?preferwebp=true&width=350',
    title:
      ' Real Madrid-Granada: all out for a win on return to league action ',
  },
  {
    img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--0d2e9ca0-183b-46a9-a97d-f01b6b468082/_330773852197.app.png?preferwebp=true&width=350',
    title: ' We won our 5th Liga 67 years ago ',
  },
];
interface IEvent {
  logoTeamHome: string;
  logoTeamAway: string;
  nameTeamHome: string;
  nameTeamAway: string;
  competitionType: 'UCL' | 'LaLiga';
  steps: string;
  date: string;
  stadium: string;
}
export const NEXT_EVENTS: IEvent[] = [
  {
    logoTeamHome:
      'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.png?preferwebp=true&width=144&height=144',
    logoTeamAway:
      'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--9d8fa2f9-e2bd-46c9-9798-5330f9ed40a5/agh9ifb2mw3ivjusgedj7c3fe.app.png?preferwebp=true&width=56&height=56',
    nameTeamHome: 'Real Madrid',
    nameTeamAway: 'Barcelona',
    competitionType: 'LaLiga',
    steps: 'Match Week 31',
    date: '2024-04-22',
    stadium: 'Estadio Santiago Bernabeu',
  },
  {
    logoTeamHome:
      'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--7f5e8255-64da-48de-8e1c-542f7622021c/apoawtpvac4zqlancmvw4nk4o.app.png?preferwebp=true&width=144&height=144',
    logoTeamAway:
      'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b05ba79b-d2fc-4155-b958-210c4694a6de/_kq9cckrnlogidldtdie2fkbl.app.png?preferwebp=true&width=56&height=56',
    nameTeamHome: 'Bayern Munchen',
    nameTeamAway: 'Real Madrid',
    competitionType: 'UCL',
    date: '2024-05-01',
    steps: 'Semi Final (First-Leg)',
    stadium: 'Allianz Arena',
  },
];
