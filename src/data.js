import fuji from "./assests/fuji.png";
import geiran from "./assests/geiran.png";
import opera from "./assests/opera.png";

let data = [
  {
    id: 0,
    img: `${fuji}`,
    location: "JAPAN",
    name: "Mount Fuji",
    time: "12 Jan, 2021 - 24 Jan, 2021",
    about:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
  },
  {
    id: 1,
    img: `${geiran}`,
    location: "AUSTRALIA",
    name: "Sydney Opera House",
    time: "27 May, 2021 - 8 Jun, 2021",
    about:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
  },
  {
    id: 2,
    img: `${opera}`,
    location: "NORWAY",
    name: "Geirangerfjord",
    time: "01 Oct, 2021 - 18 Nov, 2021",
    about:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
  },
];

export default data;
