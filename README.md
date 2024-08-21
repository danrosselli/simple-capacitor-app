# simple-capacitor-app
Este é um exemplo de uso da biblioteca "capacitor" para gerar aplicativos móveis a partir de aplicações web

Para instalar as dependências:

```bash
npm install
```

Adicione a plataforma Android ao projeto:

```bash
npx cap add android
```

Faça o sincronismo do projeto web (pasta www) para a pasta android:

```bash
npx cap sync
```

E por último, abra o projeto android no Android Studio e execute a aplicação

```bash
npx cap open android
```

