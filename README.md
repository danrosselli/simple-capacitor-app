# simple-capacitor-app
Este é um exemplo de uso da biblioteca "capacitor" para gerar aplicativos móveis a partir de aplicações web. Eu fiz o uso da biblioteca Three.js para exemplificar o uso do canvas para renderização 3D.


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

Habilitar o Hot Reload no Capacitor (para Desenvolvimento)
Você pode usar o Hot Reload durante o desenvolvimento, o que garante que as mudanças sejam imediatamente refletidas no dispositivo:

```bash
npx cap serve android
```

Use um Servidor Local para desenvolver o projeto da parte web (pasta www)
Para evitar problemas com o protocolo file://, você pode servir seu projeto usando um servidor local. Isso é uma prática comum no desenvolvimento web, pois simula um ambiente de produção e elimina muitas das limitações de segurança do navegador.

Entre na pasta www e use o http-server do Node.js:

```bash
npx http-server .
```
Caso queira usar o "bun" para executar a aplicação, substitua os comandos acima por:

```bash
bun install
bunx cap add android
bunx cap sync
bunx cap serve android
bunx http-server .
```

