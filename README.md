**<H3>Основные операторы</H3>**

**Арифметические операторы:**

– Оператор сложения ( + )
– Оператор вычитания ( - )
– Умножение ( * )
– Деление ( / )
– Целочисленное деление ( // )
– Остаток от деления ( % )

**Операторы сравнения:**

– Равно ( == )
– Не равно ( != )
– Больше ( > )
– Меньше ( < )
– Больше или равно ( >= )
– Меньше или равно ( <= )

**Логические операторы:**

– И ( && )
– Или ( || )
– Отрицание ( ! )

**Битовые операторы:**

В JavaScript **битовые** операторы не поддерживаются, но могут быть реализованы с помощью побитовых операторов других языков, таких как TypeScript или Babel.

**Условный оператор** ( ? : )
Этот оператор используется для создания условных выражений, где выражение проверяется на истинность или ложность. Если условие истинно, выполняется один блок кода, если ложно - другой блок кода.

**<H3>Динамическая типизация</H3>** в JavaScript означает, что типы данных определяются во время выполнения, а не во время компиляции, как в некоторых других языках программирования. Это означает, что вы можете смешивать различные типы данных в одной переменной или выражении без предварительного объявления их типа. Например:

let a = 'Hello, world!';
let b = 42;
let c = true;
Здесь переменные a, b и c имеют разные типы данных (строка, число и булево значение соответственно), но мы можем использовать их вместе в одном выражении без явного указания их типа:

console.log(a, b, c); // выведет строку, число и булево значение
Динамическая типизация позволяет JavaScript быть более гибким и простым в использовании, но также может привести к некоторым трудностям в отладке и поддержании кода.
