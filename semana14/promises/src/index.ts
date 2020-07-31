import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

type Subscriber = {
  id: string;
  name: string;
  email: string;
};

// 1.A: /subscribers/all, 1.B: const nome = async (): Promise<any[]>,
// 1.C
async function getAllSubscribers(): Promise<any[]> {
  const res = await axios.get(`${baseUrl}/subscribers/all`);
  return res.data;
}

// 2. A: as diferenças são: Posição da keyword "async" e redução na verbosidade quando usando arrow function.

// 3.A: Não. A tipagem definida dentro do type já cobre erros.
// 3.B: Usamos o map para garantir um melhor controle dos dados, modelando-os, consigos saber melhor quais serão seus tipos e seus comportamentos.
// 2. B e 3.C
const getSubscribers = async (): Promise<Subscriber[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

// 4.A: Precisamos de uma função assíncrona que consiga fazer um put sem parar a execução do código. Ela tem um retorno void pois não necessita retornar nada.
// 4.B
async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  await axios.put(`${baseUrl}/news`, {
    title: title,
    content: content,
    date: date,
  });
}

// 5.A: As funções de alta ordem (map, filter, forEach) tem um comportamento estranho quanto à promises, uma vez que elas irão fazer requisições
// sem se preocupar se a requisição anterior funcionou, causando instabilidade no processo. Por isso é melhor que usemos um for simples ou um for of.

// 5.B
// const sendNotifications = async (
//   users: Subscriber[],
//   message: string
// ): Promise<void> => {
//   const promiseArray: Promise<any>[] = [];
//   for (const subscriber of users) {
//     await axios.post(`${baseUrl}/notifications/send`, {
//       subscriberId: subscriber.id,
//       message: message,
//     });
//   }

//   console.log("All notifications were sent successfully!");
// };

// 6. A: O promise.all faz todas as promises de uma vez, porém seguindo a ordem e tendo mais tempo para realizar cada uma, economizando tempo e sendo mais estável.
// 6. B: O promise.all não vai parar a execução caso uma promise demorar demais, assim ele garante um envio mais consistente e rápido das notificações.
// 6. C:
const sendNotifications = async (
  users: Subscriber[],
  message: string
): Promise<void> => {
  const promiseArray = [];
  for (const subscriber of users) {
    promiseArray.push(
      axios.post(`${baseUrl}/notifications/send`, {
        subscriberId: subscriber.id,
        message: message,
      })
    );
  }

  await Promise.all(promiseArray);
};

// 7.A:
const createSubscriber = async (name: string, email: string) => {
  await axios.put(`${baseUrl}/subscribers`, {
    name,
    email,
  });
};

// 7.B:
const createAndSendNotifications = async () => {
  try {
    await createNews(
      "Meu, tu não sabe o que aconteceu",
      "Os caras do Charlie Brown invadiram a cidade",
      Date.now()
    );

    const users = await getSubscribers();

    await sendNotifications(users, "Olá! Há um novo post na nossa timeline.");
  } catch (err) {
    console.log("err: ", err.message);
  }
};

// 7.C
const getAllNotifications = async (): Promise<any> => {
  const subscribers = await getSubscribers();

  const notificationPromises = [];
  for (const subscriber of subscribers) {
    notificationPromises.push(
      axios.get(`${baseUrl}/subscribers/${subscriber.id}/notifications/all`)
    );
  }

  const result = await Promise.all(notificationPromises);

  const dataFromResult = result.map((res) => res.data);

  return dataFromResult;
};

createAndSendNotifications();
