# Серверний додаток API

## Огляд

Цей додаток надає REST API для управління різними аспектами системи.

## Роути

### /order

#### GET /

Отримати список всіх замовлень.

#### GET /:id

Отримати конкретне замовлення за його ідентифікатором.

#### POST /

Створити нове замовлення з наданими даними в тілі запиту.

Приклад JSON-об'єкту для створення нового замовлення:
```json
{
  customerId: string;
  warehouseId: string;
}
```

### /customer

#### GET /

Отримати список всіх клієнтів.

#### GET /:id

Отримати конкретного клієнта за його ідентифікатором.

#### POST /

Створити нового клієнта з наданими даними в тілі запиту.

Приклад JSON-об'єкту для створення нового замовника:
```json
{
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  shippingAdress: string;
}
```

### /employee

#### GET /

Отримати список всіх працівників.

#### GET /:id

Отримати конкретного працівника за його ідентифікатором.

#### POST /

Створити нового працівника з наданими даними в тілі запиту.

Приклад JSON-об'єкту для створення нового працівника:
```json
{
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  employment: string;
  address: string;
  birthDate: Date;
  employmentDate: Date;
}
```

### /warehouse

#### GET /

Отримати список всіх складів.

#### GET /:id

Отримати конкретний склад за його ідентифікатором.

#### GET /withProduct/:id

Отримати склади з певним товаром в них.

#### POST /

Створити новий склад з наданими даними в тілі запиту.

Приклад JSON-об'єкту для створення нового складу:
```json
{
  name: string;
  address: string;
}
```

### /product

#### GET /

Отримати список всіх продуктів.

#### GET /:id

Отримати конкретний продукт за його ідентифікатором.

#### POST /

Створити новий продукт з наданими даними в тілі запиту.

Приклад JSON-об'єкту для створення нового продукта:
```json
{
  name: string;
  price: number;
  minimumStock: number;
}
```

### /stock

#### POST /addToStock

Додати кількість товару до стоку.

Приклад JSON-об'єкту для створення нового продукта:
```json
{
  id: string;
  amount: number;
}
```

#### POST /transferStock

Перенести товар з одного стоку на інший.

Приклад JSON-об'єкту для створення нового продукта:
```json
{
  stockToId: string;
  stockFromId: string;
  amount: number;
}
```

#### POST /

Створити новий продукт з наданими даними в тілі запиту.

Приклад JSON-об'єкту для створення нового продукта:
```json
{
  productId: string;
  warehouseId: string;
  amount: number;
}
```


### /orderListing

#### POST /

Додати кількість товару до стоку.

Приклад JSON-об'єкту для створення нового продукта:
```json
{
  orderId: string;
  productId: string;
  amount: number;
}
```
