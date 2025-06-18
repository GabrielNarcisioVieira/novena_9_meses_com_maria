
# 🙏 Novena 9 Meses com Maria

Este projeto é um site desenvolvido para acompanhar diariamente as leituras e reflexões da **Novena 9 Meses com Maria**, livro de Luís Erlin - CMF, iniciando no dia **25 de março** e finalizando em **25 de dezembro**, acompanhando a gestação de Maria até o nascimento de Jesus.

## ✨ Propósito

Oferecer uma experiência simples, acessível e visualmente agradável para qualquer fiel que deseje acompanhar a novena dia após dia, com:

- 📖 Reflexão diária e versículo correspondente
- 🙏 Oração especial da gravidez de Maria
- 📅 Navegação entre datas anteriores da novena
- 📱 Layout responsivo para uso em dispositivos móveis

## 🛠 Tecnologias utilizadas

| Tecnologia | Função |
|------------|--------|
| **Node.js** | Backend leve e rápido com Express.js |
| **Express.js** | Gerenciamento de rotas e servidor web |
| **Handlebars (hbs)** | Template engine para renderização das páginas |
| **Bootstrap 5** | Estilização e responsividade da interface |
| **JavaScript Vanilla** | Lógica de navegação e interatividade no front-end |
| **HTML5 + CSS3** | Marcação semântica e estilos adicionais |

## 🧭 Funcionalidades

- Página principal do dia atual da novena (`/novena`)
- Acesso direto a qualquer data da novena no formato `/novena/DD-MM`
- Modal com seleção de qualquer data entre 25/03 e 25/12
- Redirecionamento automático para datas válidas
- Conteúdo exibido com base em dados de um array local

## 📂 Estrutura básica do projeto

```
/views               ← Páginas Handlebars
/public              ← Arquivos estáticos (CSS, JS, imagens)
/controllers         ← Lógica da novena e controle de datas
/routes              ← Rotas Express
/app.js              ← Inicialização da aplicação
```

## 🚀 Como rodar localmente

```bash
# Clone o projeto
git clone https://github.com/seu-usuario/novena-9-meses.git

# Instale as dependências
cd novena-9-meses
npm install

# Altere a porta no arquivo .env
PORT="3000"

# Inicie o servidor
npm start

# Acesse no navegador
http://localhost:3000/novena
```

---

## 🙌 Contribuições

Este projeto foi feito com fé e dedicação. Se quiser contribuir, corrigir algo ou melhorar a estrutura, sinta-se bem-vindo!

---

## 📅 Período da Novena

A novena acontece de **25 de março a 25 de dezembro**. Fora desse intervalo, o sistema redireciona automaticamente para a data de hoje.

---

## ✝️ À Ele a glória!
