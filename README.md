![NeoWriter Banner](./assets/banner.png)

# 🧠✍️ NeoWriter — Geração de textos com Inteligência Artificial

██╗ ██╗███████╗ ██████╗ ██╗ ██╗███████╗████████╗███████╗██████╗ ████╗ ██║██╔════╝██╔═══██╗██║ ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗ ██╔██╗ ██║█████╗ ██║ ██║██║ █╗ ██║███████╗ ██║ █████╗ ██████╔╝ ██║╚██╗██║██╔══╝ ██║ ██║██║███╗██║╚════██║ ██║ ██╔══╝ ██╔═══╝ ██║ ╚████║███████╗╚██████╔╝╚███╔███╔╝███████║ ██║ ███████╗██║
╚═╝ ╚═══╝╚══════╝ ╚═════╝ ╚══╝╚══╝ ╚══════╝ ╚═╝ ╚══════╝╚═╝


NeoWriter é uma aplicação web que usa inteligência artificial para gerar textos automaticamente com base em prompts fornecidos pelo usuário.  
Criado como parte do aprendizado no bootcamp da [DIO](https://dio.me), esse projeto explora os recursos da OpenAI com Node.js e Express.

---

## 🚀 Funcionalidades

- Geração de textos automáticos com o modelo GPT-3.5 da OpenAI
- Interface web simples para digitar o prompt
- Backend leve em Node.js
- Integração com API da OpenAI via chave secreta

---

## 📁 Estrutura do Projeto

NeoWriter/ │ ├── public/ │ └── index.html # Interface do usuário │ ├── server.js # Servidor Express com OpenAI ├── .env # Variáveis de ambiente (não vai para o GitHub) ├── .gitignore # Ignora node_modules e .env ├── package.json # Dependências e scripts └── README.md # Documentação do projeto


---

## ⚙️ Como rodar o projeto localmente

1. **Clone o repositório**

```bash
git clone https://github.com/sandramastrogiacomo/neowriter.git
cd neowriter

Instale as dependências

npm install

Crie o arquivo .env com sua chave da OpenAI

OPENAI_API_KEY=sua-chave-aqui

Inicie o servidor

node server.js

Depois, acesse o navegador em: http://localhost:3000

🛠 Tecnologias Utilizadas
Node.js

Express.js

OpenAI SDK

HTML + CSS + JavaScript

🙋‍♀️ Criado por
Sandra Mastrogiacomo
Desenvolvedora e exploradora de IA generativa
📂 GitHub: https://github.com/sandramastrogiacomo
💼 LinkedIn: https://www.linkedin.com/in/sandramastrogiacomo/

💡 Melhorias futuras
Interface responsiva e mais bonita

Opção de escolher estilo de escrita

Exportar ou copiar texto com 1 clique

Traduções automáticas com IA

🧠 Créditos
Projeto inspirado pela aula da DIO — “Explorando os Recursos de IA Generativa com Copilot e OpenAI”.

Observações

🔒 Nunca suba seu .env para o GitHub!

📦 Não suba a pasta node_modules/. Ela está no .gitignore por padrão.

Feito com ❤️ e muita curiosidade por IA.


---



