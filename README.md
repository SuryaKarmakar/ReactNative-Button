# React Native Button

## Basic Button :

<p>A basic button component that should render nicely on any platform. Supports a minimal level of customization.in basic button <b>onPress</b> and <b>title</b> both props are <b>Required</b></p>

```js
<Button onPress={() => alert("button")} title="presse me" />
```

## Props :

# onPress :

<p>Handler to be called when the user taps the button.</p>

```js
<Button onPress={() => alert("button")} title="presse me" color="#f194ff" />
```

# title :

<p>Text to display inside the button. On Android the given title will be converted to the uppercased form.</p>

```js
title = "presse me";
```

# color :

<p>This props change the button color</p>

```js
color = "#f194ff";
```

# disabled :

<p>If true, disable all interactions for this component.it disable the onPress handler</p>

```js
const [disabled, setDisabled] = useState(true);
...
<View style={styles.body_row}>
  <Button
    onPress={() => alert("now i am free")}
    title="button 1"
    disabled={disabled}
  />
  <Button
    onPress={() => alert("button")}
    title="enable button 1"
    onPress={() => setDisabled(false)}
  />
</View>
...
```

## Usage

```
 $ git clone https://github.com/SuryaKarmakar/React-Native-Button.git
 $ cd React-Native-Button
 $ npm install
 $ npm run [web, android, ios]

```

## Run with Expo

```
 $ expo start --[web, android, ios]

```
