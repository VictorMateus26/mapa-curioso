# 🌍 Mapa Curioso

Projeto React com Leaflet.js que mostra curiosidades, leis bizarras ou fatos históricos ao clicar em países no mapa.

---

## 🧠 Sobre o projeto

O **Mapa Curioso** é uma aplicação web interativa feita com React e Leaflet, utilizando um arquivo GeoJSON com dados dos países. Ao clicar em um país, uma curiosidade sobre ele é exibida por meio de um pop-up no mapa.

Este projeto foi desenvolvido para fins didáticos e de prática com bibliotecas modernas de mapas, como o Leaflet, integradas ao React.

---

## ⚙️ Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Leaflet.js](https://leafletjs.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- GeoJSON

---

## ✨ Funcionalidades

- 🌍 Mapa-múndi interativo com zoom e rolagem.
- 👆 Ao clicar em um país, é exibida uma curiosidade (quando disponível).
- 📁 Estrutura modular de arquivos e fácil de expandir (ex: mais curiosidades).
- 🔍 Identificação automática do país clicado via `feature.properties.name`.

## 🚀 Como rodar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org) instalado
- [Git](https://git-scm.com) instalado

### Passos

```bash
# Clone o repositório
git clone https://github.com/VictorMateus26/mapa-curioso.git

# Acesse a pasta
cd mapa-curioso

# Instale as dependências
npm install

# Inicie o projeto
npm start
