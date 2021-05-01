## Drawbacks of CSS Modules
-  ```className={styles['race-info']}```
- ```className={`${styles['status']} ${styles['status--paid']}`}```
- ```a { color: tomato }``` - ```Selector "a" is not pure (pure selectors must contain at least one local class or id)```

## Drawbacks of Styled JSX
- ```Nesting detected at 21:11. Unfortunately nesting is not supported by styled-jsx.```

## getStaticProps()
- ```revalidate: 60,``` powoduje, ze na localu (npm run dev), po zmianie kodu, nie nastepuje od razu przeladowanie aplikacji lecz trzeba wpierw recznie przeladowac strone w przegladarce