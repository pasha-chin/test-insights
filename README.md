# VK Community Insights Dashboard

Аналитический дашборд для сообществ ВКонтакте. Загружает посты через VK API и показывает статистику вовлечённости, типы контента и динамику активности.

## Стек

- **Backend:** Node.js, Express.js
- **Frontend:** React, Vite

## Требования

- Node.js 24+
- npm
- Токен VK API (сервисный ключ доступа)

## Получение VK токена

1. Перейди на https://dev.vk.com/ru/admin/create-app
2. Создай новое приложение → тип "Standalone"
3. В настройках скопируй **сервисный ключ доступа**

## Настройка

1. Клонируй репозиторий
2. В папке `backend` создай файл `.env`:
   VK_TOKEN=твой_сервисный_ключ
   PORT=3000
3. Никогда не коммить `.env` в git

## Запуск

### Backend
```bash
cd backend
npm install
npm run dev
```
## Зависимости

### Redis
Кэш работает через Redis. Установи локально:

**macOS:**
```bash
brew install redis
brew services start redis
```

**Ubuntu/Debian:**
```bash
sudo apt install redis-server
sudo systemctl start redis
```

**Windows: Используй WSL или Docker:**
```bash
docker run -d -p 6379:6379 redis
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```