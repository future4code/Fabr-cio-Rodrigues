import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={
            "https://scontent.frao2-1.fna.fbcdn.net/v/t31.0-8/26240283_1385550858239717_3702848671724928148_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_oc=AQl_ctcMnSrLkEBMbT332u6iHrWpBWmcExOPBaWg81xojgIM3ohQK-FZ93gXeOWzkaiMcaBqVycTU6KIBhz6fWTm&_nc_ht=scontent.frao2-1.fna&oh=e86cca86f83618b088cb568ec7f2ba2c&oe=5EDF3AEF"
          }
          nome="Fabrício Rodrigues"
          descricao="Oi, eu sou o Fabrício. Sou um estudante de desenvolvimento web full-stack na Labenu! Amo programação desde mais novo, tanto pelo fascínio que eu tenho pelo que computadores podem fazer, quanto pela vontade de fazer meus próprios apps e jogos. =)"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem={
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/joypixels/239/house_1f3e0.png"
          }
          descricao="Endereço: Rua Duque de Caxias, Nº 141"
        />

        <CardPequeno
          imagem={
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/e-mail-symbol_1f4e7.png"
          }
          descricao="E-mail: earthbornshepard@hotmail.com"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências pessoais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Estudante de full stack web development."
        />

        <CardGrande
          imagem="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/robot-face_1f916.png"
          nome="Hobbies"
          descricao="Programar, tocar guitarra, estudar linguagens e finanças."
        />
      </div>

      <div className="page-section-container">
        <h2>Habilidades</h2>
        <CardGrande
          imagem="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/241/technologist_1f9d1-200d-1f4bb.png"
          nome="Programação Web"
          descricao="Consigo programar em HTML, CSS e JS usando tanto programação pura, quanto bibliotecas e frameworks como Bootstrap, React, jQuery e afins!"
        />

        <CardGrande
          imagem="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/samsung/220/books_1f4da.png"
          nome="Linguagens"
          descricao="Falo inglês fluente e atualmente estou aprendendo francês =D"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
          url="https://www.facebook.com"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
          url="https://www.twitter.com"
        />

        <ImagemButton
          imagem="https://cdn.iconscout.com/icon/free/png-256/instagram-1946323-1646407.png"
          texto="Instagram"
          url="https://www.instagram.com"
        />
      </div>
    </div>
  );
}

export default App;
