## Drawbacks of CSS Modules
-  ```className={styles['race-info']}```
- ```className={`${styles['status']} ${styles['status--paid']}`}```
- ```a { color: tomato }``` - ```Selector "a" is not pure (pure selectors must contain at least one local class or id)```

## Drawbacks of Styled JSX
- ```Nesting detected at 21:11. Unfortunately nesting is not supported by styled-jsx.```