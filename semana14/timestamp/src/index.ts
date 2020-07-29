import moment from "moment"; // ou import * as moment from "moment";
import * as fs from "fs";

moment.locale("pt-br");
const today: moment.Moment = moment();

type event = {
  name: string;
  desc: string;
  startAt: moment.Moment;
  finishAt: moment.Moment;
};

const allEvents: event[] = [
  {
    name: "Happy hour",
    desc:
      "Happy hour com os amigos, comemorando a promoção do Júlio e o fim da Covid-19!",
    startAt: moment("20/12/2020 12:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("20/12/2020 23:00", "DD/MM/YYYY HH:mm"),
  },
  {
    name: "Encontro anual de desenvolvedores full-stack",
    desc:
      "Reunião com devs full-stack, discutindo sobre o futuro do desenvolvimento web",
    startAt: moment("12/01/2021 14:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("12/01/2021 18:00", "DD/MM/YYYY HH:mm"),
  },
];

const createEvent = (
  name: string,
  desc: string,
  startAt: moment.Moment,
  finishAt: moment.Moment
): void => {
  if (!name || !desc || !startAt || !finishAt) {
    console.log(
      "Ocorreu um erro. Por favor, insira todas as informações necessárias (nome, descrição, data de início, data de término)."
    );
    return;
  }

  const diffStartAtAndToday = startAt.diff(moment(), "seconds");
  const diffFinishAtAndToday = finishAt.diff(moment(), "seconds");

  if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
    console.log("A data não pode ser antes da data de hoje.");
    return;
  }

  allEvents.push({
    name,
    desc,
    startAt,
    finishAt,
  });
};

createEvent(
  "Festa do pijama",
  "Festa super legal!",
  moment("12/01/2021 18:00", "DD/MM/YYYY HH:mm"),
  moment("12/01/2021 23:00", "DD/MM/YYYY HH:mm")
);

const printEvents = (arr: event[]) => {
  let currentEvent = 1;

  let formattedEvents = arr.map((item: any) => {
    const duration = item.finishAt.diff(item.startAt, "minutes");
    const daysUntilEvent = item.startAt.diff(today, "days");

    console.log(`Evento ${currentEvent}`);
    console.log("Nome: " + item.name);
    console.log(
      "Horário de início: " +
        item.startAt.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")
    );
    console.log(
      "Horário de fim: " +
        item.finishAt.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")
    );
    console.log("Descrição: " + item.desc);
    console.log(`Duração: ${duration} minutos`);
    console.log(`Dias até o evento: ${daysUntilEvent}`);
    console.log("\n");

    currentEvent++;
  });

  return formattedEvents;
};

// EXERCÍCIO 2, B: console.log("Horário em Londres:" + today.utcOffset("+0100").format("HH:mm"));
console.log(printEvents(allEvents));
